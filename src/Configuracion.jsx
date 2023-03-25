import React,{ useState } from "react";
import { RiAccountCircleLine, RiMailLine,RiPhoneLine,RiSkypeLine, RiUserLocationLine, RiCalendarEventFill } from "react-icons/ri";
import { FaBirthdayCake} from "react-icons/fa";

function App() {
    const [dropdown1Open, setDropdown1Open] = useState(false);
    const [dropdown2Open, setDropdown2Open] = useState(false);
    const [dropdown3Open, setDropdown3Open] = useState(false);
    const [dropdown4Open, setDropdown4Open] = useState(false);
    const [dropdown5Open, setDropdown5Open] = useState(false);
    const [dropdown6Open, setDropdown6Open] = useState(false);

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
      const toggleDropdown6 = () => {
        setDropdown6Open(!dropdown6Open);
      };

return (
    <div>
    <header className=" fixed top-0 w-full bg-[#1F8AC0] -pt-[100px] border-b border-gray-500 " style={{height: '35%', justifyContent: 'center', display: 'flex'}}>
         <ul className="flex items-center gap-4 ">
          <li>
          <div className="relative" >
            <a href="#" className="flex items-center  justify-center" >
              <img src="https://as2.ftcdn.net/v2/jpg/00/73/49/85/1000_F_73498502_3EagJyoMoQuAjwDViXvPm1wLjxmaK8tD.jpg" title="Haz click aquí para cambiar la foto" 
                   className="w-[150px] h-[150px] object-cover rounded-full ring-2 ring-yellow-300" />
            </a>
            <p className="font-bold  " style={{fontFamily: 'Times New Roman', fontSize: '35px'}}>Ebert Garcia</p>
            <label className="bg-[#14213D] text-white tracking-[1px]" style={{border: "2px solid black", borderRadius: "6px", fontFamily: 'Times New Roman',}} >ADMIN</label>
            </div>
          </li>
         </ul>
        </header>

        <header className=" fixed top-[350px] w-full bg-[#14213D] -pt-[100px] " 
                style={{position: 'fixed', height: '67%', justifyContent: 'center', display: 'flex', zIndex: '1'}}>
         <ul className="flex items-center gap-4 ">
          <li>
          <div className="absolute" >
          <button className="w-full text-left py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown1}>
               <label className="bg-[#1F8AC0] text-black tracking-[1px] font-bold hover:text-gray-200 transition-colors" 
                   style={{position:'absolute', top:'-377px', left: '-455px'}} >Información Personal
               </label>
              </button>
                 {dropdown1Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#14213D] shadow-lg text-white" 
                       style={{position: 'absolute', left: '-440px', top: '-280px', width: '800px', border:'none'}}>
                  <ul className="py-1" >
                    <li >
                     <div className="text-black-300 grid gri-col-1 font-bold text-left">
                        <div>
                        <p className="mb-5 text-center text-black" style={{fontFamily:'Times New Roman', fontSize:'25px'}}>Descripción General</p>   
                            <div className="mb-5 items-center flex  gap-4">
                            <RiAccountCircleLine  style={{fontSize: '35px'}}/>
                            <input className="bg-[#14213D]" type="text" id="texto" name="texto" placeholder="Titulo: Agregar un titulo" style={{width: '50%'}}/>
                            </div>
                            <div className="mb-5 items-center flex  gap-4">
                            <RiMailLine  style={{fontSize: '30px'}}/>
                            <input className="bg-[#14213D]" type="text" id="texto" name="texto" placeholder="Correo Electronico: juanito@gmail.com" style={{width: '50%'}}/>
                            </div>
                            <div className="mb-5 items-center flex  gap-4">
                            <RiPhoneLine  style={{fontSize: '30px'}}/>
                            <input className="bg-[#14213D]" type="text" id="texto" name="texto" placeholder="Teléfono: Agregar un número de télefono" style={{width: '50%'}}/>
                            </div>
                            <div className="mb-5 items-center flex  gap-4">
                            <RiSkypeLine  style={{fontSize: '30px'}}/>
                            <input className="bg-[#14213D]" type="text" id="texto" name="texto" placeholder="Skype: Agregar un número de Skype" style={{width: '50%'}}/>
                            </div>
                            <div className="mb-5 items-center flex  gap-4">
                            <RiUserLocationLine  style={{fontSize: '30px'}}/>
                            <input className="bg-[#14213D]" type="text" id="texto" name="texto" placeholder="Ubicación: Agregar una ubicación" style={{width: '50%'}}/>
                            </div>
                            <div className="mb-5 items-center flex  gap-4">
                            <FaBirthdayCake  style={{fontSize: '30px'}}/>
                            <input className="bg-[#14213D]" type="text" id="texto" name="texto" placeholder="Cumpleaños: Agregar un cumpleaños" style={{width: '50%'}}/>
                            </div>
                            <div className="mb-5 items-center flex  gap-4">
                            <RiCalendarEventFill  style={{fontSize: '30px'}}/>
                            <input className="bg-[#14213D]" type="text" id="texto" name="texto" placeholder="Aniversario de trabajo: Agregar un aniversario de trabajo" style={{width: '50%'}}/>
                            </div>
                            <hr className="mb-10" style={{ border: '1px solid black', width: '90%', margin: 'auto'}}/>
                            <p className="mb-5 text-black" style={{fontFamily:'Times New Roman', fontSize:'25px'}}>Equipos</p>   
                            <p className=" text-white" style={{fontFamily:'Times New Roman', fontSize:'15px'}}>Aún no eres miembro de ningún equipo :( </p> 
                            <p className=" text-white" style={{fontFamily:'Times New Roman', fontSize:'15px', fontWeight: 'normal'}}>
                            Si te unes a un equipo puedes hacer un seguimiento de los proyectos que te interesan 
                            </p> 
                            <p className=" text-white" style={{fontFamily:'Times New Roman', fontSize:'15px', fontWeight: 'normal'}}>
                            y los demás pueden saber qué estás haciendo. <a href="https://www.google.com" className=" text-blue font-bold">Explorar todos los equipos</a>
                            </p> 
                        </div>
                     </div>
                    </li>
                 </ul>
                </div>
                                   )}
            
            </div>

            <div className="absolute" >
          <button className="w-full text-left py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown2}>
               <label className="bg-[#1F8AC0] text-black tracking-[1px] font-bold hover:text-gray-200 transition-colors" 
                   style={{position:'absolute', top:'-377px', left: '-240px'}} >Estado Actual
               </label>
              </button>
                 {dropdown2Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#14213D] shadow-lg" 
                       style={{position: 'absolute', left: '-440px', top: '-280px', width: '800px'}}>
                  <ul className="py-1" >
                    <li >
                     <div className="text-black-300 grid gri-col-1 font-bold text-left">
                        <div>
                            hola1
                        </div>
                     </div>
                    </li>
                 </ul>
                </div>
                                   )}
            
            </div>

            <div className="absolute" >
          <button className="w-full text-left py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown3}>
               <label className="bg-[#1F8AC0] text-black tracking-[1px] font-bold hover:text-gray-200 transition-colors" 
                   style={{position:'absolute', top:'-377px', left: '-90px'}} >Contraseña
               </label>
              </button>
                 {dropdown3Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#14213D] shadow-lg" 
                       style={{position: 'absolute', left: '-440px', top: '-280px', width: '800px'}}>
                  <ul className="py-1" >
                    <li >
                     <div className="text-black-300 grid gri-col-1 font-bold text-left">
                        <div>
                            hola
                        </div>
                     </div>
                    </li>
                 </ul>
                </div>
                                   )}
            
            </div>

            <div className="absolute" >
          <button className="w-full text-left py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown4}>
               <label className="bg-[#1F8AC0] text-black tracking-[1px] font-bold hover:text-gray-200 transition-colors" 
                   style={{position:'absolute', top:'-377px', left: '40px'}} >Idioma
               </label>
              </button>
                 {dropdown4Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#14213D] shadow-lg" 
                       style={{position: 'absolute', left: '-440px', top: '-280px', width: '800px'}}>
                  <ul className="py-1" >
                    <li >
                     <div className="text-black-300 grid gri-col-1 font-bold text-left">
                        <div>
                            PRUEBA
                        </div>
                     </div>
                    </li>
                 </ul>
                </div>
                                   )}
            
            </div>

            <div className="absolute" >
          <button className="w-full text-left py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown5}>
               <label className="bg-[#1F8AC0] text-black tracking-[1px] font-bold hover:text-gray-200 transition-colors" 
                   style={{position:'absolute', top:'-377px', left: '163px'}} >Notificaciones
               </label>
              </button>
                 {dropdown5Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#14213D] shadow-lg" 
                       style={{position: 'absolute', left: '-440px', top: '-280px', width: '800px'}}>
                  <ul className="py-1" >
                    <li >
                     <div className="text-black-300 grid gri-col-1 font-bold text-left">
                        <div>
                            hola
                        </div>
                     </div>
                    </li>
                 </ul>
                </div>
                                   )}
            
            </div>

            <div className="absolute" >
          <button className="w-full text-left py-2 px-4 rounded-md shadow-sm" 
                      onClick={toggleDropdown6}>
               <label className="bg-[#1F8AC0] text-black tracking-[1px] font-bold hover:text-gray-200 transition-colors" 
                   style={{position:'absolute', top:'-377px', left: '320px'}} >Historial
               </label>
              </button>
                 {dropdown6Open && (
                  <div className="z-10 w-full mt-2 rounded-md bg-[#14213D] shadow-lg" 
                       style={{position: 'absolute', left: '-440px', top: '-280px', width: '800px'}}>
                  <ul className="py-1" >
                    <li >
                     <div className="text-black-300 grid gri-col-1 font-bold text-left">
                        <div>
                            hola
                        </div>
                     </div>
                    </li>
                 </ul>
                </div>
                                   )}
            
            </div>

          </li>
         </ul>
        </header>
    </div>

)

}

    

export default App