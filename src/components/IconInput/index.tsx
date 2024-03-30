interface InputProps {
    icon: React.FC,
    className?: string,
    placeholder?: string
}

export function IconInput({icon: Icon, ...rest} : InputProps){
    return(
        <div className="flex items-center gap-2 bg-white p-2 border-sky-100 border-2 rounded">
            {Icon && <Icon/>}
            <input className="outline-none h-8 w-full p-2 text-slate-600"{...rest}/>
        </div>
    )
}