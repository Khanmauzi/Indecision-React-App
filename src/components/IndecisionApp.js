import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'
export default class Indecision extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            title: 'Indecision App',
            subtitle: 'Put your life in the hands of Computer',
            options: [],
            optionSelected:undefined
        }
        this.handlePick=this.handlePick.bind(this);
        this.handleremoveAll=this.handleremoveAll.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handledeleteOption=this.handledeleteOption.bind(this);
        this.resetSelectedOption=this.resetSelectedOption.bind(this);
    }
    componentDidMount(){
        try{
            let json = localStorage.getItem('options');
            let options=JSON.parse(json);
            if(options) {
                this.setState(() => {
                    return {
                        options:options
                    }
                })
            }
      
        }catch(e) {

        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            let json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
        }
    }
    handleAddOption(option) {
        if(!option){
            return 'please enter the valid option'
        } else if(this.state.options.indexOf(option) > -1){
            return 'Value already exist'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    handleremoveAll() {
        this.setState(() => {
            return{
                options: []
            }
        })
    }
    handledeleteOption(option) {
        this.setState((prevState) => {
            return{
            options: prevState.options.filter((opt) => {
                return (opt !== option)
            })
        }
        })
    }
    handlePick(){
        let ranNum= Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[ranNum];
        this.setState(() => {
            return {
                optionSelected:option
            }
        })
    }
    resetSelectedOption() {
        this.setState(() => {
            return {
                optionSelected:undefined
            }
        })
    }
    render() {
        return (
            <div>
            <Header title={this.state.title} subtitle={this.state.subtitle} />
            <div className="container">
                <Action hasOptions={this.state.options.length>0 ? false:true} handlePick={this.handlePick}/>
                <div className="widget">
                    <Options options={this.state.options}  handleremoveAll={this.handleremoveAll} 
                            hasOptions={this.state.options.length>0 ? false:true}
                            handledeleteOption={this.handledeleteOption}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
            </div>
            <OptionModal resetSelectedOption={this.resetSelectedOption} option={this.state.optionSelected} />
        </div>
        )
    }
}