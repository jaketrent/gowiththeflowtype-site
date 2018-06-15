import Head from 'next/head'

const now = _ => new Date().getFullYear()
export default _ => (
  <Head>
    <title>Go With the Flow Type</title>
    <link rel="shortcut icon" type="image/png" href="/static/img/favicon.png" />

    <meta
      name="author"
      content="https://plus.google.com/115032056022257436849"
    />
    <meta
      name="description"
      content="Learn to add strong static typing to your JavaScript with Flow."
    />
    <meta
      name="keywords"
      content="javascript, static typing, strong static types, flow, flowtype, typescript, learn flow"
    />
    <meta name="copyright" content={`${now()} Jake Trent`} />

    <meta property="og:title" content="Go With the FlowType" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://gowiththeflowtype.com" />
    <meta
      property="og:description"
      content="Learn to add strong static typing to your JavaScript with Flow."
    />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Go With the Flow Type" />
    <meta
      name="twitter:description"
      content="Learn to add strong static typing to your JavaScript with Flow."
    />
    <meta name="twitter:site" content="@jaketrent" />
    <meta name="twitter:creator" content="@jaketrent" />

    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      href="https://fonts.googleapis.com/css?family=Faustina|Fjalla+One"
      rel="stylesheet"
    />
  </Head>
)
