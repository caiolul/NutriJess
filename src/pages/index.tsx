import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import NavContainer from '../components/NavContainer';
import Profile from '../components/Profile';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
export default function Home(props: HomeProps) {
  return (
    <>
      <NavContainer />
      <div>
        <Head>
          <title>NutriJess</title>
        </Head>
        <Profile />
      </div>
    </>
  );
}
