import React from 'react'
import classes from './Offering.module.scss'
import { DeliverSvg } from '../svg/DeliverSvg';
import { PrintSvg } from '../svg/PrintSvg';
import { DesignSvg } from '../svg/DesignSvg';

 const Offering: React.FC = ({ }) => {
    const services = [
        {
            service: 'Conception',
            typography: `Nos concepteurs professionnels concevront soigneusement vos produits pour les adapter à votre plan marketing.`
        },
        {
            service: 'Impression',
            typography: `Nos conducteurs délicats sont prêts à imprimer vos flyers, cartes de visite ... et plus encore pour s'adapter à la conception souhaitée.`
        }, {
            service: 'Livraison',
            typography: `Comme toutes les autres entreprises décentes, nous utilisons Amana Express pour nous assurer que vos produits sont livrés en toute sécurité à votre porte.`
        },
    ]
    return (
        <section className={classes.sectionOffering}>
            <h1 className={classes.servicesHead}>Ce Que Nous Offrons :</h1>
            <div className={classes.Services}>
                {services.map(ex => {
                    let image;
                    switch (ex.service) {
                        case 'Livraison':
                            image = <DeliverSvg grad={classes.blue} />
                            break;
                        case 'Impression':
                            image = <PrintSvg bg={classes.orange} grad={classes.blue} />
                            break;
                        default:
                            image = <DesignSvg grad={classes.blue} />
                            break;
                    }
                    return (
                        <div key={ex.service} className={classes.Service}>
                            {image}
                            <div className={classes.typography}>
                                <h1>{ex.service}</h1>
                                <p>{ex.typography}</p>
                            </div>
                        </div>)
                }
                )}
            </div>
        </section>
    );
}

export default Offering;