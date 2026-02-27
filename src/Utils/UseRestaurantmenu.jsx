import { useEffect, useState } from "react"


const UseRestaurantmenu = (resid)=>{
    // const [resInfo,setResinfo] =useState(null);
    // const [nameres,setNameres] = useState(null);

    const[data,setData] =useState(null);

    useEffect(()=>{
        fetchmenu();

    },[resid])

    const fetchmenu = async ()=>{
        const data = await fetch
       ("https://namastedev.com/api/v1/listRestaurantMenu/"+resid)
   
  
      const json = await data.json();
      
        setData(json);
        console.log(data);

        //fetch restaurant name
        // const nameofres = json?.data?.cards[2]?.card?.card?.info;
        // setNameres(nameofres);


        // //fetch menu items
        // const res = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // setResinfo(res);

        
    
    }
  return data;
}
export default UseRestaurantmenu;