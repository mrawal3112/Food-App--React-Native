const dummyData = {
    categories: [
        {
            id: 1,
            name: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
            category: "Pizza",
            prep_time: '30 Mins',
            image: require('../assets/images/pizza/Cauliflower.jpg'),
            servings: 4,
            ingredients: [
                { name: 'Pizza Dough', icon: require('../assets/images/ingredients/pizzadough.png'), quantity: '400gm' },
                { name: 'Pizza Sauce', icon: require('../assets/images/ingredients/sauces.png'), quantity: '50gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '100gm' },
                { name: 'Onions', icon: require('../assets/images/ingredients/onion.png'), quantity: '50gm' },
                { name: 'Bell Peppers', icon: require('../assets/images/ingredients/bell-pepper.png'), quantity: '50gm' },
                { name: 'Olives', icon: require('../assets/images/ingredients/olives.png'), quantity: '10-12 Pieces' },
                { name: 'Cauliflower', icon: require('../assets/images/ingredients/cauliflower.png'), quantity: '150gm' },
                { name: 'BBq Sauce', icon: require('../assets/images/ingredients/bbq-sauce.png'), quantity: '50gm' },
                { name: 'Grilled Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '200gm' }]
        },
        {
            image: require('../assets/images/pizza/Homemade.jpg'),
            name: "Homemade Pizza",
            id: 2,
            prep_time: '45 Mins',
            category: 'Pizza',
            servings: 4,
            ingredients: [
                { name: 'Pizza Dough', icon: require('../assets/images/ingredients/pizzadough.png'), quantity: '400gm' },
                { name: 'Pizza Sauce', icon: require('../assets/images/ingredients/sauces.png'), quantity: '50gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '100gm' },
                { name: 'Onions', icon: require('../assets/images/ingredients/onion.png'), quantity: '50gm' },
                { name: 'Bell Peppers', icon: require('../assets/images/ingredients/bell-pepper.png'), quantity: '50gm' },
                { name: 'Olives', icon: require('../assets/images/ingredients/olives.png'), quantity: '10-12 Pieces' },
                { name: 'Grilled Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '200gm' },
                { name: 'Pineapple', icon: require('../assets/images/ingredients/pineapple.png'), quantity: '100gm' },
                { name: 'Corn', icon: require('../assets/images/ingredients/corn.png'), quantity: '50gm' },
                { name: 'Cilantro', icon: require('../assets/images/ingredients/chervil.png'), quantity: '20gm' }]
        },
        {
            image: require('../assets/images/pizza/veggie.jpg'),
            name: "Veggie Pizza",
            id: 3,
            prep_time: '45 Mins',
            category: 'Pizza',
            servings: 6,
            ingredients: [
                { name: 'Pizza Dough', icon: require('../assets/images/ingredients/pizzadough.png'), quantity: '400gm' },
                { name: 'Pizza Sauce', icon: require('../assets/images/ingredients/sauces.png'), quantity: '50gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '100gm' },
                { name: 'Onions', icon: require('../assets/images/ingredients/onion.png'), quantity: '50gm' },
                { name: 'Bell Peppers', icon: require('../assets/images/ingredients/bell-pepper.png'), quantity: '50gm' },
                { name: 'Olives', icon: require('../assets/images/ingredients/olives.png'), quantity: '10-12 Pieces' },
                { name: 'Grilled Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '200gm' },
                { name: 'Pineapple', icon: require('../assets/images/ingredients/pineapple.png'), quantity: '100gm' },
                { name: 'Corn', icon: require('../assets/images/ingredients/corn.png'), quantity: '50gm' },
                { name: 'Cilantro', icon: require('../assets/images/ingredients/chervil.png'), quantity: '20gm' },
                { name: 'Tofu/Paneer', icon: require('../assets/images/ingredients/tofu.png'), quantity: '100gm' }
            ]
        },
        {
            image: require('../assets/images/pizza/geek.jpg'),
            name: "Greek Pizza",
            id: 4,
            prep_time: '60 Mins',
            category: 'Pizza',
            servings: 2,
            ingredients: [
                { name: 'Pizza Dough', icon: require('../assets/images/ingredients/pizzadough.png'), quantity: '400gm' },
                { name: 'Pizza Sauce', icon: require('../assets/images/ingredients/sauces.png'), quantity: '50gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '100gm' },
                { name: 'Onions', icon: require('../assets/images/ingredients/onion.png'), quantity: '50gm' },
                { name: 'Bell Peppers', icon: require('../assets/images/ingredients/bell-pepper.png'), quantity: '50gm' },
                { name: 'Olives', icon: require('../assets/images/ingredients/olives.png'), quantity: '10-12 Pieces' },
                { name: 'Grilled Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '200gm' },
                { name: 'Pineapple', icon: require('../assets/images/ingredients/pineapple.png'), quantity: '100gm' },
                { name: 'Corn', icon: require('../assets/images/ingredients/corn.png'), quantity: '50gm' },
                { name: 'Cilantro', icon: require('../assets/images/ingredients/chervil.png'), quantity: '20gm' }]
        }
        // {
        //     image: require('../assets/images/pizza/bbq.jpg'),
        //     name: "Barbecue Chicken Pizza",
        //     id: 5,
        //     prep_time: '45 Mins',
        //     category: 'Pizza',
        //     servings: 3
        // },
        // {
        //     image: require('../assets/images/pizza/grilled.jpg'),
        //     name: "Grilled Veggie Pizza",
        //     id: 6,
        //     prep_time: '30 Mins',
        //     category: 'Pizza',
        //     servings: 4
        // },
    ],
    trending: [
        {
            image: require('../assets/images/trending/trending1.jpg'),
            name: "Chicken Pasta With Tandoori Sauce",
            id: 1,
            prep_time: '40 Mins',
            category: 'Pasta',
            servings: 2,
            ingredients: [
                { name: 'Uncooked Penne Pasta', icon: require('../assets/images/ingredients/pasta.png'), quantity: '400gm' },
                { name: 'Olive Oil', icon: require('../assets/images/ingredients/olive-oil.png'), quantity: '2-3 Tbs' },
                { name: 'Mushroom', icon: require('../assets/images/ingredients/mushroom.png'), quantity: '50gm' },
                { name: 'Green Onions', icon: require('../assets/images/ingredients/spring-onion.png'), quantity: '50gm' },
                { name: 'All Purpose flour', icon: require('../assets/images/ingredients/flours.png'), quantity: '2 Cup' },
                { name: 'Garlic', icon: require('../assets/images/ingredients/garlic.png'), quantity: '4-5 Pieces' },
                { name: 'Grilled Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '200gm' },
                { name: 'Tandoori Sauce', icon: require('../assets/images/ingredients/tandoori.png'), quantity: '50gm' },
                { name: 'Oregano', icon: require('../assets/images/ingredients/oregano.png'), quantity: '1 Tbs' },
                { name: 'Bell Pepper', icon: require('../assets/images/ingredients/bell-pepper.png'), quantity: '50gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '50gm' }]

        },
        {
            image: require('../assets/images/trending/trending2.jpg'),
            name: "Chicken Noddles With Spicy Habenaro Puree",
            id: 2,
            prep_time: '40 Mins',
            category: 'Noodles',
            servings: 4,
            ingredients: [
                { name: 'Boiled Noodles', icon: require('../assets/images/ingredients/noodles.png'), quantity: '400gm' },
                { name: 'Olive Oil', icon: require('../assets/images/ingredients/olive-oil.png'), quantity: '2-3 Tbs' },
                { name: 'Carrot', icon: require('../assets/images/ingredients/carrot.png'), quantity: '50gm' },
                { name: 'Cabbage', icon: require('../assets/images/ingredients/cabbage.png'), quantity: '100gm' },
                { name: 'Onions', icon: require('../assets/images/ingredients/onion.png'), quantity: '200gm' },
                { name: 'Habenaro Sauce', icon: require('../assets/images/ingredients/tandoori.png'), quantity: '3-4 Tbs' },
                { name: 'Garlic', icon: require('../assets/images/ingredients/garlic.png'), quantity: '20gm' },
                { name: 'Grilled Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '150gm' },
                { name: 'Soya Sauce', icon: require('../assets/images/ingredients/soy-sauce.png'), quantity: '1 Tbs' },
                { name: 'Bell Pepper', icon: require('../assets/images/ingredients/bell-pepper.png'), quantity: '50gm' },
                { name: 'Vinegar', icon: require('../assets/images/ingredients/vinegar.png'), quantity: '2 Tbs' }]
        },
        {
            image: require('../assets/images/trending/trending3.jpg'),
            name: "Fajita Veggie Salad Bowl",
            id: 3,
            prep_time: '10 Mins',
            category: 'Salad',
            servings: 2,
            ingredients: [
                { name: 'Seasonal Greens', icon: require('../assets/images/ingredients/greens.png'), quantity: '100gm' },
                { name: 'Beans', icon: require('../assets/images/ingredients/beans.png'), quantity: '2-3 Tbs' },
                { name: 'Faijita Veggies', icon: require('../assets/images/ingredients/veggie.png'), quantity: '50gm' },
                { name: 'Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '100gm' },
                { name: 'Tofu/Paneer', icon: require('../assets/images/ingredients/tofu.png'), quantity: '100gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '3-4 Tbs' },
                { name: 'Pico De Gallo', icon: require('../assets/images/ingredients/pico-de-gallo.png'), quantity: '2-3 Tbs' },
                { name: 'Corn', icon: require('../assets/images/ingredients/corn.png'), quantity: '2-3 Tbs' },
                { name: 'Pickled Onions', icon: require('../assets/images/ingredients/onion.png'), quantity: '3-4 Tbs' },
                { name: 'Chick Peas', icon: require('../assets/images/ingredients/chickpeas.png'), quantity: '2-3 Tbs' },
                { name: 'Salsa', icon: require('../assets/images/ingredients/salsa.png'), quantity: '2 Tbs' }]
        }, {
            image: require('../assets/images/trending/trending4.jpg'),
            name: "Chicken Quesadilla",
            id: 4,
            prep_time: '20 Mins',
            category: 'Quesadilla',
            servings: 1,
            ingredients: [
                { name: 'White Tortilla', icon: require('../assets/images/ingredients/tortilla.png'), quantity: '1 Piece' },
                { name: 'Beans', icon: require('../assets/images/ingredients/beans.png'), quantity: '2-3 Tbs' },
                { name: 'Faijita Veggies', icon: require('../assets/images/ingredients/veggie.png'), quantity: '50gm' },
                { name: 'Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '100gm' },
                { name: 'Tofu/Paneer', icon: require('../assets/images/ingredients/tofu.png'), quantity: '100gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '3-4 Tbs' },
                { name: 'Cilantro', icon: require('../assets/images/ingredients/chervil.png'), quantity: '2 Tbs' },
                { name: 'Jalapenos', icon: require('../assets/images/ingredients/jalapeno.png'), quantity: '2 Tbs' },
                { name: 'Pico De Gallo', icon: require('../assets/images/ingredients/pico-de-gallo.png'), quantity: '2-3 Tbs' },
                { name: 'Salsa', icon: require('../assets/images/ingredients/salsa.png'), quantity: '2 Tbs' }]
        },
        {
            image: require('../assets/images/trending/trending5.jpg'),
            name: "Hard Shell Chicken Tacos",
            id: 5,
            prep_time: '15 Mins',
            category: 'Tacos',
            servings: 1,
            ingredients: [
                { name: 'Soft/Hard Shell', icon: require('../assets/images/ingredients/taco.png'), quantity: '1 Piece' },
                { name: 'Faijita Veggies', icon: require('../assets/images/ingredients/veggie.png'), quantity: '50gm' },
                { name: 'Chicken', icon: require('../assets/images/ingredients/chicken-breast.png'), quantity: '100gm' },
                { name: 'Tofu/Paneer', icon: require('../assets/images/ingredients/tofu.png'), quantity: '100gm' },
                { name: 'Mozzarella', icon: require('../assets/images/ingredients/mozzarella.png'), quantity: '3-4 Tbs' },
                { name: 'Cilantro', icon: require('../assets/images/ingredients/chervil.png'), quantity: '2 Tbs' },
                { name: 'Jalapenos', icon: require('../assets/images/ingredients/jalapeno.png'), quantity: '2 Tbs' },
                { name: 'Pico De Gallo', icon: require('../assets/images/ingredients/pico-de-gallo.png'), quantity: '2-3 Tbs' },
                { name: 'Salsa', icon: require('../assets/images/ingredients/salsa.png'), quantity: '2 Tbs' },
                { name: 'Pico De Gallo', icon: require('../assets/images/ingredients/pico-de-gallo.png'), quantity: '2-3 Tbs' },
                { name: 'Corn', icon: require('../assets/images/ingredients/corn.png'), quantity: '2-3 Tbs' },
                { name: 'Pickled Onions', icon: require('../assets/images/ingredients/onion.png'), quantity: '3-4 Tbs' },
                { name: 'Chick Peas', icon: require('../assets/images/ingredients/chickpeas.png'), quantity: '2-3 Tbs' }
            ]
        }
    ]
}
export { dummyData }