import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center fixed bottom-0   lg:hidden bg-gray-200 p-4 w-full z-10 text-yellow-600">
        <div className="flex justify-center flex-col font-bold items-center hover:text-yellow-800 hover:cursor-pointer">
          <AiOutlineShop size="25px" />
          <p >Shop</p>
        </div>
        <div className="flex justify-center flex-col font-bold items-center hover:text-yellow-800 hover:cursor-pointer ">
          <AiOutlineHeart size="25px" />
          <p >Wishlist</p>
        </div>
        <div className="flex justify-center flex-col font-bold items-center hover:text-yellow-800 hover:cursor-pointer ">
          <BsBag size="25px" />
          <p >Cart</p>
        </div>
        <div className="flex justify-center flex-col font-bold items-center hover:text-yellow-800 hover:cursor-pointer ">
          <RiAccountCircleLine size="25px" />
          <p >Account</p>
        </div>
      </div>
      <div className="text-center text-yellow-600 pb-6 mt-16 bg-gray-300 pt-5 lg:block hidden">
        <p>Copy &copy; All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
