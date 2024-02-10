import { useDispatch, useSelector } from 'react-redux';

import { removeItem,clearItem } from './utils/userSlice';
import { Swiggy_IMG_CNN } from './constaints';
function Cart() {
    const item = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
  const handleClick = (id)=>{
      dispatch(removeItem(id))
     }
  const handleRemoveAll = (items)=>{
      dispatch(clearItem(items))
     }
     function getSum(){
        let sum = 0;
        for (let index = 0; index < item.length; index++) {
            sum = sum + item[index].card.info.price;  
        }
        return sum/100;
     }
    

    return ( <div>
        <h1 className='text-center text-4xl font-bold font-serif'>Cart Items</h1>
        <button className='border border-black rounded-lg ml-[47.5%] text-white bg-black text-lg px-1' onClick={handleRemoveAll}>Clear All</button>
        <div className='px-8 md:px-96'>
        {
             item.map(items=><div key={items.card.info.id} className=' border-b-4 flex justify-between mb-3'>
             
             <div className='p-3 w-2/3 '><span className='font-semibold text-xl'>
             {items.card.info.name} - ₹
             
             {items.card.info.price && items.card.info.price/100}
             {items.card.info.defaultPrice && items.card.info.defaultPrice/100}

             </span><br />
             <p className='text-sm'>{items.card.info.description}</p>
             </div>
             <div>
             <img className='md:w-36 w-28 rounded-lg absolute' src={Swiggy_IMG_CNN + items.card.info.imageId } alt="" />
             <button className='relative mb-20 md:ml-9 ml-7 text-white  w-auto  bg-black rounded-lg ' onClick={()=>handleClick(items.card.info.id)}>Remove  </button>
             </div>
             </div>)
            }
            <h2>Subtotle - ₹{getSum()}</h2>
    </div>

    </div> );
}

export default Cart;