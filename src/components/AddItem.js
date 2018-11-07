import React from 'react';

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddItem(e) {
        e.preventDefault();
        console.log(e.target.elements.listItem)
        const item = e.target.elements.listItem.value.trim();
        const error =  this.props.handleAddItem(item);
        this.setState(() => ({ error }));
       
        if (!error) {
            e.target.elements.item.value = '';
        }
    } 

    render() {
        return (
            <div>
                {this.state.error && <p className="add-item__error">{this.state.error}</p>}
                <form className="add-item" onSubmit={this.handleAddItem}>
                    <input className="add-item__input" type='text' name='listItem' />
                </form>
            </div>
        );
    }
}