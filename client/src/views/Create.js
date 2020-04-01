import React from 'react';

import Layout from '../components/layout/Layout';
import { Navigation } from '../components/layout/';
import CreateFields from '../components/create/CreateFields'

const Create = () => {
  return (
    <Layout>
      <Navigation />
      <CreateFields />
    </Layout>
  )
}

export default Create
