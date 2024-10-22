import axios from 'axios'

const tareasApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tareas/api/v1/tareas/',
});

export const getAllTareas = () => tareasApi.get("/");

export const getTarea = (id) => tareasApi.get(`/${id}/`);

export const crearTarea = (tarea) => tareasApi.post("/", tarea);


export const eliminarTarea = (id) => tareasApi.delete(`/${id}/`);

export const actualizarTarea = (id, tarea) => tareasApi.put(`/${id}/`, tarea);