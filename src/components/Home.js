import React from 'react';
import ProductList from './ProductList/ProductList';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <>
          <Sidebar/>
          <ProductList/>
          <Footer/>
        </>
    );
};

export default Home;