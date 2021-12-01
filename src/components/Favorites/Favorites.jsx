import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import './Favorites.css'

const Favorites = () => {

    const [inFav,setInFav] = useState(false)

    const [favorites,setFavorites] = useState([])

    function getFavorites (){
        if(!JSON.parse(localStorage.getItem('favorites'))){
            localStorage.setItem('favorites',JSON.stringify([]))
        }
        let fav = JSON.parse(localStorage.getItem('favorites'))
        setFavorites(fav)
    }

    useEffect(()=>{
        getFavorites()
    },[])
    console.log(favorites)
    return (
        <div className='favorites'>
            <div className="container">
                <div className="favorites_content">
                    {favorites?favorites.map((item)=>(
                        <ProductCard item={item} inFav={inFav}/>
                    )):"нет избранных"}
                </div>
            </div>
        </div>
    );
};

export default Favorites;