import React, { Component } from 'react'

export class InputNumber extends Component {
    formGroup = () => {
        return {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: '0 0 20px'
        }
    }

    render() {
        const {id, number} = this.props.number;
        return (
            <React.Fragment>
                <div style={this.formGroup()}>
                    <div className="col-md-10">
                        <input className="form-control" onChange={this.props.addNumber.bind(this, id)} type="number" name="number" value={number} />
                    </div>
                    <div className="col-md-2">
                        <input className="form-control" onChange={this.props.togleChecked.bind(this, id)} type="checkbox" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default InputNumber
