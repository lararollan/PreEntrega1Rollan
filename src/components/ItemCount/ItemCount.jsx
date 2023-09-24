import { useState } from "react";

const ItemCount = () => {
    const stock = 3;
    const initial = 1
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count >= stock) {
            return;
        } else {
            setCount(count+1);
        }
        }
    
    const handleSubstract = () => {
        if (count <= 1) {
            return;
        } else {
            setCount(count - 1);
        }
    }

    const onAdd = (count) => {
        if (count <= stock){
            console.log(count)
        } else{
            return;
        }

    }
   
    return(
        
        <>
        
        <div>
            <button onClick={() => handleAdd()}>+</button>
            <span>{count}</span>
            <button onClick={() => handleSubstract()}>-</button>
        </div>
        <div>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
       
        </>
         );
    }

  
  export default ItemCount;