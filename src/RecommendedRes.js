import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
function RecommendedRes() {
    const {resId} = useParams();
   
    const[Recommended,setRecommended] = useState(null);
    useEffect(()=>{fetchMenu()},[]);
    const  fetchMenu = async()=>{
        const MenuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId);
        const json = await MenuData.json();
        
        setRecommended(json.data);
       
        
   
    };
    if(Recommended===null)
    return <Shimmer/>  
  
    const{name,cuisines} = Recommended?.cards[0]?.card?.card?.info;
    const category = Recommended?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    


   
    return (
        <div>
            <div className="text-center">
            <h1 className="font-bold text-3xl">{name}</h1>
            <i>{cuisines.join(',')}</i>
            <br /><br />
            {category.map(item=><RestaurantCategory key={item?.card?.card?.title} data = {item?.card?.card}/>)}

            </div>
        </div>
    )
}

export default RecommendedRes;