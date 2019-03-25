export default `query Cuisines {
  restaurantSearch {
    facets {
      cuisine {
        name
        slug
      }
    }
  }
}`
