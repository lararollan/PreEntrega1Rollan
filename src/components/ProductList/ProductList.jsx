import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductList.css";  
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ProductList = () => {
    const {data, loading} = useAsyncMock(products)
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