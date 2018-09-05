import React, { Component } from 'react';

import { connect } from 'react-redux';
import { popupOpenAction, popupCloseAction, selectedRecipe } from '../actions/actions.js'

import Popup from "./Popup";

class RecipeList extends Component {

    getIngredientsPopup(dataFromPopup) {
        this.props.getIngredient(dataFromPopup)
    }
    
    getNumber(getNumber){
        this.props.getNumber(getNumber)
    }
    
    showRecipe(index) {
        this.props.onSelectedRecipe(index)
        this.props.showRecipe('yes')
    }
    
    hideRecipe(){
        this.props.hideRecipe('no')
    }
    
    render() {
		var recipes = this.props.articles.map((recipe, i) => {
			return  <div key={i} className="col-12 f-l relative m-t-10">
        				<div className="col-8 f-l">
                            <p className="col-8 f-l">{recipe.title}</p>
                            <button className="f-l pointer" onClick={this.showRecipe.bind(this, i)}>Voir la recette</button>
                        </div>
                        <div className="col-4 f-l">
                            <img className="col-4 f-l" src={'images/' + recipe.image_name} alt={recipe.title}/>
                        </div>
        			</div>;
		});
        return (
            <div className="RecipeList col-12">
	            <div className="col-6 f-l">
                    <div className="p-30">
                    <h3 className="col-12 f-l p-b-10">Ingredients List</h3>
                        {recipes}
                        <div className={this.props.popup === 'no' ? 'popup hide' : 'popup'}>
                            <div className="col-6 bgWhite fullCentered p-20 p-t-0">
                                <p className="pointer" onClick={this.hideRecipe.bind(this)}>
                                    <i className="zmdi zmdi-close fs-50 f-r p-10 p-r-0"></i>
                                </p>
                                <Popup />
                            </div>
                        </div>
                        <div className="both"></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articles: state.articles,
    popup: state.popup,
    selected_recipe: state.selected_recipe
})

const mapActionToProps = {
    showRecipe: popupOpenAction,
    hideRecipe: popupCloseAction,
    onSelectedRecipe: selectedRecipe
}

export default connect(mapStateToProps, mapActionToProps)(RecipeList);