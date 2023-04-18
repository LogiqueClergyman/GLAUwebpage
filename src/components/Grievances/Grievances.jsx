import React from "react";
import { useState } from "react";
import axios from "axios";

function Grievances() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const array = [];
  const checkForPrevious=()=>{
    if(array.length != 0){
      if(email === array.length){
        console.log("Too many responses");
        alert("Try again after sometime");
      }
      else{
        submitGrievance();
      }
    }  
  }
  const submitGrievance = () => {
      
    axios
      .post("http://localhost:5000/gri", { email, message })
      .then((response) => {
        console.log(response.data);
        alert("Grievance submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error submitting grievance");
      });
  };

  return (
    <div>
      <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <form method="POST" enctype="multipart/form-data">
            <label className="block mb-6">
              <span className="text-gray-700">Your name</span>
              <input
                name="name"
                type="text"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Joe Bloggs"
                //   value={name}
                //   onChange={e => setName(e.target.value)}
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Email address</span>
              <input
                name="email"
                type="email"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="joe.bloggs@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">What's wrong?</span>
              <textarea
                name="message"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="3"
                placeholder="Please describe your problem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="button"
                onClick={submitGrievance}
                className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
              >
                Submit
              </button>
            </div>
          </form>
            
        </div>
      </div>
    </div>
  );
}

export default Grievances;
