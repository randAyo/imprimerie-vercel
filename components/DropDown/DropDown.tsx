import React from 'react'
import classes from './DropDown.module.scss'
import Link from 'next/link';

interface DropDownProps {
	toggleDropDown: () => void;
	toggleNav: () => void;
	content: string[]
}

export const DropDown: React.FC<DropDownProps> = ({ toggleDropDown, toggleNav, content }) => {
	const { dropdownContent, dropdownUl, dropdownLi } = classes;
	return (
		<div
			onMouseLeave={toggleDropDown}
			className={dropdownContent}
		>
			<ul className={dropdownUl}>
				{
					content.map((ex, index) => {
						let url = `/services/${ex.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
						return <Link key={index} as={url} href={`/services/${ex}`}>
							<li
								className={dropdownLi}
								onClick={() => {
									toggleDropDown();
									toggleNav();
								}}
							>
								<a>{ex}</a>
							</li>
						</Link>
					}
					)
				}

			</ul>
		</div>
	);
}