import React from 'react';

import Layout from '../components/layout/Layout';
import { Actions } from '../components/layout'
import Notes from '../components/notes/Notes';

const Home = () => {
  return (
    <Layout>
      <Actions />
      <Notes />
    </Layout>
  )
}

export default Home
