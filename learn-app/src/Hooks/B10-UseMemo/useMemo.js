import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function UseMemo() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const handleAdd = () => {
        setProducts([
            {
                name: name,
                price: parseInt(price)
            }, 
            ...products
        ])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const result = products.reduce((total, product) => total + product.price ,0)
        console.log('....re-render');
        return result;
    }, [products])

    return (
        <div>
            <input
                ref = {nameRef}
                value={name}
                placeholder='Name ...'
                onChange={e => setName(e.target.value)}
            />
            <input
                value={price}
                placeholder='Price ...'
                onChange={e => setPrice(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <h4>Total: {total}</h4>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}
