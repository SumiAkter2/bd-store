import useMenu from "../../../Hook/useMenu";

import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Category = () => {
  const { menu } = useMenu();
  return (
    <div className="mx-6 my-12 ">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1.5,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="lg:mx-12 mx-2"
      >
        {menu.map((item) => (
          <SwiperSlide key={item._id} item={item}>
            <div
              className="text-start rounded-lg lg:h-96 h-80 lg:p-6 p-2 mt-12 "
              style={{
                background: `url(${item.picture})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <h1 className="text-5xl font-bold text-slate-300 absolute bottom-5 ">
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
