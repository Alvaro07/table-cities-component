import React from 'react'
import { SearchWrap, Input, GlassIcon } from './styles'
import PropTypes from 'prop-types'

export const InputSearch = ({ placeholder, onChange }) => {
  return (
    <SearchWrap>
      <GlassIcon />
      <Input placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </SearchWrap>
  )
}

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
