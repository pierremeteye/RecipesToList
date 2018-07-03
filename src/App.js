import React, { Component } from 'react';

// Components
import RecipeList from './Components/RecipeList';
import ShoppingList from './Components/ShoppingList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            ingredients: [],
            quantity: []
        };
    }
    getIngredientsList(dataFromList){
        this.setState({ingredients: Array.from(new Set(dataFromList))})
    }
    getNumber(getNumber){
        this.setState({quantity: getNumber})
    }
    componentDidMount() {
        fetch("recipes.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            );
    }
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="main">
                    <RecipeList 
                        data={this.state.items} 
                        shoppinglist={this.state.ingredients} 
                        getIngredient={this.getIngredientsList.bind(this)}
                        getNumber={this.getNumber.bind(this)}
                       
                    />
                    <ShoppingList 
                        data={this.state.items} 
                        ingredients={this.state.ingredients}
                        quantity={this.state.quantity}
                    />
                </div>
            );
        }
    }
}

export default App;