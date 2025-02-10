import {Connects} from "./Connects.jsx"
import AG from '../assets/AG.png';

export function Nav(){
    return(
        <div id="Home" className="text-white flex items-center justify-between px-5 pt-4 font-serif">
           <span className="h-12 sm:h-14 md:h-16 flex "> <img src={AG} alt="" /></span>
           <Connects/>
        
        </div>
    );
}