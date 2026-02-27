import React, { Component } from "react";


class UserClass extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            userinfo:{
                name: "dummy",
                location:"dddd ",
                avatar_url: "https://dummy-photo.com"
            }
        }
       
        // console.log("child constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        console.log(json);

        this.setState({                       //here updating phase has started
            userinfo: json        
        })
        // console.log("compoennt did mount");

    }

    componentDidUpdate(){
        // console.log("diidupdate");
    }

    componentWillUnmount(){
        // console.log("willunmount");
    }



    render(){
        console.log("render constructor");
        // const {name,location} = this.props;
        
        const {name,location,avatar_url} = this.state.userinfo;

        return(
            <div>
                <img src={avatar_url}/>
                <p>Name: {name}</p>
                <p>location: {location}</p>
                
            </div>
        )

    }
        
    
}

export default UserClass;