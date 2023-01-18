import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center">
        <div className=" flex flex-1 items-center justify-center ">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 "
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 ">
            <h1 className="title text-[40px] ">Koton Orjinal </h1>
            <p className="disription pr-[4rem] text-justify mt-4 ">
                Ürün Özellikleri Burada Yazar.
            </p>
            <p className="mt-7 text-3xl">Fiyat: <b>300 TL</b></p>
            <div className="colors flex mt-7 text-2xl">
                Renkler
                <div className="w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 bg-red-600 hover:border-[#8a4af3] "></div>
                <div className="w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 bg-blue-600 hover:border-[#8a4af3]"></div>
                <div className="w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 bg-yellow-400 hover:border-[#8a4af3] "></div>
            </div>
            <div className="mt-7 text-2xl">
                Beden
                <select className="border-[2px] border-silver rounded-md ml-5" >
                    <option selected disabled >Seçin</option>
                    <option >Small</option>
                    <option >Medium</option>
                    <option >Large</option>
                </select>
            </div>
            <div className="mt-5">
                <Counter/>
            </div>
            <button className="btn mt-5">Sepete Ekle</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
