import './ProductList.css';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const CategoriesProductList = () => {
    const {categoryId} = useParams();
    const {data, loading} = useAsyncMock(products);

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