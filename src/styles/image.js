import styled from 'styled-components'

export const UserImage = styled.Image`
    height: 50px;
    width: 50px;
    margin-right: 10px;
`

export const UserMiniImage = styled.Image`
    height: 20px;
    width: 20px;
    position: absolute;
    bottom: 0;
    left: ${props => props.left || '0px'};
    border: 2px solid #fff;
    border-radius: 50%;
`

export const ActivityImage = styled.Image`
    height: 70px;
    width: 105px;
    border-radius: 10px;
`

export const PlaceImage = styled.Image`
    height: 150px;
    width: 140px;
    border-radius: 10px;
    position: relative;
`

export const ScheduleImage = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 10px;
`

export const DsicoverPlaceImage = styled.Image`
    height: 400px;
    width: 100%;
`

export const MapImage = styled.Image`
    height: 70px;
    width: 70px;
    border-radius: 10px;
    margin-left: 5px;
`

export const ExploreImage = styled.Image`
    width: 100%;
    height: 300px;
    position: absolute;
`

export const ExplorePlaceImage = styled.Image`
    width: 100%;
    height: 120px;
    border-radius: 15px;
    position: relative;
`