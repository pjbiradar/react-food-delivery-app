
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../Utils/UseRestaurantmenu";


export const RestaurantMenu = ()=>{

    const {resid} = useParams();
    //fetch restaurant name
    

    const data = useRestaurantmenu(resid);

    const nameres = data?.data?.cards[2]?.card?.card?.info;
    // console.log(nameres);
    const res = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return  data === null ? (<Shimmer/>):
    (

        
        <div>
            <h2>{nameres.name}</h2>

          
           {res.map((res,index)=>{
            return(
                <div key={index}>
                {res?.card?.card?.itemCards.map((item)=>{
                    return(
                        <p key={item.card.info.id}>{item.card.info.name}</p>
                        
                    )
                   

                })}
            
            
            </div>
            )
           })}
           
        </div>
    )
}



// export const RestaurantMenu = ()=>{
//     // const [resInfo,setResinfo] =useState(null);
//     // const [nameres,setNameres] = useState(null);
//     //  useEffect(()=>{
//     //     fetchmenu();

//     // },[]);

//     const {resid} = useParams();

//     const {resInfo,nameres} = useRestaurantmenu(resid);

//     // const fetchmenu = async ()=>{
//     //     const data = await fetch
//     //    ("https://namastedev.com/api/v1/listRestaurantMenu/"+resid)
   
  
//     //   const json = await data.json();
//     //     console.log(json);

//     //     //fetch restaurant name
//     //     const nameofres = json?.data?.cards[2]?.card?.card?.info;
//     //     setNameres(nameofres);


//     //     //fetch menu items
//     //     const res = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//     //     setResinfo(res);

        
    
//     // }
  
      
   
//     return  resInfo === null ? (<Shimmer/>):
//     (
//         <div>
//             <h2>{nameres.name}</h2>

          
//            {resInfo.map((res,index)=>{
//             return(
//                 <div key={index}>
//                 {res?.card?.card?.itemCards.map((item)=>{
//                     return(
//                         <p key={item.card.info.id}>{item.card.info.name}</p>
                        
//                     )
                   

//                 })}
            
            
//             </div>
//             )
          
            
            
          

//            })}
           
//         </div>
//     )
// }