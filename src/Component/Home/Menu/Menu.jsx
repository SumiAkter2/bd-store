import useMenu from "../../../Hook/useMenu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuInfo from "./MenuInfo";

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
          <div className="grid grid-cols-2 gap-6">
            {menu.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-6">
            {pizza.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-6">
            {pasta.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-6">
            {burger.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-6">
            {iceCream.map((item) => (
              <MenuInfo key={item._id} item={item}></MenuInfo>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Menu;
