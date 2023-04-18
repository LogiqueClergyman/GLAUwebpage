import React from "react";

function Features() {
  return (
    <div className=" py-3" style={{backgroundImage: `url("/nabgnew.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}}>
{/* <div className=" py-3 bg-white"> */}
      <div className=" mx-3 mt-5 mb-16 p-4 shadow-lg shadow-gray-900/50 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-2 text-6xl font-bold text-gray-900 dark:text-white">
          Life and Events
        </h1>
        <p className="mb-5 text-base text-black sm:text-lg dark:text-gray-400">
          A quick glance at our vivid campus life
        </p>
      </div>



      <div className=" mx-4 p-2 text-center flex flex-wrap  flex-col justify-around border-y-8 border-r-8 border-gray-900 backdrop-blur-sm bg-black/30   rounded-lg sm:p-8 ">
        <a
          href="#"
          className=" max-w-sm p-6  rounded-lg   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2  text-3xl font-bold tracking-tight text-white">
            Sports and Athletics
          </h5>
        </a>

        <div
          href="#"
          className="block p-6    dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="font-normal text-xl text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis quaerat, debitis iste cupiditate libero obcaecati doloribus ducimus modi deleniti ullam dignissimos laudantium, corrupti quibusdam deserunt non quidem! Dolores explicabo rem voluptatum voluptate error!
          </div>
        </div>
      </div>

        <div className="">
      <div className=" mx-4 p-2 text-center flex  flex-col flex-wrap   justify-around border-l-8 border-b-8 border-gray-900 backdrop-blur-sm rounded-lg bg-black/30 sm:p-8 ">
        <div
          href="#"
          className=" max-w-sm p-6  rounded-lg   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2  text-3xl font-bold tracking-tight text-white">
            Sports and Athletics
          </h5>
        </div>

        <div
          href="#"
          className="block p-6   rounded-lg   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="font-normal text-xl text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis quaerat, debitis iste cupiditate libero obcaecati doloribus ducimus modi deleniti ullam dignissimos laudantium, corrupti quibusdam deserunt non quidem! Dolores explicabo rem voluptatum voluptate error!
          </p>
        </div>
      </div>


    
      <div className=" mx-4 p-2 text-center flex flex-wrap border-spacing-x-1 flex-col  justify-around border-r-8 border-b-8 border-gray-900 sm:p-8 backdrop-blur-sm rounded-lg bg-black/30 ">
        <div
          href="#"
          className=" max-w-sm p-6  rounded-lg   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2  text-3xl font-bold tracking-tight text-white">
            Sports and Athletics
          </h5>
        </div>

        <div
          href="#"
          className="block p-6  borde rounded-lg  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p className="font-normal text-xl text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis quaerat, debitis iste cupiditate libero obcaecati doloribus ducimus modi deleniti ullam dignissimos laudantium, corrupti quibusdam deserunt non quidem! Dolores explicabo rem voluptatum voluptate error!
          </p>
        </div>
      </div>
    </div>


    </div>
  );
}

export default Features;
