import React from 'react'
import { useState } from 'react'
import B7UseEffect from './B7-UseEffect'

export default function B7() {

    const [show, setShow] = useState(false)

    return (
        <div style={{padding: '10px'}}>
            <button onClick={()=>setShow(!show)}>Toggle</button>
            {!show || <B7UseEffect/>}
        </div>
    )
}
