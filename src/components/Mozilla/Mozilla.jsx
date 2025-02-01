import { memo } from "react";

const Mozilla =  memo(() => {
  return (
    <div>
      <div className=" text-white text-center font-bold text-6xl margin-t-2 font-serif "> 
          Mozilla Firefox
      </div>
      <div className=" text-white text-center font-bold text-md  ">
        <span className="text-lg border-b-gray-500 border-b-1 shadow-[0_3px_10px_rgba(0,0,255,.7)] animate-pulse"> 
          Open Minds . Open Ideas . Open Source
        </span>
      </div>
    </div>
        )
})
export default Mozilla;




