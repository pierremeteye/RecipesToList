import React, { Component } from 'react';

// Components
import RecipeList from './Components/RecipeList';
import ShoppingList from './Components/ShoppingList';

import { connect } from 'react-redux';
import articleReducer from './actions/actions.js';

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

    componentDidMount() {
        this.props.onApiRequest();
    }

    render() {
        return (
            <div id="main">
                <RecipeList />
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

const mapStateToProps = state => ({
    articles: state.articles
})

const mapActionsToProps = {
    onApiRequest: articleReducer
}

export default connect(mapStateToProps, mapActionsToProps)(App);