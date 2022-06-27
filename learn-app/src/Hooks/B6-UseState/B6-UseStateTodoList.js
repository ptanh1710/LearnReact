import React from 'react'
import { useState } from 'react'

function B6UseStateTodoList() {

    const [jobs, setJobs] = useState(() => {
        const jsonJobs = JSON.parse(localStorage.getItem('jobs'))

        return jsonJobs || []
    })
    const [job, setJob] = useState('')

    const hanldeAdd = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)

            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob('')
    }

    const handleRemoveItem = (id) => {
        // const jsonJobs = JSON.parse(localStorage.getItem('jobs'))
        const json = jobs.filter((item,i) => id !== i)
        setJobs(json);
        localStorage.setItem('jobs', JSON.stringify(json))
        // setJobs(jsonJobs)
    }

    const hanldeRemoveAll = () => {
        localStorage.removeItem('jobs')
        setJobs([])
    }

    return (
        <div className='wrapper'>
            <h5>TodoList basic with useState</h5>
            <input
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={hanldeAdd}>Add</button>
            <button onClick={hanldeRemoveAll}>Remove all</button>
            <ul>
                {jobs.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button
                            onClick={() => handleRemoveItem(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default B6UseStateTodoList