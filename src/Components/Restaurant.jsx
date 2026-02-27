import React from 'react'
import './Restaurant.css'

export default function Restaurant(props) {
  const {resData} = props;
  // console.log(props);
  const{name,locality,cuisines,avgRating,cloudinaryImageId} =resData?.info;
  return (
    
    
    //    <div className="m-4 p-4 w-[250px] rounded-2xl bg-white hover:scale-95 transition-transform duration-200 cursor-pointer shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    //   {/* Image Section */}
    //     <div className="relative h-40 w-full mb-3">
          
    //     <img 
    //       src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} /> 
        
    //     {/* Rating Overlay Badge (Optional style) */}
    //     <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
    //       <span className="text-xs font-bold">⭐ {avgRating}</span>
    //     </div>
    //     </div>
    //     <div className="space-y-1">
    //     <h3 className="font-bold text-gray-800 text-lg truncate">{name}</h3>
        
    //     <h4 className="text-gray-500 text-sm truncate">
    //       {cuisines.join(", ")}
    //     </h4>
    //     <h4 className="text-gray-400 text-xs mt-1 italic">
    //       {locality}
    //     </h4>
    //     </div>
       
    // </div>

    <div className="flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      {/* Image Container with fixed height */}
      <div className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          alt={name}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl text-gray-800 truncate flex-1">{name}</h3>
          <span className={`ml-2 px-2 py-1 rounded-md text-white text-xs font-bold flex items-center gap-1 ${avgRating >= 4 ? 'bg-green-600' : 'bg-orange-500'}`}>
            ⭐ {avgRating}
          </span>
        </div>
        
        <p className="text-gray-600 font-medium text-sm truncate">
          {cuisines.join(", ")}
        </p>
        
        <div className="mt-2 pt-2 border-t border-gray-50 text-gray-500 text-sm italic">
          <p>{locality}</p>
        </div>
      </div>
    </div>
    
  )
}

//higher order component
export const VegLabel = (Restaurant)=>{

  return (props)=>{
    return (
      <div className="relative">
        {/* The Badge */}
        <label className="absolute z-10 top-6 left-6 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md tracking-wider">
          PURE VEG
        </label>
        {/* The Original Component */}
        <Restaurant {...props} />
      </div>
    )
  }



}


