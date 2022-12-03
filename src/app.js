import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Asset/Rjlogo.jpg";
import user_image from "./Asset/user_image.png";

/* Updating DOM using React.CreateElement*/

//  const heading= React.createElement("div",{class:"title"},[
//     React.createElement("h1",{},"Learn  React"),
//     React.createElement("h2",{}," from Zero to Hero  "),
//     React.createElement("h3",{}," in 3 months")
//  ]);

const duration=3;
// /*updating dom using JSX */
// const heading=(
// <div className="title">
//     <h1>Learn React</h1>
//     <h2>From Zero to Hero</h2>
//     <h3>in {duration} months</h3>
// </div>)

/* transforming this to functional component */

const TitleComponent=() =>
{
return <h1 className="title">Learn React</h1>
}

const HeadingComponent= ()=>{
    return (
        
         <div >
         <NavBar />
         <TitleComponent /> 
          <h2>From Zero to Hero</h2>
          <h3>in {duration} months</h3>
         </div>
         )
}

const NavBar =()=>{
    return (<div className="navbar">
        <div className="logo">
        <img src={logo} alt="logo"></img>
        </div>
        <div className="SearchBar">
        <input type="text" placeholder="Search here" className="searchArea" ></input>
        </div>
        <div className="userLogo">
        <img src={user_image} alt="user image"></img>
        </div>
        
        
        
    </div>)
}


 const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);