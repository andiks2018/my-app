import React from "react";


//kita baut button
const HapusButton = (props)=>{
  return (
    <button className=""
    style={{
      backgroundColor : props.kasihWarna,
      color : props.kasihWarnaTulisan,
      padding : "5px 20px",
      borderRadius :"10px",
    }}>Submit</button>
  )
}

function TampilkanButton (){
  return(
    <div>
      <HapusButton  kasihWarna="blue" kasihWarnaTulisan='white'/>
      <HapusButton  kasihWarna="blue" kasihWarnaTulisan='white'/>
      <HapusButton  kasihWarna="blue" kasihWarnaTulisan='white'/>
      <HapusButton  kasihWarna="blue" kasihWarnaTulisan='white'/>
    </div>
  )
}



// halaman utama
export default function Hapus(){
  return(
    <div className="space-y-5">
      <h1>Halaman Hapus</h1>
      <hr />
      <HapusButton />
      <TampilkanButton />
    </div>
  )
}