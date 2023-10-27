// import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MonsterCard from "./MonsterCard";


import React from 'react'

const MonsterCardList = ({ monsters }) => {
  // const { monsters } = props;
  return (
    <Container className="mt-5">
      <div className="card-list">
        <Row className="g-4">
          {monsters.map((monster) => (
            <MonsterCard monsters={monster} MonsterHero="Monster Hero" />
          ))
          }
        </Row>
      </div>
    </Container>
  )
}

export default MonsterCardList;


// class monsterCard extends Component {

//   render() {
//     const { monsters } = this.props;
//     return (
//       <Container className="mt-5">
//         <div className="card-list">
//           <Row className="g-4">
//             {monsters.map((monster) => (
//               <MonsterCard monsters={monster} />

//             ))
//             }
//           </Row>
//         </div>
//       </Container>

//     );
//   }
// }

// export default monsterCard;