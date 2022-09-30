import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    margin: 16px;
    align-items: center;
    justify-content: center;
    background-color: #FEFEFE;
`

export const UserWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px;
`

export const ActivitiesContainer = styled.View`
    padding: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const ActivityContainer = styled.TouchableOpacity`
    margin: 10px 5px;
    align-items: center;
`

export const PlacesScroll = styled.ScrollView.attrs(props => ({
    horizontal: true,
    showHorizentalScrollIndicator: false,
}))`
    margin-top: 10px;
    width: 100%;
    padding-left: 10px;
`

export const PlacesContainer = styled.View`
`


export const PlaceContainer = styled.TouchableOpacity`
    margin: 10px;
    align-items: center;
`

export const PlaceNameContainer = styled.View`
    width: 90%;
    position: absolute;
    background-color: #fff;
    opacity: 0.85;
    padding: 10px;
    bottom: 10px;
    border-radius: 10px;
`

export const ScheduleView = styled.View`
    margin: 20px;
`

export const ScheduleCardContainer = styled.View`
    width: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    flex-direction: row;
    margin-bottom: 20px;
`

export const ScheduleContainer = styled.View`
    align-items: center;
    margin-top: 20px;
`

export const ScheduleCardInfo = styled.View`
    margin-left: 20px;
    justify-content: space-between;
    width: 50%;
`

export const UserImageWrapper = styled.View`
    flex-direction: row;
    position: relative;
`

export const Participants = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
`

export const PriceContainer = styled.View`
    justify-content: flex-end;
    align-items: center;
`

export const DiscoverContainer = styled.View`
    position: relative;
`

export const DsicoverPlaceCard = styled.View`
    position: absolute;
    width: 100%;
    padding: 30px;
    height: 500px;
    background-color: #fff;
    top: 375px;
    border-radius: 30px;
`

export const DsicoverPlaceCardInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`

export const DiscoverMembersCard = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-radius: 20px;
    margin-top: 20px;
    background-color: #DDE5E8;
`


export const DiscoverMembers = styled.View`
    justify-content: space-between;
    padding: 5px 3px;
`

export const JoinedMembers = styled.View`
    flex-direction: row;
`

export const DiscoverRatingsCard = styled.View`
    padding: 0px 25px;
    border-radius: 20px;
    background-color: #DDE5E8;
    margin-top: 20px;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`

export const DiscoverCardsWrapper = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const ExploreContainer = styled.View`
    position: relative;
`

export const ExploreScroll = styled.ScrollView.attrs(props => ({
    horizontal: true,
    showHorizentalScrollIndicator: false,
}))`
    top: 60px;
    padding-left: 20px;
`

export const ExploreCategoryCard = styled.View`
    padding: 20px;
    background-color: #fff;
    margin-right: 20px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 180px;
`


export const ExplorePlacesContainer = styled.View`
    width: 100%;
    background-color: #fff;
    top: 253px;
    height: 950px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`


export const ExplorePlaceContainer = styled.View`
    width: 45%;
    margin: 2.5%;
    border-radius: 20px;
    padding: 8px;
    background-color: #F7F7F9;
`

export const ExplorePlacePriceContainer = styled.View`
    position: absolute;
    right: 15px;
    bottom: 89px;
    background-color: #ffffff90;
    padding: 5px;
    border-radius: 5px;
`


export const ExplorePlaceInfo = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 15px;
`


export const TextIcon = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${props => props.top || '0px'};
    margin-left: ${props => props.left || '0px'};
`