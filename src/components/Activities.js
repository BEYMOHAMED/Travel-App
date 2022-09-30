import { View } from 'react-native'
import React from 'react';
import Activity from './Activity'
import { Title } from '../styles/Title'
import { ActivitiesContainer } from '../styles/Wrapper'

const Activities = () => {
    const activities = [
        { id: 1, name: 'Flight', imgURI: require('../../assets/flight1.jpeg')},
        { id: 2, name: 'Cruise', imgURI: require('../../assets/beach.jpg')},
        { id: 3, name: 'Car', imgURI: require('../../assets/carrent.png')},
        { id: 4, name: 'Camping', imgURI: require('../../assets/camping.jpg')},
        { id: 5, name: 'Desert Tour', imgURI: require('../../assets/desert.jpg')},
        { id: 6, name: 'Star Gazing', imgURI: require('../../assets/gazing.jpeg')},
        { id: 7, name: 'Riding', imgURI: require('../../assets/riding.jpg')},
        { id: 8, name: 'Fly-Fishing', imgURI: require('../../assets/flyfishing.png')},
        { id: 9, name: 'Extreme', imgURI: require('../../assets/extremesport.jpeg')},
    ]
    return (
        <View>
            <Title size={'25px'} left={'20px'} weight={'700'} >Choose Activities</Title>
            <ActivitiesContainer>
                {activities.map((activity) => (
                    <Activity key={activity.id} name={activity.name} imgURI={activity.imgURI} />
                ))}
            </ActivitiesContainer>
        </View>
    )
}

export default Activities