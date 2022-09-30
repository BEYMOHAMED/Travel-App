import React from 'react'
import {PlacesContainer, PlacesScroll} from '../styles/Wrapper'
import Place from './Place.js'
import {Title} from '../styles/Title'

const Places = () => {
    const places = [
        { id: 1, name: 'Eifel Tower', imgURI: require('../../assets/city.jpg'), location: 'Paris / France', date: '12 Jul - 28 Jul'},
        { id: 2, name: 'Mont Fuji', imgURI: require('../../assets/japan.jpg'), location: 'Tokyo / Japan', date: '12 Jul - 28 Jul'},
        { id: 3, name: 'Canyon', imgURI: require('../../assets/canyon.jpeg'), location: 'Colorado / USA', date: '12 Jul - 28 Jul'},
        { id: 4, name: 'Tower', imgURI: require('../../assets/london.jpg'), location: 'London / UK', date: '12 Jul - 28 Jul'},
    ]
  return (
    <PlacesContainer>
        <Title size={'25px'} left={'20px'} weight={'700'} >Popular places</Title>
        <PlacesScroll>
            {places.map((place) => (
                <Place key={place.id} name={place.name} imgURI={place.imgURI} location={place.location} date={place.date} />
            ))}
        </PlacesScroll>
    </PlacesContainer>
  )
}

export default Places