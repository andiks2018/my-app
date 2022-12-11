import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pengunjung = ()=>{
    const[name, setName]=useState("")
    const [isUpdate, setUpdate]=useState(false)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setName(json.name)
        });
            
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setUpdate(true)
            });
    }

    //componentdid update
    useEffect(()=>{
        if(isUpdate){
            alert("Nama sukses diupdate")
            setUpdate(false)
        }
    }, [isUpdate])

    //component will unmount
    useEffect(()=>{
        return()=>{
            console.log('componen di copot')
        }
    }, [])
    return(
        <div>
            <h1>Pengunjung</h1>
            <hr />
            <h3>Update Name :</h3>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
                <input type="text"
                    placeholder='change name'
                    name ='name'
                    onChange={(e)=>setName(e.target.value)} 
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
const Axios = ()=>{

    const [user, setUser]=useState([])
    const getUserData = async ()=>{
        try{
            const response = await axios(
                'https://jsonplaceholder.typicode.com/users'
            )
            return response
        }
        catch(error){
            return error
        }
    }
    useEffect(()=>{
        getUserData()
        .then((res)=>{
            //console.log(res.data)
            setUser(res.data)
        })
        .catch((err)=>{console.error(err)})
    }, [])

    return(
        <div className='space-y-4'>
            <h3 className='font-bold'>Fetching data axios</h3>

            {user.map((e)=>(
                <div key={e.id}>
                    <h5>{e.name}</h5>
                    <p>{e.phone}</p>
                    <p>{e.email}</p>
                </div>
            ))}
            
        </div>
    )
}
export default function Fetch() {
  return (
    <div className=' ml-5 space-y-5'>
        <h1 className='mb-6 uppercase text-xl font-bold text-center underline'>Halaman fecth</h1>
        <Pengunjung />
        <hr />
        <Axios />
        
    </div>
  )
}
