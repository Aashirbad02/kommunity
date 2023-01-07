import React from "react";
import {AiOutlinePhone } from "react-icons/ai"
import {HiOutlineMailOpen} from 'react-icons/hi'
import  "./Footer.css"

export default function Footer (){
    return(
        <div className="footer bg-gray-900  h-96 " >
            <div className="footer-up ">
              <div className="first " >
                 <div className="heading1">Donate it</div>
                  <div className=" para1 ">Prevents Food wastage, judicious use of discarded clothes and conjuctures donation with distribution</div></div>
              <div className="second"> 
                <div className="heading2">Conatct us</div>
                  <div className="icons"> <AiOutlinePhone size={30} color={"white"} /><h3 className="phone"> 0123456789 </h3> 
                  <AiOutlinePhone size={30} color={"white"} /> <h3 className="phone">0123456789</h3> <HiOutlineMailOpen size={30} color={"white"} /> <h3 className="phone">Mail</h3></div></div> 
              <div className="third">
                <div classname="third-heading">
                    Sign Up for our Newsletter
                </div>
                <div className="input-box">
                    <input className="input-bar" type="text" name="" id="" placeholder="Enter your mail" />
                    <button className="submit-button"> Submit</button>
                </div>
              </div>
            </div>


            <div className="footer-down">

            </div>
        </div>
    )
}