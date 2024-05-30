
import { IconInput } from './components/IconInput'
import { VscAccount } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";
import Hero from "./assets/6415568_26081.svg"


function App() {

  return (
    <>
      <div className="w-screen h-screen border-2 bg-sky-100 overflow-hidden">
        <main className="flex justify-center items-center h-full">

          <form className='flex flex-col justify-between text-center h-4/6 md:w-2/6 border-2 border-sky-300  shadow-md py-4 px-8 bg-white rounded'>

            <img src={Hero} className='h-72 object-contain'/>

            <div className='space-y-2 md:text-xl'>
              <IconInput icon={VscAccount} placeholder="seuemail@email.com" />
              <IconInput icon={RiLockPasswordLine} placeholder="suasenha123" />
            </div>

            <button className='rounded text-white h-10 font-bold bg-sky-700'> Entrar </button>
            <p className='text-sky-700 font-bold mb-8 underline text-sm'> Não possui conta? Se cadastre clicando aqui </p>
          </form>
        </main>
      </div>
    </>
  )
}

export default App
