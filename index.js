// Constants
const backgroundColor = '#d9d7ce';
const foregroundColor = '#212733';

// Colors
const RED = '#ff3333';
const GREEN = '#bae67e';
const YELLOW = '#ffd580';
const BLUE = '#5ccfe6';
const MAGENTA = '#b37ed0';
const LIGHT_GRAY = '#f2f2f2';
const DARK_GRAY = '#607080'

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  colorCubes: '#fff',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = YELLOW;
const borderColor = backgroundColor;

exports.decorateConfig = (config) => {
  let windowControlsCSS

  if (config.showWindowControls) {
    windowControlsCSS = '.list_2902 { margin-left: 0 !important; }'
  }

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: ${backgroundColor} !important;
      }
      .splitpane_divider {
        background-color: rgba(130, 128, 184, 0.5) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        background-color: #0c0f12;
        box-shadow: inset 2px 0 0 ${YELLOW}
      }
      ${windowControlsCSS}
    `
  })
}
