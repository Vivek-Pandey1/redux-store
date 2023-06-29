import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { removeSelectedProduts, selectedProduts } from '../redux/action/actionCreator';
import Spinner from 'react-bootstrap/Spinner';
const ProductDetails = () => {
    const productdetial = useSelector(state=>state.allProducts.selectedProduct);
    const {id,title,description,category,rating,image,price} = productdetial;
    const {productID} = useParams();
    const dispatch = useDispatch();

    const fetchProductDetails = async()=>{
        const prod = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch(err=>console.log(err))
        dispatch(selectedProduts(prod.data))
    }
    useEffect(() => {
        fetchProductDetails()
    
      return () => {
        dispatch(removeSelectedProduts())
      }
    }, [productID])
    const ProductdetialCom = ()=>{
        return<div className='row' id={id}>
            <img style={{maxHeight:'35rem'}} className='col-6 col-xs-12 mt-4' src={image} alt={title}/>
            <div className='col-6 col-xs-12'>
                <p className='h1 mt-1'>{title}</p>
                <p className='h2 mt-3'>$ {price}</p>
                <p>{category}</p>
                <p className='text-secondary' >{description}</p>
            </div>
        </div>
    }
  return (
    <div className='container '>
        {Object.keys(productdetial).length !== 0 ?<ProductdetialCom/> :<div className='container mt-4 h2 text-center'><Spinner/></div>}
        
    </div>
  )
}

export default ProductDetails