import Head from 'next/head';

import { CompletedChallengers } from "../components/CompletedChallengers";
import { Countdown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBar/>

      <section>
        <div>
          <Profile />
          <CompletedChallengers />
          <Countdown/>
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
