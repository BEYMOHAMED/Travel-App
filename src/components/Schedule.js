import React from 'react'
import {Title} from '../styles/Title'
import ScheduleCard from './ScheduleCard'
import {ScheduleContainer, ScheduleView} from '../styles/Wrapper'

const Schedule = () => {
    const schedules = [
        { id: 1, name: 'Eifel Tower', imgURI: require('../../assets/city.jpg'), price: 423, participants: 23, date: '12 Jul - 28 Jul', userImage: require('../../assets/man.png') },
        { id: 2, name: 'Mont Fuji', imgURI: require('../../assets/japan.jpg'), price: 254, participants: 15, date: '12 Jul - 28 Jul', userImage: require('../../assets/man.png') },
        { id: 3, name: 'Grand Canyon', imgURI: require('../../assets/canyon.jpeg'), price: 768, participants: 34, date: '12 Jul - 28 Jul', userImage: require('../../assets/man.png') },
        { id: 4, name: 'Tower bridge', imgURI: require('../../assets/london.jpg'), price: 550, participants: 22, date: '12 Jul - 28 Jul', userImage: require('../../assets/man.png') },
    ]
  return (
    <ScheduleView>
      <Title size={'25px'} weight={'700'} >Schedule</Title >
      <ScheduleContainer>
        {schedules.map((schedule) => (
            <ScheduleCard
                key={schedule.id}
                name={schedule.name}
                imgURI={schedule.imgURI}
                price={schedule.price}
                participants={schedule.participants}
                date={schedule.date}
                userImage={schedule.userImage}
            />
        ))}
      </ScheduleContainer>
    </ScheduleView>
  )
}

export default Schedule