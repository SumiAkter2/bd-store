import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";
import img from "../../assets/Home/menu/burger.jpg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gray-200 ">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl"># Bd Store</a>
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
                <h1 className="text-xl uppercase bg-gray-300 p-6 rounded-lg">
                  Cart
                </h1>

                <div className="mt-12">
                  <div className="flex">
                    <img
                      className="w-24 rounded-lg"
                      src={img}
                      alt="product-img"
                    />
                    <div className="text-xl pl-2">
                      <h1>Large Size Burger</h1>
                      <p className="font-bold">$34</p>
                    </div>
                  </div>
                  <div className="flex justify-around items-center mt-12">
                    <div className="join join-vertical lg:join-horizontal outline outline-1">
                      <button className="btn join-item">-</button>
                      <button className="btn join-item">1</button>
                      <button className="btn join-item">+</button>
                    </div>
                    <button className="btn btn-outline bg-gray-300">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-5 font-bold w-72">
                  <div className="divider "></div>
                  <h1 className="text-2xl mb-6">Add Order Note</h1>
                  <div className="text-xl bg-gray-400 p-6 rounded-lg flex justify-between ">
                    <p>Check Out </p> <p>$34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* menu */}

          <div className="drawer  lg:hidden">
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
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
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
