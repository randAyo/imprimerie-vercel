import React, { useState, useRef } from 'react'
import classes from './Accordion.module.scss'
import { Chevron } from '../svg/Chevron';

interface AccordionProps {
    title: string
    answer: string
}

export const Accordion: React.FC<AccordionProps> = ({ answer, title }) => {
    const { accordion, accordionSection, accordionTitle, accordionContent, active, accordionIcon, rotate, accordiontext } = classes;
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState(accordionIcon);
    const [setId, setChangeId] = useState(false);
    const contents = useRef(null)
    function toggleAccordion() {
        setChangeId(!setId);
        setActiveState(setActive === "" ? active : "");
        setHeightState(
            //@ts-ignore
            setActive === active ? "0px" : `${contents.current.scrollHeight}px`
        );
        setRotateState(
            setActive === active ? accordionIcon : [accordionIcon, rotate].join(' ')
        );
    }

    return (
        <div className={accordionSection}>
            <button onClick={toggleAccordion} className={[accordion, setActive].join(' ')}>
                <p className={accordionTitle}>{title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#003459"} />
            </button>
            <div className={accordionContent} ref={contents} style={{ maxHeight: `${setHeight}` }}>
                <div className={accordiontext}
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
            </div>
        </div>
    );
}