import React, { useState } from 'react'
import './Modal.scss'
import ModalItem from './ModalItem'

const Modal = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='AppModal'>
      <button onClick={() => setOpen(true)} className='open-modal-btn'>✨ Открыть окно</button>
      <ModalItem open={open} setOpen={setOpen}>
        <img src='https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' />
        <h3>This is Modal window</h3>
      </ModalItem>
    </div>
  )
}

export { Modal }