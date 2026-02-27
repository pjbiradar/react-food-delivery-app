import React, { Component } from "react";
// import User from "./User";
import UserClass from "./UserClass";


class About extends Component{
    constructor() {  
        super();
        // console.log("Parent constructor");
    }
    render(){
        // console.log("parent render");
        return (
            <div>
                <h1>This is about page</h1>
                {/* <User name={"layzibee"} location={"Newyork city"}/> */}
                <UserClass name={"MAYA"} location={"Italy"}/>
            </div>
        )

    }


}






// const About = ()=>{
//     return (
//         <div>
//             <h1>This is about page</h1>
//             {/* <User name={"layzibee"} location={"Newyork city"}/> */}
//             <UserClass name={"MAYA"} location={"Italy"}/>
//         </div>
//     )
// }

export default About;