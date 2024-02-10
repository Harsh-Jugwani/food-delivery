import React from 'react';
import { Swiggy_IMG_CNN } from './constaints';


function Item(props) {
    const {resData} = props;
    const{cloudinaryImageId,name,avgRating,cuisines,costForTwo} = resData?.info;
    // const{header,subHeader}=resData?.info?.aggregatedDiscountInfoV2;
    const{slaString} = resData.info.sla;
    return (
    
    <div className=' my-3 md:h-72 h-80 mx-2 bg-gray-200 ml-3 rounded-lg shadow-lg cursor-pointer w-48 md:w-56 md:mx-8    '> 
        <div className='relative'>
        <img className='h-40  rounded-lg p-1 m-[0.2] w-48 md:w-60' src={Swiggy_IMG_CNN+cloudinaryImageId} alt="" />
        
        </div>
        <h2 className='font-semibold  '>{name}</h2>
        <div className='space-x-12 md:space-x-16'><span>{avgRating} 🌟 </span>
        <span >{slaString}</span>
        </div>
        <h2>{costForTwo}</h2>
        <p className='text-sm'>{cuisines.join(', ')}</p>
    </div>

    );
}

export default Item;