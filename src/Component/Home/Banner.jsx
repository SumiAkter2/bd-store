import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg from "../../assets/Home/menu/burger.jpg";
import bannerImg2 from "../../assets/Home/menu/pizza3.jpg";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="z-10 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#FFBA80",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bullet-marginBottom": "6px",
          "--swiper-pagination-bullet-inactive-color": "#fff",
        }}
      >
        <SwiperSlide>
          <div
            className="hero h-[500px]"
            style={{
              backgroundImage: `url(${bannerImg})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-8 text-5xl font-bold  ">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-yellow-600 mt-4 ">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div
            className="hero h-[500px]"
            style={{
              backgroundImage: `url(${bannerImg2})`,
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-8 text-5xl font-bold  ">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-yellow-600 mt-4">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
