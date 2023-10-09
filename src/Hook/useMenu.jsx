import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
    // console.log(menu);
  }, [menu]);
  return { menu };
};

export default useMenu;
