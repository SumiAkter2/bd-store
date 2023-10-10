import useMenu from "../../../Hook/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuInfo from "./MenuInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
            <Tab>Pizza</Tab>
            <Tab>Pasta</Tab>
            <Tab>Burger</Tab>
            <Tab>Ice Cream</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-6 mx-6 ">
            {menu.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mx-6">
            <Swiper
              breakpoints={{
                576: {
                  // width: 276,
                  slidesPerView: 2,
                },
                768: {
                  // width: 768,
                  slidesPerView: 3,
                },
              }}
              // slidesPerView={"3"}
              spaceBetween={30}
              pagination={{
                type: "progressbar",
              }}
              // navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {pizza.map((item) => (
                <SwiperSlide key={item._id} item={item}>
                  <div
                    className="text-start rounded-lg md:h-96 p-6 lg:m-6 m-4"
                    style={{
                      background: `url(${item.picture})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="flex justify-start items-start bg-black opacity-80 text-white md:h-60 m-6 p-6 rounded-lg">
                      <div className="pl-6">
                        <h4 className="text-2xl font-bold">{item.name} </h4>
                        <p className="font-semibold text-sm py-2">{item.des}</p>
                        <button className="btn text-xs bg-gray-300 font-bold">
                          Add To cart
                        </button>
                      </div>

                      <p className="text-2xl font-bold">{item.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
        {/* 
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-6 mx-6 ">
            {pasta.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-6 mx-6 ">
            {burger.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-6 mx-6 ">
            {iceCream.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default Menu;
