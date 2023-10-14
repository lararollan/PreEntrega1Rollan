import React from "react";
import { useCartContext } from "../context/CartContext";
import Table from 'react-bootstrap/Table';



const Cart = () => {
    const { cart } = useCartContext();

    return (
        <>
        <h1>
        Cart
        </h1>
        {cart.items.length === 0 ? (
                    <h3>
                        Carrito vacío
                    </h3>
                     ) : (
                        <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                            {cart.items.map((item)=> (
                             <tr key={item.id}>
                             <td><img style={{ width: "10%", height: "10%" }} src={item.image} alt={item.title} /></td>
                             <td>{item.title}</td>
                             <td>${item.price}</td>
                             <td>${item.price * item.quantity}</td>
                             </tr>
                            ))}
                            <tr>
                                <td colSpan={3}>Total:</td>
                                <td>${cart.total.toFixed(2)}</td>
                            </tr>
                         </tbody>
                         </Table>
                     )}

        </>
)};

export default Cart;