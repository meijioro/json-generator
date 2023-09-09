/**
 *
 * @param {*} data
 * @param {*} position
 * @returns
 */
export const copyHeadlines = (data, position) => {
  const style = data.font_styles;
  const arr = [];

  // add standard headlines into array
  for (let i = 1; i <= 4; i++) {
    arr.push({
      name: `standard_h${i}_headline`,
      readable_name: `1-00${position} Headline`,
      align: style[`h${i}_align`],
      text: style[`h${i}_text`],
      color: style[`h${i}_color`],
      font_size: style[`h${i}_font_size`],
      font_family: style[`h${i}_font_family`],
      font_weight: style[`h${i}_font_weight`],
      line_height: style[`h${i}_line_height`],
      letter_spacing: style[`h${i}_letter_spacing`],
      text_transform: style[`h${i}_text_transform`],
      mobile_fontsize: style[`h${i}_mobile_fontsize`],
      mobile_alignment: style[`h${i}_mobile_alignment`],
    });

    position++;
  }

  return arr;
};

/**
 *
 * @param {*} data
 * @param {*} position
 * @returns
 */
export const copyParagraphs = (data, position) => {
  const style = data.font_styles;
  const arr = [];

  // add standard paragraphs into array
  for (let i = 1; i <= 3; i++) {
    arr.push({
      name: `standard_p${i}_paragraph`,
      readable_name: `1-0${('0' + position).slice(-2)} Paragraph`,
      align: style[`p${i}_align`],
      text: style[`p${i}_text`],
      color: style[`p${i}_color`],
      font_size: style[`p${i}_font_size`],
      font_family: style[`p${i}_font_family`],
      font_weight: style[`p${i}_font_weight`],
      line_height: style[`p${i}_line_height`],
      letter_spacing: style[`p${i}_letter_spacing`],
      text_transform: style[`p${i}_text_transform`],
      mobile_fontsize: style[`p${i}_mobile_fontsize`],
      mobile_alignment: style[`p${i}_mobile_alignment`],
    });

    position++;
  }

  return arr;
};

/**
 *
 * @param {*} array
 * @returns
 */
export const stringToNumber = (array) => {
  return array.map((o) => {

    // reorder keys, transform elements
    if (o.name) {
      let reassign = Object.assign({        
        name: o.name,
        readable_name: o.readable_name
      }, o, { 
        text: `<span style='font-size: ${o.font_size}px; line-height: ${o.line_height}%;'>${o.text}</span>`,
        font_family: o.font_name_temp && o.font_name_temp !== 'none'
        ? `'${o.font_name_temp}', ${o.font_family}`
        : o.font_family,
      });

      delete reassign.font_name_temp;
      return reassign;
    }

    //transform font_styles
    return {
      ...o,
      line_height: o.line_height,
      font_weight: o.font_weight,
      letter_spacing: o.letter_spacing,
    };
  });
};
