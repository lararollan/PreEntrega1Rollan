import { Card, Button } from 'react-bootstrap';
import './ProductDetailContainer.css';



const ProductDetailContainer = ({product, children}) => {

    const {id, image, title, price, detail} = product
    

    return( 
       
        <Card className='productCard' key={id} >
<Card.Img className="card-img" variant="top" src={image} />
<Card.Body>
<Card.Title>{title}</Card.Title>
<Card.Text>
   
{price}
</Card.Text>
<Card.Text>
{detail}
</Card.Text>

<Button variant="primary">Agregar al carrito</Button>
</Card.Body>
</Card>

        
    );
}

export default ProductDetailContainer;