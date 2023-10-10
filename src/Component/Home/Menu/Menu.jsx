import useMenu from "../../../Hook/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Menu = () => {
  const { menu } = useMenu();
  const pizza = menu.filter((item) => item.category === "Pizza");
  const pasta = menu.filter((item) => item.category === "Pasta");
  const burger = menu.filter((item) => item.category === "Burger");
  const iceCream = menu.filter((item) => item.category === "IceCream");
  return (
    <div className="my-12">
      <div className="text-center">
        <p>We Provide best food for our clients</p>
        <h1 className="text-4xl font-bold mb-12">Our Menu</h1>
      </div>

      <Tabs>
        <div className=" flex justify-center my-12">
          <TabList>
            <Tab>All Category</Tab>
            <Tab>Burger</Tab>
            <Tab>Pizza</Tab>
            <Tab>Pasta</Tab>
            <Tab>Ice Cream</Tab>
          </TabList>
        </div>
        {/* all category */}
        <TabPanel>
          <div className="mx-6">
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
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              className="lg:mx-12 mx-6"
            >
              {menu.map((item) => (
                <SwiperSlide key={item._id} item={item}>
                  <div
                    className="text-start rounded-lg md:h-96 lg:p-6 p-2 mt-12"
                    style={{
                      background: `url(${item.picture})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 lg:m-6 m-2 lg:p-6 p-2 rounded-lg">
                      <div className="pl-2 ">
                        <h4 className="lg:text-2xl text-xl font-bold">
                          {item.name}
                        </h4>
                        <p className="font-semibold lg:text-sm text-xs py-2">
                          {item.des}
                        </p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 font-bold my-4">
                          Add To cart
                        </button>
                      </div>

                      <p className="lg:text-2xl text-xl font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
        {/* burger */}
        <TabPanel>
          <div className="mx-6">
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
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              className="lg:mx-12 mx-6"
            >
              {burger.map((item) => (
                <SwiperSlide key={item._id} item={item}>
                  <div
                    className="text-start rounded-lg md:h-96 lg:p-6 p-2 mt-12"
                    style={{
                      background: `url(${item.picture})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 lg:m-6 m-2 lg:p-6 p-2 rounded-lg">
                      <div className="pl-2 ">
                        <h4 className="lg:text-2xl text-xl font-bold">
                          {item.name}
                        </h4>
                        <p className="font-semibold lg:text-sm text-xs py-2">
                          {item.des}
                        </p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 font-bold my-4">
                          Add To cart
                        </button>
                      </div>

                      <p className="lg:text-2xl text-xl font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
        {/* pizza */}
        <TabPanel>
          <div className="mx-6">
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
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              className="lg:mx-12 mx-6"
            >
              {pizza.map((item) => (
                <SwiperSlide key={item._id} item={item}>
                  <div
                    className="text-start rounded-lg md:h-96 lg:p-6 p-2 mt-12"
                    style={{
                      background: `url(${item.picture})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 lg:m-6 m-2 lg:p-6 p-2 rounded-lg">
                      <div className="pl-2 ">
                        <h4 className="lg:text-2xl text-xl font-bold">
                          {item.name}
                        </h4>
                        <p className="font-semibold lg:text-sm text-xs py-2">
                          {item.des}
                        </p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 font-bold my-4">
                          Add To cart
                        </button>
                      </div>

                      <p className="lg:text-2xl text-xl font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
        {/* pasta */}
        <TabPanel>
          <div className="mx-6">
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
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              className="lg:mx-12 mx-6"
            >
              {pasta.map((item) => (
                <SwiperSlide key={item._id} item={item}>
                  <div
                    className="text-start rounded-lg md:h-96 lg:p-6 p-2 mt-12"
                    style={{
                      background: `url(${item.picture})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 lg:m-6 m-2 lg:p-6 p-2 rounded-lg">
                      <div className="pl-2 ">
                        <h4 className="lg:text-2xl text-xl font-bold">
                          {item.name}
                        </h4>
                        <p className="font-semibold lg:text-sm text-xs py-2">
                          {item.des}
                        </p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 font-bold my-4">
                          Add To cart
                        </button>
                      </div>

                      <p className="lg:text-2xl text-xl font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
        {/* ice cream */}
        <TabPanel>
          <div className="mx-6">
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
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination]}
              className="lg:mx-12 mx-6"
            >
              {iceCream.map((item) => (
                <SwiperSlide key={item._id} item={item}>
                  <div
                    className="text-start rounded-lg md:h-96 lg:p-6 p-2 mt-12"
                    style={{
                      background: `url(${item.picture})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 lg:m-6 m-2 lg:p-6 p-2 rounded-lg">
                      <div className="pl-2 ">
                        <h4 className="lg:text-2xl text-xl font-bold">
                          {item.name}
                        </h4>
                        <p className="font-semibold lg:text-sm text-xs py-2">
                          {item.des}
                        </p>
                        <button className="btn btn-sm lg:btn-md bg-gray-300 font-bold my-4">
                          Add To cart
                        </button>
                      </div>

                      <p className="lg:text-2xl text-xl font-bold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Menu;
