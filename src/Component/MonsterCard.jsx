import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'


const MonsterCard = ({ monsters, MonsterHero }) => {
  // console.log(props)
  // const { name, id, email } = props.monsters;
  const { name, id, email } = monsters;
  return (
    <Col xl={3} lg={4} md={6} sm={12}>
      <Card className="h-100">
        <Card.Img variant="top" src={`https:robohash.org/${id}?set=set2&size=180x180`} alt={name} />
        <Card.Body>
          <Card.Title><h1 key={id}>{name}</h1></Card.Title>
          <p>{MonsterHero}</p>
          <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MonsterCard





// export default class MonsterCard extends Component {
//   render() {
//     const { name, id, email } = this.props.monsters;
//     return (
//       <Col xl={3} lg={4} md={6} sm={12}>
//         <Card className="h-100">
//           <Card.Img variant="top" src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
//           <Card.Body>
//             <Card.Title><h1 key={id}>{name}</h1></Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
//           </Card.Body>
//         </Card>
//       </Col>
//     )
//   }
// }




