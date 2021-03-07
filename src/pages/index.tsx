import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletChallenges } from '../components/CompletChallenges';
import { Countdown } from '../components/Countdown';
import NavContainer from '../components/NavContainer';
import Profile from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContexts';
import style from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {
  return (
    <>
      <NavContainer />
      <div className={style.container}>
        <Head>
          <title>NutriJess</title>
        </Head>

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  const { level, currentExperience, challengesCompleted } = cxt.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
