import { useState } from "react";
import {Button} from 'react-bootstrap';


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
<div>
<Button className="mx-1" onClick={handleDecrement} disabled={count <= initial}>-</Button>
<span>{count}</span>
<Button className="mx-1" onClick={handleIncrement} disabled={count >= stock}>+</Button>
<Button className="mx-1" onClick={handleAddToCart} disabled={count === 0}><i className="bi bi-cart-fill"></i>Agregar al carrito</Button>
</div>
);
}


export default ItemCount;