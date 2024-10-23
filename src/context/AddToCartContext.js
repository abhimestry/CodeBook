import { useReducer, createContext } from "react";
import CountContext from "./contexts/CountContext";
import { ProductCard } from "../components";
const addToCartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      return state.cartList.concat(product);
    }
  }
};
export default function App() {
  const [count, countDispatch] = useReducer(addToCartReducer, []);
  return (
    <div className="App">
      <CountContext.Provider value={{ count, countDispatch }}>
        <ProductCard />
      </CountContext.Provider>
    </div>
  );
}