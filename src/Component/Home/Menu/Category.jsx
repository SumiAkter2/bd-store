import useMenu from "../../../Hook/useMenu";
import "./Category.css";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Category = () => {
  const { menu } = useMenu();
  return (
    <div className="mx-6 my-12 ">
      <h1 className="text-3xl font-bold text-yellow-600 text-center mb-12">
        Our Category
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 3,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
        }}
        className="lg:mx-12 mx-2"
      >
        {menu.slice(0, 8).map((item) => (
          <SwiperSlide key={item._id} item={item}>
            <div className="my-6">
              <div>
                <img
                  className=" rounded-lg lg:h-96 h-32"
                  src={item.picture}
                  alt="image"
                />
                <h1 className="lg:text-3xl text-sm font-bold text-yellow-600 pl-2 mt-3">
                  {item.name}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
