import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Jumbotron, Container } from 'react-bootstrap';
import style from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Jumbotron fluid>
    <Container>
      <h1>Fluid jumbotron</h1>
      <p>
        This is a modified jumbotron that occupies the entire horizontal space of
        its parent.
      </p>
    </Container>
  </Jumbotron>
    // <div className={style.profileContainer}>
    //   <img src="/img/img.jpeg" alt="UserPhoto" />

    //   <div>
    //     <strong>Caio Cesar</strong>
    //     <p>
    //       <img src="icons/level.svg" />
    //       Level
    //       {' '}
    //       {level}
    //     </p>
    //   </div>
    // </div>
  );
};

export default Profile;
