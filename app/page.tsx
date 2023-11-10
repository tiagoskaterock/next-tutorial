"use client"

import {useState, FormEvent} from "react" 
import {useRouter} from "next/navigation"

export default function Page() {

  const [inputVal, setInputVal] = useState("")

  const {push} = useRouter() 

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    push(`/prediction/${inputVal}`)
  }

  return (
    <div>
      <div>
        <h1>Enter your name</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Type your name..." 
          value={inputVal}
          className="text-black"
          onChange={ (e) => setInputVal(e.target.value) }
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  )
}
