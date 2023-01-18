import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

function Product({ item }) {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer ";

  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  }
  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }
  return (
    <div
      className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative "
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product_image" />
      <div
        className={
          "flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-75 " +
          hoverEffects
        }
      >
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
