import { PiLinkedinLogoLight } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className="w-full b-0 flex flex-col bg-[#1F2B6C] h-[367px] text-slate-200 text-lg px-[124px] gap-12 pt-12 pb-9">
      <div className="flex">
        <div>
          <h1 className="font-bold text-[35px] text-[#BFD2F8] pb-5">MEDICAL</h1>
          <p>Leading the Way in Medical Execellence, Trusted Care.</p>
        </div>

        <div>
          <h4></h4>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>

        <div></div>

        <div></div>
      </div>

      <div className="flex">
        <div>© 2024 KJTHospital All Rights Reserved by PNTEC-LTD</div>
        <div className="flex">
          <PiLinkedinLogoLight className="mr-2" />
          <PiLinkedinLogoLight />
          <PiLinkedinLogoLight />
        </div>
      </div>
    </div>
  );
};
