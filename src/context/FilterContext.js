import { createContext, useContext, useReducer } from "react";
import { filterReducers } from "../reducers";

const filterInitialState ={
    productList: [],
    onlyStock: false,
    bestSellerOnly:false,
    sortBy: null,
    ratings:null
}

export const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children})=>{
    const [state, dispatch] = useReducer(filterReducers, filterInitialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload:{
                products:products
            },
        })
    }

    function bestSeller(products){
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }

    const filteredProductList = bestSeller(state.productList);

    const value ={
        state,
        dispatch,
        products: filteredProductList,
        initialProductList
    }
    return(
        <FilterContext.Provider value={value} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () =>{
  const context =  useContext(FilterContext);
    return context;
} 