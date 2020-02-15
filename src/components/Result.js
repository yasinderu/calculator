import React, { Component } from 'react'

export class Result extends Component {
    render() {
        const {result} = this.props;
        return (
            <div style={{ width: '400px', margin: '20px auto 10px' }}>
                <h3> Hasil : {result} </h3>
            </div>
        )
    }
}

export default Result
