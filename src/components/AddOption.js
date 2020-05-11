import React from 'react'

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error:undefined
        }
        this.onFormSumit=this.onFormSumit.bind(this)
    }
    onFormSumit(event){
        event.preventDefault();
        let option=event.target.elements.option.value.trim();
        let error = this.props.handleAddOption(option)
        event.target.elements.option.value=''
        this.setState(() => {
            return {
                error:error
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.onFormSumit}>
                    <input className="add-option__input" type="text" name="option" placeholder="enter the value"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}