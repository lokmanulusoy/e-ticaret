import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  const style = " ml-[25px] mobile:ml-[5px] , text-[14px], cursor-pointer mobile:ml-[5px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px] mobile:hidden">Tr</div>
          <div className="searchInput flex border-[2px] border-solid border-lighgrey raunded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input className="input outline-none mobile:w-[50px]" type="text" />
            <SearchIcon className="" style={{ fontSize: "16px" }} />
          </div>
        </div>
        {/* logo */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg mobile:text-sm">Kış Sezonu</div>
        </div>
        {/* sağ */}
        <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
          <link to="/register" className={style}>Kayıt Ol</link>
          <link to="/login" className={style}>Giriş Yap</link>
          <div className={style}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
