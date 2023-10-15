import React from "react";
import "./Cart.css";
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const Cart = ({ show, onClose }) => {
    const { cart, removeItem } = useCartContext();

    const handleRemoveItem = (itemId) => {
      
      removeItem(itemId);
    };
    
    return (
       
     

      <Modal show={show} onHide={onClose}size="lg">
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
                            <th className="align-middle text-center">Imagen</th>
                            <th className="align-middle text-center">Producto</th>
                            <th className="align-middle text-center">Cantidad</th>
                            <th className="align-middle text-center">Precio</th>
                            <th className="align-middle text-center">Total</th>
                            <th className="align-middle text-center">Eliminar</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                            {cart.items.map((item)=> (
                             <tr key={item.id}>
                             <td className="align-middle text-center"><img className="imagen" src={item.image} alt={item.title} /></td>
                             <td className="align-middle text-center">{item.title}</td>
                             <td className="align-middle text-center">{item.quantity}</td>
                             <td className="align-middle text-center">${item.price}</td>
                             <td className="align-middle text-center">${item.price * item.quantity}</td>
                             <td className="align-middle text-center" > <Button  variant="danger" onClick={() => handleRemoveItem(item.id)}> <i class="bi bi-trash"></i> </Button></td>
                          
                            </tr>))}
                            <tr>
                                <td className="total align-middle text-center" colSpan={4}>TOTAL</td>
                                <td className="total">${cart.total.toFixed(2)}</td>
                            </tr>
                         </tbody>
                         </Table>
                         </Modal.Body>)
}
                     <Modal.Footer>
                     {cart.items.length === 0 ? (
                     <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
                     ) : (
                    
<div>
<Link to="./brief" className="btn btn-success mx-1" onClick={onClose}>
  Checkout
</Link>

           <Button variant="secondary" onClick={onClose}>
           Cerrar
         </Button>
         </div>
          
                     )}
        </Modal.Footer>

      </Modal>
    
    
    
        
)};

export default Cart;