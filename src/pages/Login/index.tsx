
import { IconInput } from "../../components/IconInput";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Hero from "../../assets/6415568_26081.svg"


export function Login() {
  return (
    <>
      <div className="w-screen h-screen border-2 bg-sky-100 overflow-hidden">
        <main className="flex justify-center items-center h-full">

          <form className='flex flex-col justify-between text-center h-4/6 md:w-2/6  shadow-md py-4 px-8 bg-white rounded'>

            <img src={Hero} className='h-72 object-contain'/>

            <div className='space-y-2 md:text-xl'>
              <IconInput icon={MdEmail} placeholder="Email" />
              <IconInput icon={RiLockPasswordLine} placeholder="Password" />
            </div>

            <a className='rounded text-white h-10 font-bold bg-sky-700 flex items-center justify-center' href="/dashboard"> Entrar </a>
            <p className='text-sky-700 font-bold mb-8 underline text-sm cursor-pointer'> <a href="/register"> Não possui conta? Se cadastre clicando aqui </a> </p>
          </form>
        </main>
      </div>
    </>
  )
}
