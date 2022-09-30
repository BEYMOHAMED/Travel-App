import { ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {DsicoverPlaceImage, UserMiniImage, MapImage} from '../styles/image';
import { BackButton, BookButton } from '../styles/Button';
import { DiscoverContainer, DsicoverPlaceCard, DsicoverPlaceCardInfo, UserImageWrapper, DiscoverMembersCard, DiscoverMembers, JoinedMembers, DiscoverRatingsCard, DiscoverCardsWrapper, TextIcon } from '../styles/Wrapper';
import { Title } from '../styles/Title'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Discover = () => {
    const navigation = useNavigation();
    const { params: { name, imgURI, location, date }, } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
  return (
    <ScrollView>
        <DiscoverContainer>
            <DsicoverPlaceImage source={imgURI} />
            <BackButton
                onPress={navigation.goBack}
            >
                <Ionicons name="ios-arrow-back" size={24} color="black" />
            </BackButton>
            <DsicoverPlaceCard>
                <Title size={'30px'}>{name}</Title>
                <DsicoverPlaceCardInfo>
                    <TextIcon>
                        <MaterialIcons name="place" size={16} color="gray" />
                        <Title color={'gray'} weight={600}>{location}</Title>
                    </TextIcon>
                    <TextIcon>
                        <Feather name="calendar" size={16} color="gray" />
                        <Title color={'gray'} weight={600}>{date}</Title>
                    </TextIcon>
                </DsicoverPlaceCardInfo>
                <DiscoverCardsWrapper>
                    <DiscoverMembersCard>
                        <DiscoverMembers>
                            <Title size={'18px'} weight={'600'}>Joined members</Title>
                            <JoinedMembers>
                                <UserImageWrapper>
                                    <UserMiniImage source={require('../../assets/man.png')} left={'0px'} />
                                    <UserMiniImage source={require('../../assets/man.png')} left={'10px'} />
                                    <UserMiniImage source={require('../../assets/man.png')} left={'20px'} />
                                    <UserMiniImage source={require('../../assets/man.png')} left={'30px'} />
                                </UserImageWrapper>
                                <Title left={'55px'} size={'12px'}>+22</Title>
                            </JoinedMembers>
                        </DiscoverMembers>
                        <MapImage source={require('../../assets/map.jpg')} />
                    </DiscoverMembersCard>
                    <DiscoverRatingsCard>
                        <Title size={'12px'}>Rating</Title>
                        <TextIcon>
                            <AntDesign name="star" size={20} color="orange" />
                            <Title size={12} left={2}>4,6</Title>
                        </TextIcon>
                    </DiscoverRatingsCard>
                </DiscoverCardsWrapper>
                <Title size={'22px'} weight={'700'} >About Destination</Title>
                <Title size={'14px'} color={'gray'} top={'18px'} weight={'600'}>
                    This place is one of the highest settlements in the municipality of Tokyo, and is locatend at settlements in the municipality of Tokyo, and is locatend at...
                </Title>
                <BookButton><Title color={'#fff'} size={'20px'}>Book now</Title></BookButton>
            </DsicoverPlaceCard>
        </DiscoverContainer>
    </ScrollView>
  )
}

export default Discover