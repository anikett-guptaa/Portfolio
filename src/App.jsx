

import { Nav } from "./components/Nav"
import {Works} from"./components/Works"
import { Siri } from "./components/Siri"
import {About}  from "./components/About"
import {Footer} from "./components/Footer"
import {Tech} from "./components/Tech"


function App() {
 

  return (
   <>
   
    <div className="lg:h-screen  ">
    <Nav/>  
    <Siri/>  
    </div>    
    
    <Works/>
    <Tech/> 
    
    <About className="h-screen"/>
    <Footer/>
    
        
    </>
  )
}

export default App
