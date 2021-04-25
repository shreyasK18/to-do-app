import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Todoitem extends Component {
    
   
    state={
        date:new Date(),
        priority:"low",
        notes:""
    }
   
    getStyle=()=>{
       return{
           display:'block',
           backgroundColor:'#fff',
           borderRadius:'10px',
           margin:'20px 10px',
           boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
           padding:'10px',
           border:'1px solid rgb(85 192 35)',
           textDecoration: this.props.todo.completed ? 'line-through' :'none',
           borderLeft:this.props.todo.priority==='high' ? '5px solid red' : this.props.todo.priority==='medium' ? '5px solid orange': '5px solid blue'
       }
    }
    
    setNewDate=(newdate)=> {
        this.setState({date:newdate});
        this.props.setDate(this.props.todo.id,this.state.date);
    }
    setNewPriority=(e)=>{

        this.setState({priority:e.target.value});
        this.props.setPriority(this.props.todo.id,this.state.priority);
        this.getStyle();
    }
    setNewNotes=(e)=>{
        this.setState({notes:e.target.value});
        this.props.setNotes(this.props.todo.id,this.state.notes);
        console.log(this.props.todo.notes);

    }
    getTaskDate=(date)=>{
       return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    }
    collapse=(e)=>{
        
        
       if(e.target == e.currentTarget || e.target.tagName=="P") {
           let collapseElement;
           if(e.target.tagName=="DIV"){
            collapseElement=e.target;
           } else{
            collapseElement=e.target.parentNode;
           }
            
            
            collapseElement.className="collapsible active";
            let content=collapseElement.nextElementSibling;
            
            if (content.style.display === "block") {
                collapseElement.className="collapsible";
                content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        }
    }
    render() {
        const { id, title,notes }=this.props.todo;
        return (
            <div style={this.getStyle()} >
                <div type="button" className="collapsible" onClick={e=>this.collapse(e)}>
                        <input type="checkbox" className="check" onChange={this.props.markComplete.bind(this,id)}/>
                        <p>{title}</p>
                         <p><i className="fa fa-calendar" aria-hidden="true"></i>{' '+this.getTaskDate(this.state.date)}</p>
                </div>
                <div className="content">
                    <div className="col" style={colText}>
                        <label htmlFor="notes">Notes</label>
                        <textarea rows="10" cols="30" placeholder="Notes" value={this.state.notes} onChange={e=>this.setNewNotes(e)}></textarea>
                    </div>
                    <div className="col">
                        <label htmlFor="due date">Due Date</label>
                        <DatePicker selected={this.state.date}  onChange={newdate=>this.setNewDate(newdate)}/>
                        <label htmlFor="Priority">Priority</label>
                        <select onChange={e=>this.setNewPriority(e)} value={this.props.todo.priority}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <button style={btnStyle} onClick={this.props.delToDo.bind(this,id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
// PropTypes
Todoitem.propTypes={
    todo: PropTypes.object.isRequired
};
const colText={
    borderRight:'1px solid black'
}
const btnStyle={
    backgroundColor:'red',
    color:'#fff',
    border:'none',
    padding:'5px 15px',
    fontSize:'14px',
    fontWeight:'bold',
    cursor:'pointer',
    float:'center'
};
export default Todoitem
