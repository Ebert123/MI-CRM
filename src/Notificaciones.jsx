import React,{ useState } from "react";
import {RiNotification3Line, RiCheckboxBlankCircleFill, RiFileUserFill} from "react-icons/ri" ;   

function App() {


    const [dropdown1Open, setDropdown1Open] = useState(false);


    const toggleDropdown1 = () => {
        setDropdown1Open(!dropdown1Open);
      }; 
    return (
      <div >  
        <li>
          <div className="relative" >
              <button className="w-full text-left py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown1}>
            <a href="#" className="relative hover:text-gray-200 transition-colors" >
              <RiNotification3Line icon="user" style={{fontSize: '1.5em' }} />
              <RiCheckboxBlankCircleFill className="text-red-600 text-[9px] absolute top-0 right-[2px] "/>
              </a>
              </button>
                {dropdown1Open && (
                   <div className="z-10 w-full mt-2 rounded-md bg-[#104C91] shadow-lg text-white" 
                   style={{position: 'absolute', left: '770px', top: '25px', width: '500px', height: '700px', border:'5px solid black', borderRadius:'15px'}}>
              <ul className="py-1" >
                <li >
                 <div className="text-black-300 grid gri-col-1 font-bold text-left">
                    <div>
                    <div
                    className="text-black " style={{fontFamily:'Times New Roman', fontSize:'35px'}}>
                    Notificaciones
                    </div>
                    <div className="text-black" style={{fontFamily:'Times New Roman', fontSize:'20px', right: '2'}}>
                    Todos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No líedo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Me mencionaron&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Me asignaron
                    </div>
                    <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                    <div className="text-black m-5" style={{textAlign:'10px'}} >
                        <button className="items-center flex text-center" style={{marginLeft:'15px',border: '1px solid white', borderRadius:'8px', width: '45%'}} > <RiFileUserFill/>FILTRAR POR PERSONA</button>
                    </div>
                    <div className="text-black m-5" style={{fontFamily:'Times New Roman', fontSize:'15px', right: '2'}}>
                        Recibe notificaciones de crm.com directamente en Slack  <button className="bg-[#00ced1]" style={{ border: '1px solid black'}}>Mas Info</button>
                    </div>
                    <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                    <div
                    className="text-black " style={{fontFamily:'Times New Roman', fontSize:'25px'}}>
                    Older Notifications
                    </div>
                    </div>
                 </div>
                </li>
             </ul>
            </div>
                                   )}
             </div>

                                    </li>
      </div>
    )
  }
  
  export default App;