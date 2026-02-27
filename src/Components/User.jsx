import { useState } from "react";

const User = (props)=>{

    const [count] = useState(0);

    const {name, location} = props;
    return (
        <div>
            <p>Count:{count}</p>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
        </div>
    )
}

export default User;