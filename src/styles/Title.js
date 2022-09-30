import styled from 'styled-components'

export const Title = styled.Text`
    color: ${props => props.color || '#111'};
    font-size: ${props => props.size || '16px'};
    font-weight: ${props => props.weight || '900'};
    margin-left: ${props => props.left || '0px'};
    margin-top: ${props => props.top || '0px'};
`

export const ExploreTitle = styled.Text`
    color: #111;
    font-size: 49px;
    font-weight: 700;
    position: absolute;
    left: 20px;
    top: 60px;
`