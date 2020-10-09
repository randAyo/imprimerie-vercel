import React from 'react'
import { SvgHolder } from './SvgHolder'

interface NavigationProps {
    className: string
} 

export const Navigation: React.FC<NavigationProps> = ({className}) => {
    return (
        <SvgHolder className={className} viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
        </SvgHolder>
    );
}