import React from "react";
import { directory } from "../assets/data/directory";
import MenuItems from "../components/MenuItems";

const Homepage = () => {
  return (
    <section className="flex flex-wrap flex-row justify-between items-center px-[5%] pb-[5%]">
      {directory.map((item) => (
        <MenuItems
          key={item.id}
          bgImg={item.imageUrl}
          title={item.title}
          size={item.size}
        />
      ))}
    </section>
  );
};

export default Homepage;
