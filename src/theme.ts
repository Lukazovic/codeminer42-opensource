const colors = {
  black: '#11111a',
  white: '#ffffff',
  gray: {
    100: '#fffefc',
    200: '#cfcfd3',
  },
  red: '#e16259',
  green: '#2ecc71',
}

//             0  1  2  3   4   5   6    7    8
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fonts = {
  body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;",
  heading: 'inherit',
}

//                 0  1  2  3  4   5   6   7   8   9   10  11  12   13
const fontSizes = [0, 5, 7, 9, 12, 16, 21, 28, 37, 50, 67, 89, 119, 159].map(
  (n) => `${n / 10}rem`
)

const fontWeights = [0, 300, 400, 500, 600, 700]

const theme = {
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
}

export default theme
