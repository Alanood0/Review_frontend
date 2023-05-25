import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function  List(){
// make container
const [allItems, setAllItems] = useState("");
useEffect(()=>{
    axios.get("http://localhost:2340/getItems")
    .then((res)=>{setAllItems(res.data)})
},[]);

    return (
        <>
        {
             allItems && allItems.map((item)=>(
        <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
            <div className="pricing-plan">
                <div className="pricing-month">
                <img  className="img-responsive" src={item.imageName} />
                </div>
                <div className="pricing-title">
                <h3>{item.cname}</h3>
        
                </div>
                <p>{item.cdescription}</p>
                <p>{item.cprice}</p>
                <div> <Link to='/Detail'>  <button> View Details </button></Link></div>
                <div> <Link to='/Review'>  <button> Add Review </button></Link></div>
                
                
            </div>
        </div>
  ))
}
        </>
        );
    }
    
export default List;
    