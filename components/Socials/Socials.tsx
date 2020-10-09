import React from 'react'
import classes from './Socials.module.scss'
import { WhatsApp } from '../svg/WhatsApp';
import { Facebook } from '../svg/Facebook';
import { Instagram } from '../svg/Instagram';

interface SocialsProps {

}

export const Socials: React.FC<SocialsProps> = ({ }) => {
    const { container, ul } = classes;
    return (
        <div className={container}>
            <ul className={ul}>
                <li><a target="blank" href="https://www.instagram.com/express.imprimerie/"><Instagram /></a></li>
                <li><a target="blank" href="https://www.facebook.com/Limprimeur-107384444097355/?ref=bookmarks"><Facebook /></a></li>
                <li><a href="https://wa.me/212663152249"><WhatsApp /></a></li>
            </ul>
        </div>
    );
}