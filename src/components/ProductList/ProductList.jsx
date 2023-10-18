import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductList.css";  
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState("");
    
useEffect(() => {
  const fetchData = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "products"))
  const newData = querySnapshot.docs.map((doc)=>(console.log(doc), {id: doc.id, ...doc.data()}))
  setData(newData);
  setLoading(false);
 
 
}
fetchData();
}, [])

    if (loading) 
    return (
      <div>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

    return (

      <Container className='productListContainer'>
            <h2 className='categoryTitle'>Productos</h2>
            <Row>
                {data.map((product) => (
                    <Col key={product.id} xs={12} md={4}>
                        <ItemDetailContainer product={product} />
                    </Col>
                ))}
            </Row>
        </Container>

   

    
    );
}

export default ProductList;