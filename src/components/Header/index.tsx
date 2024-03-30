import { FiLogOut } from "react-icons/fi";

export function Header() {

    const logged = false

    return (
        <nav className="uppercase mt-6 text-sky-700">
            {
                logged ?
                    <ul className="flex gap-4 w-full justify-end items-centerpx-4 py-2">
                        <li className="text-xl">Bem vindo, <span className="text-2xl"> Usuário </span></li>
                        <li className="text-2xl"><FiLogOut /> </li>
                    </ul>
                    :
                    <ul className="flex gap-8 w-full justify-center text-2xl">
                        <li>Home</li>
                        <li>Register</li>
                        <li>Login</li>
                    </ul>
            }
        </nav>
    )
}