import React from 'react'
import classes from './EmailPhoneDirection.module.scss'
import Obfuscate from 'react-obfuscate'

interface EmailPhoneDirectionProps {
    name: string
}
const { email, phone, direction } = classes;
const Email = () => (
    <div className={email}>
        <h1>Notre Email:</h1>
        <Obfuscate
            email="imprimeur.lina@gmail.com"
            headers={{
                subject: "Express Imprimerie Client",
                body: "Question?"
            }}
        />
    </div>
)
const Phone = () => (
    <div className={phone}>
        <h1>Cliquez pour appeler:</h1>
        <Obfuscate tel="06 63 15 22 49" />
    </div>
)
const Direction = () => (
    <div className={direction}>
        <h1>Où sommes-nous?</h1>
        <p> Salé, El Qaria, Hay Al Amal, Secteur 2, Rue Missoura</p>
    </div>
)



export const EmailPhoneDirection: React.FC<EmailPhoneDirectionProps> = ({ name }) => {
    const toBeRendered = name === "phone" ? <Phone /> : name === "email" ? <Email /> : <Direction />
    return (
        <>
            {toBeRendered}
        </>
    )
}