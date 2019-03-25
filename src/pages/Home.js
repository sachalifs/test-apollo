import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import 'src/styles/home.scss'
import Loading from 'src/components/Loading'
import CuisineSelector from 'src/containers/CuisineSelector'
import RestaurantsList from 'src/containers/RestaurantsList'

class Home extends Component {
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

export default connect(mapStateToProps)(Home)
