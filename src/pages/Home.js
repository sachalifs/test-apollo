import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import 'src/styles/home.scss'
import Loading from 'src/components/Loading'
import CuisineSelector from 'src/containers/CuisineSelector'
import RestaurantsList from 'src/containers/RestaurantsList'
import { fetchAllCuisines } from 'src/actions'

class Home extends Component {
  componentWillMount() {
    this.props.fetchAllCuisines()
  }

  render() {
    const { selectedCuisine, loading } = this.props

    if (loading) return <Loading />

    return (
      <div className='container'>
        <CuisineSelector />
        <RestaurantsList cuisine={selectedCuisine} />
      </div>
    )
  }
}

const mapStateToProps = ({ selectedCuisine }) => ({
  selectedCuisine,
  loading: false
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllCuisines
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
