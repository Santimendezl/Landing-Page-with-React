import React from "react";

const Card = () => {
    return(
        <div className="card card-text-center" style={{width: '18rem'}}>
          <img src="..." className="card-img-top bg-secondary" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates illum laboriosam quibusdam.</p>  
          </div>
          <div className="card-footer" >
            <a href="#" className="btn btn-primary">Find Out more!</a>
          </div>
          
      </div> 
    )    
};

export default Card;