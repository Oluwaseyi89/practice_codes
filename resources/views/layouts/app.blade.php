<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
   <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="stylesheet" href="Dxl_Main_Style.css" />
       <link rel="stylesheet" href="showcaserow.css" />
       <link rel="stylesheet" href="footer.css" />
       <link rel="stylesheet" href="bootstrap.min.css" />
       <script type="text/javascript" src="jquery-3.6.0.js"></script>
       <script type="text/javascript" src="handlebars-v4.7.7.js"></script>     
       <title>DE-EXTRALUCID TECH WORLD PLC</title>
       <meta name="csrf-token" content="{{ csrf_token() }}"/>
   </head> 
    <!-- The body section begins here -->
        <body class="myBody">
            <div id=navBar class="navbar">
                <div class="brand logo">
                    <img alt="Company Logo" id="logo" src="./Dxl Tech logo Transparent.png"/>
                </div>
                <div id="headcon">
                    <div><a href="/">Home</a></div>
                    <div><a href="#">About</a></div>
                    <div><a href="#">Our Services</a></div>
                    <div><a href="#">Our Products</a></div>
                    <div> <a href="/register">Subscribe for Voucher</a></div>
                    <div> <a href="#">Careers</a> </div>
                    
                    
                    
                </div> 
                <a href="/carttable" style="text-decoration: none;">
                <div id="cart">                                 
                    </div>
                </a>
                
                <div id="iconImg">
                    <a href="/userlogin">
                    <img alt="User Icon" id="uIcon" src="./User_Icon.png" />
                </a>
            </div>
        </div>
        <div id="SocialMedia">
            <div id="facebook">
                <a href="https://www.facebook.com"><img src="./Icons/Facebook_Icon.png" id="fbIcon" /></a> 
            </div>
            <div id="Whatsapp">
                <a href="#"><img src="./Icons/WhatsApp_Icon.png" id="WaApIcon" /></a>
            </div>
            <div id="Instagram">
                <a href="#"><img src="./Icons/Instagram_Icon.png" id="InstIcon" /></a>
            </div>
            <div id="twitter">
                <a href="#"><img src="./Icons/Twitter_Icon.png" id="twitIcon" /></a>
            </div>
            <div id="youtube">
                <a href="#"><img src="./Icons/YouTube.png" id="yutuIcon" /></a>
            </div>
        </div>           
        @yield('content')
        <div class="chatBox">
            <span class='close' id='xChat'>&times;</span>
            <div id="msgVal"></div>
                    <div id="chInput">
                        <input type="text" name="msg" id="msg" /> <input type="submit" action="/chat" method="POST" id="send" value="Send" />                       </div>  
                    </div>
                </div>
                     <!--Chat Box Ends Here-->
            
           
            <div id='revChat'>
                <p id="showChat">Show Chat</p>
            </div>

                 
            <div style="margin-top:2100px;"></div>
        <footer class="footer">
           <p class="footerFirst">De-Extralucid Tech World Plc., &copy; 2022.</p>
           <p>All rights reserved.</p>
        </footer>
                <script type="text/javascript" src="Dxl_Main_Script.js"></script>
                <script type="text/javascript" src="Dxl_jQuery.js"></script>
                <script type="text/javascript" src="DxlCart.js"></script>
                <script type="text/javascript" src="prodUpdate.js"></script>
                <script type="text/javascript" src="bootstrap.min.js"></script>              
        </body> 
</html>