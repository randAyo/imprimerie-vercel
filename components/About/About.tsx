import React, { useState } from 'react'
import classes from './About.module.scss'


 const About: React.FC = () => {
	const [expend, setExpend] = useState(false);
	const { aboutContainer, aboutHeading, aboutMission, aboutConcept, aboutPhilosophie, readMore } = classes;
	return (
		<section style={{ height: expend ? 'auto' : '30vh' }} className={aboutContainer}>
			<h1 className={aboutHeading}>Pourquoi Nous?</h1>
			<div className={aboutMission}>
				<p><strong>NOTRE MISSION :</strong> Express Imprimerie  a pour mission de répondre de manière professionnelle et efficace aux besoins croissants de la clientèle marocaine en matière d’impression. En s’appuyant sur notre concept de One stop shop , nos imprimeries sont en mesure de répondre à toutes les commandes de clients particuliers  ou entreprises; de l’adaptation de fichiers aux imprimés personnalisés et uniques. La qualité de nos produits, l’aspect novateur de nos services, le professionnalisme de nos collaborateurs et le strict respect des dates de livraison sont pour nous la base de longues relations avec nos clients.
				</p>
			</div>
			<div className={aboutConcept}>
				<p>	<strong>NOTRE CONCEPT : </strong>Tous les commerces ont tous les jours besoin de documents imprimés, qu’il s’agisse de papeterie de base, du papier à entête et des cartes d’affaires jusqu’aux rapports annuels, aux documents de marketing et aux impressions personnalisées. Grâce à notre friendly  website : <a href="/">www.imprimerie.digital/</a> , Express Imprimerie peut répondre efficacement aux besoins d’impression de chaque client; de l’adaptation au parachèvement. Nos centres, ont recours à une technologie de pointe pour répondre aux attentes de nos clients, ou même les excéder, en matière de fiabilité, de qualité et de délais d’exécution plus courts dans un marché qui n’accepte que les plus hautes normes.
				</p> </div>
			<div className={aboutPhilosophie}>
				<p>	<strong>NOTRE PHILOSOPHIE :</strong>Servir chaque client de manière rapide, efficace et courtoise en garantissant un service professionnel et de haute qualité à un prix raisonnable. Notre objectif principal consiste à développer avec nos clients des relations à long terme qui favorisent la croissance et la prospérité mutuelle. Ainsi, que votre entreprise soit petite ou grande, vous pouvez avoir besoin d’une solution simple en une seule étape, ou exiger tout, de l’adaptation à l’impression d’un projet jusqu’à la reproduction, la finition à la pose. Peu importe ce que cela représente pour vous, quoique vous décidiez, nous ferons toujours preuve du même engagement et du même professionnalisme pour vous offrir des solutions adaptées à vos besoins.
				</p> </div>
			<p style={{ display: expend ? 'none' : 'block' }} className={readMore}>
				<button onClick={() => setExpend(true)} className="button">Afficher Plus</button>
			</p>
		</section>
	);
}
export default About;