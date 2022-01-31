import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllProducts = (props) => {
    const [products, setProductsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/findall')
            .then(res => {
                // console.log(res.data.results);
                setProductsData(res.data.products);
            })
            .catch(err => {
                // console.log(err)
                setProductsData(err)
            })
    }, [products])

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((product, i) => {
                    return <div key={i}><span >{product.title}</span></div>
                })
            }
        </div>
    )
}
export default AllProducts