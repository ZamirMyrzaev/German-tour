import React, { useContext, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from "../../ProductContext";


const EditProduct = () => {

    const { detailEdit, saveEdit } = useContext(productContext);
    const [ change, setChange ] = useState(detailEdit);

    useEffect (() => {
        setChange(detailEdit)
    }, [detailEdit]);

    function handleEditInput(e){
        let newTask = {
            ...change,
            img: e.target.value
        }
        setChange(newTask)
    };

    function handleEditInput2(e){
        let newTask = {
            ...change,
            heading: e.target.value
        }
        setChange(newTask)
    };

    function handleEditInput3(e){
        let newTask = {
            ...change,
            description: e.target.value
        }
        setChange(newTask)
    }

    function handleEditInput4(e){
        let newTask = {
            ...change,
            price: e.target.value
        }
        setChange(newTask)
    }
    console.log(change);

    return (
        <>
            <div>
                {change ? 
               <div>
                <input 
                      type="text" 
                      placeholder="Img URL"
                      value={change.img}
                      onChange={handleEditInput}
                      />
                <input 
                      type="text" 
                      placeholder="Heading"
                      value={change.heading}
                      onChange={handleEditInput2}
                      />
                <input 
                      type="text" 
                      placeholder="Description"
                      value={change.description}
                      onChange={handleEditInput3}
                      />
                <input 
                      type="text" 
                      placeholder="Price"
                      value={change.price}
                      onChange={handleEditInput4}
                      />

                 <Link to={`/details/${change.id}`}>
                     <button onClick={() => saveEdit(change)}>Save</button>
                 </Link>
                </div>
           : <h1>Loading</h1>}
        </div>
        </>
    );
};

export default EditProduct;