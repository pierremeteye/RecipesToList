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
            initialIngredients: [],
            ingredientsFromPopup: [],
            quantity: [],
            list: {}
        };
    }
    getIngredientsList(dataFromList){
        this.setState({list: dataFromList})
    }
    getNumber(getNumber){
        this.setState({quantity: getNumber})
    }
    componentDidMount() {
        fetch("recipes.json")
        .then(res => res.json())
        .then(
            (result) => {
                let getItemsArr = [];
                let newGetItemsArr = [];
                result.map((el, i) => {
                   return getItemsArr.push(el.ingredients);
                });
                getItemsArr.map((el, i) => {
                   return newGetItemsArr.push(el);
                });
                this.setState({
                    isLoaded: true,
                    items: result,
                    initialIngredients: getItemsArr
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            );
            // var getItems = this.state.items.map(function(index, elem) {
            //     console.log(index);
            //     return index.ingredients;
            // })
            // this.setState({initialIngredients: getItems})

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
                        initialIngredients={this.state.initialIngredients} 
                        shoppinglist={this.state.ingredientsFromPopup} 
                        getIngredient={this.getIngredientsList.bind(this)}
                        getNumber={this.getNumber.bind(this)}
                       
                    />
                    <ShoppingList 
                        data={this.state.items} 
                        list={this.state.list}
                        ingredients={this.state.ingredientsFromPopup}
                        quantity={this.state.quantity}
                    />
                </div>
            );
        }
    }
}

export default App;