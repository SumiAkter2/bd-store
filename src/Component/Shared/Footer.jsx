import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
const Footer = () => {
  return (
    <div className=" ">
      <div className="flex justify-between items-center fixed bottom-0   lg:hidden bg-gray-300 p-4 w-full z-10">
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
      <div className="text-center font-bold pb-6 mt-16 bg-gray-300 pt-5 lg:block hidden">
        <p>Copy &copy; All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
