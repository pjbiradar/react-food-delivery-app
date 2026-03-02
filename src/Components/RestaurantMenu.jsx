
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../Utils/UseRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";


export const RestaurantMenu = ()=>{

    const {resid} = useParams();
    //fetch restaurant name
    

    //restaurant menu according to the particular id
    const data = useRestaurantmenu(resid);

    //fecth restaurnt name
    const nameres = data?.data?.cards[2]?.card?.card?.info;

    //this is list of menuitems of that particular id restaurant
    const res = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log("ress",res);   

    const MENU_TYPE="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const categories = res?.filter(c => c.card?.card?.["@type"] === MENU_TYPE);
    console.log(categories);

    return  data === null ? (<Shimmer/>):
    (

        
        <div className="text-center ">
            <h2 className="font-bold  my-10 text-2xl">{nameres.name}</h2>
            {/* accordian for categories */}
            {categories.map((category)=><RestaurantCategory categorydata ={category?.card?.card}/>)}



          
           {/* {res.map((res,index)=>{
            return(
                <div key={index}>
                {res?.card?.card?.itemCards.map((item)=>{
                    return(
                        <p key={item.card.info.id}>{item.card.info.name}</p>
                        
                    )
                   

                })}
            
            
            </div>
            )
           })} */}
           
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