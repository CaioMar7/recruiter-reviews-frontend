
import { IconInput } from "../../components/IconInput";
import { VscAccount } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Hero from "../../assets/6415568_26081.svg"


export function Register() {
  return (
    <>
      <div className="w-screen h-screen border-2 bg-sky-100 overflow-hidden">
        <main className="flex justify-center items-center h-full">

          <form className='flex flex-col justify-between text-center h-5/6 md:w-2/6  shadow-md py-4 px-8 bg-white rounded'>

            <img src={Hero} className='h-72 object-contain'/>

            <div className='space-y-2 md:text-xl'>
              <IconInput icon={VscAccount} placeholder="Name" />
              <IconInput icon={MdEmail} placeholder="Email" />
              <IconInput icon={RiLockPasswordLine} placeholder="Password" />
              <IconInput icon={RiLockPasswordLine} placeholder="Confirm Password" />
            </div>

            <button className='rounded text-white h-10 font-bold bg-sky-700'> Entrar </button>
            <p className='text-sky-700 font-bold mb-8 underline text-sm cursor-pointer'> <a href="/"> Já possui conta? Se faça login clicando aqui </a> </p>
          </form>
        </main>
      </div>
    </>
  )
}
