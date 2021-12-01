import React, { useContext, useState } from 'react';
import { productContext } from '../../ProductContext';
import { Link } from 'react-router-dom';
import "./AddProduct.css"


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
        <div className="main_add">
        <div className="add">
            <input 
            type="text"
            className="add_input"
            placeholder="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            />
            <input 
            type="text"
            className="add_input"
            placeholder="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            />
            <input 
            type="text"
            className="add_input"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input 
            type="text"
            className="add_input"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <Link to="/">
            <button className="add_btn" onClick={handleAddProduct}>
                Save
            </button>
            </Link>
        </div>
        </div>
    );
};

export default AddProduct;