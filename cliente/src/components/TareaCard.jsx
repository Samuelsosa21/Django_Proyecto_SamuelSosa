import { useNavigate } from "react-router-dom";

export function TareaCard({ tarea }) {

    const navigate = useNavigate()

    return (
        <div className="bg-zinc-800 p-3 hover:bg-gray-700 hover:cursor-pointer rounded-lg"
            onClick={() => {
                navigate(`/tareas/${tarea.id}`)
            }}
        >
            <h1 className="font-bold uppercase">{tarea.title}</h1>
            <p className="text-slate-400">{tarea.description}</p>
        </div>
    );
}