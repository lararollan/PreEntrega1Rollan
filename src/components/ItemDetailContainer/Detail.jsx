import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';
import useAsyncMock from "../../hooks/useAsyncMock";
import products from '../../mocks/products.json';
import ProductDetailContainer from "./ProductDetailContainer";

const Detail = () => {
   
        const {productId} = useParams();
        const {data, loading} = useAsyncMock(products);
    
        if (loading) 
        return (
          <div>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
    
        const productSelected = data.find((product) => product.id === parseInt(productId, 10));

        return (
            <Container>
                {productSelected ? (
                    <>
                        <h2 style={{ marginTop: '1rem' }} className="productTitle">{productSelected.title}</h2>
                        <ProductDetailContainer key={productSelected.id} product={productSelected} />
                    </>
                ) : (
                    <p>Producto no encontrado</p>
                )}
            </Container>
        );
    };
    
        
    
export default Detail;