import React from 'react'
import classes from './Products.module.scss'
import { Cards } from '../Cards/Cards'


 const Products: React.FC = () => {
    return (
        <section className={classes.container}>
            <h1>Produits :</h1>
            <Cards />
        </section>
    );
}
export default Products;