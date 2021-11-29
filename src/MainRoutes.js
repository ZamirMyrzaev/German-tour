import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home';
import ProductContextProvider from './ProductContext';
import ProductDetails from './components/ProductDetails/ProductDetails';
import EditProduct from './components/EditProduct/EditProduct';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './AuthContext';
import Auth from './components/Auth/Auth';

const MainRoutes = () => {
    return (
        <ProductContextProvider>
            <AuthContextProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/add" element={<AddProduct/>} />
                  <Route path="/details/:id" element={<ProductDetails/>} />
                  <Route path="/edit/:id" element={<EditProduct/>} />
                  <Route path="/auth" element={<Auth />} />
                </Routes>
            </BrowserRouter>
            </AuthContextProvider>
        </ProductContextProvider>
    );
};

export default MainRoutes;