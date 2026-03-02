const CategoryItemlist =({itemlist})=>{
    console.log(itemlist)
    // console.log(itemlist);
    return(
        <>
        {/* <span>{itemlist?.card?.info?.name}</span> */}
        
            {itemlist.map((list)=>(
                <div key={list.card.info.id}>
                   <div>
                    <span>{list.card.info.name}</span>
                    <span>{list.card.info.price}</span>
                    <p>{list.card.info.description}</p>
                    </div> 

                </div>
            ))}

        </>
    )
}

export default CategoryItemlist;