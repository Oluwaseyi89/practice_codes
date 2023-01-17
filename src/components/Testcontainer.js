import './styles/testcontainer.css';
// import { useState } from 'react';
import Testrow from './Testrow';


const Testcontainer = ({ handleBtnVal, cartBtn, prodQty, handleProdClick, handlePlusClick, handleMinusClick, handleProdSet }) => {
    
        return (                
                <div className ="thumb1">
                    <Testrow/>
                    <Testrow/>
                    <Testrow/>
                    <Testrow/>
                </div>                  
            )
        }

export default Testcontainer