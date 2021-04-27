import React,{Component} from 'react'


export class AddToDo extends Component{
    state={
        title:''
    }
    onSubmit= (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title:''});
    }
    onChange=(e)=>this.setState({[e.target.name]:e.target.value});
    render(){
        return(
            <form onSubmit={this.onSubmit}style={{display:'flex',margin:'10px'}}>
            <input type="text" name="title" placeholder="Add To Do" onChange={this.onChange} value={this.state.title} style={{flex:'10',opacity:'0.6',border:'none',borderColor:'rgb(68, 128, 24)'}}></input>
            <input type="submit" value="Submit" className="btn" style={{flex:'1',padding:'1px'}} ></input>
            </form>
        );
            
        
    }
    
}
export default AddToDo;