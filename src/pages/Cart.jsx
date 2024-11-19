import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem.jsx';
import { useEffect , useState } from "react";
const Cart = () => {
    const {cart} = useSelector((state) => state.cart);
    console.log(cart);
    const [totalAmount,setTotalAmount] = useState(0);
    console.log(cart);
    useEffect(()=>{
        setTotalAmount((cart).reduce (( acc ,curr) => acc + curr.price ,0));
    },[cart])
    return ( 
        <div className="flex items-center justify-center w-[80%] mx-auto md:gap-16 lg:flex-row flex-col lg:items-start ">
            <div>
                {
                    cart.length > 0 ? ( <div>
                        {
                            cart.map((item,index) => {
                                return <CartItem key = {item.id} item = {item} itemIndex = {index}></CartItem>
                            })
                        }

                    </div> ) :
                    ( <div>
                        <div className="w-[28vw] h-[100px]"></div>
                    </div>)
                }
            </div>
            <div className="flex flex-col mt-8 lg:w-[90%] mx-auto items-start mb-12">
                <div className="flex flex-col ">
                    <div className=" text-green-600 font-semibold text-2xl">Your Cart</div>
                    <div className=" text-green-600 font-semibold text-5xl">Summary</div>
                    <p className="mt-[150px]">
                        <span className="font-bold text-[20px]">Total Items : {cart.length}</span>
                    </p>
                </div>
                <div>
                    <p className="font-bold text-[20px]">Total Amount :{totalAmount}</p>
                    <button className="px-10 py-2 font-semibold text-[16px] bg-green-600 rounded-md mt-10">Checkout Now</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;