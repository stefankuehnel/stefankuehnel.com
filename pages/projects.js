import Head from 'next/head';
import { useRouter } from 'next/router';

import Code from '../components/Code/Code';
import Headline from '../components/Headline/Headline';
import Layout from '../components/Layout/Layout';
import ExternalLink from '../components/Link/ExternalLink/ExternalLink';

function Projects() {
  const router = useRouter();

  const title = 'Stefan Kühnel | Projects';
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
        <Headline value="Projects" />
        <p>Here are some projects of mine.</p>
        <ul>
          <li>
            <ExternalLink href="https://latex.userstatic.com" text="LaTeX API" />
            : A fast and easy-to-use renderer for mathematical equations that allows LaTeX maths
            equations to be placed anywhere as <Code
              content="&lt;img&gt;"
              spaceBefore
              spaceAfter
            />{' '}
            tags.
          </li>
          <li>
            <ExternalLink
              href="https://jupyter.stefankuehnel.com/projects/sonnenuhr.html"
              text="Sundial"
            />
            : Python program that generates a location based dial from given coordinates.
          </li>
          <li>
            <ExternalLink
              href="https://jupyter.stefankuehnel.com/projects/pagerank.html"
              text="PageRank Algorithm"
            />
            : Mathematical method that counts the number and quality of links to a page to determine
            a rough estimate of how important the website is.
          </li>
          <li>
            <ExternalLink
              href="https://jupyter.stefankuehnel.com/projects/deterministischer-endlicher-automat.html"
              text="Deterministic Finite Automata"
            />
            : Implementation of a DFA that allows to capture any expression and process it according
            to given rules.
          </li>
          <li>
            <ExternalLink
              href="https://static.bealeafusercontent.com/media/stefankuehnel.com/pubs/de/de/archive/computing/difference-between-hardlinks-and-softlinks.pdf"
              text="Difference between Hardlinks and Softlinks"
            />
            : Academic paper on the differences and applications of hard- and softlinks in modern
            computer systems.
          </li>
          <li>
            <ExternalLink href="https://github.com/egisty/specification13" text="Specification13" />
            : Contains a revised ICANN Specification13 list of TLDs where only the Registry
            operator, its affiliates or trademark licensees are registrants of domain names in the
            TLD.
          </li>
          <li>
            <ExternalLink
              href="https://github.com/egisty/government-domains"
              text="Government Domains"
            />
            : Contains lists of official domain names administered by governments and
            government-related organizations in a machine-readable format.
          </li>
          <li>
            <ExternalLink
              href="https://github.com/caymanbrothers/stockshare-sdk"
              text="StockShare SDK"
            />
            : Financial mathematical SDK for the analysis and valuation of equity derivative
            options.
          </li>
          <li>
            <ExternalLink
              href="https://wsc.egisty.com/?lang=en"
              text="Egisty Web &amp; Security Certificate"
            />
            : User-friendly solution for Internet users to determine who runs a certain domain.
          </li>
        </ul>
      </Layout>
    </>
  );
}

export default Projects;
