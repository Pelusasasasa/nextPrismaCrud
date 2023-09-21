'use client'
import { useRouter } from "next/navigation"; 
import { userAgent } from "next/server";

const TaskCard = ({task}) => {

const router = useRouter();

  return (
        <div 
        onClick={() => router.push(`/tasks/${task.id}`)}
        className="bg-slate-900 p-3 hover:cursor-pointer hover:bg-slate-800">
          <h3 className="text-white text-2xl font-bold mb-2 text-center  " >{task.title}</h3>
          <p className="text-white text-center">{task.description}</p>
          <p className="text-white text-cen-ter">{new Date(task.createAt).toLocaleDateString()}</p>
        </div>
  )
}

export default TaskCard