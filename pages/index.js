import { transparentize } from 'polished'

import GlobalStyles from '../src/global-styles'
import Head from '../src/head'
import ToC from '../src/toc'
import vars from '../src/vars'

const Arrow = _ => (
  <svg
    role="img"
    aria-label="caret right icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17" />
    <style jsx>{`
      height: 24px;
      width: 24px;
      fill: currentColor;
    `}</style>
  </svg>
)

const Header = _ => (
  <header className="header">
    <div className="content">
      <h1 className="title">
        Go with the
        <div className="big">FlowType</div>
      </h1>
    </div>
    <div className="curves">
      <svg
        className="curve curve2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <path d="M0,210 C195,252 217,136 500,240 L500,500 0,500 Z" />
      </svg>
      <svg
        className="curve curve1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <path d="M0,210 C197,91 251,341 500,210 L500,500 0,500 Z" />
      </svg>
    </div>
    <style jsx>{`
      .header {
      }
      .content {
        display: flex;
        justify-content: flex-start;
      }
      .title {
        margin-left: 5vw;
        margin-top: ${vars.layout.spacingLarge};
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-transform: uppercase;
      }
      .big {
        font-size: 2.5em;
        line-height: 1.25em;
      }
      .curves {
        position: relative;
        margin-top: -30vw;
      }
      .curve {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        stroke: none;
      }
      .curve1 {
        fill: ${transparentize(0.5, vars.colors.blue)};
      }
      .curve2 {
        fill: ${transparentize(0.5, vars.colors.green)};
      }
      @media screen and (min-width: 769px) {
        .content {
          justify-content: flex-end;
        }
        .title {
          margin-right: 15vw;
          margin-top: ${vars.layout.spacingXXLarge};
          font-size: 2rem;
          line-height: 2rem;
        }
      }
      @media screen and (min-width: 1441px) {
        .title {
          margin-right: 20vw;
          margin-top: calc(2 * ${vars.layout.spacingXXLarge});
          font-size: 1.75rem;
          line-height: 1.75rem;
        }
        .curves {
          margin-top: -38vw;
        }
      }
    `}</style>
  </header>
)

export default _ => (
  <div>
    <Head />
    <GlobalStyles />
    <Header />
    <div className="content">
      <article>
        <header>
          <h2>Why types?</h2>
        </header>
        <p>
          Want to know if your program is correct before you ship it to the
          browser? Types can help you know if your code integrates well
          together. Want more insight into developer intent when reading code?
          Types can help expose that better. Want more feedback while your
          coding for a more confident development experience? Typing and
          compiling your code can help with that too.
        </p>
        <a href="">
          Learn more <Arrow />
        </a>
      </article>
      <article>
        <header>
          <h2>Why Flow?</h2>
        </header>
        <p>
          Flow, or Flowtype, is a strong, static typing system for JavaScript.
          Keep your language, your toolchain, your talent pool, and get some
          great benefits. Add types in your JavaScript project where you want or
          need them, gradually.
        </p>
        <a href="https://flow.org/">
          Official docs <Arrow />
        </a>
      </article>
      <article>
        <header>
          <h2>Take the Course</h2>
        </header>
        <p>
          Hear the quick pitch on Flow and then see Flow in action in a
          real-world project environment. This isn't an academic review of all
          the features of Flow. This is seeing those fundamental features used
          in the course of creating a real project.
        </p>
        <ToC />
        <a href="">
          Start the course <Arrow />
        </a>
      </article>
      <article>
        <header>
          <h2>The Project</h2>
        </header>
        <p>
          To demonstrate Flow, we make a choose your own adventure game, where
          the narrative is chosen by the reader over time. It's a silly tale of
          galactic treachery and loyal friends. We start with an empty directory
          and end with a small, fully-flowtyped web application.
        </p>
        <a href="https://github.com/jaketrent/gowiththeflowtype-materials">
          Github files <Arrow />
        </a>
      </article>
    </div>
    <style jsx>{`
      .content {
        position: relative;
        margin-top: 50vw;
        padding: ${vars.layout.spacingLarge};
        color: ${vars.colors.grayDark};
      }
    `}</style>
  </div>
)
