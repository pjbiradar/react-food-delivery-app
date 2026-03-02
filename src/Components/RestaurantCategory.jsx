import CategoryItemlist from "./CategoryItemlist";

const RestaurantCategory =({categorydata})=>{
    console.log(categorydata);
    return(
        <>
        <div className="w-7/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between">
        <span>{categorydata.title} ({categorydata.itemCards.length})</span>
        <span>⬇️</span>
        </div>
        
        <CategoryItemlist itemlist={categorydata.itemCards}/>

        </div>
        </>
    )
    
}

export default RestaurantCategory;