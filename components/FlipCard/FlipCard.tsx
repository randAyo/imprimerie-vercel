import React from 'react'
import classes from './FlipCard.module.scss'
import { EmailPhoneDirection } from '../EmailPhoneDirection/EmailPhoneDirection';
import { Navigation } from '../svg/Navigation';
import { Email } from '../svg/Email';
import {Phone} from '../svg/Phone';

interface FlipCardProps {
    name: string
    className: string
}
const { flipCard, flipCardInner, flipCardFront, flipCardBack, contactIcons } = classes;

export const FlipCard: React.FC<FlipCardProps> = ({ name, className }) => {
    const svgToBeRendered = name === "phone" ? (<Phone className={contactIcons} />) : name === "direction" ? (<Navigation className={contactIcons} />) : (<Email className={contactIcons} />)
    return (
        <div className={className}>
            <div className={flipCard}>
                <div className={flipCardInner}>
                    <div className={flipCardFront}>
                        {svgToBeRendered}
                    </div>
                    <div className={flipCardBack}>
                        <EmailPhoneDirection name={name} />
                    </div>
                </div>
            </div>
        </div>
    );
}