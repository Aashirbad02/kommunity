import React from "react";
import './Feature.css'

function FeatureCard(props){
    return(
        
            <div className="card" >
               
    <img src={props.imgSrc} alt="img" id="card" className="card-image"/>
    <div className="card-content">
        <div className="" > <h3 className="tit text-gray-700">{props.title}</h3></div>
        <div className="desc"> <p>{props.description}  </p></div>
</div>
</div>
    )
}
export default FeatureCard;