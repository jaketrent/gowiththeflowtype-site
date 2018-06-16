import Footer from '../src/footer'
import GlobalStyles from '../src/global-styles'
import Head from '../src/head'
import Header from '../src/header'
import ToC from '../src/toc'
import vars from '../src/vars'

const ArrowLink = props => (
  <a href={props.href} className="link">
    {props.children}
    <span className="arrow">
      <Arrow />
    </span>
    <style jsx>{`
      .link {
        position: relative;
        font-size: 1.125rem;
      }
      .arrow {
        position: absolute;
        top: 3px;
        right: -24px;
        height: 24px;
        width: 24px;
      }
    `}</style>
  </a>
)

const Arrow = _ => (
  <svg
    role="img"
    aria-label="caret right icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 12l-5-5-1.41 1.41L13.17 12l-3.58 3.59L11 17" />
    <style jsx>{`
      height: 100%;
      width: 100%;
      fill: currentColor;
    `}</style>
  </svg>
)

const Blurb = props => (
  <article>
    <header>
      <h2>{props.title}</h2>
    </header>
    <p>{props.children}</p>
    {props.footer}
    <style jsx>{`
      h2 {
        color: ${vars.colors.blueDark};
      }
      @media screen and (min-width: 769px) {
        h2 {
          font-size: 1.75rem;
        }
      }
    `}</style>
  </article>
)

const Content = props => (
  <div className="content">
    {props.children}
    <style jsx>{`
      .content {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        gap: ${vars.layout.spacingXLarge};
        width: 100%;
        margin-top: 50vw;
        padding: ${vars.layout.spacingLarge};
        color: ${vars.colors.grayDark};
        background: ${vars.colors.blueGreen};
      }
      @media screen and (min-width: 769px) {
        .content {
          grid-template-columns: 1fr 1fr;
          gap: ${vars.layout.spacingXLarge};
        }
      }
      @media screen and (min-width: 1201px) {
        .content {
          padding: ${vars.layout.spacingXLarge} calc((100vw - 1200px) / 2)
            ${vars.layout.spacingXLarge} calc((100vw - 1200px) / 2);
        }
      }
    `}</style>
  </div>
)

export default _ => (
  <div>
    <Head />
    <GlobalStyles />
    <Header />
    <Content>
      <Blurb
        title="Why types?"
        footer={<ArrowLink href="">Learn more</ArrowLink>}
      >
        Want to know if your program is correct before you ship it to the
        browser? Types can help you know if your code integrates well together.
        Want more insight into developer intent when reading code? Types can
        help expose that better. Want more feedback while your coding for a more
        confident development experience? Typing and compiling your code can
        help with that too.
      </Blurb>
      <Blurb
        title="Why Flow?"
        footer={<ArrowLink href="https://flow.org/">Official docs</ArrowLink>}
      >
        Flow, or Flowtype, is a strong, static typing system for JavaScript.
        Keep your language, your toolchain, your talent pool, and get some great
        benefits. Add types in your JavaScript project where you want or need
        them, gradually.
      </Blurb>
      <Blurb
        title="Take the Course"
        footer={[<ToC />, <ArrowLink href="">Start the course</ArrowLink>]}
      >
        Hear the quick pitch on Flow and then see Flow in action in a real-world
        project environment. This isn't an academic review of all the features
        of Flow. This is seeing those fundamental features used in the course of
        creating a real project.
      </Blurb>
      <Blurb
        title="The Project"
        footer={
          <ArrowLink href="https://github.com/jaketrent/gowiththeflowtype-materials">
            Github files
          </ArrowLink>
        }
      >
        To demonstrate Flow, we make a choose your own adventure game, where the
        narrative is chosen by the reader over time. It's a silly tale of
        galactic treachery and loyal friends. We start with an empty directory
        and end with a small, fully-flowtyped web application.
      </Blurb>
    </Content>
    <Footer />
  </div>
)
