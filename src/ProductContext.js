import React, { createContext, useReducer } from 'react';
import axios from 'axios';

export const productContext = createContext();

const INIT_STATE = {
    products:[],
    detailList:{},
    detailEdit: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload}
        case "GET_DETAILS":
            return {...state, detailList: action.payload}
        case "EDIT_DETAILS":
            return {...state, detailEdit: action.payload}
        default: 
            return state
    } 
}

const ProductContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getProducts(params) {
        let { data } = await axios(`http://localhost:8000/products?${params}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }
    async function getDetails(id){
        const { data } = await axios(`http://localhost:8000/products/${id}`)
         dispatch({
             type: "GET_DETAILS",
             payload: data
         })
    }

    async function addProduct(newProduct){
        await axios.post("http://localhost:8000/products", newProduct)
        getProducts()
    }

    async function deleteProduct(id){
        await axios.delete(`http://localhost:8000/products/${id}`)
        getProducts()
    }

    async function editProduct(id){
        let { data } = await axios(`http://localhost:8000/products/${id}`)
        dispatch({
            type: "EDIT_DETAILS",
            payload: data
        })
    }

    const saveEdit = async (newDetails) => {
        await axios.patch(`http://localhost:8000/products/${newDetails.id}`, newDetails)
    }


    return (
        <productContext.Provider value={{ 
            products: state.products,
            detailList: state.detailList,
            detailEdit: state.detailEdit,
            addProduct,
            getProducts,
            getDetails,
            deleteProduct,
            editProduct,
            saveEdit
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;