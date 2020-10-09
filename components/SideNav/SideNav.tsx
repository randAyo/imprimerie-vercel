import classes from './SideNav.module.scss'
import { NameList } from '../../interfaces';
import Link from 'next/link';
import { useState } from 'react';

interface productName {
    nameList: NameList[]
}

const SideNav: React.FC<productName> = ({ nameList }) => {
    const { sidenav, unordered, btn } = classes;
    let [state, setstate] = useState(null)
    const showList = () => {
        const state = [];
        nameList.map(ex => {
            state.push(
                <li key={ex.id} className={btn}>
                    <Link
                        href={`/services/${ex.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
                        <p>{ex.name}</p>
                    </Link>
                </li>
            )
        }
        )
        setstate(state);
    }
    if (!state && nameList.length) {
        showList();
    }
    return (
        <aside className={sidenav}>
            <h1>Produits: </h1>
            <ul className={unordered}>
                {state}
            </ul>
        </aside>
    );
}
export default SideNav;
