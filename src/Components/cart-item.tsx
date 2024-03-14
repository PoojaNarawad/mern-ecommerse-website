import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cartItem: any;
};

const CartItem = ({cartItem}: CartItemProps) => {
    const {photo ,price, productId, name, quantity } = cartItem;
  return (
    <div className="cart-item">
        <img src={photo} alt={name} />
        <article>
            <Link to={`/product/${productId}`}>{name}</Link>
            <span>₹{price}</span>
        </article>
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <button><FaTrash/></button>
    </div>
  )
}

export default CartItem