
import "./ItemListContainer.css";
import { Card } from 'react-bootstrap';
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from "../../mocks/categories.json";
import { Link } from "react-router-dom";




const ItemListContainer = () => {
  const { data, loading } = useAsyncMock(categories);

  if (loading) 
    return (
      <div>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  

  return (
    <div className="container">
      <h2 className="title">Categorías</h2>
      {data.map((category) => (
        
        <Card className="categoryCard" key={category.id}>
          <Card.Body>
            <Link className="link" to={`/category/${category.category}`}>{category.category}</Link>
          </Card.Body>
        </Card>
        
        
      ))}
    </div>
  );
}

export default ItemListContainer;


