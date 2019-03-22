import React, { Component } from 'react'
import { ApolloConsumer, graphql } from 'react-apollo'

import CuisineSelector from 'src/components/CuisineSelector'
import CUISINES_QUERY from 'src/queries/cuisines.graphql'
import Loading from 'src/components/Loading'

const mapResultsToProps = ({ data: { loading, restaurantSearch, selectedCuisine, refetch } }) => ({
  cuisines: restaurantSearch && restaurantSearch.facets.cuisine,
  selectedCuisine,
  loading,
  refetch
})

@graphql(CUISINES_QUERY, {
  props: mapResultsToProps
})
class CuisineSelectorContainer extends Component {
  handleSelectedCuisineChange = client => selectedCuisine => {
    client.writeData({
      data: {
        selectedCuisine
      }
    })
  }

  render() {
    const { loading, selectedCuisine, cuisines } = this.props

    if (loading) return <Loading />

    return (
      <ApolloConsumer>
        {client => (
          <CuisineSelector
            cuisines={cuisines}
            selectedCuisine={selectedCuisine}
            onSelectedCuisineChange={this.handleSelectedCuisineChange(client)} />
        )}
      </ApolloConsumer>
    )
  }
}

export default CuisineSelectorContainer
