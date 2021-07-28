import { icons, images } from '../constants'

// price rating
export const AFFORDABLE = 1;
export const FAIR_PRICE = 2;
export const EXPENSIVE = 3;

export const INITIAL_CURRENT_LOCATION = {
  streetName: 'Kuching',
  gps: {
    latitude: 13.672367094663672,
    longitude: -89.25889074065775,
  },
};

export const CATEGORIES = [
  {
    id: 1,
    name: 'Rice',
    icon: icons.rice_bowl,
  },
  {
    id: 2,
    name: 'Noodles',
    icon: icons.noodle,
  },
  {
    id: 3,
    name: 'Hot Dogs',
    icon: icons.hotdog,
  },
  {
    id: 4,
    name: 'Salads',
    icon: icons.salad,
  },
  {
    id: 5,
    name: 'Burgers',
    icon: icons.hamburger,
  },
  {
    id: 6,
    name: 'Pizza',
    icon: icons.pizza,
  },
  {
    id: 7,
    name: 'Snacks',
    icon: icons.fries,
  },
  {
    id: 8,
    name: 'Sushi',
    icon: icons.sushi,
  },
  {
    id: 9,
    name: 'Desserts',
    icon: icons.donut,
  },
  {
    id: 10,
    name: 'Drinks',
    icon: icons.drink,
  },
];

export const RESTAURANTS = [
  {
    id: 1,
    name: 'ByProgrammers Burger',
    rating: 4.8,
    categories: [5, 7],
    priceRating: AFFORDABLE,
    photo: images.burger_restaurant_1,
    duration: '30 - 45 min',
    location: {
      latitude: 13.688464871738534,
      longitude: -89.23019713664709,
    },
    streetName: 'Circulo Militar',
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
    menu: [
      {
        menuId: 1,
        name: 'Crispy Chicken Burger',
        photo: images.crispy_chicken_burger,
        description: 'Burger with crispy chicken, cheese and lettuce',
        calories: 200,
        price: 10,
      },
      {
        menuId: 2,
        name: 'Crispy Chicken Burger with Honey Mustard',
        photo: images.honey_mustard_chicken_burger,
        description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
        calories: 250,
        price: 15,
      },
      {
        menuId: 3,
        name: 'Crispy Baked French Fries',
        photo: images.baked_fries,
        description: 'Crispy Baked French Fries',
        calories: 194,
        price: 8,
      },
    ],
  },
  {
    id: 2,
    name: 'ByProgrammers Pizza',
    rating: 4.8,
    categories: [2, 4, 6],
    priceRating: EXPENSIVE,
    photo: images.pizza_restaurant,
    duration: '15 - 20 min',
    location: {
      latitude: 13.67769634566676,
      longitude: -89.30302068594528,
    },
    streetName: 'Condado Santa Rosa',
    courier: {
      avatar: images.avatar_2,
      name: 'Jackson',
    },
    menu: [
      {
        menuId: 4,
        name: 'Hawaiian Pizza',
        photo: images.hawaiian_pizza,
        description: 'Canadian bacon, homemade pizza crust, pizza sauce',
        calories: 250,
        price: 15,
      },
      {
        menuId: 5,
        name: 'Tomato & Basil Pizza',
        photo: images.pizza,
        description:
          'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
        calories: 250,
        price: 20,
      },
      {
        menuId: 6,
        name: 'Tomato Pasta',
        photo: images.tomato_pasta,
        description: 'Pasta with fresh tomatoes',
        calories: 100,
        price: 10,
      },
      {
        menuId: 7,
        name: 'Mediterranean Chopped Salad ',
        photo: images.salad,
        description: 'Finely chopped lettuce, tomatoes, cucumbers',
        calories: 100,
        price: 10,
      },
    ],
  },
  {
    id: 3,
    name: 'ByProgrammers Hotdogs',
    rating: 4.8,
    categories: [3],
    priceRating: EXPENSIVE,
    photo: images.hot_dog_restaurant,
    duration: '20 - 25 min',
    location: {
      latitude: 13.667242350505246,
      longitude: -89.27088715323784,
    },
    streetName: 'Plaza Malta',
    courier: {
      avatar: images.avatar_3,
      name: 'James',
    },
    menu: [
      {
        menuId: 8,
        name: 'Chicago Style Hot Dog',
        photo: images.chicago_hot_dog,
        description: 'Fresh tomatoes, all beef hot dogs',
        calories: 100,
        price: 20,
      },
    ],
  },
  {
    id: 4,
    name: 'ByProgrammers Sushi',
    rating: 4.8,
    categories: [8],
    priceRating: EXPENSIVE,
    photo: images.japanese_restaurant,
    duration: '10 - 15 min',
    location: {
      latitude: 13.648744302881697,
      longitude: -89.26477126746141,
    },
    streetName: 'Parque Nuevo Cuscatlan',
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 9,
        name: 'Sushi sets',
        photo: images.sushi,
        description: 'Fresh salmon, sushi rice, fresh juicy avocado',
        calories: 100,
        price: 50,
      },
    ],
  },
  {
    //13.654264875339441, -89.29035665174261
    id: 5,
    name: 'ByProgrammers Cuisine',
    rating: 4.8,
    categories: [1, 2],
    priceRating: AFFORDABLE,
    photo: images.noodle_shop,
    duration: '15 - 20 min',
    location: {
      latitude: 13.654264875339441,
      longitude: -89.29035665174261,
    },
    streetName: 'Alturas de Tenerife',
    courier: {
      avatar: images.avatar_4,
      name: 'Muthu',
    },
    menu: [
      {
        menuId: 10,
        name: 'Kolo Mee',
        photo: images.kolo_mee,
        description: 'Noodles with char siu',
        calories: 200,
        price: 5,
      },
      {
        menuId: 11,
        name: 'Sarawak Laksa',
        photo: images.sarawak_laksa,
        description: 'Vermicelli noodles, cooked prawns',
        calories: 300,
        price: 8,
      },
      {
        menuId: 12,
        name: 'Nasi Lemak',
        photo: images.nasi_lemak,
        description: 'A traditional Malay rice dish',
        calories: 300,
        price: 8,
      },
      {
        menuId: 13,
        name: 'Nasi Briyani with Mutton',
        photo: images.nasi_briyani_mutton,
        description: 'A traditional Indian rice dish with mutton',
        calories: 300,
        price: 8,
      },
    ],
  },
  {
    id: 6,
    name: 'ByProgrammers Dessets',
    rating: 4.9,
    categories: [9, 10],
    priceRating: AFFORDABLE,
    photo: images.kek_lapis_shop,
    duration: '35 - 40 min',
    location: {
      latitude: 13.706613342867293,
      longitude: -89.21037521423332,
    },
    streetName: 'Metrocentro',
    courier: {
      avatar: images.avatar_1,
      name: 'Jessie',
    },
    menu: [
      {
        menuId: 12,
        name: 'Teh C Peng',
        photo: images.teh_c_peng,
        description: 'Three Layer Teh C Peng',
        calories: 100,
        price: 2,
      },
      {
        menuId: 13,
        name: 'ABC Ice Kacang',
        photo: images.ice_kacang,
        description: 'Shaved Ice with red beans',
        calories: 100,
        price: 3,
      },
      {
        menuId: 14,
        name: 'Kek Lapis',
        photo: images.kek_lapis,
        description: 'Layer cakes',
        calories: 300,
        price: 20,
      },
    ],
  },
];
