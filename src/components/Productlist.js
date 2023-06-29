import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProduts } from '../redux/action/actionCreator';
import Cardbox from './Cardbox';
import Spinner from 'react-bootstrap/Spinner';
const Productlist = () => {
   const dispatch = useDispatch()
   const products = useSelector((state) => state.allProducts.products);
    const fetchProducts = async ()=>{
        const products = await axios.get('https://fakestoreapi.com/products').catch((err)=>console.log(err));
        dispatch(setProduts(products.data));
    }
    useEffect(() => {
        fetchProducts()
        
    // eslint-disable-next-line
    }, [])

   const productList =  products.map((product)=>{
        return<Cardbox key={product.id} {...product}/>
    })
    
  return (
    <div className='row m-2 justify-content-center' >{
        productList && productList.length > 0 ? productList : <Spinner className='mt-4'/>}</div>
  )
}

export default Productlist