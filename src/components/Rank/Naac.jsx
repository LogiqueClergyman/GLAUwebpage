import React from 'react'
import naac from './Naac.jpg';
export default function Naac_profile() {
  return (
    <div class="p-5">
      <div class="shadow-slate-600"><img class="w-[100%] drop-shadow-lg" src={naac}></img></div>
       <div class="p-5 "><h3 class="text-4xl font-bold">National Assessment and Accreditation Council (NAAC)</h3>
       <p class="text-xl py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, modi. Amet illum perferendis quia vitae ducimus explicabo doloremque non eius, ex voluptatibus odio nemo, distinctio, tenetur aspernatur architecto dolorum repellendus!</p>
       <p class="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum velit non culpa, laudantium eveniet excepturi. Eum eveniet illo itaque quis error vel, sint voluptatibus dolorum?</p>
       <h3 class="text-2xl mt-5 font-semibold">GLA University has attained NAAC A+ Accreditation with a score of 3.46. Previously, it was NAAC A accredited with a score of 3.2.</h3>
       </div>
      
    </div>
  )
}