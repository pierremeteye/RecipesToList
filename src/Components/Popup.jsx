import React, { Component } from 'react';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        };
    }

    togglePopup(i) {
        document.querySelector('.popup-'+i+'').classList.toggle('hide')
    }

    addToShoppingList(i) {
        console.log('Add to shopping list');
        console.log(i);
        var todo = {
            "name": "cherry tomatoes",
            "department": "Produce",
            "quantity": 237,
            "unit": "ml"
        };
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        fetch("shopping_list.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    ingredients: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    render() {
    	if (this.props.data) {
    		var recipes = this.props.data.map((recipe, i) => {
    			return  <div className={`popup-${i} hide`} key={i}>
        					<div className="popup">
                                <div className="col-6 bgWhite fullCentered p-20 p-t-0">
                                    <a href="#" onClick={this.togglePopup.bind(this, i)}>
                                        <i className="zmdi zmdi-close fs-50 f-r p-10 p-r-0"></i>
                                    </a>
                                    <h2 className="col-12 f-l center">{recipe.title} / <span className="green">{recipe.servings} persons</span></h2>
                                    <div className="col-12 f-l p-t-45">
                                        <div className="col-6 f-l">
                                            <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
                                            <ul className="col-12 f-l noListStyle p-b-10">
                                                {
                                                    recipe.ingredients.map((el, i)  => {
                                                        return <li className="uppercaseFirstLetter" key={i}>{el.name}<span className="red">{el.quantity == 0 ? '' : ' / ' + el.quantity} {el.quantity == 0 ? '' : el.unit}</span></li>;
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="col-6 f-l">
                                            <img className="col-8 offset-col-2 f-l" src={'images/' + recipe.image_name} alt={recipe.title}/>
                                        </div>
                                    </div>
                                    <div className="col-12 f-l">
                                        <h3 className="p-t-10 p-b-10">Instructions</h3>
                                        <p>{recipe.instructions}</p>
                                    </div>
                                    <div className="col-12 f-l p-t-30 p-b-30 center">
                                        <button onClick={this.addToShoppingList.bind(this, i)} className="pointer">Add this recipe to my shopping list</button>
                                    </div>
                                </div>
                            </div>
                        	<div className="both"></div>
        				</div>
    		})
    	;

    	return recipes;

    	}
    }
}