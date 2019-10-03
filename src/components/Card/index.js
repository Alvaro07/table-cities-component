import React, { useState, useEffect } from 'react'
import { CardWrap, CityIcon, Name, IconClose } from './styled'
import PropTypes from 'prop-types'

export const Card = props => {
  const [isChecked, setIsChecked] = useState(false)
  useEffect(() => {
    setIsChecked(props.checked)
  }, [props.checked])

  const handleCheck = () => {
    props.onCheck()
    setIsChecked(isChecked)
  }

  return (
    <CardWrap
      hoverStyle={!props.selectedList && !props.checked}
      checkedStyle={!props.selectedList && props.checked}
      onClick={!props.selectedList ? handleCheck : null}
    >
      {!props.selectedList && <input type="checkbox" checked={isChecked} onChange={handleCheck} />}

      <CityIcon />
      <Name>
        <h3>{props.name}</h3>
        <h4>{props.chineseName}</h4>
      </Name>

      {props.selectedList && <IconClose onClick={props.onRemove}>X</IconClose>}
    </CardWrap>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  chineseName: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  selectedList: PropTypes.bool
}
