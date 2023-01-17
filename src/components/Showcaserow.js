import './styles/showcaserow.css';
// import { useState } from 'react';
// import DxlCart from './DxlCart';


const Showcaserow = ({ handleBtnVal, cartBtn, prodQty, handleProdClick, handlePlusClick, handleMinusClick, handleProdSet }) => {
    
        return (
            <div className="showcaserow">
                <div className="row1">
                    <div className ="thumb1">
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
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/imac.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/kcocera.png" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/dvr.JPG" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                </div>
                <div className="row1">
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/router.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/switch.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/network_cable.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/cctv_cam.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                </div>
                <div className="row1">
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/computer_cabinet.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/laser_printer.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/iphoneX3.jpg" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                    <div className ="thumb1">
                        <div className="thumbnl">
                            <img className="img-thumbnail" src="../Product_Image/Xiaomi.webp" />
                            <div className="cartpanel">
                                <span className="cartbtn">Qty to Add</span>
                                <input className="cartbtn" type="text" value="1" />
                                <input className="cartbtn" type="button" value="+" />
                                <input className="cartbtn" type="button" value="-" />
                                <input className="cartsum" type="submit" value="Add to Cart" />
                                <span className="cartbtn">Qty in Stock</span>
                                <input className="cartbtn" type="text" value="1" />
                            </div>
                        </div>                  
                    </div>
                </div>
            </div>
        )
    }

export default Showcaserow