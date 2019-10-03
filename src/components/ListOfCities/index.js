import React from 'react'
import { Card } from '../Card'
import { WrapList, Loading } from './styles'
import PropTypes from 'prop-types'

export const ListOfCities = ({ cities, onSelect, onRemove, selectedList, onEndScroll, loading }) => {
  const handleScroll = e => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop <= element.clientHeight) {
      onEndScroll()
    }
  }

  return (
    <WrapList onScroll={!selectedList ? e => handleScroll(e) : null}>
      {cities.map((city, i) => (
        <Card
          checked={false}
          key={i}
          onCheck={() => onSelect(city)}
          onRemove={() => onRemove(city)}
          selectedList={selectedList}
          {...city}
        />
      ))}
      {loading && <Loading>Loading ...</Loading>}
    </WrapList>
  )
}

ListOfCities.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func,
  selectedList: PropTypes.bool,
  onEndScroll: PropTypes.func,
  loading: PropTypes.bool
}
