import React, { Component } from 'react';

import Aux from '../../../hoc/Fit/Fit';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //this could be a functional component...dosent have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] Will Update');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:</strong>{this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }

};

export default OrderSummary;