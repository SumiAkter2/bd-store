const MenuInfo = ({ item }) => {
  const { name, price, picture, des } = item;
  return (
    <div
      className="text-start rounded-lg md:h-96 p-6 lg:m-6 m-4"
      style={{
        background: `url(${picture})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 m-6 p-6 rounded-lg">
        <div className="pl-6">
          <h4 className="text-2xl font-bold">{name} </h4>
          <p className="font-semibold text-sm py-2">{des}</p>
          <button className="btn text-xs bg-gray-300 font-bold">
            Add To cart
          </button>
        </div>

        <p className="text-2xl font-bold">{price}</p>
      </div>
    </div>
  );
};

export default MenuInfo;
