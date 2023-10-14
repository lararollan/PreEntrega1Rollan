import { Card, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ProductDetailContainer.css';
import ItemCount from '../common/ItemCount';
import {useContext, useState} from "react";
import { useCartContext } from '../context/CartContext';



const ProductDetailContainer = ({product, children}) => {

    const {id, image, title, price, detail, stock} = product
    const { addToCart } = useCartContext()
    const [quantityInCart, setQuantityInCart] = useState(0);
    

    const handleAddToCart = (count) => {


        setQuantityInCart(count);
        console.log('agregado', count)
        if (count > 0) {
            addToCart({
                id, title, image, price, quantity: count
            })
        }
    };
   
   
   
   
   
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
<Card.Text>
<ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
</Card.Text>

</Card.Body>
</Card>

        
    );
}

export default ProductDetailContainer;