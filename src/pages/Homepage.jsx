import React, { useEffect } from "react";
import { directory } from "../assets/data/directory";
import MenuItems from "../components/MenuItems";

const Homepage = () => {
  document.title = "Homepage";
  useEffect(() => {
    document.body.style.zoom = "100%";
    window.scrollTo(0, 0);
  });

  return (
    <section className="flex flex-wrap flex-row justify-between items-center gap-2 px-[5%] pb-[5%]">
      {directory.map((item) => (
        <MenuItems
          key={item.id}
          bgImg={item.imageUrl}
          title={item.title}
          size={item.size}
          linkUrl={item.linkUrl}
        />
      ))}
    </section>
  );
};

export default Homepage;
