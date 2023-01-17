import './App.css';
import './components/styles/showcaserow.css';
import './components/styles/bootstrap.min.css';
import { products } from './components/products';
// import Axios from 'axios';
import { useState, useEffect, createContext, useRef, useReducer, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Gifi from './components/Gifi';
// import Showcaserow from './components/Showcaserow';
// import Testrow from './components/Testrow';
// import Userreg from './components/Userreg';
// import { ApiURL } from './urls';
// import './components/DxlCart';

function App () {
  
  // const [item, setItem] = useState(state);

  const [bask, setBask] = useState("");
  const prevBask = useRef("");
  
  // const cartContext = createContext();

   
  const initialState = {
    item: products,
    totalItem: 0,
    totalAmount: 0
  }

  const addQty = (id) => {
    return dispatch({
      type: "increment",
      payload: id,
    })
  }

  const lessQty = (id) => {
    return dispatch({
      type: "decrement",
      payload: id,
    })
  }

  const totAll = (id) => {
      return dispatch({
        type: "get_totals",
        payload: id,
      });
    };

  const storedProd = (id) => {
    return dispatch({
      type: "get_stored",
      payload: id,
    });
  }
  
  const reducer = (state, action) => {
      if (action.type === "increment") {
        let updatedCart = state.item.map((curElem) =>{
          if(curElem.id === action.payload) {
            return {
              ...curElem, add_qty: curElem.add_qty + 1
            }
          }
          return curElem;
        });
        return {...state, item:updatedCart}
      }

      if (action.type === "decrement") {
        let updatedCart = state.item.map((curElem) =>{
          if(curElem.id === action.payload) {
            return {
              ...curElem, add_qty: curElem.add_qty - 1
            }
          }
          return curElem;
        });
        return {...state, item:updatedCart}
      }
      if (action.type === "get_totals") {        
        let updatedCart = state.item.map((curElem) => {
           if (curElem.id === action.payload) {
             if (curElem.cartState === true){
               curElem.isAdded = "Remove from Cart";
               localStorage.setItem(curElem.prod_name, JSON.stringify(curElem));
             return {
               ...curElem, cartState: false
             }
           } else {
                  curElem.isAdded = "Add to Cart";
                  localStorage.removeItem(curElem.prod_name);
                  return {
                    ...curElem, cartState: true, add_qty:0
             }
           }
         }
           return curElem;
         });

        let {totalItem, totalAmount} = state.item.reduce((accum, curVal) => 
          {
            let {prod_price, add_qty} = curVal;
            let updatedTotAmt = prod_price * add_qty;
            accum.totalItem += add_qty;
            accum.totalAmount += updatedTotAmt;
            setBask(accum.totalItem);
            return accum;
          }, 
          {
            totalItem: 0,
            totalAmount: 0,
          }
          );
          
          // localStorage.setItem('yourCart', JSON.stringify(state));
        return {...state, totalItem, totalAmount, item: updatedCart}
      }

      if (action.type === "get_stored") {
        let storProd = [];
        for (let i=0; i<products.length; i++) {
          let doc = JSON.parse(localStorage.getItem(products[i].prod_name));
          if (doc !== null) {
            storProd.push(doc);
          }
        }
        let locStorItem = state.item.map((specElem)=> {
            for (let i=0; i<storProd.length; i++) {
              if (specElem.id === storProd[i].id) {
                specElem = storProd[i];
              }
            }

            return {...specElem }
        });
        return { ...state, item:locStorItem }       
      }
      return state;
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

   
    // const storedProducts = () => {
    //   window.addEventListener('load', () => {
    //     let storProd = [];
    //     for (let i=0; i<products.length; i++) {
    //       let doc = JSON.parse(localStorage.getItem(products[i].prod_name));
    //       if (doc !== null) {
    //         storProd.push(doc);
    //       }
    //     }
    //     console.log(storProd);
    //   });
    // }
    
    // useCallback = (()=>{
    //      totAll(state.item.id);
    // });
    
    useEffect(() => {
      window.addEventListener('load', () => {
        storedProd(state.item.id);
        totAll();
      });
      // totAll();
      // totAll();
      // window.removeEventListener('load', storedProd(state.item.id));
      // totAll(state.item.id);
      // console.log(window.innerWidth);
      // document.title = "Another Title";
      // console.log(state.totalItem);
    }, [state.item]);

    // const [cartBtn, setCartBtn] = useState(state.item.isAdded);

    // const changeCartVal = (id) => {
    //   if (state.item.id == id) setCartBtn("Remove from Cart");
    // }

          // <cartContext.Provider value={bask}>
          //   <Header bask = {bask}/>
          // </cartContext.Provider>
    
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <Gifi />
             < div className="showcaserow">
                {state.item.map((curItem) => 
                  (<div key={curItem.id} className="paneladj">
                    <div className ="thumb1">
                        <div className="thumbnl">
                                <div className="panel">
                                    <div id={'mac' + curItem.id} className="panel" >{curItem.prod_name}</div>
                                    <div  id={'amt' + curItem.id} className="panel">₦ {curItem.prod_price}</div>
                                </div>
                            <img alt={curItem.prod_name} id={'imgurl' + curItem.id} className="img-thumbnail" src={curItem.img_url} />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn"  value={curItem.add_qty} readOnly="readonly"  id={'addQty' + curItem.id} />
                                <input className="cartbtn" onClick={() => addQty(curItem.id)}  id={'plus' + curItem.id} type="button" value="+" /> 
                                <input className="cartbtn" onClick={() => lessQty(curItem.id)}  id={'minus' + curItem.id} type="button" value="-" /> 
                                <input className="cartsum" onClick={() => totAll(curItem.id)} value={curItem.isAdded} readOnly="readonly" id={'cartAct' + curItem.id} type="submit"  />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" id={'stock' + curItem.id} readOnly="readonly" value="1" />
                            </div>
                        </div>                  
                    </div>
                  </div>)
                )}
              </div>
              
          </Route>
          <Route exact path="/register">
              
          </Route>
        </Switch>
              <Footer />
              <Header bask ={bask} prevBask={prevBask}/>
      </Router>
    </div>
  )
}

export default App