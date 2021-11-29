import React, { useContext, useState } from 'react';
import { productContext } from '../../ProductContext';
import { Link } from 'react-router-dom';


const AddProduct = () => {

    const { addProduct } = useContext(productContext);
    const [ img, setImg ] = useState('');
    const [ heading, setHeading ] = useState('')
    const [ description, setDescription ] = useState('');
    const [ price, setPrice ] = useState('');

    function clear() {
        setImg('')
        setDescription('')
        setPrice('')
        setHeading('')
    }

    function handleAddProduct(){
        const newProduct = {
            img: img,
            heading: heading,
            description: description,
            price: price,
            comments: []
        }
        addProduct(newProduct)
        clear()
    }


    return (
        <div>
            <input 
            type="text"
            placeholder="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            />
            <input 
            type="text"
            placeholder="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            />
            <input 
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input 
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <Link to="/">
            <button onClick={handleAddProduct}>
                Save
            </button>
            </Link>
        </div>
    );
};

export default AddProduct;