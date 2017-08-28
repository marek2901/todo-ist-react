import React, {Component} from 'react';

class NewItemForm extends Component {
    render() {
        return (
            <div className='col-md-12'>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Add TODO'
                            onChange={this.props.handleChange}
                            value={this.props.initialValue}/>
                        <input type="submit" value="Submit" className="btn btn-default"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewItemForm