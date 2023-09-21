'use client'

import { useRouter } from "next/navigation";

const NewPage = () => {

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    
    await fetch('/api/tasks',{
      method:'POST',
      body:JSON.stringify({title,description}),
      headers:{'Content-Type':'application/json'}
    });

    router.push('/');

  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={(e) => handleSubmit(e)} className='bg-slate-800 p-10 w-1/4' action=''>
        <label className='text-white font-bold text-sm' htmlFor='title'>Titulo de la tarea</label>
        <input id='title' className='text-black border border-gray-400 p-2 mb-4 w-full' type='text' placeholder='Title' />
        <label className='text-white font-bold text-sm' htmlFor='description'>Descripcion de la tarea</label>
        <textarea id='description' placeholder='Description' cols='30' rows='10' className='text-black border border-gray-400 p-2 mb-4 w-full'></textarea>

        <button className='bg-blue-500 font-bold hover:bg-blue-700 py-2 px-4 rounded text-white'>Create</button>

      </form>
    </div>
  )
}

export default NewPage