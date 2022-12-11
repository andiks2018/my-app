import React from "react";

//==================== Mybutton arrow function ====================================

const Mybutton = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        padding: "4px 20px",
        borderRadius: "10px",
      }}
    >
      {props.judul}
    </button>
  );
};

//==================== ProductCard  standar function ====================================

function ProductCard(props) {
  return (
    <div>
      <img
        src={props.image} alt="car"
        style={{
          borderRadius: "10px",
          boxShadow: "5px 10px 15px",
        }}
      />

      <div>
        <h3>{props.namabarang}</h3>
        <h3>Rp. {props.hargabarang}</h3>
      </div>

      <div>
        <button>-</button>
        <input type="number" step="10" min='0' max='100' />
        <button>+</button>
      </div>

      <Mybutton judul={"beli"} bgColor={"orange"} color={"white"} />
    </div>
  );
}

//==================== tampilan utama ====================================

export default function Props() {
  return (
    <div className="ml-5 space-y-5">
      <h1 className="uppercase">Halamaln props</h1> <hr />
      <div className="space-x-10 flex ">
        <ProductCard 
        image={"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=200"} 
        namabarang={"Mobil Merah"} 
        hargabarang={"500.000"} />

        <ProductCard 
        image={"https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=210"} 
        namabarang={"Mobil Putih"} 
        hargabarang={"1.500.000"} />

        <ProductCard 
        image={"https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=200"} 
        namabarang={"Mobil HItam"} 
        hargabarang={"2.000.000"} />
      </div>
    </div>
  );
}
