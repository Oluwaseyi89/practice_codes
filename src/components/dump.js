const [lastName, setLastName] = useState("");
const [firstName, setFirstName] = useState("");
const [eMail, setEmail] = useState("");
const [passWord, setPassWord] = useState(""); 
const [message, setMessage] = useState("");

const [prodQty, setProdQty] = useState("1");
const [cartBask, setCartBask] = useState("");
const [cartBtn, setCartBtn] = useState("Add to Cart");

const handleBtnVal = (e) => {
  setCartBtn(e.target.value);
}

const handleProdSet = (e) => {
  setProdQty(e.target.value);
}

const handlePlusClick = () => {
    let somVal = parseInt(prodQty);
    somVal++;
    setProdQty(somVal);
}

const handleMinusClick = () => {
    let somVal = parseInt(prodQty);
    somVal--;
    setProdQty(somVal);
}


const handleSetBask = (e) => {
  setCartBask(e.target.value);
}

const handleProdClick = () => {
  let stor = "Add to Cart";
  let dele = "Remove from Cart" 
  let somVal = prodQty;
  if (cartBtn == stor) {
    setCartBask(somVal);
    setCartBtn(dele);
  } else {
    setCartBask("");
    setCartBtn(stor);
  }
}


<Showcaserow handleBtnVal={handleBtnVal} cartBtn={cartBtn} prodQty={prodQty} handleProdClick={handleProdClick} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} handleProdSet={handleProdSet} />

cartBask={cartBask}  handleSetBask={handleSetBask}


const  handleLastName = (e) => {
  setLastName(e.target.value);
}
const  handleFirstName = (e) => {
  setFirstName(e.target.value);
}
const handleEmail = (e) => {
  setEmail(e.target.value);
}
const  handlePassword = (e) => {
  setPassWord(e.target.value);
}

const newUser = {
    LastName: lastName,
    FirstName: firstName,
    eMail: eMail,
    passWord: passWord
             }
const onRegister = async (e) => {
// e.preventDefult();
try {
await fetch("http://localhost:4000/Online_Users", 
{ method: "POST",
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(newUser),
}).then(res => {
// let resJson = await res.json();
if (res.status === 200) {
setLastName("");
setFirstName("");
setEmail("");
setPassWord("");
setMessage("User saved successfully");
} else {
setMessage("Some error occured");
}
});
} catch (err) {
console.log(err);
}
}


<Userreg onRegister={onRegister} user={newUser} message={message}
                  handleLastName={handleLastName} handleFirstName={handleFirstName}
                  handleEmail={handleEmail} handlePassword={handlePassword}/>


                  const Userreg = ({onRegister, user, handleLastName, handleFirstName, handleEmail, handlePassword, message}) => {
                    const succ = "User saved successfully";
                    // const unsucc = "Some error occured";
                    return (
                        <div className="userreg">
                            <form onSubmit={onRegister}>
                                <fieldset>
                                    <legend id ="regleg">Customer Registration</legend> <br />
                                    <input value={user.LastName}  onChange={handleLastName}  id="surname" type="text" htmlFor="surname" placeholder="Surname Here" /><br /><br />
                                    <input value={user.FirstName}  onChange={handleFirstName}  id="firstname" type="text" htmlFor="first name" placeholder="First Name Here" /><br /><br />
                                    <input value={user.eMail}  onChange={handleEmail}  id="emailReg" type="text" htmlFor="E-Mail" placeholder="E-Mail Here" /><br /><br />
                                    <input value={user.passWord} onChange={handlePassword} id="passwordReg" type="password" htmlFor="password" placeholder="Password" /><br /><br />
                                    <input id="passwordReg2" type="password" htmlFor="password" placeholder="Confirm Password" /><br /><br />
                                    <button type="submit" className="btn" id="regBtn">Register</button> <br/>
                                    <div id="apiMess" className={`${message===succ?"alert alert-success":""}`}>{message}</div>
                                    <a href="User_Login.html">Login Instead</a>
                                </fieldset>
                            </form>
                        </div>
                    )
                }
                
                // export default Userreg