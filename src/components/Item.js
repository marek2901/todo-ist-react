import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <li>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Todo #{this.props.index}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='col-md-10'>
                            {this.props.content}
                        </div>
                        <div className='col-md-2'>
                            <a
                                href='#'
                                className='btn btn-default'
                                onClick={this
                                .done
                                .bind(this)}>done</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
    done(event) {
        this
            .props
            .onDone(this.props.index)
    }
}

export default Item