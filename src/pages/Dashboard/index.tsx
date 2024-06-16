import { FaHome } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IconInput } from "../../components/IconInput";
import { FaCalendarAlt } from "react-icons/fa";




const candidates = [
  {name: "Caio Marques", vaga: "Analista de Recursos Humanos", data: "26/07"},
  {name: "Caio Marques", vaga: "Analista de Recursos Humanos", data: "26/07"},
  {name: "Caio Marques", vaga: "Analista de Recursos Humanos", data: "26/07"},
  {name: "Caio Marques", vaga: "Analista de Recursos Humanos", data: "26/07"},
  {name: "Caio Marques", vaga: "Analista de Recursos Humanos", data: "26/07"},
  {name: "Caio Marques", vaga: "Analista de Recursos Humanos", data: "26/07"}
]



export function Dashboard() {

  return (
    <>
      <div className="w-screen h-screen bg-sky-100 ">
        <header className="h-[5vh] bg-white">
          header
        </header>

        <main className="flex h-[95vh] p-4 gap-4">
          <aside className="w-1/6 bg-sky-700 rounded">
            <nav className="">
              <ul className="">
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <FaHome /> </span> Inicio </a> </li>
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <MdPersonSearch /> </span> Candidatos </a> </li>
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <PiBagFill /> </span> Vagas </a> </li>
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <AiFillSignal /> </span> Relatórios </a> </li>
                <li className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold"> <a href="" className="flex items-center gap-4 p-4"> <span> <FaCalendarAlt /> </span> Calendário </a> </li>
              </ul>

              <a className="text-center border-b-2 border-gray-50 text-2xl text-white font-bold flex items-center gap-4 p-4" href="/"> <span> <BiSolidExit /> </span> Sair </a>
            </nav>
          </aside>

          <section className="h-full w-full bg-white overflow-hidden">
            <div className="h-full border-sky-100 border-2 rounded">
              <header className="">
                <IconInput icon={CiSearch} placeholder="Procurar" />
              </header>
              <section className="h-full overflow-y-auto pb-20 ">
                <ul className="">

                  {
                    candidates.map( candidate => (
                      <li className="p-4 border-b-2 border-sky-50">
                      <h2 className="text-xl font-bold uppercase"> {candidate.name} </h2>
                      <h3> Vaga: {candidate.vaga} </h3>
                      <p> Data da entrevista: {candidate.data} </p>
                      <div className="flex gap-4 mt-4">
                        <button className="bg-sky-100 text-xl" > Avaliar </button>
                        <button className="bg-sky-100 text-xl" > Ver avaliação </button>
                      </div>
                    </li>
                    ))
                  }
     
                </ul>
              </section>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}
