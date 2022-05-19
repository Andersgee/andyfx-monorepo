/**
 * import .svg, using svg optimizers preset-default but with some overrides.
 *
 * @see https://github.com/svg/svgo/blob/main/README.md#built-in-plugins
 */
const svgrconfig = {
  test: /\.svg$/i,
  issuer: { and: [/\.(js|ts|md)x?$/] },
  use: [
    {
      loader: "@svgr/webpack",
      options: {
        //https://react-svgr.com/docs/options/
        svgo: true, //use svg Optimizer
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                //https://github.com/svg/svgo#default-preset
                //use preset-default but with some overrides
                overrides: {
                  cleanupIDs: false,
                  prefixIds: false,
                  removeTitle: false,
                },
              },
            },
          ],
        },
      },
    },
  ],
};

module.exports = svgrconfig;

/*
//preset-default reference: https://github.com/svg/svgo/blob/main/README.md#default-preset
const svgoBuiltInPluginsDefaults = {
  cleanupIDs: true,
  prefixIds: false,
  removeViewBox: true,
  removeTitle: true,

  cleanupAttrs: true,
  mergeStyles: true,
  inlineStyles: true,
  removeDoctype: true,
  removeXMLProcInst: true,
  removeComments: true,
  removeMetadata: true,
  removeDesc: true,
  removeUselessDefs: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  removeEmptyContainers: true,
  cleanupEnableBackground: true,
  minifyStyles: true,
  convertColors: true,
  convertPathData: true,
  trim: true,
  convertTransform: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeUnusedNS: true,
  cleanupNumericValues: true,
  cleanupListOfValues: true,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  mergePaths: true,
  convertShapeToPath: true,
  convertEllipseToCircle: true,
  sortDefsChildren: true,

  removeXMLNS: false,
  convertStyleToAttrs: false,
  removeRasterImages: false,
  sortAttrs: false,
  removeDimensions: false,
  removeAttrs: false,
  removeAttributesBySelector: false,
  removeElementsByAttr: false,
  addClassesToSVGElement: false,
  addAttributesToSVGElement: false,
  removeOffCanvasPaths: false,
  removeStyleElement: false,
  removeScriptElement: false,
  reusePaths: false,
};
*/
