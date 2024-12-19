import { TfiShoppingCartFull } from "react-icons/tfi";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <div className="cart-icon">
        <TfiShoppingCartFull />
      </div>
      <div className="cart-count">1</div>
    </div>
  )
}


export default CartWidget
