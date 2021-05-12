import Head from 'next/head';
import { useRouter } from 'next/router';

import Headline from '../components/Headline/Headline';
import Layout from '../components/Layout/Layout';
import ExternalLink from '../components/Link/ExternalLink/ExternalLink';
import InternalLink from '../components/Link/InternalLink/InternalLink';

function HomePage() {
  const router = useRouter();

  const title = 'Stefan Kühnel';
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
        <p>
          I am interested in topics of computer science, mathematics, economics and finance and
          prepare them in an easy to understand and usable way.
        </p>
        <Headline value="Highlights" />
        <p>
          Below you will find a list of selected
          <InternalLink href="/projects" text="projects" spaceBefore spaceAfter />
          that I have worked on in the past.
        </p>
        <ul>
          <li>
            My latest project was the construction of a
            <ExternalLink
              href="https://jupyter.stefankuehnel.com/projects/sonnenuhr.html"
              text="sundial"
              spaceBefore
              spaceAfter
            />
            that works worldwide. Basically, this is a Python program (SageMath Notebook) that
            receives various geospecific parameters and then creates a location-dependent dial based
            on this information.
          </li>
          <li>
            The academic paper
            <ExternalLink
              href="https://docs.stefankuehnel.com/pdf/politische_meinungsbildung.pdf"
              text="political opinion-forming in the digital age using examples"
              spaceBefore
              spaceAfter
            />
            deals with the problem of targeted influence on citizens via digital media in the
            international context and its resulting dangers.
          </li>
          <li>
            The
            <ExternalLink
              href="https://wsc.egisty.com/?lang=en"
              text="Egisty Web &amp; Security Certificate"
              spaceBefore
              spaceAfter
            />
            is a user-friendly solution for Internet users to determine who runs a certain domain
            and whether the connection to this website is protected by a valid SSL certificate.
          </li>
          <li>
            The
            <ExternalLink
              href="https://github.com/caymanbrothers/stockshare-sdk"
              text="StockShare SDK for PHP"
              spaceBefore
              spaceAfter
            />
            can be used to calculate the price of a European call or put option as well as the
            partial derivatives of the option price according to the corresponding model parameters
            of the Black-Scholes model. If you&apos;re curious, you can try out the
            <ExternalLink
              href="https://blackscholes.options-europe.caymanbrothers.com"
              text="online calculator"
              spaceBefore
            />
            , too.
          </li>
        </ul>
        <Headline value="Code" />
        <p>
          Many of my projects can be accessed through my official
          <ExternalLink
            href="https://l.stefankuehnel.com/github"
            text="GitHub"
            spaceBefore
            spaceAfter
          />
          profile. Whatever you are interested in, feel free to try it out and if you find any
          mistakes, let me know.
        </p>
        <Headline value="Books" />
        <p>Below you will find a few books that I am currently reading or have read.</p>
        <ul>
          <li>
            <em>Will Kurt: </em>
            <ExternalLink
              href="https://nostarch.com/learnbayes"
              text="Bayesian Statistics the Fun Way"
              spaceBefore
            />
          </li>
          <li>
            <em>Robert C. Martin:</em>
            <ExternalLink
              href="https://openlibrary.org/books/OL26222911M/Clean_Code"
              text="Clean Code"
              spaceBefore
            />
          </li>
          <li>
            <em>Tom Peters, et. al.:</em>
            <ExternalLink
              href="https://en.wikipedia.org/wiki/In_Search_of_Excellence"
              text="In Search of Excellence"
              spaceBefore
              spaceAfter
            />
          </li>
        </ul>
        <Headline value="Contact" />
        <p>
          I am open to all kinds of messages like feedback, questions or a nice greeting. Just send
          me a message via the
          <InternalLink href="/contact" text="contact form" spaceBefore />.
        </p>
      </Layout>
    </>
  );
}

export default HomePage;
