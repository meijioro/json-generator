export const concatGoogleFont = (google, web) => {
  let google_fonts = google.map((item) => ({
    name: item.name,
    font_family: `'${item.name}', ${item.font_family}`,
    src_url: item.src_url,
    type: 'google',
  }));

  // forumulate bug not letting "style" as field name
  let web_fonts = web.map((item) => ({
    name: item.name,
    fallback_font_family: item.font_family,
    weight: item.weight,
    style: item.styles,
    woff2_src_url: item.woff2_src_url,
    woff_src_url: item.woff_src_url,
    ttf_src_url: item.ttf_src_url,
    svg_src_url: item.svg_src_url,
    eot_src_url: item.eot_src_url,
    type: 'web',
  }));
  
  return google_fonts.concat(web_fonts);
}