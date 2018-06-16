import { transparentize } from 'polished'

import vars from './vars'

const Curl = _ => (
  <svg
    aria-hidden={true}
    viewBox="0 0 100 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.65 54.28h79.293S73.816 7.797 8.374 6.574c0 0 55.213 24.826 4.277 47.704z"
      fill="#99cfda"
    />
    <path
      d="M12.65 54.28H96S81.873 9.566 17.415 7.055c0 0 46.172 24.345-4.764 47.223z"
      fill="#379fb7"
    />
    <style jsx>{`
      position: relative;
      bottom: -6px;
      height: 2em;
    `}</style>
  </svg>
)

export default _ => (
  <header>
    <div className="grid">
      <div />
      <h1 className="title">
        Go with the
        <Curl />
        <div className="big">FlowType</div>{' '}
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
      .grid {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0 ${vars.layout.spacingLarge};
      }
      .title {
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
        .grid {
          grid-template-columns: 1fr 1fr;
          gap: ${vars.layout.spacingXLarge};
        }
        .title {
          margin-top: ${vars.layout.spacingXXLarge};
          font-size: 2rem;
          line-height: 2rem;
        }
      }
      @media screen and (min-width: 1441px) {
        .title {
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
