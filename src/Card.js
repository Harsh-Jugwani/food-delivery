import Item from './Item'
import Shimmer from './Shimmer';

import { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';



function Card() {
    const[listofRestraunt,setlistofRestraunt] = useState([]);
    const[SearchText,setSearchText]=useState("");
    const[filteredRestraunt,setfilteredRestraunt] = useState([]);
    console.log(listofRestraunt);
    useEffect(()=>{
        fetchData();
    },[]);

    
    const fetchData = async()=>{
        const data =  await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
        const restaurant_data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setlistofRestraunt(restaurant_data);
        setfilteredRestraunt(restaurant_data);
    }
    if(listofRestraunt.length===0){
        return <Shimmer />
    }
    if (!listofRestraunt) {
       return  
    }
   
    return (
    <div>
        <div className='flex justify-between'>
        <div>

        <button className="w-auto bg-green-700 text-white border border-e-4 rounded-lg p-2 mx-4 md:mx-14 my-2 " onClick={()=>{
            const data = listofRestraunt.filter((res)=>res?.info?.avgRating>4.5)
            setfilteredRestraunt(data);
        }
        
    }>Top Rated Restauraunt</button>
    </div>

  <div className='mr-12'>
    <input type="text" placeholder='Type here..' className='md:w-60 md:24 w-44 ml-24 border border-b-4 p-1 rounded-lg mr-1 md:mr-2 ' value={SearchText} onChange={(e)=>{
          setSearchText(e.target.value);
    }} />
    <button className='text-white bg-red-700 p-1  rounded-lg my-2 border border-black ml-52 md:ml-0' onClick={()=>{
        const search_data = listofRestraunt.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
        setfilteredRestraunt(search_data);
    }}>Search</button>
    </div>
    </div>
    <div className='flex flex-wrap  md:ml-5'>
        
        
            {
            filteredRestraunt.map((restaurant)=>(<Link to={"/restraunt/"+ restaurant.info.id} key = {restaurant.info.id}><Item  resData = {restaurant}/></Link>))
            }
        
        
    </div>
    </div>);
    
}

export default Card;