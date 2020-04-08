import React, { Component } from 'react';

export default class From extends Component
{
    constructor(props){
        super(props)
        this.state={
            searchString: {
                strValue: "",
                Error: false,
            }   
        }
    }

    handleField = e => {
        this.setState({
            searchString:{
                ...this.state.searchString,
                strValue: e.target.value
            }   
        })
    }

    handleForm = e =>{
        e.preventDefault();
        if(this.state.searchString.strValue===""){
            this.setState({
                searchString:{
                    ...this.state.searchString,
                    error:true
                }   
            })
        } else {
            this.setState({
                searchString:{
                    ...this.state.searchString,
                    error: false
                }  
            })
        }
        this.props.fetchGif(this.state.searchString.strValue)
    }

    render(){
        return(
            <form onSubmit={this.handleForm}>
                <input
                type="text"
                className={this.state.searchString.error ? "error" : ""}
                value={this.state.searchString.strValue}
                onChange={this.handleField}
                />
                            
                <input
                type='Submit'
                value='Geef me de gif'
                />
            </form>
        )
    }
}