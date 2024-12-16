
function CartItem(props){
    
    return (
      <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    )
  }



export default CartItem;