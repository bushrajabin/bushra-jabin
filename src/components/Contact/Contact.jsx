import React from "react";
import { SocialIcons } from "../../common/Socialicons";
function Contact() {
  return (
    <div className=" flex flex-col text-center">
      <div className=" flex flex-col items-center ltext-center m-4 p-3 mt-32 bg-gray-300 shadow-xl rounded-lg  xl:shadow-2xl xl:bg-gray-300 xl:text-center xl:items-center  xl:flex xl:flex-col xl:mt-32 xl:p-10 xl:w-5/6 xl:ml-28 xl:rounded-xl  xl:top-10 ">
        <div className=" flex flex-col items-center xl:w-96 xl:items-center xl:flex xl:flex-col">
          <h1 className=" font-bold text-3xl text-center p-3 underline xl:text-2xl xl:font-bold xl:p-3">
            Contact With Me!
          </h1>
          <img
            src="./images/MyImage.jpg"
            alt=""
            className=" w-52 h-52 rounded-full object-cover  xl:ml-0 xl:w-64 xl:h-64 xl:object-cover xl:rounded-full"
          />
        </div>
        <div className="flex flex-row items-center space-x-7 p-10  xl:flex xl:flex-row xl:items-center xl:m-2 xl:w-56 xl:justify-center  xl:object-cover  xl:p-5 xl:gap-4 xl:text-3xl">
          {SocialIcons.map((data, index, arr) => {
            const { link, Icon } = data;
            return (
              <div>
                  <a href={link} target="_blank"><Icon/></a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
