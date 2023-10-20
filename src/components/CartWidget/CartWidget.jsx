import 'bootstrap-icons/font/bootstrap-icons.css';

import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart } = useCartContext();

    console.log(cart)
    return (
        <>
        <div>
        <i className="bi bi-cart cartIcon" ></i>
        <span className="number-icon badge rounded-pill"> {cart.items.reduce((total, item) => total + item.quantity, 0)}</span>
</div>
</>

    );
};

export default CartWidget;