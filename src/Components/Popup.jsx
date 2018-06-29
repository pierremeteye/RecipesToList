import React, { Component } from 'react';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            quantity: [],
            list: ''
        };
    }

    addToShoppingList(el, i) {
        this.props.data[this.props.getValue].ingredients.map((el, i)  => {
            let quantity = (el.quantity === 0 ? '' : ' / ' + Math.round(el.quantity)) + '' + (el.quantity === 0 ? '' : el.unit)
            this.state.ingredients.push(el.name)
            this.state.quantity.push(Math.round(el.quantity))
        })
        this.props.getNumber(this.state.quantity);
        this.props.getIngredients(this.state.ingredients);

        let arr = this.state.ingredients,
            list = {}
        ;

        for (var i = 0; i < arr.length; i++) {
            if (list[this.state.ingredients[i]] === undefined) {
                list[this.state.ingredients[i]] = this.state.quantity[i];
            } else {
                list[this.state.ingredients[i]] += this.state.quantity[i];   
            }
        }
        this.setState({
            list: list
        })        
        console.log(this.state.list);
    }

    render() {
        if (this.props.getValue === null) {
            return '';
        } else {
            return  <div>
                        <h2 className="col-12 f-l center">{this.props.data[this.props.getValue].title} / <span className="green">{this.props.data[this.props.getValue].servings} persons</span></h2>
                        <div className="col-12 f-l p-t-45">
                            <div className="col-6 f-l">
                                <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
                                <ul className="col-12 f-l noListStyle p-b-10">
                                    {
                                        this.props.data[this.props.getValue].ingredients.map((el, i)  => {
                                            return <li className="uppercaseFirstLetter" key={i}>{el.name}<span className="red">{el.quantity === 0 ? '' : ' / ' + el.quantity} {el.quantity === 0 ? '' : el.unit}</span></li>;
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-6 f-l">
                                <img className="col-8 offset-col-2 f-l" src={'images/' + this.props.data[this.props.getValue].image_name} alt={this.props.data[this.props.getValue].title}/>
                            </div>
                        </div>
                        <div className="col-12 f-l">
                            <h3 className="p-t-10 p-b-10">Instructions</h3>
                            <p>{this.props.data[this.props.getValue].instructions}</p>
                        </div>
                        <div className="col-12 f-l p-t-30 p-b-30 center">
                            <button onClick={this.addToShoppingList.bind(this)} className="pointer">Add this recipe to my shopping list</button>
                        </div>
                    </div>
                                  
        }
    }
}