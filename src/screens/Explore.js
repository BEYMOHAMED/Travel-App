import { Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {ExploreTitle} from '../styles/Title'
import {ExploreContainer, ExploreCategoryCard, ExploreScroll, ExplorePlacesContainer} from '../styles/Wrapper'
import {ExploreImage} from '../styles/image'
import {LinearGradient} from 'expo-linear-gradient';
import ExplorePlace from '../components/ExplorePlace'

const Explore = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    const places = [
        { id: 1, name: 'Mikonos', imgURI: require('../../assets/beach.jpg'), location: 'Greece', date: '10 Jul'},
        { id: 2, name: 'Toronto', imgURI: require('../../assets/canada.jpg'), location: 'Canada', date: '11 Sep'},
        { id: 3, name: 'Cairo', imgURI: require('../../assets/egypt.jpg'), location: 'Egypt', date: '21 Jan'},
        { id: 4, name: 'Grenada', imgURI: require('../../assets/spain.jpg'), location: 'Spain', date: '12 Jul'},
        { id: 5, name: 'Rome', imgURI: require('../../assets/rome.jpg'), location: 'Italy', date: '28 Jul'},
        { id: 6, name: 'Mexico', imgURI: require('../../assets/mexico.jpg'), location: 'Mexico', date: '5 May'},
    ]

  return (
    <ScrollView>
        <ExploreContainer>
            <ExploreImage source={require('../../assets/explore.jpg')} />
            <SafeAreaView>
                <ExploreTitle>Explore the world</ExploreTitle>
                <LinearGradient colors={['transparent','#ffffff90','#ffffff']} style={styles.linearGradient} >
                    <ExploreScroll>
                        <ExploreCategoryCard>
                            <Text>Popular place</Text>
                        </ExploreCategoryCard>
                        <ExploreCategoryCard>
                            <Text>Recommended</Text>
                        </ExploreCategoryCard>
                        <ExploreCategoryCard>
                            <Text>Near me</Text>
                        </ExploreCategoryCard>
                        <ExploreCategoryCard>
                            <Text>New place</Text>
                        </ExploreCategoryCard>
                    </ExploreScroll>
                </LinearGradient>
            </SafeAreaView>
        </ExploreContainer>
        <ExplorePlacesContainer>
            {places.map((place) => (
                <ExplorePlace key={place.id} name={place.name} imgURI={place.imgURI} location={place.location} date={place.date} />
            ))}
        </ExplorePlacesContainer>
    </ScrollView>
  )
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: 130,
    top: 170,
    width: '100%',
    position: 'absolute',
  },
});

export default Explore