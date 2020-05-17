import React from 'react';

export default function WorldTotal(props){
   console.log("props", props.total.TotalConfirmed);
   return(
       <React.Fragment>
       <div className="container">
            {props.total && <p>{props.total.TotalConfirmed}</p>}
        </div>
       </React.Fragment>
   )
}

