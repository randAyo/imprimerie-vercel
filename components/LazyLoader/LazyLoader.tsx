import React from 'react'
import classes from './LazyLoader.module.scss'
import { SvgHolder } from '../svg/SvgHolder'

// preserveAspectRatio="xMidYMid"
export default function LazyLoader() {
    return (
        <div className={classes.LazyLoader}>
            <span>Loading...</span>
            <SvgHolder
                width="50px" height="50px" viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" fill="none" stroke="#CF5600" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(51.289 50 50)">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </SvgHolder>
        </div>
    )
}
