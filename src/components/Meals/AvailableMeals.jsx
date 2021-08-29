import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Vegan Tofu Poke Bowl',
    description: 'This bowl features crispy tofu and onions marinated in a delicious ginger-soy sauce and paired with rice, red cabbage, cucumber, and avocado.',
    price: 10.99,
  },
  {
    id: 'm2',
    name: 'Nacho Avocado Salad',
    description: 'Healthy with a crunch.',
    price: 9.5,
  },
  {
    id: 'm3',
    name: 'Avo on Toast',
    description: 'Brown bread with smashed avocado, salt, black pepper, and citrus juice, topped of a sunnyside egg',
    price: 7.99,
  },
  {
    id: 'm4',
    name: 'Buddha Bowl',
    description: 'Healthy with lots of grains and greens 🌱',
    price: 8.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
