function  Section2(props){
    return (
        <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
           <h2>{props.CName}</h2>
            <h4>{props.Cdescription}</h4>
            <h3>{props.Cprice}</h3>
         

        </div>
    
        );
    }
    
export default Section2;
    