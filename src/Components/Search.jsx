import React, { useEffect, useState } from 'react'
import Restaurant ,{VegLabel} from './Restaurant'
import './Search.css'
// import restrautList from '../Utils/mockdata'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { useOnlinestatus } from '../Utils/useOnlinestatus';



export default function Search() {

  //veglabel highetorder

  const Labelforrescard = VegLabel(Restaurant)

  //whenever the state variables update,react trigger a reconciliaion cycle(rerenders the component) 
  //restaurnatlist is the statevariable and setRestaurantlist is used tomodiify the state variable 


  const [restaurantlist,setRestaurantlist] = useState([]);


  //search 
  const [searchtext,setSearchtext] = useState("");



  //filter the search: what happening earlier was wehn i  search some restaurant iam getting those and nexttime when i search another i can't see anything i see only those two earlier restaurant
 //so the below filteredres state is used here to fix it
  const [filteredres,setFilteredres] = useState([]);
  // console.log(filteredres);

  
  //useeffect callback function will render after the body component renders
  //useeffect will be called only after the body component renders
  useEffect(()=>{
    // console.log("hey hey");
    fetchData();

  },[]);
  

  //render->api->render
  const fetchData = async()=>{
    //using fetch then async and await isa must to use
    //fetch is given by browser 
   //  let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
   let data = await fetch("https://namastedev.com/api/v1/listRestaurants")
     let json = await data.json();
    //  console.log(json);

     let restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //  console.log(restaurants);

     setRestaurantlist(restaurants); //here i need to update my api data so that we can display wherever wewant.
     setFilteredres(restaurants);//updating filter list with the initial  list of restaurant

  }

const onlinestatus = useOnlinestatus();
  if(onlinestatus === false){
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">🔴 Please check your connection, you're offline!!</h1>
      </div>
    );

  }


 
  return restaurantlist?.length === 0 ? <Shimmer/> :  (  //if list of restaurant i.e restaurantlist so show the shimmer component
  <div className="p-4">
    
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 px-4">
          <div className="flex items-center gap-2">
          {/* { this input value is binded with searchtext} */}
            <input type="text"  className="border border-solid border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:border-orange-400 transition-colors"
             value={searchtext} onChange={(e)=>setSearchtext(e.target.value)} />
            <button className="px-6 py-1.5 bg-orange-400 text-white rounded-lg hover:bg-orange-500 font-medium"
             onClick={()=>{
              // console.log(restaurantlist);

            const filteredrestaurant =restaurantlist?.filter((fil)=>fil?.info?.name?.toLowerCase().includes(searchtext.toLowerCase()));
            setFilteredres(filteredrestaurant);


            }
              }>search</button>
          </div>

          <button className="px-6 py-1.5 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 font-medium"
           onClick={()=>
            {
              let filteredlist = restaurantlist?.filter((res)=>res.info.avgRating > 4.2);
              setFilteredres(filteredlist);
            } }>Top rated restaurants
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 py-8">
        {
          
           filteredres?.map((res)=>( 
          <Link className="flex justify-center no-underline" to={"restaurantmenu/"+res.info.id } key={res.info.id}>
            {res.info.veg ? 
              <Labelforrescard resData={res} /> :  <Restaurant  resData={res}/>
            }
            
            
           
          </Link> ) 
           )
           
          

        }
        </div>
        </div>
   
  );
}


























