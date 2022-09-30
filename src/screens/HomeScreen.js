import React, { useLayoutEffect } from 'react';
import {View,Text, SafeAreaView, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {UserImage} from '../styles/image'
import {UserWrapper} from '../styles/Wrapper';
import Activities from '../components/Activities';
import Places from '../components/Places';
import Schedule from '../components/Schedule'

export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
    return (
        <SafeAreaView>
            <ScrollView>
                <UserWrapper>
                    <UserImage source={require('../../assets/woman.png')} />
                    <View>
                        <Text>Hi, Mohamed BEY</Text>
                        <Text>Web Developer & Traveler</Text>
                    </View>
                </UserWrapper>
                <Activities />
                <Places />
                <Schedule />
            </ScrollView>
        </SafeAreaView>
    );
}
