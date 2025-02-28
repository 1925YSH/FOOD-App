import React, { useContext, useState ,useEffect } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const PlaceOrder = () => {

    const {getTotalCartAmount ,token ,food_list,cartItems,url}=useContext(StoreContext);
    const [data,setData] =useState({
          firstName:"",
          lastName:"",
          email:"",
          street:"",
          city:"",
          state:"",
          zipcode:"",
          country:"",
          phone:""
    })

    const onChangeHandler =(event)=>{

      const name =event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    //payment function
      const placeOrder = async(event)=>{
          event.preventDefault();

          let orderItems =[];
          food_list.map((item)=>{
              if (cartItems[item._id]>0) {
                  let itemInfo = item;
                  itemInfo["quantity"] = cartItems[item._id]
                  orderItems.push(itemInfo);
                }
          })
          let orderData = {
            address:data,
            items:orderItems,
            amount:getTotalCartAmount()+2,
}
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
      if (response.data.success) {
        const {session_url} =response.data;
        window.location.replace(session_url);
      }else{
        alert("Error");
        console.log(response);
        
      }

      }
      const navigate = useNavigate();
      useEffect(() => {
          if (!token) {
            navigate('/cart')
          }else if(getTotalCartAmount()===0){
            navigate('/cart')
          }
      }, [token])

    return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-filds">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address"/>
        <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street"/>
        <div className="multi-filds">
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-filds">
          <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip Code" />
          <input required name="country"onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
      <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>


      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivey Fee</p>
              <p>Rs. {getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>

        {/* Payment Method Section
        <div className="payment-method">
          <h2>Payment Method</h2>
          <div className="payment-options">
            <div
              className={`payment-option `}
              
            >
              <input type="radio" name="payment"  readOnly />
              <label>COD (Cash on Delivery)</label>
            </div>

            <div
              className={`payment-option `}
              
            >
              <input type="radio" name="payment" readOnly />
              <label>Stripe (Credit / Debit)</label>
            </div>
          </div>
        </div> */}

          <button type="submit" >PROCEED TO PAYMENT</button>

        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
