import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import { LocalPhoneOutlined, LocationOnOutlined } from "@mui/icons-material";

function Footer() {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">Lokman ULUSOY Proje</h1>
        <p>Projelerle Gelişmeye devam edeceğim.</p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + " bg-blue-700"}>
            <TagOutlinedIcon />
          </div>
          <div className={socialStyle + " bg-sky-400"}>
            <EmailOutlinedIcon />
          </div>
          <div className={socialStyle + " bg-green-600"}>
            <LocalPhoneOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2 ">
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">Türkiye</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined/>
          <p className="pl-3">05300626670</p>
        </div>
        <div className=" flex m-3">
          <EmailOutlinedIcon />
          <p className="pl-3">lokmanulusoy@yahoo.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
