"use client"

import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { FormEventHandler, useState } from 'react'
import { addTodo } from '@/api'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
const router = useRouter();
const [modalOpen, setModalOpen] = useState<boolean>(false);
const [value, setValue] = useState<string>("");

const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();
  await addTodo({
    id: uuidv4(),
    text: value
  });
  setValue("");
  setModalOpen(false);
  router.refresh();
}

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full px-3'>
        Add new Task <AiOutlinePlus size={15}/>
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {/* children */}
        <form onSubmit={handleSubmit}>
          <h3 className='font-bold text-lg'>Add New Task</h3>
          <div className='modal-action'>
          <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text" 
            placeholder="Add Task" 
            className="input input-bordered w-full" 
          />
          </div>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask