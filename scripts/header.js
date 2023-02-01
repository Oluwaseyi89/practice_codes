let logoImg = document.getElementsByClassName('logo-img');
let smLinkDiv = document.getElementById('sm-link');
let closeSmDiv = document.getElementById('close-sm-header');
let userIcon = document.getElementById('usr-ico');
let userOpt = document.getElementById('usr-opt');

let refresh = () => window.location.reload();



if(window.innerWidth <= 414) {
    Array.from(logoImg).forEach(element => {
        element.src = "./images/nav.png"; 
        element.addEventListener('click', () => {   
            $('#sm-link').show();
        }, false);
    });

    closeSmDiv.addEventListener('click', () => {
        $("#sm-link").hide();
    }, false);

} else {
    Array.from(logoImg).forEach(element => {
        element.src = "./images/dxl-logo.png";    
    });
}
if(window.innerWidth <= 768) {
    Array.from(logoImg).forEach(element => {
        element.src = "./images/nav.png"; 
        element.addEventListener('click', () => {   
            $('#sm-link').show();
        }, false);
    });
    
    closeSmDiv.addEventListener('click', () => {
        $("#sm-link").hide();
    }, false);
} else {
    Array.from(logoImg).forEach(element => {
        element.src = "./images/dxl-logo.png"; 
    });
} 

userIcon.addEventListener("mouseover", () => {
    $('#usr-opt').show();
}, false);

userIcon.addEventListener("mouseleave", () => {
    setTimeout(() => $('#usr-opt').hide(), 3000);    
}, false);

