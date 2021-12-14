import React, { Component } from "react";

class Item extends Component {
 //reconst
 constructor(props) {
  super(props)
  this.state = {
    assignee : this.props.info.assignee || "Jalid"
  }
}
  render() {

  const {name,date,assignee}= this.props.info

      return (
          <div>
        <p>Tarea: {name}, Fecha Tarea: {date}, Responsable :{this.state.assignee}</p>
        <button onClick={this.props.delete}>Borrar</button>
          </div>
      )
  }
}



export default Item;


