// REACT
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// COMPONENT
import PreviewCollections from "../components/PreviewCollections";
// DATA
import SHOP_DATA from "../assets/data/shopData";

const ShopItemPage = () => {
  document.title = "shop items";

  useEffect(() => {
    document.body.style.zoom = "100%";
    window.scrollTo(0, 0);
  });

  const params = useParams();

  const shopItem = SHOP_DATA.filter(
    (item) => item.title.toLowerCase() === params.id
  );

  return (
    <section>
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
