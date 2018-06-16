import { transparentize } from 'polished'

import vars from './vars'

export default _ => (
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
