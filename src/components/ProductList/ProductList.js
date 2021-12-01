import React, { useContext, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { productContext } from '../../ProductContext';
import FilterBrand from '../FilterBrand/FilterBrand';
import history from '../helpers';
import ProductCard from '../ProductCard/ProductCard';
import "./ProductList.css"

const ProductList = () => {

    const { getProducts, products } = useContext(productContext);
    const [ searchvalue, setSearchvalue ] = useState('');
    const [page, setPage] = useState(0)

    const pageCount = Math.ceil(products.length / 3)

    useEffect(() => {
        getProducts()
    }, [])


    function changePage({ selected }) {
        setPage(selected)
    }

    function handleValue(e){
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchvalue(e.target.value)
        getProducts(search.toString())
    }

    const productrsPerPage = 3

     const pageVisited = page * productrsPerPage
    const displayProducts = products
    .slice(pageVisited, pageVisited + productrsPerPage)
    .map((item) => <ProductCard key={item.id} item={item} />)

    return (
        <div className="main">
            <p className="main_text">ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ ДЛЯ ТУРИЗМА</p>
            <input 
                name="q"
                type="search" 
                className="main_search" 
                onChange={handleValue}
                placeholder="    Search..."
            />
            <div className="main_cards">
                {displayProducts}
            </div>
                <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationBttns'}
                        previousLabelClassName={'Bttns'}
                        nextLabelClassName={'Bttns'}
                        disabledClassName={'Bttns'}
                        activeClassName={'Bttns'}
                />
                 <FilterBrand />
            <p className="main_text">НАШИ СЕРВИСЫ</p>
         <div className="servises">
            <div className="servises_block">
                <span>Сопровождение <br/> Автоуслуги <br/> Переводчик </span>
            </div>
            <div className="servises_block">
                <span>Сопровождение <br/> Автоуслуги <br/> Переводчик </span>
            </div>
            <div className="servises_block">
                <span>Сопровождение <br/> Автоуслуги <br/> Переводчик </span>
            </div>
         </div>
        
    </div>
    
    );
};

export default ProductList;