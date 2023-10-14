import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Cart = ({ show, onClose }) => {
    const { cart } = useCartContext();

   
    
    return (
       
     

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
       
        {cart.items.length === 0 ? (
                    <Modal.Body>
                  Carrito vacío
                  </Modal.Body>
                     ) : (
                      <Modal.Body>
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
                         </Modal.Body>)
}
                     <Modal.Footer>
                     
                     <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={onClose}>
            Checkout
          </Button>
        </Modal.Footer>

      </Modal>
    
    
    
        
)};

export default Cart;