import { useState, useEffect, memo, useCallback, useMemo, useRef} from "react";
import { Link, NavLink } from "react-router-dom";
function NavBar(){
    return(
        <div className=" margin-2 flex justify-center border-b-1 border-b-gray-400 ">
            <div >
             <img className="p-4" width={150} height={150} src="https://vitbhopal.ac.in/wp-content/uploads/2019/12/logoh76.png"/>
            </div>
            <div className="flex justify-center">  
                <NavLink 
                to="/" className={({isActive}) => `p-6 text-xl ${isActive ? "text-blue-500 border-b-blue-500" : "text-white" }  `}>
                  Home
                </NavLink>
                <NavLink to="events" className={({isActive}) => `p-6 text-xl ${isActive ? "text-blue-500 border-b-blue-500" : "text-white" } `} >
                  Events
                </NavLink>
                <NavLink to="about" className={({isActive}) => `p-6 text-xl ${isActive ? "text-blue-500 border-b-blue-500" : "text-white" }  `}>
                  About Us
                </NavLink>
                <NavLink to="community" className={({isActive}) => `p-6 text-xl ${isActive ? "text-blue-500 border-b-blue-500" : "text-white" }  `}>
                  Community
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar;