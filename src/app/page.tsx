"use client";
import Animation from "@/component/Animation";
import Image from "next/image";
import React, { useState } from "react";
import zerlla from "@/asset/zerlla.png";
import { endpoints } from "@/store/endpoints";
import { toast } from "sonner";
import "./loader.css"

const Page = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    setIsSubmitting(!isSubmitting)
    // Prevent the default form submission behavior
    e.preventDefault();
    const response = await fetch(
      `${endpoints.baseURl}${endpoints.saveSubscribers.url}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
        }),
      }
    );

    const data = await response.json();
    toast.success(data.responseMessage);	
    console.log(data);
    console.log(data.responseMessage);
    if(!data) {
      toast.error("Something went wrong")	
    }
    // Reset the form fields
    setUsername("");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className=" bg-white h-screen flex justify-center  font-[poppins-regular] md:p-0 p-8">
      <div className="flex h-full flex-col justify-between gap-4 py-3 md:w-[60%] w-full">
        <Image
          src={zerlla}
          alt="Logo"
          className=" w-[4.5rem] mx-auto md:mt-4"
        />
        {/* Header */}
        <div className=" md:mt-4">
          <p className=" text-3xl text-[#000000] text-center font-bold">
            WE ARE COMING SOON
          </p>
          <p className=" text-[1rem]  font text-[#8e8e8e] text-center">
            Stay tuned for something amazing
          </p>
        </div>
        {/* Animation */}
        <div className=" flex justify-center">
          <Animation />
        </div>
        {/* Mailing */}
        <div className=" flex flex-col gap-4">
          <p className=" text-[1rem] text-center">
            Join the waitlist to be part of the first persons to use our
            products
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" md:h-12 flex relative gap-4 md:flex-row flex-col h-auto ">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className=" h-full w-full pl-2 py-3 md:py-1 border-1 rounded-md border-[#000]"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className=" h-full w-full pl-2 py-3 md:py-1 border-1 rounded-md border-[#000]"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <button
                disabled={!username || !email || isSubmitting}
                type="submit"
                className="  h-full cursor-pointer hover:bg-[#412525] bg-[#FF5C40] rounded-4 py-3 md:py-0 px-6 text-[#fff] rounded-md"
              >
                 {isSubmitting ? (<div className="loader"></div>): "Subscribe"}
              </button>
            </div>
          </form>
          {/* Socials */}
          <div className=" flex justify-center">
            {/* Icons */}
            <div className=" flex justify-between mx-auto gap-6 ">
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/template-4/twitter-165.png"
                className=" md:w-10 md:h-10 w-6 h-6"
                alt="twitter"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OOgcf2t_T9yp_Dn-X9lPp2e_s1q7sCnwo_4Y4cDrzf_fNwCDGs6h-uV9TyJmtcZ-tWU&usqp=CAU"
                className=" md:w-10 md:h-10 w-6 h-6"
                alt="facebook"
              />
              <img
                src="https://images.icon-icons.com/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                className=" md:w-10 md:h-10 w-6 h-6"
                alt="linkedin"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/2048px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png"
                className=" md:w-10 md:h-10 w-6 h-6"
                alt="instagram"
              />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className=" flex justify-center">
          <span className=" flex gap-2">
            <p className=" text-[#8e8e8e] text-[14px]">Copyrights Zerlla LTD</p>
            <p className=" text-[#8e8e8e] text-[14px]">{" | "}</p>
            <p className=" text-[#8e8e8e] text-[14px]">All Rights Reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
