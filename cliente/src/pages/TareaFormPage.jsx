import { useEffect } from 'react';
import { set, useForm } from 'react-hook-form'
import { crearTarea, eliminarTarea, actualizarTarea, getTarea } from '../api/tareas.api';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast';

export function TareaFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const navigate = useNavigate();
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await actualizarTarea(params.id, data)
            toast.success('Tarea actualizada!', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        } else {
            await crearTarea(data);
            toast.success('Tarea Creada!', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }
        navigate('/tareas');

    });

    useEffect(() => {
        async function loadTarea() {
            if (params.id) {
                console.log('obteniendo datos...')
                const { data } = await getTarea(params.id);
                setValue('title', data.title)
                setValue('description', data.description)
            }
        }
        loadTarea()
    }, [])

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    {...register("title", { required: true })}
                    className='bg-zinc-500 p-3 rounded-lg block w-full mb-3'
                />
                {errors.title && <span>Título es requerido</span>}

                <textarea
                    rows="3"
                    placeholder="description"
                    {...register("description", { required: true })}
                    className='bg-zinc-500 p-3 rounded-lg block w-full mb-3'
                ></textarea>
                {errors.description && <span>Descripción es requerida</span>}
                <div >
                    <button className='bg-indigo-500 p-3 rounded-lg block w-48 mt-3 hover:bg-sky-500 hover:cursor-pointer'>
                        Guardar
                    </button>
                </div>
            </form>

            {params.id && (
                <div>
                    <button
                        className='bg-red-500 p-3 rounded-lg w-48 mt-3 hover:bg-red-600 hover:cursor-pointer'
                        onClick={async () => {
                            const accepted = window.confirm("Estas seguro?");
                            if (accepted) {
                                await eliminarTarea(params.id);
                                toast.success('Tarea eliminada!', {
                                    position: "bottom-right",
                                    style: {
                                        background: "#101010",
                                        color: "#fff"
                                    },
                                })
                                navigate('/tareas');
                            }
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            )}
        </div>
    );
}

