import React, { useState, useEffect } from 'react'
import classes from './Header.module.scss'
import { Logo } from './Logo';
import Link from 'next/link';
import { DropDown } from '../DropDown/DropDown';
import details from '../../utils/sample-data'
import { CSSTransition } from 'react-transition-group'
interface HeaderProps {
	height: number

}
const Burger = () => (<><div></div><div></div><div></div></>)
const { bubble, headerStyle, Nav, navbarContentList, navbarAnchor, dropdown, blue, orange, burger, burgerX } = classes;
export const Header: React.FC<HeaderProps> = ({ height }) => {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const [isSmallScreen, setisSmallScreen] = useState(false);
	const [isDropVisible, setisDropVisible] = useState(false);
	//change color on scroll
	useEffect(() => {
		if (height) {
			window.addEventListener("scroll", headerColorChange);
		}
		return function cleanup() {
			if (height) {
				window.removeEventListener("scroll", headerColorChange);
			}
		};
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 900px)");
		mediaQuery.addListener(handleMediaQueryChange);

		handleMediaQueryChange(mediaQuery);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange)
		}

	}, [])
	const handleMediaQueryChange = (mediaQuery: { matches: any; }) => {
		return (mediaQuery.matches) ? setisSmallScreen(false) : setisSmallScreen(true);
	}
	const headerColorChange = () => {
		const pageHeight = window.pageYOffset;
		const element = document.querySelector("header") as HTMLHeadElement;
		if (pageHeight > height) {
			element.style.backgroundColor = blue;
		} else {
			element.style.backgroundColor = orange;
		}
	}
	const toggleNav = () => {
		setIsNavVisible(!isNavVisible)
	}
	const toggleDropDown = () => {
		// onOneHover(0)
		setisDropVisible(!isDropVisible);
	}
	const onOneHover = (id: number) => {
		const styl = document.querySelector(`.${bubble}`) as HTMLDivElement;
		if (id === 0) {
			styl.style.width = '0px';
			styl.style.height = '0px'
		} else {
			const elem = document.getElementsByClassName(`${navbarAnchor}`)[id] as HTMLAnchorElement;
			const firstElem = elem.getBoundingClientRect();
			const left = elem.offsetLeft;
			styl.style.left = `${left}px`;
			styl.style.width = `${firstElem.width}px`;
			styl.style.height = `${firstElem.height / 4}px`;
		}
	}
	const nameList: string[] = [];
	Object.values(details).map(ex => nameList.push(ex.name));
	return (
		<header className={headerStyle}>
			<Link href="/">
				<a><Logo
					colors={{ stroke: "#fdfffc", fill: "none" }}
					width="250"
					height="60"
					className="logo-svg"
				/></a>
			</Link>
			<CSSTransition
				in={isSmallScreen || isNavVisible}
				timeout={350}
				classNames="NavAnimation"
				unmountOnExit
			>
				<nav className={Nav}>
					<ul className={navbarContentList}>
						<li
							onClick={() => isDropVisible ? null : toggleDropDown()}
							onMouseEnter={() => isDropVisible ? null : toggleDropDown()}
							className={dropdown} >
							<a onMouseOver={() => onOneHover(0)} className={[navbarAnchor].join()}>SERVICES</a>
							<CSSTransition
								in={isDropVisible}
								timeout={350}
								classNames="DropAnimation"
								unmountOnExit
							>
								<DropDown
									toggleDropDown={toggleDropDown}
									toggleNav={toggleNav}
									content={nameList}
								/>
							</CSSTransition>
							{/* {	isDropVisible && } */}
						</li>
						<li><a href="#/section-about" onMouseOver={() => onOneHover(1)} className={navbarAnchor} >Pourquoi Nous?</a></li>
						<li><a href="#/section-contact" onMouseOver={() => onOneHover(2)} className={navbarAnchor} >Contact</a></li>
						<div className={bubble}></div>
					</ul>
				</nav>
			</CSSTransition>
			<div
				onClick={toggleNav}
				className={!isNavVisible ? burger : [burger, burgerX].join(' ')}><Burger /></div>
		</header>
	);
}
