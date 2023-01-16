// Home Page ChatBox Closing Codes Starts
let xChat = $('#xChat');
let chatBox = $('.chatBox');
xChat.on('click', function () {
 chatBox.hide();
});

let revChat = $('#revChat');
revChat.on('click', function () {
    chatBox.show();
});

// Home Page ChatBox Closing Codes Ends

//Closing Code and Showing Code for Reg and Log Chats Starts

$('#xChLog').on('click', () => $('#LogChatBox').hide());
$('#revChatLog').on('click', () => $('#LogChatBox').show());
$('#xChatReg').on('click', () => $('#RegChatBox').hide());
$('#revChatReg').on('click', () => $('#RegChatBox').show());

//Closing Code and Showing Code for Reg and Log Chats Ends

// Login Page Credential Error Alert Starts

$('#Login').on('click', (e) => {

    let emailLog = $('#emailLog').val();
    let passwordLog = $('#passwordLog').val();
    
    if (emailLog == "" || passwordLog == "") {

        e.preventDefault();
   
        $('#logAlert').show();

    setTimeout( () => $('#logAlert').hide(), 10000);

    }

    // } else {
    //             let cred = {
    //                 eMail: `${emailLog}`,
    //                 passWord: `${passwordLog}`
    //             }

    //             fetch('/login', {
    //               method: "POST",
    //               headers: { "Content-Type" : "application/json" },
    //               body: JSON.stringify(cred)
    //           });
    //       }
});

$('#close').on('click', () => $('#logAlert').hide());

// Login Page Credential Error Alert Ends

// Registration Page Credential Error Alert Starts

$('#regBtn').on('click', (e) => {

    // e.preventDefault();
    
    var surname = $('#surname').val();
    var firstname = $('#firstname').val();
    var emailReg = $('#emailReg').val();
    var passwordReg = $('#passwordReg').val();
    var passwordReg2 = $('#passwordReg2').val();
    var phone = $('#phone').val();
    var country = $('#country').val();
    var state = $('#state').val();
    var street = $('#street').val();
    var dob = $('#dob').val();


    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (surname === "" || firstname === "" || emailReg === "" ||
    passwordReg === "" || passwordReg2 === "" || phone === "" ||
    country === "" || state === "" || street === "" || dob === "") {

       e.preventDefault();
  
       $('#regAlert').show();

   setTimeout( () => $('#regAlert').hide(), 10000);
       // return;
        }  else if (!emailReg.match(mailFormat)) {
            e.preventDefault();
            $('#mailValid').show();
            setTimeout( () => $('#mailValid').hide(), 10000);
            // return;
        }  else if (passwordReg !== passwordReg2) {
        e.preventDefault();
        $('#pwMismatch').show();
        setTimeout( () => $('#pwMismatch').hide(), 10000);
        return;
    }
        // else{
        //   var UserInput = {
        //     //   UserID : passwordReg,
        //       FirstName : firstname,
        //       LastName : surname,
        //       eMail : emailReg,
        //       passWord : passwordReg 
        //   }
    
        // // let headers = new Headers({
        // //     "Content-Type": "application/json",
        //     "Accept": "application/json"
        // });


        //   fetch('/Online_Users', {
        //       method: "post",
        //       headers: { "Content-Type" : "application/json" },
        //       body: JSON.stringify(UserInput)
        //   }).then((res) => {
        //       return res.json();
        //   });
        
        // let body = JSON.stringify(UserInput);
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'Online_Users', true);

        // xhr.setRequestHeader('Content-Type', 'application/json');

        // xhr.send(body);
        //   }
});

$('#regClose').on('click', () => $('#regAlert').hide());

$('#emForClose').on('click', () => $('#mailValid').hide());


// Registration Page Credential Error Alert Ends

// Reg Email Validation Close Code Starts
    $('#valEmClose').on('click', () => $('#invalEm').hide());

// Reg Email Validation Ends

//Reg Password Mismatch Close Code Starts
   $('#pwMisClose').on('click', () => $('#pwMismatch').hide());

//Chat Program Here


const send = $('#send');
const msgVal = $('#msgVal');
// console.log(msgVal[0]);
// msgVal[0].innerText = " "
send.on('click', async () => {
    let msg = $('#msg').val();
   await fetch('/chat', {
        method: "post",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({msg:msg}),
    }).then(res => {
        return res.json();
    }).then((data) => {
        // console.log("data", data)
       for (var i = 0; i < msgVal.length; i++) {
        msgVal[i].innerHTML += data.msg + '<br />';
        // clrMsg();
      } 
    })
   console.log(msg);
//    await function clrMsg () {
//        msg = " ";
//    }
});

//Chat Program Ends

// cart code starts

// localStorage.clear();

// let cartItem = {'Shirt': 7, 'Trouser': 5, 'Shoe': 8};

// let cart = JSON.stringify(cartItem);

// localStorage.setItem('cart', cart);

// let showLoc = localStorage.getItem("cart");

// let showRes = JSON.parse(showLoc);

// console.log(showRes);
// console.log('Total Items Chosen is:' + " " + parseInt(showRes.Shirt + showRes.Trouser + showRes.Shoe));


// var cartContent = $("#cartTemplate").html();

// var template = Handlebars.compile(cartContent);
// let j = 0;

// var data;

// var cartBtn = document.getElementById('Service1');
//     cartBtn.addEventListener('click', () => {
//     if (cartBtn.value == "Add to Cart") {
//             j++;
//     data = template({cartCount: j})
//     document.getElementById('cart').innerHTML = data;
//     cartBtn.value = 'Remove from Cart';
//     } else {    
//             j--;
//         data = template({cartCount: j})
//         document.getElementById('cart').innerHTML = data;
//         cartBtn.value = 'Add to Cart';
//         }
//     });

// cartBtn.removeEventListener;

// cartBtn.removeEventListener;

// ('click', () => {
//     j--;
//     var data = template({cartCount: j})
//     document.getElementById('cart').innerHTML = data;
//     cartBtn.value = 'Add to Cart';
// });


// cart code ends

// localStorage.setItem('name', 'Oluwaseyi');
// localStorage.setItem('name1', 'Ademola');
// localStorage.setItem('name2', 'Omobolanle');
// //localStorage.clear();


// function showLocStore () {
//     for (let i = 0; i < localStorage.length; i++) {
//         let storedVal = localStorage.key(i);
//         console.log(`item at ${i}: ${storedVal}`);
//         let theName = localStorage.getItem(storedVal);
//         console.log(theName);
//     }
// }
// window.addEventListener('load', showLocStore, false);

// fetch('/customers', {
//     method: 'GET'
// }).then((res)=>{
//     return res.json()
// });

$('#resmail').on('click', () => {
    let resetEmail = $('#resetEmail');
    let mailBody = {'resetEmail': resetEmail};
    fetch('/resmail', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(mailBody)   
    });

    console.log(mailBody);
});


// $('#cart').on('click', async () => {
//    await  fetch('/carttable', {
//        method: "POST"
//    });
//     // alert('clicked')
// });