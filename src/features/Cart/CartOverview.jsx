import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getTotalCartQuantity , getTotalCartPrice} from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  // const totalCartQuantity = useSelector((state)=>state.cart.cart.reduce((sum , item)=>sum+ item.quantity, 0 ))
  // console.log(totalCartQuantity)

  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)
if(!totalCartQuantity)return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 uppercase p-4 text-stone-200">
      <p className="text-stone-300 space-x-4 p-4 sm:px-6 md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
    <Link to="/cart">Open Cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
