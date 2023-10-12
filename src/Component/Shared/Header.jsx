import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import img from "../../assets/Home/menu/burger.jpg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gray-200 text-yellow-600 font-bold">
        <div className="navbar-start">
          <a className="btn btn-ghost font-bold text-xl "> Bd Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center absolute right-5">
          {/* cart */}

          <div className="drawer drawer-end z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <AiOutlineShoppingCart size="30px" />
                </div>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <h1 className="text-xl uppercase bg-gray-300 p-6 rounded-lg text-yellow-600">
                  Cart
                </h1>

                <div className="mt-6 bg-yellow-200 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <img
                      className="w-24 rounded-lg"
                      src={img}
                      alt="product-img"
                    />
                    <div className="join  join-horizontal outline outline-1 ">
                      <button className="btn join-item bg-yellow-600">-</button>
                      <button className="btn join-item bg-yellow-600">1</button>
                      <button className="btn join-item bg-yellow-600">+</button>
                    </div>
                  </div>
                  <h1 className="text-xl">Large Size Burger</h1>
                  <p className="font-bold text-xl mb-4">$34</p>

                  <div>
                    <button className="btn  bg-yellow-500">Remove</button>
                  </div>
                </div>

                <div className="absolute bottom-5 font-bold w-72">
                  <div className="divider "></div>
                  <h1 className="text-2xl mb-6 text-yellow-600">
                    Please Check Out
                  </h1>
                  <div className="text-xl bg-gray-400 p-6 rounded-lg flex justify-between ">
                    <p>Check Out </p> <p>$34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* menu */}

          <div className="drawer  lg:hidden ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button"
              >
                <CgMenuRightAlt size="30px" />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-yellow-600 ">
                {/* Sidebar content here */}
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
