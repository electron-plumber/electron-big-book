export default {
  // For supported math formulas: https://docs.mathjax.org/en/latest/input/tex/macros/index.html
  // For properties of the input processor tex configuration:
  // https://docs.mathjax.org/en/latest/options/input/tex.html#the-configuration-block
  tex: {
    packages: {
      '[+]': ['cancel', 'ams', 'textcomp', 'html', 'color']
    },
  },
  // For properties of the output processor svg configuration:
  // https://docs.mathjax.org/en/latest/options/output/svg.html
  svg: {},
  // For converting math strings to properties of document configuration:
  // https://docs.mathjax.org/en/latest/web/typeset.html#conversion-options
  convert: {
    display: false
  }
}
