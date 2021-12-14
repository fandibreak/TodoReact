import React, { Component } from "react";
import Item from "./Item";

class Itemlist extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
      lastTaskAdded : {}, 
      tasklist : []
    }
  }
  

createTask = (name,date,assignee) => {

    // const name =  "naranja"
    // const price = "1"
    // const name =  prompt ("Introduce Producto")
    // const price = prompt ("Introduce Precio")
    const newTask = {name,date,assignee}

    this.setState ({lastTaskAdded:newTask}) //setState Modifica el Estado
    this.setState ({tasklist:[...this.state.tasklist,newTask]}) //Aqui agrego a la lista de productos todo lo que habia [...,+ los nuevos pruductos]
    alert(`Tarea ${name}, Con Fecha  ${date} , asignada a ${assignee} creada`)

}


deleteAllProducts = () => {
  alert("borrado")
  //Vamos a vaciar el array
  this.setState({tasklist:[]})
}

//Pasar la posicion/kety del producto a borrar
//Buscar el elemento en el array del elemento a borrar
//Iterar ? Bucle ? otra cosa ? filter ? indexoff ? --->Utilizamos filter
deleteItem = (i) => {
const tasks = this.state.tasklist.filter((task,j)=>j!==i)
this.setState({tasklist:tasks})
}

paintTask (){

  //1-Leer el state de products list 
  //2-Los recorre como un bucle
  //3--Los pita en el dom 
  //4 Trasnformamaos datos del array con a componentes product-->Map
  //5 hay que generar una key por producto

  //Teniamos {},{},{},{}]--->[]
  //Devuelve un array lleno de product

return this.state.tasklist.map((product,i)=> <Item info={product} delete ={()=>this.deleteItem(i)} key = {i}/>)

}

  /*Aqui hacemos el preventDefault para que no se recargue la pagina, obtenemos los valores del formulario y 
  llamamos a la funcion de creacioon de la tarea pasandole los argumentos.
  */
  handleChange = (event) =>{
    console.log(event.target.value);

}
  handleSubmit = (event) => {
    event.preventDefault();
   const name =  event.target.name.value
   const date = event.target.date.value
   const assignee = event.target.assignee.value
//Llamo a la funcion despues de leer los campos internos 
   this.createTask (name,date,assignee)
    }

  
  render() {

    
    const name =  this.state.lastTaskAdded.name
    const date = this.state.lastTaskAdded.date
    const assignee = this.state.lastTaskAdded.assignee

    return (
    
    <div>
    <h1>Aqui estoy en el componentes ItemList</h1> 
    <h2>Creador de tareas</h2>
    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nombre Tarea:</label><br/>
                    <input type="text" id="name" name="name" onChange={this.handleChange}/><br/>

                    <label htmlFor="date">Fecha:</label><br/>
                    <input type="date" id="date" name="date"/><br/>

                    <label htmlFor="assignee">Responsable:</label><br/>
                    <input type="list" id="assignee" name="assignee"/><br/>
                    <input type="submit" value="Crear tarea"/>
                </form>
                {this.paintTask()}
                 <button onClick={this.deleteAllProducts}>Borrar Todo </button>
                 <button onClick={this.createTask}>Crear</button>
                 <h5>Ultimo producto creado : {name} con precio {date} , con precio {assignee}€</h5>

      </div>
    )
  }
}

export default Itemlist;
