// REACT
import React, { useEffect } from "react";
// DATA
import SHOP_DATA from "../assets/data/shopData";
// COMPONENT
import PreviewCollections from "../components/PreviewCollections";

const Shoppage = () => {
  document.title = "shop page";

  useEffect(() => {
    document.body.style.zoom = "100%";
    window.scrollTo(0, 0);
  });

  return (
    <section>
      <div className="flex flex-col gap-6 ">
        <h1 className="font-medium md:font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          COLLECTIONS
        </h1>
        {SHOP_DATA.map((data) => (
          <PreviewCollections
            key={data.id}
            title={data.title}
            routeName={data.routeName}
            items={data.items}
            preview={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Shoppage;
