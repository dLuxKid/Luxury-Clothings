import React from "react";
import { useParams } from "react-router-dom";
import PreviewCollections from "../components/PreviewCollections";
import SHOP_DATA from "../assets/data/shopData";

const ShopItemPage = () => {
  const params = useParams();

  const shopItem = SHOP_DATA.filter(
    (item) => item.title.toLowerCase() === params.id
  );

  return (
    <section className="px-[5%] py-[2.5%] w-full">
      {shopItem.map((data) => (
        <PreviewCollections
          key={data.id}
          title={data.title}
          routeName={data.routeName}
          items={data.items}
          preview={false}
        />
      ))}
    </section>
  );
};

export default ShopItemPage;
