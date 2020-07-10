import { combineReducers, createStore as reduxCreateStore } from "redux";

// import { productsReducer } from "../products/reducers";
import { usersReducer } from "../users/reducers";




// export const createStore = reduxCreateStore(
//   combineReducers({
//     // products: productsReducer,
//     users: usersReducer
//   })
// )
export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      // products: productsReducer,
      users: usersReducer
    })
  )
}

