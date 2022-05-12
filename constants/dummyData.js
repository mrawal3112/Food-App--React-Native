const dummyData = {
    categories: [
        {
            id: 1,
            name: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
            category: "Pizza",
            prep_time: '30 Mins',
            image: require('../assets/images/pizza/Cauliflower.jpg'),
            servings: 4
        },
        {
            image: require('../assets/images/pizza/Homemade.jpg'),
            name: "Homemade Pizza",
            id: 2,
            prep_time: '45 Mins',
            category: 'Pizza',
            servings: 4
        },
        {
            image: require('../assets/images/pizza/veggie.jpg'),
            name: "Veggie Pizza",
            id: 3,
            prep_time: '45 Mins',
            category: 'Pizza',
            servings: 6
        },
        {
            image: require('../assets/images/pizza/geek.jpg'),
            name: "Greek Pizza",
            id: 4,
            prep_time: '60 Mins',
            category: 'Pizza',
            servings: 2
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
            servings: 2
        },
        {
            image: require('../assets/images/trending/trending2.jpg'),
            name: "Chicken Noddles With Spicy Habenaro Puree",
            id: 2,
            prep_time: '40 Mins',
            category: 'Noodles',
            servings: 4
        },
        {
            image: require('../assets/images/trending/trending3.jpg'),
            name: "Fajita Veggie Salad Bowl",
            id: 3,
            prep_time: '10 Mins',
            category: 'Salad',
            servings: 2
        }, {
            image: require('../assets/images/trending/trending4.jpg'),
            name: "Barbacoa Quesadilla",
            id: 4,
            prep_time: '20 Mins',
            category: 'Quesadilla',
            servings: 1
        }, {
            image: require('../assets/images/trending/trending5.jpg'),
            name: "Hard Shell Chicken Tacos",
            id: 5,
            prep_time: '15 Mins',
            category: 'Tacos',
            servings: 1
        }
    ]
}
export { dummyData }