import React from "react"


class Parsinta extends React.Component{
    constructor(){
        super()
        this.state = {
            user : []
        }
    }

    

    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }

}

export default Parsinta