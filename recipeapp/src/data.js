const initialRecipes = [
  {
    id: 1,
    title: "Masala Omelette",
    category: "Breakfast",
    ingredients: ["2 eggs", "1 onion chopped", "1 green chilli", "salt to taste", "oil"],
    steps: ["Beat eggs in a bowl", "Add onion, chilli and salt", "Heat oil in pan", "Pour mixture and cook on medium heat", "Fold and serve hot"]
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "Breakfast",
    ingredients: ["2 bread slices", "1 avocado", "salt", "chilli flakes", "lemon juice"],
    steps: ["Toast the bread slices", "Mash avocado with salt and lemon juice", "Spread on toast", "Top with chilli flakes and serve"]
  },
  {
    id: 3,
    title: "Poha",
    category: "Breakfast",
    ingredients: ["2 cups flattened rice", "1 onion", "mustard seeds", "curry leaves", "turmeric", "salt", "lemon juice"],
    steps: ["Rinse poha and set aside", "Heat oil, add mustard seeds and curry leaves", "Add onion and saute", "Add turmeric and poha", "Mix well, add lemon juice and serve"]
  },
  {
    id: 4,
    title: "Banana Pancakes",
    category: "Breakfast",
    ingredients: ["2 ripe bananas", "2 eggs", "1/2 cup flour", "milk", "butter"],
    steps: ["Mash bananas", "Mix in eggs and flour", "Add milk to make batter", "Cook on buttered pan until golden", "Serve with honey"]
  },
  {
    id: 5,
    title: "Grilled Cheese Sandwich",
    category: "Lunch",
    ingredients: ["2 bread slices", "2 cheese slices", "butter", "salt", "pepper"],
    steps: ["Butter both slices of bread", "Place cheese between slices", "Grill on pan until golden brown on both sides", "Slice and serve"]
  },
  {
    id: 6,
    title: "Dal Rice",
    category: "Lunch",
    ingredients: ["1 cup dal", "1 cup rice", "tomato", "onion", "cumin", "turmeric", "salt", "ghee"],
    steps: ["Cook rice separately", "Boil dal with turmeric and salt", "Temper with ghee, cumin, onion and tomato", "Mix dal and serve with rice"]
  },
  {
    id: 7,
    title: "Pasta Aglio e Olio",
    category: "Lunch",
    ingredients: ["200g pasta", "4 garlic cloves", "olive oil", "chilli flakes", "parsley", "salt"],
    steps: ["Boil pasta in salted water", "Saute garlic in olive oil", "Add chilli flakes", "Toss pasta in the mixture", "Garnish with parsley and serve"]
  },
  {
    id: 8,
    title: "Veggie Wrap",
    category: "Lunch",
    ingredients: ["2 tortillas", "lettuce", "cucumber", "tomato", "hummus", "salt", "pepper"],
    steps: ["Spread hummus on tortilla", "Layer veggies on top", "Season with salt and pepper", "Roll tightly and slice in half", "Serve immediately"]
  },
  {
    id: 9,
    title: "Tomato Soup",
    category: "Lunch",
    ingredients: ["4 tomatoes", "1 onion", "garlic", "cream", "butter", "salt", "pepper", "basil"],
    steps: ["Saute onion and garlic in butter", "Add chopped tomatoes and cook", "Blend until smooth", "Add cream, salt and pepper", "Simmer and serve with basil"]
  },
  {
    id: 10,
    title: "Butter Chicken",
    category: "Dinner",
    ingredients: ["500g chicken", "butter", "tomato puree", "cream", "onion", "garlic", "ginger", "spices"],
    steps: ["Marinate and grill chicken", "Saute onion, garlic and ginger", "Add tomato puree and spices", "Add grilled chicken and cream", "Simmer and serve with naan"]
  },
  {
    id: 11,
    title: "Spaghetti Bolognese",
    category: "Dinner",
    ingredients: ["200g spaghetti", "minced meat", "tomato sauce", "onion", "garlic", "olive oil", "salt", "pepper"],
    steps: ["Cook spaghetti in salted water", "Saute onion and garlic", "Add minced meat and brown it", "Add tomato sauce and simmer", "Serve sauce over spaghetti"]
  },
  {
    id: 12,
    title: "Paneer Tikka",
    category: "Dinner",
    ingredients: ["250g paneer", "yogurt", "spices", "bell peppers", "onion", "lemon juice", "oil"],
    steps: ["Cut paneer into cubes", "Marinate in yogurt and spices", "Thread on skewers with veggies", "Grill until charred", "Serve with mint chutney"]
  },
  {
    id: 13,
    title: "Fried Rice",
    category: "Dinner",
    ingredients: ["2 cups cooked rice", "eggs", "soy sauce", "garlic", "spring onion", "oil", "mixed veggies"],
    steps: ["Heat oil and saute garlic", "Add veggies and stir fry", "Push to side, scramble eggs", "Add rice and soy sauce", "Toss everything together and serve"]
  },
  {
    id: 14,
    title: "Chicken Soup",
    category: "Dinner",
    ingredients: ["500g chicken", "carrots", "celery", "onion", "garlic", "salt", "pepper", "bay leaves"],
    steps: ["Boil chicken with bay leaves", "Shred chicken once cooked", "Saute veggies in a pot", "Add chicken broth and shredded chicken", "Simmer and season to taste"]
  },
  {
    id: 15,
    title: "Mushroom Risotto",
    category: "Dinner",
    ingredients: ["1 cup arborio rice", "mushrooms", "onion", "garlic", "white wine", "parmesan", "butter", "stock"],
    steps: ["Saute onion and garlic in butter", "Add rice and toast briefly", "Add wine and let it absorb", "Add stock ladle by ladle stirring constantly", "Stir in parmesan and serve"]
  }
]

export default initialRecipes