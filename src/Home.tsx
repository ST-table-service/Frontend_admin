import Logo from "./Logo";
import menuIcon from "./assets/menuIcon.svg";
import noticeIcon from "./assets/noticeIcon.svg";
import orderIcon from "./assets/orderIcon.svg";
import soldoutIcon from "./assets/soldoutIcon.svg";

function Home() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col h-screen justify-around">
          {/* Navbar */}
          <div className="navbar bg-base-300 bg-white w-full drop-shadow-sm border-b border-gray-400/50">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="ml-4 mx-2 flex-1 px-2">
              <Logo />
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className="flex flex-col flex-grow items-center justify-center gap-20 mb-16">
            <div className="flex flex-col justify-start items-center w-[413px] gap-[3px]">
              <div className="flex items-center flex-grow-0 flex-shrink-0 relative gap-1.5 mt-12">
                <p className="flex-grow-0 flex-shrink-0 text-[64px] font-bold text-center text-gray">
                  바비든든
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-center text-black">
                  사장님
                </p>
              </div>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[413px] text-[55px] font-bold text-center text-black">
                어서오세요 !
              </p>
            </div>
            <div className="flex justify-evenly items-center w-[1264px] px-[47px] rounded-[5px] bg-white border-[3px] border-black">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[353px] relative">
                <img
                  src={orderIcon}
                  className="flex-grow-0 flex-shrink-0 w-40 h-40 object-cover"
                />
                <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
                  주문처리
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[353px] relative">
                <img
                  src={menuIcon}
                  className="flex-grow-0 flex-shrink-0 w-40 h-40 object-cover"
                />
                <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
                  메뉴관리
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[353px] relative">
                <img
                  src={soldoutIcon}
                  className="flex-grow-0 flex-shrink-0 w-40 h-40 object-cover"
                />
                <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
                  메뉴 품절
                </p>
              </div>
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative">
                <img
                  src={noticeIcon}
                  className="flex-grow-0 flex-shrink-0 w-40 h-40 object-cover"
                />
                <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
                  공지올리기
                </p>
              </div>
            </div>
            ;
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
