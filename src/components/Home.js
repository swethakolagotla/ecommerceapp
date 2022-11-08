import React from "react";
 
 

const Home = () => {
  //const imagelink="https://image.petmd.com/files/2022-06/golden-retriever.jpg"

  {/*const css = {
    width: "200px",
    height: "200px",
    backgroundColor: "green",
  };*/}
  return (
    <div>
   <h1>Home</h1>
      <img
        width="200px"
        height="200px"
        src="https://image.petmd.com/files/2022-06/golden-retriever.jpg"
      />
      {/**
       *
       *  <img  width="200px" height="200px" src={imagelink}/>
       */}
      {/*<div style={css}></div>*/}
   
    
    </div>
  );
};

export default Home;
