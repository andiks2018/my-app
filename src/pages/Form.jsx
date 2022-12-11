import React, { useState } from "react"


const Stack = () => {

    const[data, setData]=useState([])
    const handleSubmit = (e)=>{
        e.preventDefault()

        let name = e.target.name.value
        let email = e.target.email.value
        let age = e.target.age.value

        console.log({name, email, age})

        setData([...data, {
            name : name,
            email : email,
            age : age,
            id : Date.now()
        }])

    }
    return (
        <div className="ml-3">
            <h1>Hello</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name :</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">email :</label>
                    <input type="text" id="email" />
                </div>
                <div>
                    <label htmlFor="age">age :</label>
                    <input type="text" id="age" />
                </div>
                <div>
                    <button className="bg-blue-500 rounded px-6 py-2">Submit</button>
                </div>
            </form>
            <div>
                {data.map((e)=>(
                    <div key={e.id}>
                        <h3>{e.name}</h3>
                        <p>{e.email}</p>
                        <p>{e.age}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Form() {
  return (
    <div>
      <h1>Hello selamat datang di halaman Form </h1>
      <Stack />
 
    </div>
  );
}
