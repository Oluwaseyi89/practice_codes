import './styles/userreg.css';

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

export default Userreg