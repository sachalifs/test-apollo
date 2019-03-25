import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CuisineSelector from 'src/components/CuisineSelector'
import Loading from 'src/components/Loading'
import { changeSelectedCuisine } from 'src/actions'

class CuisineSelectorContainer extends Component {
  handleSelectedCuisineChange = selectedCuisine => this.props.onSelectedCuisineChange

  render() {
    const { loading, selectedCuisine, cuisines } = this.props

    if (loading) return <Loading />

    console.log({ cuisines })

    return (
      <CuisineSelector
        cuisines={cuisines}
        selectedCuisine={selectedCuisine}
        onSelectedCuisineChange={this.handleSelectedCuisineChange} />
    )
  }
}

const mapStateToProps = ({ cuisines, selectedCuisine }) => ({
  cuisines: cuisines.slugs.map(s => cuisines.bySlug[s]),
  loading: cuisines.loading,
  selectedCuisine
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onSelectedCuisineChange: changeSelectedCuisine
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CuisineSelectorContainer)
