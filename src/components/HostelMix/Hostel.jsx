import React from "react";
import hostel from "./hostel_banner.jpg";
import gi1 from "./g1.jpg";
import gi2 from "./g2.jpg";
import gi3 from "./g3.jpg";
import gi4 from "./g4.jpg";
import bi3 from "./b3.jpg";
import bi2 from "./b2.jpg";
import bi4 from "./b4.jpg";
export default function Hostel() {
    
  return (
    <div className="p-5">
      <div class="flex flex-col ">
        <div>
          {" "}
          <h1 class="text-3xl md:text-7xl p-5 text-center font-extrabold text-amber-300 drop-shadow-lg ">
            Hostel Life at GLA
          </h1>
        </div>
        <div class="max-w-none drop-shadow-[0_5px_5px_rgba(128,128,128,0.25)]">
          <img class=" drop-shadow-2xl w-[100%] m-auto" src={hostel} />
        </div>
        <div>
        <div className="border border-black my-2">
          <div class="mt-4  md:mt-8">
            <h3 class="text-3xl sm:text-6xl font-bold text-center">
              Girls Hostel
            </h3>
            <p class="mt-3 md:mt-6 text-xl p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              veniam, consequuntur delectus, dicta, rerum voluptatum vitae
              libero neque corporis molestiae cum ad laborum suscipit nemo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              suscipit iure nostrum minus esse, id corrupti sed in earum
              deserunt magni voluptates unde! Fugiat distinctio modi, corporis
              repudiandae veritatis doloribus reprehenderit ut similique
              aliquid? Laudantium laborum voluptates eius placeat. Modi dolorem
              molestias aliquid blanditiis. reprehenderit! Deserunt eligendi
              officia dicta saepe, temporibus repudiandae ut eveniet incidunt
              minima in eaque iure beatae odit atque quis quidem rerum quibusdam
              esse placeat sint!
            </p>
          </div>
          <div class="flex overflow-auto">
            <img class="p-2 " src={gi1} />
            <img class="p-2 " src={gi2} />
            <img class="p-2 " src={gi3} />
            <img class="p-2 " src={gi4} />
          </div>
        </div>
        </div>
        <div>
          <div class="mt-4 md:mt-8">
            <h3 class="text-3xl sm:text-6xl font-bold text-center">
              Boys Hostel
            </h3>
            <p class=" mt-4 md:mt-6 text-xl p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              veniam, consequuntur delectus, dicta, rerum voluptatum vitae
              libero neque corporis molestiae cum ad laborum suscipit nemo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              suscipit iure nostrum minus esse, id corrupti sed in earum
              deserunt magni voluptates unde! Fugiat distinctio modi, corporis
              repudiandae veritatis doloribus reprehenderit ut similique
              aliquid? Laudantium laborum voluptates eius placeat. Modi dolorem
              molestias aliquid blanditiis. reprehenderit! Deserunt eligendi
              officia dicta saepe, temporibus repudiandae ut eveniet incidunt
              minima in eaque iure beatae odit atque quis quidem rerum quibusdam
              esse placeat sint!
            </p>
          </div>
          <div class="flex overflow-scroll snap-start">
            <img class="p-2" src={bi3} />
            <img class="p-2" src={bi2} />
            <img class="p-2" src={bi4} />
            <img class="p-2" src={bi3} />
            <img class="p-2" src={bi2} />
          </div>
        </div>
        <div>
          <div class=" mt-4 md:mt-8">
            <h3 class="text-3xl sm:text-6xl font-bold text-center">
              Hostel Facilities
            </h3>
            <p class="mt-4 md:mt-6 text-xl p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              veniam, consequuntur delectus, dicta, rerum voluptatum vitae
              libero neque corporis molestiae cum ad laborum suscipit nemo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              suscipit iure nostrum minus esse, id corrupti sed in earum
              deserunt magni voluptates unde! Fugiat distinctio modi, corporis
              repudiandae veritatis doloribus reprehenderit ut similique
              aliquid? Laudantium laborum voluptates eius placeat. Modi dolorem
              molestias aliquid blanditiis. reprehenderit! Deserunt eligendi
              officia dicta saepe, temporibus repudiandae ut eveniet incidunt
              minima in eaque iure beatae odit atque quis quidem rerum quibusdam
              esse placeat sint!
            </p>
          </div>
          <div class="flex overflow-scroll">
            <img class="p-5 " src={bi3} />
            <img class="p-5 " src={bi2} />
            <img class="p-5 " src={bi4} />
            <img class="p-5 " src={gi3} />
            <img class="p-5 " src={gi4} />
            <img class="p-5 " src={gi1} />
            <img class="p-5 " src={gi1} />
          </div>
        </div>
      </div>
          
    </div>
  );
}
