"use client";

import axios from "axios";
import { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center border rounded p-4 text-black">
        <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-col p-4 gap-2">
          <input type="text" placeholder="Username" className="p-2 rounded" onChange={e=>{setUsername(e.target.value)}}/>
          <input type="password" placeholder="Password" className="p-2 rounded" onChange={e=>{setPassword(e.target.value)}}/>
        </div>
        </div>
        <div className="bg-white text-black p-2 px-10 rounded hover:scale-105 transform duration-200">
          <button
            onClick={() => {
              axios.post("http://localhost:3000/api/v1/singin",
                {
                    username,
                    password
                }
              );
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
