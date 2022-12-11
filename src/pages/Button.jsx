import React from "react";

const Mybutton = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          border: "none",
          outline: "none",
          padding: "0px 12px",
          margin: "12px",
          borderRadius: "0px",
        }}
      >
        {props.content}
      </button>
    </div>
  );
};

export default function Buttom() {
  return (
    <div className="space-y-2">
      <h1 className="uppercase">Button page</h1>
      <Mybutton
        content={'login'}
        bgColor={'red'}
        color={'white'}
        onClick={() => {
          console.info('Login clicked !');
        }}
      />
      <Mybutton bgColor={"yellow"} color={"black"} content={"register"} />
      <Mybutton bgColor={"green"} color={"white"} content={"logout"} />
      <Mybutton bgColor={"blue"} color={"white"} content={"home"} />
    </div>
  );
}
