import React from 'react';

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({adapter: new Adapter() })

import App from "./App";
import RecipeList from "./Components/RecipeList";
import ShoppingList from "./Components/ShoppingList";

const AppComponent = shallow( <App /> ),
	RecipeListComponent = shallow( <RecipeList /> ),
	ShoppingListComponent = shallow( <ShoppingList /> )
;

//For snapshots

// const AppComponent = shallow(
// 	<App />
// ).getElement();

const RecipeListSnapshot = shallow(
	<RecipeList />
).getElement();

// const ShoppingListComponent = shallow(
// 	<ShoppingList />
// ).getElement();

import sum from './tests/sum.js';
import sub from './tests/sub.js';

describe('App Component', () => {
	it('should return App Component', () => {
		expect(AppComponent);
	});
});

describe('RecipeList Component', () => {
	it('should return RecipeList Component', () => {
		expect(RecipeListSnapshot).toMatchSnapshot();
	});
	it('should return a button', () => {
		expect(RecipeListComponent.find('.RecipeList').length).toEqual(1);
	});
});

describe('ShoppingList Component', () => {
	it('should return ShoppingList Component', () => {
		expect(ShoppingList);
	});
});

describe('Button', () => {
 it('Should have a button', () => {
   	
	// wrapper.find('a').simulate('click');
	// expect(wrapper.find('.clicks-1').length).to.equal(1);
 });
});