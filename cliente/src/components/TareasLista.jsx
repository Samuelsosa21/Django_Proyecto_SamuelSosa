import { useEffect, useState } from "react"
import { getAllTareas } from "../api/tareas.api"
import { TareaCard } from "./TareaCard";


export function TareasLista() {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        async function cargarTareas() {
            const respuesta = await getAllTareas();
            setTareas(respuesta.data);
        }
        cargarTareas()
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {tareas.map(tarea => (
                <TareaCard key={tarea.id} tarea={tarea} />
            ))}
        </div>
    )
}