@extends('layouts.app')
    @section('content')
<div class="container" id="prodContainer">
    <div><h1>Product Update Table</h1></div>
    <div>
        <select id="prod_name" class="selectBtn">
            <option>Select a product</option>
            <option>Mac_Book</option>
            <option>iMac</option>
            <option>Kyocera</option>
            <option>DVR</option>
            <option>Router</option>
            <option>Network_Cable</option>
            <option>cctv_cam</option>
            <option>PC_Desk</option>
            <option>Network_Switch</option>
            <option>hp_laserjet</option>
            <option>iphoneX3</option>
            <option>Xiaomi</option>
        </select>
        
        <input id="prod_price" type="text" placeholder="Enter Price (NGN)" />
        <input id="prod_qty"  type="text" placeholder="Qty in Stock" />
         <select id="prod_img" class="selectBtn">
            <option>Select Image Url</option>
            <option>./Product_Image/macbook.jpg</option>
            <option>./Product_Image/imac.jpg</option>
            <option>./Product_Image/kcocera.png</option>
            <option>./Product_Image/dvr.JPG</option>
            <option>./Product_Image/router.jpg</option>
            <option>./Product_Image/network_cable.jpg</option>
            <option>./Product_Image/cctv_cam.jpg</option>
            <option>./Product_Image/computer_cabinet.jpg</option>
            <option>./Product_Image/switch.jpg</option>
            <option>./Product_Image/laser_printer.jpg</option>
            <option>./Product_Image/iphoneX3.jpg</option>
            <option>./Product_Image/Xiaomi.webp</option>
        </select>
    </div>
    <div>
        <input id="add_prod" class="adminSubmit" type="button" value="Add Product"/>
        <input id="update_prod" class="adminSubmit" type="button" value="Update Product"/>
         <input id="del_prod" class="adminSubmit" type="button" value="Delete Product"/>
    </div>
    <div id="prodTable">
        
    </div>
</div>
<style>
    #prodContainer {
        margin-left: 80px;
        margin-top: 90px;
    }
</style>
@endsection