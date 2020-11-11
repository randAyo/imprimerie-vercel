import React from 'react'
import classes from './ServiceContent.module.scss'
import { serviceContent, accordion } from '../../interfaces';
import { Accordion } from '../Accordion/Accordion'
import Image from 'next/image'


interface props extends serviceContent {
	accordionArray: accordion[]
}

 const ServiceContent: React.FC<props> = ({ name, src, minPrice, description, accordionArray }) => {
	const { Ccontainer, heading, content, details, image, text, accordionContainer } = classes;
	return (
		<div className={Ccontainer}>
			<h1 className={heading}>{name}</h1>
			<div className={content}>
				<div className={details}>
					<div className={image}>
						<Image width="auto" height="auto" layout="responsive" src={src} alt={name} />
						
						</div>
					<div className={text}>
						{description.map((ex, index) =>
							<p
								key={index}
								dangerouslySetInnerHTML={{
									__html: ex
								}}>
							</p>
						)}
						<h2>a partir de : <span> {minPrice}</span> dh</h2>

					</div>
					<div className={accordionContainer}>
						{accordionArray.map(ex =>
							<Accordion
								key={ex.id}
								title={ex.title}
								answer={ex.answer}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceContent;