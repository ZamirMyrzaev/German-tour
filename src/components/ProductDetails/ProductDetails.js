import { Details } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AuthContextProvider, { authContext, useAuth } from '../../AuthContext';
import { productContext } from '../../ProductContext';
import './ProductDetails.css'

const ProductDetails = () => {

    const { detailList, getDetails, deleteProduct, editProduct,saveEdit } = useContext(productContext);
    const [ deleteTask, setDeleteTask ] = useState({})
    const [message,setMessage] = useState('')
    const {email} = useContext(authContext)
    console.log(email)
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
        <div className="main_details">
            <div className="details">
                <img className="details_img" src={detailList.img} alt="img"/>
                <p className="details_heading">{detailList.heading}</p>
                <p className="details_description">{detailList.description}</p>
                <div className="details_price">{detailList.price}</div>
                <p className="details_description">Коментарии</p>
                <div className='details_comment'>
                {detailList.comments?detailList.comments.map((elem)=>(
                    <p className="comments" key={elem.id}>{elem}</p>
                )):null}
            </div>
            </div>
            <Link to="/add">
                <button className="btn_10">Add</button>
            </Link>
            <Link to="/">
                <button className="btn_10" onClick={() => deleteProduct(deleteTask)}>
                    delete
                </button>
            </Link>
            <Link to={`/edit/${detailList.id}`}>
                <button className="btn_10" onClick={() => editProduct(detailList.id)}>
                    Edit
                </button>
            </Link>
                <input className="input_comment" onChange={(e)=>setMessage(e.target.value)}/><button className="btn_11" onClick={sendMessage}>отправить</button>

        </div>
    );
};

export default ProductDetails;