import React, { Component } from 'react';
import InputNumber from './InputNumber';

export class Number extends Component {
    render() {
        return this.props.numbers.map((number) => (
            <InputNumber key={number.id} calculate={this.props.calculate} number={number} togleChecked={this.props.togleChecked} addNumber={this.props.addNumber} />
        ))
    }
}

export default Number
