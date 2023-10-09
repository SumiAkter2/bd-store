import "./Menu.css";
const MenuInfo = ({ item }) => {
  const { name, price, picture, des } = item;
  return (
    <div
      className="text-start  rounded-md h-96 "
      style={{
        background: `url(${picture})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-start items-start bg-black opacity-70 text-white h-60 m-12 p-12">
        <div className="pl-6">
          <h4 className="text-2xl font-bold">{name}</h4>
          <p className="font-semibold text-sm py-2">{des}</p>
          <button className="btn btn-primary text-xs">Add To cart</button>
        </div>

        <p className="text-2xl font-bold">{price}</p>
      </div>
    </div>
  );
};

export default MenuInfo;
