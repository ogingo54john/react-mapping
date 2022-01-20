import React from "react";

function Entry(props){
    return(
      <div className="container">
       <span className="head2"> <h2>Activities</h2></span>
       <div className="entry">
       <p>{props.name}</p>
       <p>{props.location}</p>
       <p>{props.time}</p>
       <p>{props.description}</p>
       </div>
      </div>
    );
}

export default Entry;