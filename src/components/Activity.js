import { Text } from 'react-native'
import React from 'react';
import { ActivityImage } from '../styles/image';
import { ActivityContainer } from '../styles/Wrapper';

const Activity = ({name, imgURI}) => {
  return (
    <ActivityContainer>
      <ActivityImage source={imgURI} />
      <Text>{name}</Text>
    </ActivityContainer>
  )
}

export default Activity