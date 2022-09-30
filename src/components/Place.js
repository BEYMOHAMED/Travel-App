import React from 'react'
import {PlaceContainer, PlaceNameContainer, TextIcon} from '../styles/Wrapper'
import { PlaceImage } from '../styles/image'
import { Title } from  '../styles/Title'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

const Place = ({name, imgURI, location, date}) => {
  const navigation = useNavigation();
  return (
    <PlaceContainer
      onPress={() => {
        navigation.navigate('Discover', {
          name,
          imgURI,
          location,
          date
        })
      }}
    >
        <PlaceImage source={imgURI} />
        <PlaceNameContainer>
            <Title>{name}</Title>
            <TextIcon top={4}>
              <MaterialIcons name="place" size={16} color="gray" />
              <Title size={'12px'} weight={800} color={'gray'}>{location}</Title>
            </TextIcon>

        </PlaceNameContainer>

    </PlaceContainer>
  )
}

export default Place