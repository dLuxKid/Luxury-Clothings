import React from "react";
import SHOP_DATA from "../assets/data/shopData";
import PreviewCollections from "../components/previewCollections";

const Shoppage = () => {
  return (
    <section className="px-[5%] py-[2.5%]">
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
          />
        ))}
      </div>
    </section>
  );
};

export default Shoppage;
