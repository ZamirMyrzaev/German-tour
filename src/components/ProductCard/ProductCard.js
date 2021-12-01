import React from 'react';
import { Link } from 'react-router-dom';
import  "./ProductCard.css"

const ProductCard = ({item,inFav=true}) => {


    function addFav(item){
        if(!JSON.parse(localStorage.getItem('favorites'))){
            localStorage.setItem('favorites',JSON.stringify([]))
        }
        let favs = JSON.parse(localStorage.getItem('favorites'))
        
        let filtered = favs.filter(elem=> elem.id!==item.id)
        filtered.push(item)
        localStorage.setItem('favorites',JSON.stringify(favs))
    }
    return (
        <>
            
                <div className="cards_block">
                <Link to={`/details/${item.id}`}>
                    <img className="cards_block_img" src={item.img} alt="cards_img" />
                    <p className="cards_block_heading">{item.heading}</p>    
                    <p className="cards_block_description">{item.description}</p>
                    <p className="cards_block_price">{item.price}</p>
                    </Link>
                    {inFav&&<button className="btn" onClick={()=>addFav(item)}>в избранные</button>}
                </div>            
            
        </>
    );
};

export default ProductCard;