import React from 'react'
import { content } from '../../interfaces';
// import { detail } from '../../interfaces';
interface detail {
    name: string
    src: string
    content: content
}


export const Service: React.FC<detail> = ({ name, src, content }) => {
    return (
        <div>
            <h1>name is : {name}</h1>
            <h1>src is : {src}</h1>
            {content.accordion.map(ex => <h1>{ex.title}</h1>)}
        </div>
    );
}