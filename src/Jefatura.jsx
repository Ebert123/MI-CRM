import React,{ useState } from "react";
import './App.css';
import { RiArrowDownSLine, RiArrowRightSLine, RiDashboardLine, RiGitRepositoryLine, RiSettings5Line, RiLogoutBoxRFill, 
         RiMenuUnfoldFill, RiCloseLine, RiNotification3Line, RiCheckboxBlankCircleFill,RiSurveyFill} from "react-icons/ri" ;   
import { FcSalesPerformance, FcTodoList, FcBusinessman, FcDepartment} from "react-icons/fc";
import LOGOB from './assets/Imagenes/LOGOB.mp4';

function App() {
  const[showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const [dropdown0Open, setDropdown0Open] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);
  const [dropdown5Open, setDropdown5Open] = useState(false);
 

  const toggleDropdown0 = () => {
    setDropdown0Open(!dropdown0Open);
  };

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const toggleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open);
  };

  const toggleDropdown4 = () => {
    setDropdown4Open(!dropdown4Open);
  };

  const toggleDropdown5 = () => {
    setDropdown5Open(!dropdown5Open);
  };

  return (
    <div className="bg-[#40617B] relative">  
      {/*siderbar*/} 
      <div className="flex">
      <sidebar 
      className={`bg-[#161E29] fixed ${showMenu ? "-left-0" : "-left-full" }  lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between transition-all z-50`}>
                          

        {/*MENU*/}
        <div>
          <div>
            {/*LOGO*/}
            <div style={{ display: 'flex', transform: 'scale(1.25)' }}>
             <video
             src={LOGOB}
             className="mb-12"
             autoPlay
             loop
             muted
             />
            </div>

            <h1 className="text-black text-center uppercase font-bold text-2xl tracking-[1px]" style={{ fontFamily: 'Times New Roman'}}>
             CRM
            </h1>
            <h1 className="text-black uppercase font-bold text-2xl tracking-[1px] mb-10 " style={{ fontFamily: 'Times New Roman' }}>
             AGILE-COMMUNICATIONS
            </h1>
          </div>

           {/*NAV*/}
          <nav > 

          <div className="relative mb-8">
              <button className="w-full text-left right-9 py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown0}>
               <a href="#" className="flex items-center gap-4 text-black-400 tracking-[1px] hover:text-gray-200 transition-colors ">
                <FcDepartment icon="user" style={{fontSize: '1.5em' }}/> 
                 <span className="flex-1 flex items-center justify-between gap-4 font-bold">
                  SUCURSALES <RiArrowRightSLine/>
                 </span>
               </a>
              </button>
                {dropdown0Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#40617B] shadow-lg" style={{position: 'absolute', left: '210px', top: '0'}}>
                   <ul className="py-1">
                    <li className="hover:bg-gray-100">
                     <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                       SUCURSAL 1
                     </a>
                    </li>
                    <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                    <li className="hover:bg-gray-100">
                     <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                       SUCURSAL 2
                     </a>
                    </li>
                   </ul>
                  </div>
                                   )}
             </div>

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
                       style={{position: 'absolute', left: '1505px', top: '-300px', border: "5px double black", borderRight: 'none', borderRadius: "10% 0 0 10%",width: '320px'}}>
                   <ul className="py-1" >
                    <li className="hover:bg-gray-100" style={{borderRadius: "20% 0 0 20%"}}>
                    <div >
                      <h2 className="flex items-center gap-2 " style={{justifyContent: "center"}}>
                        <RiSurveyFill style={{fontSize: '1.5em' }}/>
                          <span className="flex items-center font-bold" style={{ fontFamily: 'Times New Roman'}}>
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

              
            <div className="relative mb-8">
              <button className="w-full text-left py-2 px-4 rounded-md shadow-sm"
                      onClick={toggleDropdown2}>
                <a href="#" className="flex items-center gap-4 text-black-400 tracking-[4px] hover:text-gray-200 transition-colors">
                  <FcSalesPerformance icon="user" style={{fontSize: '1.5em'}}/> 
                   <span className="flex-1 flex items-center justify-between gap-4 font-bold " >
                     VENTAS <RiArrowRightSLine/>
                   </span>
                </a>
              </button>
                {dropdown2Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#40617B] shadow-lg" style={{position: 'absolute', left: '210px', top: '0'}}>
                   <ul className="py-1">
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                       NUEVAS
                      </a>
                    </li>
                    <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                        <li className="hover:bg-gray-100">
                          <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                            SEGUIMIENTO DE VENTAS
                          </a>
                        </li>
                   </ul>
                  </div>
                                  )}
            </div>

            <div className="relative mb-8">
              <button className="w-full text-left py-2 px-4 rounded-md shadow-sm"
                      onClick={toggleDropdown3}>
               <a href="#" className="flex items-center gap-4 text-black-400 tracking-[1px] hover:text-gray-200 transition-colors">
                 <RiDashboardLine icon="user" style={{fontSize: '1.7em' }}/> 
                   <span className="flex-1 flex items-center justify-between gap-4 font-bold ">
                     DASHBOARD CLIENTES <RiArrowRightSLine icon="user" style={{fontSize: '1.7em' }}/>
                   </span>
                </a>
                </button>
                {dropdown3Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#40617B] shadow-lg" style={{position: 'absolute', left: '210px', top: '0'}}>
                   <ul className="py-1">
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                       NUEVO
                      </a>
                    </li>
                    <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                      <li className="hover:bg-gray-100">
                        <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                          VER
                        </a>
                    </li>
                   </ul>
                  </div>
                                  )}
            </div>

            <div className="relative mb-[80px]">
              <button className="w-full text-left py-2 px-4 rounded-md shadow-sm"
                      onClick={toggleDropdown4}>
               <a href="#" className="flex items-center gap-4 text-black-400 tracking-[3px] hover:text-gray-200 transition-colors">
                <RiGitRepositoryLine icon="user" style={{fontSize: '1.5em' }}/> 
                 <span className="flex-1 flex items-center justify-between gap-4 font-bold ">
                  REPORTES <RiArrowRightSLine/>
                </span>
               </a>
               </button>
                {dropdown4Open && (
                  <div className="z-10 w-full mt-2 rounded-md  bg-[#40617B] shadow-lg" style={{position: 'absolute', left: '210px', top: '0'}}>
                   <ul className="py-1">
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                       CLIENTES + STATUS
                      </a>
                    </li>
                    <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                      <li className="hover:bg-gray-100">
                        <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                          COLABORADORES (PUESTO)
                        </a>
                    </li>
                    <hr style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                      <li className="hover:bg-gray-100">
                        <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                          HISTORIAL DE VENTAS
                        </a>
                      </li>
                   </ul>
                  </div>
                                  )}
            </div>
               <a href="#" className="flex items-center gap-4 font-bold text-black-400 tracking-[3px] hover:text-gray-200 transition-colors text-black">
                <RiSettings5Line icon="user" style={{fontSize: '1.5em' }}/> CONFIGURACION
               </a>

          </nav>
        
        </div>
        {/*CERRAR SESION*/}
        <a href="#" className="flex items-center gap-4 font-bold text-black-400 hover:text-gray-200 transition-colors text-black" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p>CERRAR SESION </p> <RiLogoutBoxRFill icon="user" style={{ marginLeft: '-5px', fontSize: '1.5em' }}/>
        </a>
  
      </sidebar>
      </div>
      {/*BOTON DEL MENU EN MOVIL*/}
      <button 
      onClick={toggleMenu} 
      className="lg:hidden fixed right-9 bottom-16 bg-[#1E1F24] text-orange-600 text-xl p-4 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine/> : <RiMenuUnfoldFill/>} 
      </button>
       {/*content*/}
      <main className="lg:pl-80">
        <header className=" fixed left-0 top-0 w-full bg-[#2B3E52] p-8 flex justify-end font-bold border-b border-gray-500 ">
         <ul className="flex items-center gap-4 ">
          <li className="hover:text-gray-200 transition-colors">
            <a href="#" className="relative">
              <RiNotification3Line icon="user" style={{fontSize: '1.5em' }} />
              <RiCheckboxBlankCircleFill className="text-red-600 text-[9px] absolute top-0 right-[2px] "/>
              </a>
          </li>

          <li>
          <div className="relative" >
          <button className="" onClick={toggleDropdown5}>
            <a href="#" className="flex items-center gap-4 hover:text-gray-200 transition-colors" >
              <img src="https://as2.ftcdn.net/v2/jpg/00/73/49/85/1000_F_73498502_3EagJyoMoQuAjwDViXvPm1wLjxmaK8tD.jpg" 
                   className="w-8 h-8 object-cover rounded-full ring-2 ring-lime-300" />
              <p className="textoPersonalizado">Ebert Garcia</p>
            <RiArrowDownSLine/>
            </a>
            </button>
                {dropdown5Open && (
                  <div className="z-10 w-full mt-2 rounded-md  bg-[#40617B] shadow-lg" style={{position: 'absolute', left: '25px', top: '20px'}}>
                   <ul className="relative py-1" >
                    <li className="hover:bg-gray-100">
                      <a href="#" className="block px-0 py-1 text-sm text-black-700 font-bold">
                       PERFIL DE USUARIO
                      </a>
                    </li>
                   </ul>
                  </div>
                                  )}
            </div>
          </li>
         </ul>
        </header>
        <div className="pt-28 centered-text">
           <div style={{fontSize: '100px', fontWeight: 'bold', fontFamily: "Broadway" }} >
            ¡WELCOME BOSS!<center><FcBusinessman style={{fontSize:'85px'}}/></center>
           </div>
        </div>
      </main>
    </div>
  )
}

export default App;
