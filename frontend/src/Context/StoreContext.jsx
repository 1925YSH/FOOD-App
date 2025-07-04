import { createContext, useState ,useEffect } from "react";
//import { food_list } from "../assets/assets";
import axios from 'axios'

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // const url =process.env.REACT_APP_BASE_URL;
  const url ="http://localhost:4000";

  const [token,setToken]=useState("");

  const [food_list,setFoodlist] =useState([]);

  const addToCart = async (itemId) => {
    // when user adds item first time in the cart this will execute one enrty will be created

    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      //if item is already availabe then increase the count of item

      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFormCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
  }
  };


  const getTotalCartAmount =()=>{

    let totalAmount =0;

    for(const item in cartItems){
      if (cartItems[item]>0) {
        let itemInfo =food_list.find((product)=>product._id===item);
          totalAmount +=itemInfo.price* cartItems[item];
      }
          
    }
    return totalAmount;

  }

    //fetching food from DB on UI

    const fetchFoodList =async ()=>{
      const response = await axios.get(url+"/api/food/list")
      setFoodlist(response.data.data)

    }

    const loadCartData =async (token)=>{
      const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
      setCartItems(response.data.cartData)
    }


  //in this hook jab user login rhega or refresh krega to automatic logout nhi hoga
  //localstorage me token save rkhega jab tak usse remove nhi krenge
    useEffect(() => { 

      async function loadData() {
        await fetchFoodList();
        if (localStorage.getItem("token")) {
          setToken(localStorage.getItem("token"));

          await loadCartData(localStorage.getItem("token"));
        }
      }
      loadData();

    }, [])


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFormCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
