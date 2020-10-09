import React from 'react'
import classes from './Footer.module.scss'
import Link from 'next/link';
import { Facebook } from '../svg/Facebook';
import { Instagram } from '../svg/Instagram';
import { WhatsApp } from '../svg/WhatsApp';



export const Footer: React.FC = ({ }) => {
    const { footer, content, aboutUs, socials, icons } = classes;

    return (
        <footer className={footer}>
            <div className={content}>
                <nav className={aboutUs}>
                    <h1>A Propos</h1>
                    <ul>
                        <li><a href="#section-contact"> Contact</a></li>
                        <li> <a href="#section-about">Pourqoui Nous?</a> </li>
                        <li><a href="#section-products"> Products</a></li>
                    </ul>
                </nav>
                <nav className={socials}>
                    <h1>Socials</h1>
                    <ul>
                        <li><Link href="https://www.facebook.com/Limprimeur-107384444097355/?ref=bookmarks"><a className={icons} target="blank" ><Facebook /></a></Link></li>
                        <li><Link href="https://www.instagram.com/express.imprimerie/"><a className={icons} target="blank"><Instagram /></a></Link></li>
                        <li><Link href="/"><a className={icons}><WhatsApp /></a></Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}