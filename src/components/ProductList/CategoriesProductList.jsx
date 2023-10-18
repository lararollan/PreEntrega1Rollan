import './ProductList.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const CategoriesProductList = () => {
    const {categoryId} = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (true);
    
    useEffect(() => {
      const fetchData = async () => {
          try {
              const db = getFirestore();
              const productRef = collection(db, "products");
              const q = query(productRef, where("category", "==", `${categoryId}`)); 
              const querySnapshot = await getDocs(q);
              const products = [];

              querySnapshot.forEach((doc) => {
                  products.push({ id: doc.id, ...doc.data() });
              });

              setData(products);
              setLoading(false);
          } catch (error) {
              console.error("Error al obtener datos de Firestore: ", error);
          }
      };

      fetchData();
  });
  

    if (loading) 
    return (
      <div>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

    const categorySelected = data.filter( category => category.category.toLowerCase() === categoryId.toLocaleLowerCase());

    return (
      <Container>
    <h2 className="categoryTitle">{categoryId.toUpperCase()}</h2>
    <Row>
      {categorySelected.map((product) => (
        <Col key={product.id} xs={12} md={4}>
          <ItemDetailContainer key={product.id} product={product} />
        </Col>
      ))}
    </Row>
  </Container>
      );
    
    
    
}

export default CategoriesProductList;