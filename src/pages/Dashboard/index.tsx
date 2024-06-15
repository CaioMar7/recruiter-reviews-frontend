import { FaHome } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";






export function Dashboard() {

  return (
    <>
      <div className="w-screen h-screen bg-sky-100">
        <header className="h-[5vh] bg-white">
          header
        </header>

        <main className="flex h-[95vh] gap-4 p-4">
          <aside className="w-1/6 bg-sky-700">
            <nav className="">
              <ul className="">
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <FaHome/> </span> Inicio </a> </li>
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <MdPersonSearch/> </span> Candidatos </a> </li>
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <PiBagFill/> </span> Vagas </a> </li>
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <AiFillSignal/> </span> Relatórios </a> </li>
              </ul>

            
              <a className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold flex items-center gap-4 p-4" href="/"> <span> <BiSolidExit/> </span> Sair </a>
            </nav>
          </aside>

          <section className="h-full w-5/6 bg-white">
            dashboard
          </section>

        </main>
      </div>
    </>
  )
}
