import React from "react";
import h from "./h1.jpg";
import h1 from "./h2.jpg";
import h2 from "./h3.jpg";
import h3 from "./h4.jpg";
export default function Health() {
  return (
    <div class="p-10">
      <div class="flex flex-col ">
        <div>
          {" "}
          <h1 class="text-3xl md:text-7xl p-5 text-center font-extrabold text-blue-600 drop-shadow-lg ">
            Health Care Center
          </h1>
        </div>
        <div class="max-w-none drop-shadow-[0_5px_5px_rgba(128,128,128,0.25)]">
          <img class=" drop-shadow-2xl w-[100%]  m-auto" src={h1} />
        </div>
        <div>
          <div class="mt-4  md:mt-8">
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
        </div>
      </div>
      <h3 class="text-2xl font-extrabold p-5">
        Creating awareness about health related issues is also part of the
        Health Care Team’s responsibility; these would include:
      </h3>
      <div class=" mt-5 p-5 text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        quisquam optio atque quos, ipsa harum architecto dolorem dolorum
        suscipit, ut ipsam, quasi magnam veritatis voluptatem. Nisi debitis enim
        assumenda quisquam Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Exercitationem ipsam quo iure, ratione rem sunt molestiae aperiam
        dolorum nobis corrupti quod vitae voluptate cupiditate voluptatem cum
        animi nulla. Dolor exercitationem eveniet quas optio ipsa architecto,
        vero delectus, at, dignissimos tempora laborum voluptate placeat
        voluptas dolores..
      </div>
      <div class="m-4">
        <div class="lg:flex m-auto w-fit">
          <div class="p-5">
            <img src={h2}></img>
          </div>
          <div class="p-5">
            <img src={h3}></img>
          </div>
          <div class="p-5">
            <img src={h2}></img>
          </div>
          <div class="p-5">
            <img src={h}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
