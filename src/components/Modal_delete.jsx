import React from 'react'
import { X } from 'lucide-react';
import { useState } from 'react';
const modal_delete = ({onclose,onconfirmdelete}) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className='fixed inset-0 backdrop-blur-sm bg-white/30  flex justify-center items-center'>
        <div className='mt-1 flex flex-col gap-5 bg-violet-500 p-5 rounded'>
          <button className='place-self-end' onClick={onclose}><X size={25} /></button>
          <div>
            <h1 className='text-2xl text-gray-900 font-bold p-2'>Are you Sure?</h1>
            <p className='text-gray-700 text-md p-2 '>Are you sure you want to delete this todo?</p>
            <div className='flex gap-5 mt-4 justify-center'>
            <button className='bg-red-500 text-white px-5 py-2 rounded' onClick={() => {onclose();onconfirmdelete(); setConfirm(true)}} >Confirm</button>
            <button className='bg-gray-500 text-white px-5 py-2 rounded' onClick={() => {onclose(); setConfirm(false)}}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default modal_delete
