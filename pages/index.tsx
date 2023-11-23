
import React from 'react';
import Layout from './Layout';

const IndexPage: React.FC = () => {
  return (
  <Layout>
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-4xl font-bold mb-4">Welcome to my Next.js app!</h1>
        <p className="text-lg">Start building your awesome application.</p>
      </div>
    </div>
    </Layout>
  );

};

export default IndexPage;
