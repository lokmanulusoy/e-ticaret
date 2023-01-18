import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
function CategoryPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="display-flex flex-col">
        <h1 className="text-[30px]">Sweet</h1>
        <div className="flex items-center justify-between mt-3">
          
          <div className="flex mobile:flex-col">
            <p>Filtrele</p>
            <select className="ml-3 border-2 border-silver mobile:ml-0">
              
              <option selected disabled>
                Boy
              </option>
              <option>Small</option>
              <option>Large</option>
              <option>Medium</option>
            </select>
            <select className="ml-3 border-2 border-silver mobile:ml-0">
              
              <option selected disabled>
                Renk
              </option>
              <option>Sarı</option>
              <option>Mavi</option>
              <option>Kırmızı</option>
            </select>
          </div>
          <div className="flex mobile:flex-col mobile:items-end">
            <p>Sırala</p>
            <select className="ml-3 border-2 border-silver">
              <option selected>En Düşükten Yükseğe</option>
              <option>En Düşükten Düşüğe</option>
              <option>En Yeni</option>
              <option>En Eski</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
