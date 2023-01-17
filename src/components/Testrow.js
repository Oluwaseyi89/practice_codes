import './styles/testrow.css';
// import { useState } from 'react';
// import DxlCart from './DxlCart';


const Testrow = ({ handleBtnVal, cartBtn, prodQty, handleProdClick, handlePlusClick, handleMinusClick, handleProdSet }) => {
    
        return (                
                    <div className="thumbnl">
                            <div className="panel">
                                <div id="mac1" className="panel" >Mac_Book</div>
                                <div  id="amt" className="panel">900000</div>
                            </div>
                        <img className="img-thumbnail" src="../Product_Image/macbook.jpg" />
                        <div className="cartpanel">
                            <span className="cartbtn">Qty to Add</span>
                            <input className="cartbtn" value={prodQty} onChange={handleProdSet} id="addQty" />
                            <input className="cartbtn" onClick={handlePlusClick}  id="plus" type="button" value="+" />
                            <input className="cartbtn" onClick={handleMinusClick} id="minus" type="button" value="-" />
                            <input className="cartsum" value={cartBtn} onChange={handleBtnVal} onClick={handleProdClick} id="cartAct" type="submit"  />
                            <span className="cartbtn">Qty in Stock</span>
                            <input className="cartbtn" type="text" value="1" />
                        </div>
                    </div>                 
            )
        }

export default Testrow