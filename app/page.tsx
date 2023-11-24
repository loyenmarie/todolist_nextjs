import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

//main component for the homepage
export default async function Home() {
  //fetches list of todos
  const tasks = await getAllTodos();

  return (
    <main className="max-w-xl mx-auto mt-4">
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}


