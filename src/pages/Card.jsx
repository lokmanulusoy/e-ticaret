import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
function Card() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center text-5xl ">Cart</div>
        <div className="flex items-center justify-between mt-4 ">
          <button className="btn">Alışverişe Devam Et</button>
          <div className="flex underline text-lg hover:cursor-pointer">
            <p>Sepetinizdekiler : 2</p>
            <p className="ml-5">İstek Listesi : 0 </p>
          </div>
          <button className="btn">Ödeme Yap</button>
        </div>
        {/*kart merkezi */}
        <div className="flex mt-7">
          <div className="flex flex-col flex-1 ">
            {/* Ürün Listesi */}
            <div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 "
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />
                <div className=" flex flex-col ml-5 mt-3 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b>893242171
                  </p>
                  <p>
                    <b className="mr-2">Ürün Adı:</b>Sweet
                  </p>
                  <p className="flex items-center justify-start">
                    <b>Rengi:</b>
                    <div className=" rounded-full border-2 p-[10px] cursor-pointer bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Beden:</b>Lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto ">
                <Counter />
                <p className="items-center flex justify-center text-4xl mt-3 ">
                  <b>300 TL</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            {/* 2.ürün */}
            <div className="flex w-[100%] h-auto items-center ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 "
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
                  alt="product_img"
                />
                <div className=" flex flex-col ml-5 mt-3 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b>893242171
                  </p>
                  <p>
                    <b className="mr-2">Ürün Adı:</b>Sweet
                  </p>
                  <p className="flex items-center justify-start">
                    <b>Rengi:</b>
                    <div className=" rounded-full border-2 p-[10px] cursor-pointer bg-brown-100 ml-1 w-[20px] h-[20px]"></div>
                  </p>
                  <p>
                    <b className="mr-2">Beden:</b>Lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto ">
                <Counter />
                <p className="items-center flex justify-center text-4xl mt-3 ">
                  <b>300 TL</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className=" p-5 flex-[0.4] flex-col items-center flex w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg ">
            <h1 className="text-[2rem] ">Özet</h1>
            <div className="flex justify-between mt-3 w-[100%]  ">
              <p>Ara Toplam</p>
              <p>600 TL</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]  ">
              <p>Kargo Ücreti</p>
              <p>20 TL</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]  ">
              <p>Kargo İndirimi</p>
              <p>-20 TL</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold ">
                <p>Toplam</p>
                <p>600 TL</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Card;
