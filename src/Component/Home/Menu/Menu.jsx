import useMenu from "../../../Hook/useMenu";
import { AiFillStar } from "react-icons/ai";
const Menu = () => {
  const { menu } = useMenu();

  return (
    <div className="my-12">
      <div className="text-center">
        <p>We Provide best food for our clients</p>
        <h1 className="text-4xl font-bold mb-12 text-yellow-600">Our Menu</h1>
      </div>

      {/* all product*/}

      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 lg:mx-8 mx-2">
        {menu.map((item) => (
          <div key={item._id}>
            <div className="card hover:border-yellow-600 hover:border-2 p-2 shadow-2xl ease-in duration-200">
              <figure>
                <img
                  src={item.picture}
                  alt="image"
                  className="lg:h-72 h-32 w-32 rounded-2xl lg:w-96"
                />
              </figure>
              <div className="p-4 card-body">
                <div className="flex justify-between items-center text-xl font-bold">
                  <h2 className="text-yellow-600">{item.name}</h2>
                  <h1>{item.price} </h1>
                </div>
                <p>{item.des} </p>
                <div className="card-actions justify-between items-center">
                  <div className="flex justify-start items-center">
                    <AiFillStar color="#dfac02" />
                    <AiFillStar color="#dfac02" />
                    <AiFillStar color="#dfac02" />
                    <AiFillStar color="#dfac02" />
                    <AiFillStar color="#dfac02" />
                  </div>

                  <button className="btn bg-yellow-600 bg-gray-400">
                    Add To Cart
                  </button>
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
