function deleteProperties(obj) {
  delete obj.h1_font_name_temp;
  delete obj.h2_font_name_temp;
  delete obj.h3_font_name_temp;
  delete obj.h4_font_name_temp;
  delete obj.p1_font_name_temp;
  delete obj.p2_font_name_temp;
  delete obj.p3_font_name_temp;
  delete obj.bullet_font_name_temp;

  return obj;
}

export const transformFontStyles = (obj) => {
  const newFontStyles = Object.assign({}, obj, {
    // H1
    h1_text: `<span style='font-size:${obj.h1_font_size}px; line-height: ${obj.h1_line_height}%;'>${obj.h1_text}</span>`,
    h1_font_family: obj.h1_font_name_temp && obj.h1_font_name_temp !== 'none'
      ? `'${obj.h1_font_name_temp}', ${obj.h1_font_family}`
      : obj.h1_font_family,
    h1_font_size: obj.h1_font_size,
    h1_line_height: obj.h1_line_height,
    h1_font_weight: obj.h1_font_weight,
    h1_letter_spacing: obj.h1_letter_spacing,

    // H2
    h2_text: `<span style='font-size:${obj.h2_font_size}px; line-height: ${obj.h2_line_height}%;'>${obj.h2_text}</span>`,
    h2_font_family: obj.h2_font_name_temp && obj.h2_font_name_temp !== 'none'
      ? `'${obj.h2_font_name_temp}', ${obj.h2_font_family}`
      : obj.h2_font_family,
    h2_font_size: obj.h2_font_size,
    h2_line_height: obj.h2_line_height,
    h2_font_weight: obj.h2_font_weight,
    h2_letter_spacing: obj.h2_letter_spacing,

    // H3
    h3_text: `<span style='font-size:${obj.h3_font_size}px; line-height: ${obj.h3_line_height}%;'>${obj.h3_text}</span>`,
    h3_font_family: obj.h3_font_name_temp && obj.h3_font_name_temp !== 'none'
      ? `'${obj.h3_font_name_temp}', ${obj.h3_font_family}`
      : obj.h3_font_family,
    h3_font_size: obj.h3_font_size,
    h3_line_height: obj.h3_line_height,
    h3_font_weight: obj.h3_font_weight,
    h3_letter_spacing: obj.h3_letter_spacing,

    // H4
    h4_text: `<span style='font-size:${obj.h4_font_size}px; line-height: ${obj.h4_line_height}%;'>${obj.h4_text}</span>`,
    h4_font_family: obj.h4_font_name_temp && obj.h4_font_name_temp !== 'none'
      ? `'${obj.h4_font_name_temp}', ${obj.h4_font_family}`
      : obj.h4_font_family,
    h4_font_size: obj.h4_font_size,
    h4_line_height: obj.h4_line_height,
    h4_font_weight: obj.h4_font_weight,
    h4_letter_spacing: obj.h4_letter_spacing,

    // P1
    p1_text: `<span style='font-size:${obj.p1_font_size}px; line-height: ${obj.p1_line_height}%;'>${obj.p1_text}</span>`,
    p1_font_family: obj.p1_font_name_temp && obj.p1_font_name_temp !== 'none'
      ? `'${obj.p1_font_name_temp}', ${obj.p1_font_family}`
      : obj.p1_font_family,
    p1_font_size: obj.p1_font_size,
    p1_line_height: obj.p1_line_height,
    p1_font_weight: obj.p1_font_weight,
    p1_letter_spacing: obj.p1_letter_spacing,

    // P2
    p2_text: `<span style='font-size:${obj.p2_font_size}px; line-height: ${obj.p2_line_height}%;'>${obj.p2_text}</span>`,
    p2_font_family: obj.p2_font_name_temp && obj.p2_font_name_temp !== 'none'
      ? `'${obj.p2_font_name_temp}', ${obj.p2_font_family}`
      : obj.p2_font_family,
    p2_font_size: obj.p2_font_size,
    p2_line_height: obj.p2_line_height,
    p2_font_weight: obj.p2_font_weight,
    p2_letter_spacing: obj.p2_letter_spacing,

    // P3
    p3_text: `<span style='font-size:${obj.p3_font_size}px; line-height: ${obj.p3_line_height}%;'>${obj.p3_text}</span>`,
    p3_font_family: obj.p3_font_name_temp && obj.p3_font_name_temp !== 'none'
      ? `'${obj.p3_font_name_temp}', ${obj.p3_font_family}`
      : obj.p3_font_family,
    p3_font_size: obj.p3_font_size,
    p3_line_height: obj.p3_line_height,
    p3_font_weight: obj.p3_font_weight,
    p3_letter_spacing: obj.p3_letter_spacing,

    // Bullet
    bullet_text: `<span style='font-size:${obj.bullet_font_size}px; line-height: ${obj.bullet_line_height}%;'>${obj.bullet_text}</span>`,
    bullet_font_family: obj.bullet_font_name_temp && obj.bullet_font_name_temp !== 'none'
      ? `'${obj.bullet_font_name_temp}', ${obj.bullet_font_family}`
      : obj.bullet_font_family,
    bullet_font_size: obj.bullet_font_size,
    bullet_line_height: obj.bullet_line_height,
    bullet_font_weight: obj.bullet_font_weight,
  });

  return deleteProperties(newFontStyles);
};
