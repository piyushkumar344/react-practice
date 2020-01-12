import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    person : [
         { id : "abc" , name : 'me' , age :'32'},
        { id :"bcd" , name : 'mikha' , age : 30},
        { id : "cde" ,name : 'tikha' , age :'32'},

    ],
    otherstate : "checklater",
    condition : false
      
    
  }
  swithNameHandler = (newname) => {
    this.setState({
      person : [
         { name : newname , age :"31"},
        { name : "mikha" , age :"31"},
        { name : "tikha" , age :"21"},

    ]
    });
  }
  nameChangeHandler = (event,id) => {
      const index=this.state.person.findIndex( p => {
        return p.id===id;
      
      });

      const newperson={...this.state.person[index]};
      newperson.name=event.target.value;
       const newpersons=[...this.state.person];
       newpersons[index]=newperson;

        this.setState({
         person : newpersons 
    })
  }
  deleteHandler =  (index) => {
    const newperson=this.state.person.slice();
    newperson.splice(index,1);
    this.setState({
      person : newperson
    })
  }
  togglepersons= () =>{
    const already=this.state.condition;
    this.setState({
      condition : !already
    })
  }

  render(){
    const style ={
      backgroundColor : 'green',
      border :'1px solid blue',
      cursor : 'pointer',
      padding : '8px',
      color : 'white',
      size : ' 20px',
    }
    let persons=null;
    if(this.state.condition){
      persons=(
         <div>
         {this.state.person.map( (person,index) => {

          return <Person 
          click={() => this.deleteHandler(index)}
          changed={(event) => this.nameChangeHandler(event, person.id)}
          key={person.id}
          name={person.name} 
          age={person.age} />
         })}
         </div>

       );
      style.backgroundColor = 'red';

    }
    let classes=[];
    if(this.state.person.length <=2)classes.push('red');
    if(this.state.person.length <=1)classes.push('bold');

  return (
    
    <div className="App">
       <h1> who let the dogs out</h1>
       <p className={classes.join(' ')}> this works as expected </p>
       <button  style={style} onClick={this.togglepersons} > click </button>
        {persons}
    </div>
  
  );
}


}
    


export default App;
