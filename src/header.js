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

const HeaderWaves = _ => (
  <svg viewBox="0 0 1764 299" xmlns="http://www.w3.org/2000/svg">
    <path
      className="curve1"
      d="M0 138.658s125.34 31.224 288.654 35.36c213.266 5.402 485.238-88.05 761.856-86.417C1327.13 89.233 1764 252.162 1764 252.162V299H0V138.658z"
    />
    <path
      className="curve2"
      d="M0 140.484S206.655 17.802 369.421 22.696c298.776 8.983 562.612 257.006 894.319 255.28 331.7-1.727 494.34-139.224 500.26-139.224 5.92 0 0 160.248 0 160.248H0V140.484z"
    />
    <style jsx>{`
      position: relative;
      bottom: -4px;
      width: 100%;
      .curve1 {
        fill: ${transparentize(0.5, vars.colors.green)};
      }
      .curve2 {
        fill: ${transparentize(0.5, vars.colors.blue)};
      }
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
    <HeaderWaves />
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
      }
    `}</style>
  </header>
)
