import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import CuisineSelector from 'src/components/CuisineSelector'
import CUISINES_QUERY from 'src/queries/cuisines.graphql'
import Loading from 'src/components/Loading'

const mapResultsToProps = ({ data: { loading, restaurantSearch, selectedCuisine, refetch } }) => ({
  cuisines: restaurantSearch && restaurantSearch.facets.cuisine,
  selectedCuisine,
  loading,
  refetch
})

const mapPropsToOptions = () => ({
  variables: {
    cuisines: 'americana'
  }
})

@graphql(CUISINES_QUERY, {
  props: mapResultsToProps,
  options: mapPropsToOptions
})
class CuisineSelectorContainer extends Component {
  handleSelectedCuisineChange = ({ cuisines }) => {
    this.props.refetch({ cusines })
  }

  render() {
    const { loading, selectedCuisine, cuisines } = this.props

    if (loading) return <Loading />

    return (
      <CuisineSelector
        cuisines={cuisines}
        selectedCuisine={selectedCuisine}
        onSelectedCuisineChange={this.handleSelectedCuisineChange} />
    )
  }
}

export default CuisineSelectorContainer
