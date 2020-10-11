import Head from 'next/head';
import { useRouter } from 'next/router';

import Form from '../components/Form/Form';
import Headline from '../components/Headline/Headline';
import Layout from '../components/Layout/Layout';

function Projects() {
  const router = useRouter();

  const title = 'Stefan Kühnel | Contact';
  const description = 'Co-Founder & General Director of GloomBerry';
  const canonical = 'https://stefankuehnel.com' + router.pathname;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta itemProp="name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Layout>
        <Headline value="Contact" />
        <p>
          I want to hear from you. Feedback, questions, or just wanna say hello? Send me a message
          via the contact form below.
        </p>
        <Form />
      </Layout>
    </>
  );
}

export default Projects;
