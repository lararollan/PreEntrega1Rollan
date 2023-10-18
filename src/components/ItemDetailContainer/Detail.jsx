import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ProductDetailContainer from "./ProductDetailContainer";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Detail = () => {
  const {productId} = useParams();
  
  const [loading, setLoading] = useState (true);
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
        try {
          
            const db = getFirestore();
            const productRef = doc(db, 'products', productId);
            getDoc(productRef).then((snapshot)=>{
if(snapshot.exists()){
  setSelectedProduct({ id: snapshot.id, ...snapshot.data()})
  
  setLoading(false)
  
}

            })
            
            
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
    
        

        return (
            <Container>
                {selectedProduct ? (
                    <>
                        <h2 style={{ marginTop: '1rem' }} className="productTitle">{selectedProduct.title}</h2>
                        <ProductDetailContainer key={selectedProduct.id} product={selectedProduct} />
                    </>
                ) : (
                    <p>Producto no encontrado</p>
                )}
            </Container>
        );
    };
    
        
    
export default Detail;