export default function Main() {
  return (
    <>
      <section>
        <div className="container">
          <div className="w-full flex px-4 mt-3 hover:bg-slate-200 transition duration-100">
            <div>
              <div className="rounded-full w-14 h-14 bg-sky-500"></div>
            </div>
            <div className="ml-3 self-center">
              <h2 className="text-slate-900 font-semibold text-lg overflow-hidden">
                Awanophile
              </h2>
              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#2854C5"
                  >
                    <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z" />
                  </svg>
                </span>
                <p className="self-center ml-1 text-slate-900 text-xs">
                  Fullstack Developer
                </p>
              </div>
            </div>
            <div className="ml-auto self-center">
              <p>11.30</p>
              <span className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-full flex px-4 mt-3 hover:bg-slate-200 transition duration-100">
            <div>
              <div className="rounded-full w-14 h-14 bg-pink-500"></div>
            </div>
            <div className="ml-3 self-center">
              <h2 className="text-slate-900 font-semibold text-lg">
                Lyaastrophile
              </h2>
              <div className="flex">
                <p className="self-center text-slate-900 text-xs">
                  Fullstack Developer
                </p>
              </div>
            </div>
            <div className="ml-auto relative self-center">
              <p className="absolute right-0">11.31</p>
              <span className="flex pt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#666666"
                >
                  <path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" />
                </svg>
                <div className="rounded-full w-7 h-7 bg-green-500 flex items-center justify-center">
                  <p className="text-white text-md font-semibold">1</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
