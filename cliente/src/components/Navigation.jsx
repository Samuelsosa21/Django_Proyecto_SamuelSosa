import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tareas">
                <h1 className="bg-blue-500 px-3 py-2 rounded-lg font-bold text-3x1 mb-4 hover:bg-sky-500 hover:cursor-pointer">App Tarea</h1>
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg mb-4 hover:bg-sky-500 hover:cursor-pointer">
                <Link to="/crear-tareas">Crear Tarea</Link>
            </button>
        </div>
    )
}