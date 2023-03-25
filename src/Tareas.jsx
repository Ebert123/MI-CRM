import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowRightSLine, RiDashboardLine, RiGitRepositoryLine, RiSettings5Line, RiLogoutBoxRFill, 
  RiMenuUnfoldFill, RiCloseLine, RiNotification3Line, RiCheckboxBlankCircleFill,RiSurveyFill} from "react-icons/ri" ;   
import { FcSalesPerformance, FcTodoList, FcBusinessman, FcDepartment} from "react-icons/fc";

function DropdownWithTable() {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  return (
    <div className="bg-[#40617B] relative">
 <div className="mb-8" style={{position: 'relative'}}>
              <button className="w-full text-left right-9 py-2 px-4 rounded-md shadow-sm "
                      onClick={toggleDropdown1}>
               <a href="#" className="flex items-center gap-4 text-black-400 tracking-[4px] hover:text-gray-200 transition-colors ">
                <FcTodoList icon="user" style={{fontSize: '1.5em' }}/> 
                 <span className="flex-1 flex items-center justify-between gap-4 font-bold">
                  TAREAS 
                 </span>
               </a>
              </button>
                { dropdown1Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#f8f8ff] shadow-lg" 
                       style={{position: 'absolute', left: '1505px', top: '50px', border: "5px double black", borderRight: 'none', width: '320px', borderRadius: "20% 0 0 20%"}}>
                   <ul className="py-1" >
                    <li className="hover:bg-gray-100" style={{borderRadius: "20% 0 0 20%"}}>
                    <div >
                      <h2 className="flex items-center gap-4 " style={{justifyContent: "center"}}>
                        <RiSurveyFill/>
                          <span className="flex items-center  ">
                          TAREAS POR HACER
                          </span>
                      </h2>
                      <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                        <ul>
                        LLAMADA: LLAMAR PARA SABER QUE LE PARECIO A SU FAMILIA LAS OPCIONES
                        <label className="bg-[#000000] text-white tracking-[4px] mb-1" style={{border: "1px solid black", float: "right", borderRadius: "8px"}} >05-03-23  9:50</label>
                       </ul>
                       <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                        <ul>
                        LLAMADA: LLAMAR PARA SABER QUE LE PARECIO A SU FAMILIA LAS OPCIONES
                        <label className="bg-[#000000] text-white tracking-[4px] mb-1" style={{border: "1px solid black", float: "right", borderRadius: "8px"}} >05-03-23  9:50</label>
                       </ul>
                       <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                        <ul>
                        LLAMADA: LLAMAR PARA SABER QUE LE PARECIO A SU FAMILIA LAS OPCIONES
                        <label className="bg-[#000000] text-white tracking-[4px] mb-1" style={{border: "1px solid black", float: "right", borderRadius: "8px"}} >05-03-23  9:50</label>
                       </ul>
                    </div>
                    </li>
                   </ul>
                  </div>
                                   )}
                                  
             </div>    
             </div>
  );
}

export default DropdownWithTable;