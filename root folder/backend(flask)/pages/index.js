import React from 'react'
import Head from 'next/head'

export default () => (
  <div className="root">
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Next.js on Heroku</title>
    </Head>
    <style jsx>{`
      .root {
        font-family: sans-serif;
        line-height: 1.33rem;
        margin-top: 8vh,
      }
      @media (min-width: 600px) {
        .root {
          margin-left: 21vw;
          margin-right: 21vw;
        }
      }
    `}</style>

    <p>Deploy <a href="https://nextjs.org/">Next.js</a> universal web apps on <a href="https://www.heroku.com/home">Heroku</a>.</p>

  </div>
)
