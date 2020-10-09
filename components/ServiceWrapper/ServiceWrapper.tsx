import React from 'react'
import classes from './ServiceWrapper.module.scss'

interface ServiceWrapperProps {
    children: React.ReactNode
}

 const ServiceWrapper: React.FC<ServiceWrapperProps> = ({ children }) => {
    return (
        <main className={classes.container}>
            {children}
        </main>
    );
}

export default ServiceWrapper