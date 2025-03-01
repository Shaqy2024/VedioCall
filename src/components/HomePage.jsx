import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
   const [input, setInput] = useState('');

   useEffect(() => {    


    
    }, [])

const navigate = useNavigate();
   const submitHandler = () => {
navigate(`/room/${input}`)
   }
  return (
    <div>

        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter Your Name" />
            <Link onClick={submitHandler} to={`/room/${input}`} > Join</Link>
        </div>
    </div>
  )
}

export default HomePage