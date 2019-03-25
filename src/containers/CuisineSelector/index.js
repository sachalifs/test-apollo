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

    return (
      <CuisineSelector
        cuisines={cuisines}
        selectedCuisine={selectedCuisine}
        onSelectedCuisineChange={this.handleSelectedCuisineChange} />
    )
  }
}

const mapStateToProps = ({ selectedCuisine }) => ({
  cuisines: [],
  selectedCuisine,
  loading: false
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onSelectedCuisineChange: changeSelectedCuisine
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CuisineSelectorContainer)
