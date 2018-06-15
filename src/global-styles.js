import vars from './vars'

export default _ => (
  <style global jsx>{`
    * {
      box-sizing: border-box;
    }
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: 'Faustina', serif;
      background-color: #fff;
      color: ${vars.colors.blue};
      font-size: ${vars.type.fontSizeSmall};
      line-height: ${vars.type.lineHeightTight};
    }
    h1,
    h2,
    h3 {
      font-family: 'Fjalla One', sans-serif;
      font-weight: 400;
      margin: 0;
    }
    a {
      display: inline-block;
      color: #fff;
      text-decoration: none;
      border-bottom: 1px dashed #889f1e;
      margin-bottom: 2px;
      cursor: pointer;
    }
    a:hover {
      border-bottom: none;
      color: #889f1e;
      border-bottom: 1px solid #889f1e;
    }
    ol {
      margin: 0;
      padding: 0;
    }
    p {
      line-height: 30px;
    }
    iframe {
      max-width: 100%;
    }
    @media screen and (min-width: 426px) {
    }
    @media screen and (min-width: 769px) {
      html,
      body {
        font-size: ${vars.type.fontSizeMedium};
        line-height: ${vars.type.lineHeightStandard};
      }
    }
    @media screen and (min-width: 1441px) {
      html,
      body {
        font-size: ${vars.type.fontSizeLarge};
        line-height: ${vars.type.lineHeightStandard};
      }
    }
  `}</style>
)