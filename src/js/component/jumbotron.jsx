import React from "react";

const Jumbotron = () => {
    return(
        <div className="mb-4 m-3 mx-lg-5 py-5 px-lg-3 bg-light rounded-3">
            <div className="container-fluid text-start pb-5">
            <h1 className="display-2">A Warm Welcome!</h1>
            <p className="fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus delectus sit itaque expedita nesciunt illo eum, repellendus, similique neque corporis eveniet, earum hic perspiciatis.</p>
            <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )    
}

export default Jumbotron;