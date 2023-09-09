/**
 *
 * @param {object} item
 * @param {boolean} isStandard
 * @returns object
 */
export const ctaDesignBooleans = (item, isStandard) => {
  const icon = item.cta_icon_design;
  const design = item.cta_design;
  const prefix = isStandard ? 'cta_' : '';
  const obj = {};

  obj[`${prefix}icon_boolean`] =
    icon == 'right' || icon == 'left' ? true : false;
  obj[`${prefix}icon_left_boolean`] = icon == 'left' ? true : false;
  obj[`${prefix}border_boolean`] = design == 'border_boolean' ? true : false;
  obj[`${prefix}rounded_boolean`] = design == 'rounded_boolean' ? true : false;
  obj[`${prefix}border_rounded_boolean`] =
    design == 'border_rounded_boolean' ? true : false;
  obj[`${prefix}img_cta_boolean`] = design == 'img_cta_boolean' ? true : false;
  obj[`${prefix}left_right_image_boolean`] =
    design == 'left_right_image_boolean' ? true : false;

  return obj;
};

/**
 *
 * @param {object} obj
 * @returns object
 */
function deleteProperties(obj) {
  delete obj.cta_font_name_temp;
  delete obj.cta_icon_design;
  delete obj.cta_design;

  if (obj.name) {
    // const name = obj.name;
    // const readable_name = obj.readable_name;
    // delete obj.name;
    return Object.assign(
      { name: obj.name, readable_name: obj.readable_name },
      obj
    );
  }

  return obj;
}

/**
 *
 * @param {object} cta
 * @returns object
 */
export const cleanupStandardCta = (cta) => {
  const newCtaObj = Object.assign({}, cta, {
    cta_text: `<span style='font-size:${cta.cta_font_size}px; line-height: ${cta.cta_line_height}%;'>${cta.cta_text}</span>`,
    cta_font_family: cta.cta_font_name_temp
      ? `'${cta.cta_font_name_temp}', ${cta.cta_font_family}`
      : cta.cta_font_family,
    cta_font_size: cta.cta_font_size,
    cta_line_height: cta.cta_line_height,
    cta_font_weight: cta.cta_font_weight,
    cta_letter_spacing: cta.cta_letter_spacing,
    cta_text_pad_topbottom: cta.cta_text_pad_topbottom,
    cta_text_pad_leftright: cta.cta_text_pad_leftright,
    cta_icon_width: cta.cta_icon_width,
    cta_icon_pad: cta.cta_icon_pad,
    cta_border_width: cta.cta_border_width,
    cta_border_radius: cta.cta_border_radius,
    cta_border_rounded_width: cta.cta_border_rounded_width,
    cta_border_rounded_radius: cta.cta_border_rounded_radius,
    cta_image_width: cta.cta_image_width,
    cta_left_image_width: cta.cta_left_image_width,
    cta_right_image_width: cta.cta_right_image_width,
    cta_width: cta.cta_width,
  });

  const mergedObj = {
    ...ctaDesignBooleans(cta, true),
    ...newCtaObj,
  };

  return deleteProperties(mergedObj);
};

/**
 *
 * @param {array} arr
 * @returns array
 */
export const cleanupCtaArray = (arr) => {
  if (arr.length) {
    arr = arr.map(function(item) {
      const cleanup = Object.assign({}, item, {
        text: `<span style='font-size:${item.font_size}px; line-height: ${item.line_height}%;'>${item.text}</span>`,
        font_family: item.cta_font_name_temp
          ? `'${item.cta_font_name_temp}', ${item.font_family}`
          : item.font_family,
        font_size: item.font_size,
        line_height: item.line_height,
        font_weight: item.font_weight,
        letter_spacing: item.letter_spacing,
        text_pad_topbottom: item.text_pad_topbottom,
        text_pad_leftright: item.text_pad_leftright,
        width: item.width,
        icon_width: item.icon_width,
        icon_pad: item.icon_pad,
        border_width: item.border_width,
        border_radius: item.border_radius,
        border_rounded_width: item.border_rounded_width,
        border_rounded_radius: item.border_rounded_radius,
        image_width: item.image_width,
        left_image_width: item.left_image_width,
        right_image_width: item.right_image_width,
      });

      const convertedItem = {
        ...ctaDesignBooleans(item),
        ...cleanup,
      };
      return deleteProperties(convertedItem);
    });
  }

  return arr;
};

/**
 *
 * @param {object} data
 * @returns array
 */
export const copyCta = (data) => {
  const cta = data.cta;

  return [
    {
      name: `standard_cta`,
      readable_name: `1-016 CTA`,
      icon_boolean: cta.cta_icon_boolean,
      icon_left_boolean: cta.cta_icon_left_boolean,
      border_boolean: cta.cta_border_boolean,
      rounded_boolean: cta.cta_rounded_boolean,
      border_rounded_boolean: cta.cta_border_rounded_boolean,
      img_cta_boolean: cta.cta_img_cta_boolean,
      left_right_image_boolean: cta.cta_left_right_image_boolean,
      text: cta.cta_text,
      font_family: cta.cta_font_family,
      color: cta.cta_color,
      text_alignment: cta.cta_text_alignment,
      font_weight: cta.cta_font_weight,
      line_height: cta.cta_line_height,
      text_transform: cta.cta_text_transform,
      text_pad_topbottom: cta.cta_text_pad_topbottom,
      text_pad_leftright: cta.cta_text_pad_leftright,
      letter_spacing: cta.cta_letter_spacing,
      alignment: cta.cta_alignment,
      width_type: cta.cta_width_type,
      width: cta.cta_width,
      bgcolor: cta.cta_bgcolor,
      icon_src: cta.cta_icon_src,
      icon_width: cta.cta_icon_width,
      icon_pad: cta.cta_icon_pad,
      border_width: cta.cta_border_width,
      border_color: cta.cta_border_color,
      border_radius: cta.cta_border_radius,
      border_rounded_width: cta.cta_border_rounded_width,
      border_rounded_radius: cta.cta_border_rounded_radius,
      border_rounded_color: cta.cta_border_rounded_color,
      src_url: cta.cta_src_url,
      alt_text: cta.cta_alt_text,
      image_width: cta.icta_mage_width,
      left_image_src_url: cta.cta_left_image_src_url,
      left_image_alt_text: cta.cta_left_image_alt_text,
      left_image_width: cta.left_image_width,
      right_image_src_url: cta.cta_right_image_src_url,
      right_image_alt_text: cta.cta_right_image_alt_text,
      right_image_width: cta.cta_right_image_width,
      box_boolean: cta.cta_box_boolean,
      mobile_fontsize: cta.cta_mobile_fontsize,
    },
  ];
};
