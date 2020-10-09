import React from 'react'
import classes from './Card.module.scss'
import Link from 'next/link';
const {  cardText, cardDescription, cardAction, cardImage, cardLink } = classes;
interface CardProps {
    cardId: number
    title: string
    src: string
    content: string[]
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

export const Card: React.FC<CardProps> = ({ cardId, src, title, content, setIndex }) => {
    return (
        <div
            className="card"
            onClick={() => setIndex(cardId)}
        >
            <div style={{ backgroundImage: `url(${src})` }} className={cardImage}></div>
            <div className={cardText}>
                <h2>{title}</h2>
                <div className={cardDescription} >
                    <p>{content[0]}</p>
                </div>
            </div>
            <div className={cardAction}>
                <Link href={`/services/${title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}><button className={cardLink}>En Savoir Plus</button></Link>
            </div>
        </div>
    );
}