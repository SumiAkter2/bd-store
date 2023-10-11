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

      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 lg:mx-8 mx-2">
        {menu.map((item) => (
          <div key={item._id}>
            <div className="card bg-gray-200 lg:hover:bg-gray-100 shadow-xl shadow-gray-400">
              <figure>
                <img
                  src={item.picture}
                  alt="image"
                  className="lg:h-72 m-2 h-32 w-32 rounded-2xl lg:w-96"
                />
              </figure>
              <div className="p-4 ">
                <h2 className="card-title">{item.name}</h2>

                <div className="card-actions justify-between items-center">
                  <h1 className="text-xl font-bold">{item.price} </h1>
                  <button className="btn bg-gray-400">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
