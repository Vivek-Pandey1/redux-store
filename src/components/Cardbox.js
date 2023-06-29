import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cardbox = ({id,title,description,image,price}) => {
  return (    
    <Card className='col-4 col-md-6 m-2' style={{ width: '18rem' }}>
    <Link to={`/product/${id}`}>
    <Card.Img style={{maxHeight:'18rem'}} variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text style={{textDecoration:'none'}}>
         $ {price}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
    </Link>
  </Card>
  
  )
}

export default Cardbox;