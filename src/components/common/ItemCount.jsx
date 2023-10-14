import { useState } from "react";
import {Button, Container} from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
    //creo un estado para controlarme el conteo, cuyo estado inicial es el
    const [count, setCount] = useState(initial);

   

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    //agrego al carrito
    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };

    return (
        <Container>
            <button onClick={handleDecrement} disabled={count <= initial}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement} disabled={count >= stock}>+</button>
            <Button onClick={handleAddToCart} disabled={count === 0} variant="primary">
      <i className="bi bi-cart-fill"></i> Agregar al CARRITO</Button>
      </Container>
    );
}

export default ItemCount;