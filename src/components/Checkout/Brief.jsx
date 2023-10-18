import { useState } from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Brief.css";
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



const Brief = () => {
    const { cart } = useCartContext();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        confirmEmail: '',
      });
    
      const [buyerId, setBuyerId] = useState(null);


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, confirmEmail, ...rest } = formData;
    
        if (email === confirmEmail) {
          console.log('Formulario válido:', { email, ...rest });
        } else {
          alert('vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlLos correos electrónicos no coinciden. Por favor, inténtelo de nuevo.');
        }
      

      const buyerData = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        direccion: formData.direccion,
        telefono: formData.telefono,
        email: formData.email,
        items: cart.items
      };

      const db = getFirestore();

      try {
        
        const buyerCollection = collection(db, "buyer")
        addDoc(buyerCollection, buyerData).then(({ id}) => setBuyerId(id));
        console.log("Datos del buyer agregados a firestore.");
      } catch (error) {
        console.error("Error al agregar datos a firestore: ", error);
      }
    };




return(

    <>
    {cart.items.length === 0 ? (
        
      <div className="error">
        <h3>Sin elementos en el carrito</h3>
      <Link to="/" className="btn btn-success mx-1 mt-2">
 Volver al inicio
</Link>
</div>
         ) : (
<div>
  <h2 className='briefTitulo'>Resumen de compra</h2>
    <Table className='briefTable' striped bordered hover>
    <thead>
      <tr>
        <th className="align-middle text-center">Imagen</th>
        <th className="align-middle text-center">Producto</th>
        <th className="align-middle text-center">Cantidad</th>
        <th className="align-middle text-center">Precio</th>
        <th className="align-middle text-center">Total</th>
       
        
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
         
      
        </tr>))}
        <tr>
            <td className="total align-middle text-center" colSpan={4}>TOTAL</td>
            <td className="total">${cart.total.toFixed(2)}</td>
        </tr>
     </tbody>
     </Table>
     
    
    {/* INPUT */}

    
    <form onSubmit={handleSubmit}>
      <h3>Ingrese sus datos de contacto</h3>
   
     
      <div>
        <label htmlFor="nombre"></label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="apellido"></label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
          required
          value={formData.apellido}
          onChange={handleChange}
        />
      </div>
     
      <div>
        <label htmlFor="direccion"></label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          placeholder="Dirección"
          required
          value={formData.direccion}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="telefono"></label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Teléfono"
          required
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>
     
      
      <div>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="confirmEmail"></label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          placeholder="Confirmar email"
          required
          value={formData.confirmEmail}
          onChange={handleChange}
        />
      </div>
     
      <Button className="buttonEnviar" type="submit">Finalizar compra</Button>
    </form>
  
 


   
  
  </div>
     )}
     </>
)
}

export default Brief;