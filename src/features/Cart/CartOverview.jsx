import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 uppercase p-4 text-stone-200">
      <p className="text-stone-300 space-x-4 p-4 sm:px-6 md:text-base">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
    <Link to="/cart">Open Cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
