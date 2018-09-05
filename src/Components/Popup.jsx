import React, { Component } from 'react';
import { connect } from 'react-redux';

import { shoppingList } from '../actions/actions.js';

const list = {};

class Popup extends Component {

    addToShoppingList() {

        this.props.articles[this.props.selected_recipe].ingredients.map((el, i)  => {

            if (Object.keys(list).length < 1) {
                list[i] = {
                    name: el.name,
                    quantity: Math.round(el.quantity),
                    unit: el.unit
                }
            } else {
                var check = false;
                for (var key in list) {
                    if (list[key].name === el.name) {
                        check = true;
                        list[key].quantity += Math.round(el.quantity);
                        break;
                    }
                }
                if (!check) {
                    list[Object.keys(list).length] = {
                        name: el.name,
                        quantity: Math.round(el.quantity),
                        unit: el.unit
                    }
                }
            }

            return true;

        });

        this.props.addToShoppingList(list);

    }

    render() {
        if (this.props.selected_recipe != null) {
            let recette = this.props.articles[this.props.selected_recipe];
            let ingredients = recette.ingredients.map((ingredient, i) => {
                let quantity = (ingredient.quantity === 0 ? '' : ' / ' + Math.round(ingredient.quantity*100)/100) + '' + (ingredient.quantity === 0 ? '' : ingredient.unit)
                return <li key={i}>{ingredient.name + quantity}</li>
            })

            return  <div>
                        <h2 className="col-12 f-l center">{recette.title} / <span className="green">{recette.servings} persons</span></h2>
                        <div className="col-12 f-l p-t-45">
                            <div className="col-6 f-l">
                                <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
                                <ul className="col-12 f-l noListStyle p-b-10">
                                    {ingredients}
                                </ul>
                            </div>
                            <div className="col-6 f-l">
                                <img className="col-8 offset-col-2 f-l" src={'images/' + recette.image_name} alt={recette.title}/>
                            </div>
                        </div>
                        <div className="col-12 f-l">
                            <h3 className="p-t-10 p-b-10">Instructions</h3>
                            <p>{recette.instructions}</p>
                        </div>
                        <div className="col-12 f-l p-t-30 p-b-30 center">
                            <button onClick={this.addToShoppingList.bind(this)} className="pointer">Add this recipe to my shopping list</button>
                        </div>
                    </div>
        } else {
            return false;                     
        }
    }
}

const mapStateToProps = state => ({
    articles: state.articles,
    selected_recipe: state.selected_recipe
})

const mapActionsToProps = {
    addToShoppingList: shoppingList
}

export default connect(mapStateToProps, mapActionsToProps)(Popup);