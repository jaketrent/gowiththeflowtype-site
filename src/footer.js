import vars from './vars'

const now = _ => new Date().getFullYear()

export default _ => (
  <div>
    <svg
      className="curve"
      viewBox="0 0 1200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 57.756c229.371-16.442 349.236 15.983 435.531 14.827 65.209-.874 394.428-47.929 529.092-36.359C1099.29 47.794 1200 75.38 1200 75.38V100H0" />
    </svg>
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
            Course &copy; {now()} Pluralsight; this page &copy; {now()} Jake
            Trent <br />
            This content uses affiliate links.
          </div>
        </div>
      </div>
    </footer>
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
      .curve {
        width: 100%;
        fill: ${vars.colors.blue};
        background: ${vars.colors.blueGreen};
        margin-bottom: -8px;
      }
      .footer-body {
        width: 1200px;
        max-width: 100%;
        margin: 0 auto;
        padding: ${vars.layout.spacingLarge};
      }
      .footer-col {
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
  </div>
)
