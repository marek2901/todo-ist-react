import React, {Component} from 'react';
import Item from './Item.js'
import NewItemForm from './NewItemForm.js'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            value: ''
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value && this.state.value.length != 0) {
            var contnts = this.state.contents
            contnts.push(this.state.value)
            this.setState({contents: contnts, value: ''})
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    itemDone(index) {
        this.setState({
            contents: this
                .state
                .contents
                .filter((e, i) => {
                    return (i + 1) != index
                })
        })
    }

    render() {
        var rows = []
        for (var index = 0; index < this.state.contents.length; index++) {
            rows.push(<Item
                onDone={this
                .itemDone
                .bind(this)}
                index={index + 1}
                content={this.state.contents[index]}/>)
        }
        return (
            <div>
                <ul className='Items-list col-md-12'>{rows}</ul>
                <br/>
                <NewItemForm
                    initialValue={this.state.value}
                    handleSubmit={this
                    .handleSubmit
                    .bind(this)}
                    handleChange={this
                    .handleChange
                    .bind(this)}/>
            </div>
        )
    }
}

export default ItemList