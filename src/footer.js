import vars from './vars'

const now = _ => new Date().getFullYear()

export default _ => (
  <footer className="footer">
    <div className="footer-body">
      <div className="footer-col">
        <p className="footer-invite">
          Check out some of my other tech shenanigans by visiting my{' '}
          <a href="https://github.com/jaketrent">Github</a> or by going to:{' '}
        </p>
        <a className="footer-invite-link" href="http://jaketrent.com">
          jaketrent.com
        </a>
      </div>
      <div className="footer-col footer-col__copy">
        <div className="footer-copy">
          Course &copy; {now()} Pluralsight; this page &copy; {now()} Jake Trent{' '}
          <br />
          This content uses affiliate links.
        </div>
      </div>
    </div>
    <style jsx>{`
      a:hover {
        color: ${vars.colors.yellow};
      }
      .footer {
        position: relative;
        overflow: hidden;
        background: ${vars.colors.blue};
        color: ${vars.colors.white};
      }
      .footer-body {
        width: 1200px;
        max-width: 100%;
        margin: 0 auto;
        padding: ${vars.layout.spacingLarge};
      }
      .footer-col {
        margin-bottom: 1em;
      }
      .footer-invite-link {
        font: 0/0 a;
        text-shadow: none;
        color: transparent;
        background: url(/static/img/jaketrent-logo-white.png) center no-repeat;
        background-size: cover;
        height: 69.375px;
        width: 250px;
        border: 1px solid transparent;
      }
      .footer-copy {
        font-size: 0.75em;
        line-height: 1.5em;
        margin-top: 3em;
      }
      @media screen and (min-width: 769px) {
        .footer-body {
          display: flex;
        }
        .footer-col {
          flex: 1;
        }
        .footer-col + .footer-col {
          margin-left: 1.25em;
        }
        .footer-col__copy {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
        }
      }
      @media screen and (min-width: 1261px) {
        .footer-body {
          padding: ${vars.layout.spacingLarge} 0;
        }
      }
    `}</style>
  </footer>
)
