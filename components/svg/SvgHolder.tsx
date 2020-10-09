import React from 'react'

interface SvgHolderProps {
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    className?: string
    children: React.ReactNode
}

export const SvgHolder: React.FC<SvgHolderProps> = ({ width = "300px", height = "300px", viewBox = "0 0 1000 600", fill = "none", className, children }) => {
    return (
        <svg
            width={width} height={height} viewBox={viewBox} fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className={className}>
                {children}
            </g>
        </svg>
    );
}