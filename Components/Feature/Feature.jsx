import React from "react";
import {data} from "./data.js"

import FeatureCard from "./FeatureCard";
import './Feature.css'

function Feature(){

  function CreateCard(term){
    return(
       <div >
             <FeatureCard
         key={term.id}
         imgSrc={term.imgUrl}
         title={term.title}
         description={term.description}
       />
       </div>
    );
    }    

       return(
         <>
                 <div className="hed"> <div><h1 className="name text-gray-900">Characteristics</h1></div>
   
   </div>
                 <div className="mapped">
                   {data.map(CreateCard)}
                 </div>
         </>
            );
}
export default Feature;