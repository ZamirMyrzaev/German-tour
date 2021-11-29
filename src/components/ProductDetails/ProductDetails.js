import { Details } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { productContext } from '../../ProductContext';
import './ProductDetails.css'

const ProductDetails = () => {

    const { detailList, getDetails, deleteProduct, editProduct,saveEdit } = useContext(productContext);
    const [ deleteTask, setDeleteTask ] = useState({})
    const [message,setMessage] = useState('')

    let params = useParams().id;

    useEffect(() => {
        getDetails(params)
    }, []);

    useEffect(() => {
        setDeleteTask(detailList.id)
    }, [detailList])
     
    function sendMessage(){
        let [...newComment] = detailList.comments
       
        newComment.push(message)
        let newObj = {
            ...detailList,
            comments: newComment
        }
        saveEdit(newObj)
        getDetails(params)
    }

    return (
        <div>
            <div className="details_block">
            <img className="details_img" src={detailList.img} alt="img"/>
            <p className="details_heading">{detailList.heading}</p>
            <p className="details_description">{detailList.description}</p>
            <div className="details_price">{detailList.price}</div>
            </div>
            <Link to="/add">
                <button>Add</button>
            </Link>
            <Link to="/">
            <button onClick={() => deleteProduct(deleteTask)}>
                delete
            </button>
            </Link>
            <Link to={`/edit/${detailList.id}`}>
            <button onClick={() => editProduct(detailList.id)}>
                Edit
            </button>
            </Link>
            <input onChange={(e)=>setMessage(e.target.value)}/><button onClick={sendMessage}>отправить</button>
            <div className='comment_list'>
                {detailList.comments?detailList.comments.map((elem)=>(
                    <span key={elem.id}>{elem}</span>
                )):null}
            </div>
        </div>
    );
};

export default ProductDetails;