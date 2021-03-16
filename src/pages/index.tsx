import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import NavContainer from '../components/NavContainer';
import Profile from '../components/Profile';
import styled from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {
  return (
    <>
      <NavContainer />
      <div className={styled.container}>
        <Head>
          <title>NutriJess</title>
        </Head>
        <Profile />
      </div>
    </>
  );
}
