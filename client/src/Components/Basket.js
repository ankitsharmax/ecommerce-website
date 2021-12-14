import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  const history = useNavigate();

  const PlaceOrder = async (e) => {
      console.log("Place order");
      // console.log(cartItems[0]);

      for (var i=0; i<cartItems.length;i++){
        
        // start
        const {id,name,price,image,qty} = cartItems[i];
        let emailid = sessionStorage.email;
        const totalprice = qty*price;
        emailid = emailid.slice(1,-1);
        console.log(emailid,id,name,price,image,qty,totalprice); 
        
        const res = await fetch("/checkout",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            emailid,id,name,price,qty,totalprice
        })
      });

      const data = await res.json();

      if (!data) {
        console.log("Order Failed to place");
        alert("Order Failed! Please try after some time.");
        history('/Home');
      } else {
        console.log("Order Successfully placed");
      }

      // end
      }
      alert("Order Successfully Placed!");
      history('/MyOrder');

  }


  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x Rs.  {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs. {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className='checkout' onClick={() => PlaceOrder()}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}