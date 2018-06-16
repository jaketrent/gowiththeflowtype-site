import { transparentize } from 'polished'

import BlurbHeader from './blurb-header'
import vars from './vars'

const Type = props => (
  <div className="type">
    {props.children}
    <style jsx>{`
      .type {
        display: inline-block;
        border-radius: 6px;
        padding: ${vars.layout.spacingXSmall} ${vars.layout.spacingMedium};
        background: ${transparentize(0.5, vars.colors.blue)};
        text-align: center;
        color: ${vars.colors.white};
        text-shadow: 1px 1px 0 ${transparentize(0.5, vars.colors.grayDark)};
        border: 1px solid ${vars.colors.yellow};
      }
    `}</style>
  </div>
)

export default _ => (
  <div>
    <div className="header">
      <BlurbHeader>Types You'll Learn</BlurbHeader>
    </div>
    <div className="types">
      <Type>any</Type>
      <Type>object</Type>
      <Type>primitive</Type>
      <Type>array</Type>
      <Type>function</Type>
      <Type>mixed</Type>
      <Type>module</Type>
      <Type>maybe</Type>
      <Type>variable</Type>
      <Type>inference</Type>
      <Type>type alias</Type>
      <Type>generic</Type>
      <Type>class</Type>
      <Type>interface</Type>
      <Type>intersection</Type>
      <Type>tuple</Type>
      <Type>literal</Type>
      <Type>type cast</Type>
      <Type>union</Type>
      <Type>libdef</Type>
    </div>
    <style jsx>{`
      .header {
        padding: ${vars.layout.spacingXLarge} 0 ${vars.layout.spacingLarge} 0;
      }
      .types {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: ${vars.layout.spacingSmall};
      }
      @media screen and (min-width: 1024px) {
        .types {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      }
    `}</style>
  </div>
)
