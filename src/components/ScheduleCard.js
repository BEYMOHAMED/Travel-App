import { Text } from 'react-native'
import React from 'react'
import {Title} from '../styles/Title'
import {ScheduleCardContainer, ScheduleCardInfo, UserImageWrapper, Participants, PriceContainer} from '../styles/Wrapper'
import {ScheduleImage, UserMiniImage} from '../styles/image'

const ScheduleCard = ({name, date, participants, price, imgURI, userImage}) => {

  return (
    <ScheduleCardContainer>
        <ScheduleImage source={imgURI} />
        <ScheduleCardInfo>
            <Title>{name}</Title>
            <Title size={'12px'} color={'gray'}>{date}</Title>
            <Participants>
                <UserImageWrapper>
                    <UserMiniImage source={userImage} left={'0px'} />
                    <UserMiniImage source={userImage} left={'10px'} />
                    <UserMiniImage source={userImage} left={'20px'} />
                    <UserMiniImage source={userImage} left={'30px'} />
                </UserImageWrapper>
                <Text>+{participants}</Text>
            </Participants>
        </ScheduleCardInfo>
        <PriceContainer>
            <Title>${price}</Title>
            <Title color={'gray'} size={'12px'}>Price</Title>
        </PriceContainer>
    </ScheduleCardContainer>
  )
}

export default ScheduleCard