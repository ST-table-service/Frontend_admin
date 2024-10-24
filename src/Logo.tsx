import { useNavigate } from "react-router-dom";

function Logo() {
  const nav = useNavigate();
  const navigateHome = () => {
    nav("/home");
  };
  return (
    <div className="w-full flex justify-center">
      <p
        onClick={navigateHome}
        className="cursor-pointer leading-none text-center mr-8"
      >
        <span className="text-[75px] text-left text-[#b90005] drop-shadow-md">
          S
        </span>
        <span className="text-[75px] text-left text-[#0a1e62] drop-shadow-md">
          T
        </span>
        <span className="text-[75px] text-left text-[#8f8f8f] drop-shadow-md">
          :
        </span>
        <span className="text-[75px] text-left text-gray-300 drop-shadow-md">
          table
        </span>
      </p>
    </div>
  );
}

export default Logo;
