import React, { useState, useEffect, useRef } from 'react'
import { Wrap, Header, Main, ExtraField, ItemsCount, ClearButton } from './styles'
import { ListOfCities } from '../ListOfCities'
import { cities as citiesDb } from '../../api/cities-of-china.json'
import { InputSearch } from '../InputSearch'

export const CitiesTable = () => {
  const [initialCities] = useState(citiesDb)
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [numberCities, setNumberCities] = useState(20)
  const CheckboxEl = useRef(null)

  useEffect(() => {
    const arrayCities = initialCities.map(e => ({ ...e, checked: false }))
    setCities(arrayCities.slice(0, 20))
  }, [initialCities])

  /**
   * Select city Function
   * @param {string} city - The selected city
   */

  const handleSelect = city => {
    const isChecked = !city.checked
    const arrayCities = cities.map(e => (e.id === city.id ? { ...e, checked: isChecked } : e))
    setCities(arrayCities)
    CheckboxEl.current.checked = arrayCities.every(e => e.checked)
  }

  /**
   * Remove city from selected items
   * @param {string} city - The city to remove
   */

  const handleDelete = city => {
    const arrayCities = cities.map(e => (e.id === city.id ? { ...e, checked: false } : e))
    setCities(arrayCities)
    CheckboxEl.current.checked = false
  }

  /**
   * Select / deselect all cities
   * @param {Boolean} isChecked - The boolean to select
   */

  const hanldeSelectAll = isChecked => {
    const arrayCities = cities.map(e => ({ ...e, checked: isChecked }))
    setCities(arrayCities)
    CheckboxEl.current.checked = isChecked
  }

  /**
   * Filter search function
   * @param {String} name - String to filter
   */

  const handleSearch = name => {
    if (name.length > 0) {
      const regex = new RegExp(`^${name}`, 'i')
      const arrayCities = cities.filter(e => e.name.match(regex))
      setCities(arrayCities)
    } else {
      setCities(initialCities.slice(0, numberCities))
    }
  }

  /**
   * More cities Function
   * @param {Number} number - Number to set number of cities
   */

  const moreCities = number => {
    setLoading(true)
    setTimeout(() => {
      const newCities = initialCities.slice(number, number + 20).map(e => ({ ...e, checked: false }))
      const arrayCities = [...cities, ...newCities]
      setCities(arrayCities)
      setNumberCities(number)
      setLoading(false)
    }, 700)
  }

  return (
    <Wrap>
      <Header>
        <h1>Cities of China</h1>
      </Header>
      <Main>
        <div>
          <ExtraField>
            <InputSearch placeholder="Search by Name" onChange={e => handleSearch(e)} />
          </ExtraField>

          <ExtraField>
            <input
              ref={CheckboxEl}
              type="checkbox"
              id="selectAll"
              onChange={e => hanldeSelectAll(e.target.checked)}
            />

            <label htmlFor="selectAll" className="margin-left-15 bold">
              {cities.slice(0, numberCities).length}
              {cities.slice(0, numberCities).length === 1 ? ' item' : ' items'}
            </label>
          </ExtraField>

          <ListOfCities
            cities={cities.slice(0, numberCities)}
            onSelect={city => handleSelect(city)}
            onEndScroll={() => moreCities(numberCities + 20)}
            loading={loading}
          />
        </div>

        <div>
          <ExtraField>
            <ItemsCount>
              {cities.filter(e => e.checked === true).length}
              {cities.filter(e => e.checked === true).length === 1 ? ' item' : ' items'}
            </ItemsCount>

            {cities.filter(e => e.checked === true).length > 0 && (
              <ClearButton onClick={() => hanldeSelectAll(false)}>CLEAR</ClearButton>
            )}
          </ExtraField>

          <ListOfCities
            cities={cities.filter(e => e.checked === true)}
            selectedList
            onRemove={city => handleDelete(city)}
          />
        </div>
      </Main>
    </Wrap>
  )
}
