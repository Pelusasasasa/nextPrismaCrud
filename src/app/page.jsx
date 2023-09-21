import TaskCard from "@/components/TaskCard";

async function loadTasks(){
  const res = await fetch('http://localhost:3000/api/tasks');
  const data = await res.json();
  return data
}

const HomePage = async() => {
  const tasks = await loadTasks();
  console.log(tasks)
  return (
    <section className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </section>
  )
}

export default HomePage