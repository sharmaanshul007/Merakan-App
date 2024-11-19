import {FcDeleteDatabase} from "react-icons/fc"
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
const CartItem = ({item,itemIndex}) => {
    const dispatch = useDispatch();
    function removeFromCart(){
        dispatch(remove(item.id));
    }
    return (
        <div>
            <div className="flex p-10 lg:flex-row flex-col gap-10 my-3 max-w-[1000px] border-b-black border-b-[1px] ">
                <div className="h-[350px] w-[350px]" >
                    <img src={item.image}  className="rounded-lg h-[300px] w-[300px] md:h-[350px] md:w-[350px]"></img>
                </div>
                <div className="flex flex-col justify-center max-w-lg gap-2 items-center">
                    <h1 className=" font-semibold text-left text-lg text-gray-700 truncate ">{item.name}</h1>
                    <div className="flex justify-between mt-8 text-green-600 font-semibold items-center  w-full gap-2">
                        <span>${item.price}</span>
                        <div onClick={removeFromCart} className=" flex justify-center items-center h-8 w-8 rounded-full bg-green-400 text-black"><AiFillDelete /></div>
                    </div>
                </div>
            </div>
            <div>


            </div>
        </div>
    )
}
export default CartItem;