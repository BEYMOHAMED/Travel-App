import React from 'react'
import {ExplorePlaceContainer, ExplorePlacePriceContainer, ExplorePlaceInfo, TextIcon} from '../styles/Wrapper'
import {ExplorePlaceImage} from '../styles/image'
import { Title } from '../styles/Title'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ExplorePlace = ({name, imgURI, location, date}) => {
  return (
    <ExplorePlaceContainer>
        <ExplorePlaceImage source={imgURI} />
        <ExplorePlacePriceContainer>
            <Title size={'14px'} >$44</Title>
            <Title size={'12px'} color={'gray'} >Price</Title>
        </ExplorePlacePriceContainer>
      <Title top={'10px'} size={'18px'} weight={700} >{name}</Title>
      <ExplorePlaceInfo>
        <TextIcon>
            <MaterialIcons name="place" size={16} color="gray" />
            <Title size={'14px'} weight={600} color={'gray'} left={'2px'}>{location}</Title>
        </TextIcon>
        <TextIcon left={6}>
            <Feather name="calendar" size={16} color="gray" />
            <Title size={'14px'} weight={600} color={'gray'} left={'2px'} >{date}</Title>
        </TextIcon>


      </ExplorePlaceInfo>
    </ExplorePlaceContainer>
  )
}

export default ExplorePlace