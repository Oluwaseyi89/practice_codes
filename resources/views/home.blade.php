
    <!--The body section begins here-->
    @extends('layouts.app')
            <!--This is the Navbar section-->  
                
                <!--This is the GIF Advert-->
            @section('content')
                <div>
                    <img id="Gif" alt="Gif Image" src="./DXL GIF Image dummy for Web.jpg">
                </div>
               
                <!-- <input type="button" id="Service1" value="Add to Cart"> -->
                <div class="showcaserow">
                    <div class="row1">
                        <div class="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac1" class="panel" >Mac_Book</div>
                                    <div class="panel">₦  <div  id="amt"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl1" src="./Product_Image/macbook.jpg" />
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty" type="text" value="1" />
                                    <input class="cartbtn" id="plus" type="button" value="+" />
                                    <input class="cartbtn" id="minus" type="button" value="-" />
                                    <input class="cartsum" id="cartAct" type="button" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock1" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac2" class="panel" >iMac</div>
                                    <div class="panel">₦  <div  id="amt2"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl2" src="./Product_Image/imac.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty2" type="text" value="1" />
                                    <input class="cartbtn" id="plus2" type="button" value="+" />
                                    <input class="cartbtn" id="minus2" type="button" value="-" />
                                    <input class="cartsum" id="cartAct2" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock2" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac3" class="panel" >Kyocera</div>
                                    <div class="panel">₦  <div  id="amt3"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl3" src="./Product_Image/kcocera.png"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty3" type="text" value="1" />
                                    <input class="cartbtn" id="plus3" type="button" value="+" />
                                    <input class="cartbtn" id="minus3" type="button" value="-" />
                                    <input class="cartsum" id="cartAct3" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock3" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac4" class="panel" >DVR</div>
                                    <div class="panel">₦  <div  id="amt4"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl4" src="./Product_Image/dvr.JPG" />
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty4" type="text" value="1" />
                                    <input class="cartbtn" id="plus4" type="button" value="+" />
                                    <input class="cartbtn" id="minus4" type="button" value="-" />
                                    <input class="cartsum" id="cartAct4" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock4" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                    </div>
                    <div class="row1">
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac5" class="panel" >Router</div>
                                    <div class="panel">₦  <div  id="amt5"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl5" src="./Product_Image/router.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty5" type="text" value="1" />
                                    <input class="cartbtn" id="plus5" type="button" value="+" />
                                    <input class="cartbtn" id="minus5" type="button" value="-" />
                                    <input class="cartsum" id="cartAct5" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock5" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac6" class="panel" >Network_Cable</div>
                                    <div class="panel">₦  <div  id="amt6"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl6" src="./Product_Image/network_cable.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty6" type="text" value="1" />
                                    <input class="cartbtn" id="plus6" type="button" value="+" />
                                    <input class="cartbtn" id="minus6" type="button" value="-" />
                                    <input class="cartsum" id="cartAct6" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock6" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac7" class="panel" >cctv_cam</div>
                                    <div class="panel">₦  <div  id="amt7"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl7" src="./Product_Image/cctv_cam.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty7" type="text" value="1" />
                                    <input class="cartbtn" id="plus7" type="button" value="+" />
                                    <input class="cartbtn" id="minus7" type="button" value="-" />
                                    <input class="cartsum" id="cartAct7" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock7" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac8" class="panel" >PC_Desk</div>
                                    <div class="panel">₦  <div  id="amt8"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl8" src="./Product_Image/computer_cabinet.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty8" type="text" value="1" />
                                    <input class="cartbtn" id="plus8" type="button" value="+" />
                                    <input class="cartbtn" id="minus8" type="button" value="-" />
                                    <input class="cartsum" id="cartAct8" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock8" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                    </div>
                    <div class="row1">
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac9" class="panel" >Network_Switch</div>
                                    <div class="panel">₦  <div  id="amt9"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl9" src="./Product_Image/switch.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty9" type="text" value="1" />
                                    <input class="cartbtn" id="plus9" type="button" value="+" />
                                    <input class="cartbtn" id="minus9" type="button" value="-" />
                                    <input class="cartsum" id="cartAct9" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock9" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac10" class="panel" >hp_laserjet</div>
                                    <div class="panel">₦  <div  id="amt10"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl10" src="./Product_Image/laser_printer.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty10" type="text" value="1" />
                                    <input class="cartbtn" id="plus10" type="button" value="+" />
                                    <input class="cartbtn" id="minus10" type="button" value="-" />
                                    <input class="cartsum" id="cartAct10" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock10" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac11" class="panel" >iphoneX3</div>
                                    <div class="panel">₦  <div  id="amt11"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl11" src="./Product_Image/iphoneX3.jpg"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty11" type="text" value="1" />
                                    <input class="cartbtn" id="plus11" type="button" value="+" />
                                    <input class="cartbtn" id="minus11" type="button" value="-" />
                                    <input class="cartsum" id="cartAct11" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock11" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                        <div class ="thumb1">
                            <div class="thumbnl">
                                <div class="panel">
                                    <div id="mac12" class="panel" >Xiaomi</div>
                                    <div class="panel">₦  <div  id="amt12"></div></div>
                                </div>
                                <img class="img-thumbnail" id="imgurl12" src="./Product_Image/Xiaomi.webp"/>
                                <div class="cartpanel">
                                    <span class="cartbtn">Qty to Add</span>
                                    <input class="cartbtn" id="addQty12" type="text" value="1" />
                                    <input class="cartbtn" id="plus12" type="button" value="+" />
                                    <input class="cartbtn" id="minus12" type="button" value="-" />
                                    <input class="cartsum" id="cartAct12" type="submit" value="Add to Cart" />
                                    <span class="cartbtn">Qty in Stock</span>
                                    <input class="cartbtn" id="stock12" readonly="readonly" value="" />
                                </div>
                            </div>                  
                        </div>
                    </div>
                </div>
                                        
    @endsection