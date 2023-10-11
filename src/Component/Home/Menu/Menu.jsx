import useMenu from "../../../Hook/useMenu";

const Menu = () => {
  const { menu } = useMenu();

  return (
    <div className="my-12">
      <div className="text-center">
        <p>We Provide best food for our clients</p>
        <h1 className="text-4xl font-bold mb-12">Our Menu</h1>
      </div>

      {/* all product*/}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-12 mx-2">
        {menu.map((item) => (
          <div key={item._id}>
            <div
              className="text-start rounded-lg md:h-96 lg:p-6 p-2 mt-12 border-4 border-slate-400 hover:border-0 transition-all"
              style={{
                background: `url(${item.picture})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 lg:m-6 m-2 p-6 rounded-lg">
                <div className="pl-2 ">
                  <h4 className="lg:text-2xl text-xl font-bold">{item.name}</h4>
                  <p className="lg:text-2xl lg:hidden block text-xl font-bold">
                    {item.price}
                  </p>
                  <p className="font-semibold lg:text-sm text-xs py-2">
                    {item.des}
                  </p>
                  <button className="btn bg-gray-300 font-bold my-4">
                    Add To cart
                  </button>
                </div>

                <p className="lg:text-2xl lg:block hidden  text-sm font-bold">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
