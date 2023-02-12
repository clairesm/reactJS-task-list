import React from 'react'
import { useState } from 'react'
const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    
    
    const [reminder,setReminder] = useState(false)
    const [status,setStatus] = useState('active')


    const onSubmit  = (e) => {
        e.preventDefault() 

        if (!text) { 
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder, status})
        setText('')
        setDay('')
        setReminder(false)
        setStatus('active')
    }
  return (
    <form onSubmit={onSubmit} className='add-form'>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label htmlFor="">date and time</label>
            <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">set reminder</label>
            <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value="save" className="btn btn-block" />
    </form>
  )
}

export default AddTask