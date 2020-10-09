import React from 'react'
import classes from './Hero.module.scss'
import { HeroSvg } from '../svg/HeroSvg';

 const Hero: React.FC = () => {
    const { hero, bail, calltoAction, bailHeading, letters1, letters2, letters3, letters4, letters5, letters6, letters7, letters9, letters8, letters10, letters11, letters12 } = classes;
    return (
        <section className={hero}>

            <div className={bail}>
                <div className={calltoAction}>
                    <div className={bailHeading}>
                        <h1>Imprimez l'avenir de votre</h1>
                        <span>entreprise</span>
                    </div>
                    <p> Express Imprimerie est spécialisé dans l'impression de votre plan marketing sous forme de <span> t-shirts, flyers, cartes de visite ... et bien plus encore. En savoir plus sur nous ci-dessous</span></p>
                </div>
                <HeroSvg className={{ letters1, letters2, letters3, letters4, letters5, letters6, letters7, letters9, letters8, letters10, letters11, letters12 }} blue={classes.blue} orange={classes.orange} />
            </div>
        </section>
    );
}

export default Hero;