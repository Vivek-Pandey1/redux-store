import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProduts } from '../redux/action/actionCreator';
import Cardbox from './Cardbox';

// import { useDispatch } from 'react-redux'
// import { productReducer } from '../redux/reducers/productReducers'

const Productlist = () => {
   const dispatch = useDispatch()
   const products = useSelector((state) => state.allProducts.products);
    const fetchProducts = async ()=>{
        const products = await axios.get('https://fakestoreapi.com/products').catch((err)=>console.log(err));
        dispatch(setProduts(products.data));
    }
    useEffect(() => {
        fetchProducts()
    //   useDispatch(productReducer.)
    //   return () => {
    //     second
    //   }
    }, [])

   const productList =  products.map((product)=>{
        return<Cardbox {...product}/>
    })
    
  return (
    <div className='row m-2 justify-content-center' >{productList}</div>
  )
}

export default Productlist