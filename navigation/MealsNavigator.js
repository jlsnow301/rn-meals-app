import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMeals,
  MealDetail: MealsDetailsScreen,
});

export default createAppContainer(MealsNavigator);
