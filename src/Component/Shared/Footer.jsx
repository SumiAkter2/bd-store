import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-gray-300 pt-5 lg:hidden block">
      <div className="flex justify-evenly items-center">
        <div className="flex justify-center flex-col font-bold items-center hover:text-green-600 hover:cursor-pointer">
          <AiOutlineShop size="30px" />
          <p className="text-2xl">Shop</p>
        </div>
        <div className="flex justify-center flex-col font-bold items-center hover:text-green-600 hover:cursor-pointer ">
          <AiOutlineHeart size="30px" />
          <p className="text-2xl">Wishlist</p>
        </div>
        <div className="flex justify-center flex-col font-bold items-center hover:text-green-600 hover:cursor-pointer ">
          <BsBag size="30px" />
          <p className="text-2xl">Cart</p>
        </div>
        <div className="flex justify-center flex-col font-bold items-center hover:text-green-600 hover:cursor-pointer ">
          <RiAccountCircleLine size="30px" />
          <p className="text-2xl">Account</p>
        </div>
      </div>

      <div className="text-center font-bold pb-6 mt-16">
        <p>Copy &copy; All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
