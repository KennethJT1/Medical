import { PiPhoneCall } from "react-icons/pi";
import { BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export const TopNavbar = () => {
  return (
    <div className="flex items-center justify-around my-4 w-full">
      <div className="text-3xl">
        <p>
          ME<span className="text-blue-400">DICAL</span>
        </p>
      </div>
      <div className="flex justify-around">
        <div className="flex items-center">
          <PiPhoneCall className="inline-flex mr-2 w-12 h-10" />
        </div>
        <div>
          <p className="mr-2 grid">
            EMERGENCY
            <span className="text-blue-300 cursor-pointer text-md">
              (+234) 812-222-3334
            </span>
          </p>
        </div>

        <div>
        <BsClock className="inline-flex mr-2 w-8 h-10" />
        </div>
        <div>
          <p className="mr-2 grid">
            WORK HOUR
            <span className="text-blue-300 cursor-pointer text-md">
              09:00-20:00 Everyday
            </span>
          </p>
        </div>

        <div>
        <CiLocationOn className="inline-flex mr-2 w-12 h-10" />
        </div>
        <div>
          <p className="mr-2 grid">
            LOCATION
            <span className="text-blue-300 cursor-pointer text-md">
              0123 Some Place
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
