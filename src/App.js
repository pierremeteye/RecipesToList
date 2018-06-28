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
            ingredients: []
        };
    }

    getIngredientsList(dataFromList){
        console.log(this.state);
        this.setState({ingredients: Array.from(new Set(dataFromList))})
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
                    <RecipeList className="test" data={this.state.items} shoppinglist={this.state.ingredients} getIngredient={this.getIngredientsList.bind(this)}/>
                    <ShoppingList data={this.state.items} list={this.state.ingredients}/>
                </div>
            );
        }
    }
}

export default App;