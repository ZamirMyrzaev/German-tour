import React from 'react';
import { Link } from 'react-router-dom';
import  "./ProductCard.css"

const ProductCard = ({item}) => {
    return (
        <>
            <Link to={`/details/${item.id}`}>
                <div className="cards_block">
                    <img className="cards_block_img" src={item.img} alt="cards_img" />
                    <p className="cards_block_heading">{item.heading}</p>    
                    <p className="cards_block_description">{item.description}</p>
                    <p className="cards_block_price">{item.price}</p>
                </div>            
            </Link>
        </>
    );
};

export default ProductCard;