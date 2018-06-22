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
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="main">
                    <RecipeList className="test" data={this.state.items} shoppinglist={this.state.ingredients}/>
                    <ShoppingList data={this.state.items} shoppinglist={this.state.ingredients}/>
                </div>
            );
        }
    }
}

export default App;