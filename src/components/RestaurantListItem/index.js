import React from 'react'
import { graphql } from 'react-apollo'
import PROFILE_QUERY from '../../queries/restaurant-profile.graphql'
import ItemComponent from './ListItem'

const mapPropsToOptions = ({ restaurant }) => ({
  variables: {
    slug: restaurant.slug
  }
})

@graphql(PROFILE_QUERY, {
  options: mapPropsToOptions
})
class RestaurantListItem extends React.Component {
  render () {
    return <ItemComponent restaurant={this.props.restaurant} />
  }
}

export default RestaurantListItem
