import React from 'react'
import Head from 'next/head'
import Principal from '../src/components/Principal'
/* import styles from '../styles/Mstyle.module.css' */

import db from '../db.json';
import QuizBackground from '../src/components/quizBackground'
import GitHubCorner from '../src/components/GitHubCorner'



export default function Home() {


  return (
    <QuizBackground backgroundImage={db.bg}>
      
        <Head>
          <title>Quiz BlackPink</title>
          <link rel="icon" href="logoPink.png"/>
        </Head>
        <Principal>

        </Principal>  
      <GitHubCorner projectUrl="https://github.com/Matheus153"/>
    </QuizBackground>
    
  )

}
