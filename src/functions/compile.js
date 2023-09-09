/**
 *
 * @param {object} item
 * @param {boolean} isStandard
 * @returns object
 */
export const transformObj = () => {
  // deep clone object
  let dataClone = JSON.parse(JSON.stringify(this.data));

  // clean up clone
  dataClone = Object.assign({}, dataClone, {
    email_settings: this.data.email_settings[0],
    custom_modules: [],
    font_styles: transformFontStyles(this.data.font_styles[0]),
    font: concatGoogleFont(this.data.fonts),
    cta: cleanupStandardCta(this.data.cta[0]),
    elements: {
      headlines: [],
      paragraphs: [],
      ctas: [],
    },
  });

  // add headlines to elements
  dataClone.elements.headlines = [
    ...copyHeadlines(dataClone, 4),
    ...stringToNumber(dataClone.headlines),
  ];

  // add paragraphs to elements
  dataClone.elements.paragraphs = [
    ...copyParagraphs(dataClone, 8),
    ...stringToNumber(dataClone.paragraphs),
  ];

  // add ctas to elements
  dataClone.elements.ctas = [
    ...copyCta(dataClone),
    ...cleanupCtaArray(dataClone.ctas),
  ];

  //empty out array
  delete dataClone.headlines;
  delete dataClone.paragraphs;
  delete dataClone.ctas;

  return { brand: dataClone };
};
