import React from 'react';

import Head from 'next/head';
import App from '../components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Simulador de Reforço de PPR</title>
        <meta name="description" content="Este simulador permite saber se compensa reforçar o seu PPR para efeitos de deduçnao no IRS" />
      </Head>
      <App />
    </>
  );
}
