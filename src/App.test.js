import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

Enzyme.configure({ adapter: new Adapter() });

// Components import
import App from './App.js';
import Popup from './Components/Popup.jsx';
import RecipeList from './Components/RecipeList.jsx';
import ShoppingList from './Components/ShoppingList.jsx';

it("renders correctly App Component", () => {
	const AppTest = shallow(
		<App />
		);
	expect(AppTest);
  // expect(AppTest).toMatchSnapshot();
});

it("renders correctly Popup Component", () => {
	const dataPopup = {
		title: 'test',
		arr: ['test'],
		value: 0
	}
	const PopupTest = shallow(
		<Popup 
		data={dataPopup.title} 
		getValue={dataPopup.value}
		initialIngredients={dataPopup.arr}
		/>
		);
	expect(PopupTest);
  // expect(PopupTest).toMatchSnapshot();
});

it("renders correctly RecipeList Component", () => {
	const dataRecipeList = {
		arr: ['test']
	}
	const RecipeListTest = shallow(
		<RecipeList 
		data={dataRecipeList.arr} 
		/>
		);
	expect(RecipeListTest);
  // expect(RecipeListTest).toMatchSnapshot();
});

it("renders correctly ShoppingList Component", () => {
	const ShoppingListTest = shallow(
		<ShoppingList />
		);
	expect(ShoppingListTest);
  // expect(ShoppingListTest).toMatchSnapshot();
});