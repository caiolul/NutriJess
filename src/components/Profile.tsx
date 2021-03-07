import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={style.profileContainer}>
      <img src="/img/img.jpeg" alt="UserPhoto" />

      <div>
        <strong>Caio Cesar</strong>
        <p>
          <img src="icons/level.svg" />
          Level
          {' '}
          {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
