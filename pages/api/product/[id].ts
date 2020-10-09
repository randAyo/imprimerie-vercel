import { NextApiRequest, NextApiResponse } from 'next';
import details from '../../../utils/sample-data'
import { NameList } from '../../../interfaces/index'

export default function getProduct(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: 'Sorry we only support Get' })
    }
    const quer = req.query.id.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const product = details.find(ex => ex.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === quer);
    if (typeof product === 'undefined') {
        res.json({ message: 'product Not Found' })

    } else {

        const { name, id, src, obj, content } = product!;
        const { description, accordion } = content;
        const nameList: NameList[] = []
        Object.values(details).map(ex => nameList.push({ name: ex.name, id: ex.id }))
        res.json({ name, id, src, description, accordion, minPrice: obj.minPrice, nameList })
    }
}