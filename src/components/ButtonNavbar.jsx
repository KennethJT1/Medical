import { IoSearchOutline } from "react-icons/io5";

export const ButtonNavbar = () => {
  return (
    <div className="flex items-center justify-around bg-blue-900 w-full h-[83px] text-slate-200 text-lg">
      <div className="flex">
        <p className="mr-3 cursor-pointer hover:text-red-400">Home</p>
        <p className="mr-3 cursor-pointer hover:text-red-400">About us</p>
        <p className="mr-3 cursor-pointer hover:text-red-400">Services</p>
        <p className="mr-3 cursor-pointer hover:text-red-400">Doctors</p>
        <p className="mr-3 cursor-pointer hover:text-red-400">News</p>
        <p className="mr-3 cursor-pointer hover:text-red-400">Contact</p>
      </div>
      <div className="flex">
        <IoSearchOutline className="inline-flex mr-2 w-7 h-9 cursor-pointer" />
        <input
          type="text"
          name="search"
          id="Appointment"
          placeholder="Appointment"
          className="text-black rounded-full h-[37px] bg-blue-100 outline-none text-center"
        />
      </div>
    </div>
  );
};
