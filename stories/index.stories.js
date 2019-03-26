import React from 'react';
import Loading from '../src/components/Loading'
import RestaurantItem from '../src/components/RestaurantListItem/ListItem'
import Subtitle from '../src/components/RestaurantProfile/Subtitle'
import BookButton from '../src/components/RestaurantProfile/BookButton'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import '../src/client/styles.scss'

const restaurant = {
  "id": "rey-del-vino",
  "slug": "rey-del-vino",
  "name": "Rey del Vino",
  "phone": "+541147725819",
  "numericRating": 8.8,
  "zone": {
    "id": "palermo",
    "name": "Palermo",
    "__typename": "RestaurantZone"
  },
  "primaryCuisine": {
    "id": "parrilla",
    "name": "Parrilla",
    "url": "https://buenos-aires.staging.restorando.com.ar/restaurantes-cocina-parrilla",
    "__typename": "RestaurantCuisine"
  },
  "primaryPhoto": {
    "url": "https://restorando-res.cloudinary.com/image/upload/c_fit,f_auto,h_500,q_auto:eco,w_700/v1/staging/restaurant_photos/w/1998/144096/restaurante_rey-del-vino_palermo__mg_8057.jpg",
    "__typename": "Photo"
  },
  "photos": [
    {
      "url": "https://restorando-res.cloudinary.com/image/upload/c_fit,f_auto,h_500,q_auto:eco,w_700/v1/staging/restaurant_photos/w/1998/144096/restaurante_rey-del-vino_palermo__mg_8057.jpg",
      "__typename": "Photo"
    },
    {
      "url": "https://restorando-res.cloudinary.com/image/upload/c_fit,f_auto,h_500,q_auto:eco,w_700/v1/staging/restaurant_photos/w/1998/9523/180013_102015889879205_3802206_n.jpg",
      "__typename": "Photo"
    },
  ],
  "reviews": {
    "count": 399,
    "excellentRatedCount": 234,
    "goodRatedCount": 127,
    "badRatedCount": 17,
    "withBodyCount": 231,
    "review": [
      {
        "slug": 5239541,
        "body": "Muy buena comida.Muy lundo el restaurante. Muy buena atención",
        "__typename": "Review"
      },
      {
        "slug": 5210348,
        "body": "Todo lindo...! No somos avitue, pero venimos cada tanto y siempre la pasamos bien...!",
        "__typename": "Review"
      },
      {
        "slug": 5097263,
        "body": "Food was excellent! Im from Canada and wanted to try tradition argentina food! Did not miss at all with this restaurant! I would definitely come back again!",
        "__typename": "Review"
      },
      {
        "slug": 5009676,
        "body": "Muy positiva la experiencia ambente familiar climatizado,muy buena carne y exquisita la carta de vinos estuve atendido por un verdadero profesional cuidenlo por que no abundan",
        "__typename": "Review"
      },
      {
        "slug": 4990939,
        "body": "Porciones abundantes , pidan para compartir ! menú del dia de 3 platos muy bien armado ! y a buen precio ! ambiente de bodegón fino ! ensaladas para armar muy completas, atención perfecta ! limpieza muy bueno ! carta de vinos completa!",
        "__typename": "Review"
      }
    ],
    "__typename": "ReviewsType"
  },
}

storiesOf('Development', module)
  .add('Loading', () => <Loading />)

  .add('RestaurantListItem', () =>
    <BrowserRouter>
      <RestaurantItem restaurant={restaurant} />
    </BrowserRouter>
  )

  .add('Restaurant Subtitle', () =>
    <Subtitle
      cuisine={restaurant.primaryCuisine.name}
      zone={restaurant.zone.name}
      numericRating={restaurant.numericRating}
      reviews={restaurant.reviews.count}
    />
  )

  .add('Book Button', () => <BookButton />)