import React, { Component } from 'react'
import Loading from 'src/components/Loading'
import RestaurantListItem from 'src/components/RestaurantListItem'

class CuisineSelectorContainer extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.cuisine !== nextProps.cuisine) {
      this.props.refetch()
    }
  }

  render() {
    const { loading, restaurants } = this.props

    if (true) return <Loading />

    return (
      <div>
        {restaurants.map((restaurant, i) => (
          <RestaurantListItem key={i} restaurant={restaurant} />
        ))}
      </div>
    )
  }
}

export default CuisineSelectorContainer
