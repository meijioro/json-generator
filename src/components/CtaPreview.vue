<template>
  <div class="card mb-4">
    <div class="card-header">Preview Style</div>
    <div
      class="card-body"
      style="background-color: var(--overflow-color, white);"
    >
      <div
        class="preview-module"
        style="background-color: var(--module-color, white);"
      >
        <table
          v-if="styles"
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="wrap"
        >
          <tr>
            <td :align="styles.cta_alignment" valign="top">
              <table
                v-if="styles.cta_design == 'img_cta_boolean'"
                role="presentation"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td align="center" valign="top">
                    <!-- image -->
                    <img
                      :src="styles.cta_src_url"
                      :alt="styles.cta_alt_text"
                      :width="
                        styles.cta_width_type == 'fixed'
                          ? styles.cta_image_width
                          : '100%'
                      "
                      height="auto"
                      border="0"
                      style="display: block;"
                    />
                    <!-- end image -->
                  </td>
                </tr>
              </table>

              <!-- start BOX CTA -->
              <table
                v-if="styles.cta_design !== 'img_cta_boolean'"
                role="presentation"
                border="0"
                cellspacing="0"
                cellpadding="0"
                :width="styles.cta_width"
                :style="[
                  styles.cta_design == 'border_rounded_boolean'
                    ? {
                        'border-collapse': 'separate',
                        'border-radius':
                          styles.cta_border_rounded_radius + 'px',
                        border:
                          styles.cta_border_rounded_width +
                          'px solid ' +
                          styles.cta_border_rounded_color,
                        'background-color': styles.cta_bgcolor,
                      }
                    : '',
                ]"
              >
                <tr v-if="styles.cta_design == 'border_boolean'">
                  <td
                    colspan="3"
                    style="line-height: 0px;"
                    :bgcolor="styles.cta_border_color"
                  >
                    <img
                      src="https://images.harmony.epsilon.com/ContentHandler/images?id=3f67ada7-a01e-4c02-ab71-8b46fd3106ae"
                      width="20"
                      :height="styles.cta_border_width"
                      style="display: block;"
                      border="0"
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    v-if="styles.cta_design == 'left_right_image_boolean'"
                    align="left"
                    :width="styles.cta_left_image_width"
                  >
                    <a href="" target="_blank">
                      <img
                        agilecontent="true"
                        :src="styles.cta_left_image_src_url"
                        alt=""
                        :width="styles.cta_left_image_width + 'px'"
                        height="auto"
                        border="0"
                        style="display: block"
                    /></a>
                  </td>

                  <td
                    v-if="styles.cta_design == 'border_boolean'"
                    style="line-height: 0px;"
                    :bgcolor="styles.cta_border_color"
                    :width="styles.cta_border_width"
                  >
                    <img
                      src="https://images.harmony.epsilon.com/ContentHandler/images?id=3f67ada7-a01e-4c02-ab71-8b46fd3106ae"
                      :width="styles.cta_border_width"
                      height="1"
                      style="display: block;"
                      border="0"
                    />
                  </td>

                  <td
                    :align="styles.cta_text_alignment"
                    :valign="
                      styles.cta_design == 'left_right_image_boolean'
                        ? 'middle'
                        : 'top'
                    "
                    :bgcolor="styles.cta_bgcolor"
                    :style="[
                      styles.cta_design == 'border_rounded_boolean'
                        ? {
                            'border-radius':
                              styles.cta_border_rounded_radius + 'px',
                          }
                        : '',

                      styles.cta_design == 'rounded_boolean'
                        ? { 'border-radius': styles.cta_border_radius + 'px' }
                        : '',
                    ]"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tr>
                        <td
                          align="left"
                          valign="top"
                          :style="{
                            padding:
                              styles.cta_text_pad_topbottom +
                              'px ' +
                              styles.cta_text_pad_leftright +
                              'px',
                          }"
                        >
                          <!-- START INNER CTA -->
                          <table
                            role="presentation"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            width="100%"
                            :dir="styles.cta_icon_design == 'left' ? 'rtl' : ''"
                          >
                            <tr>
                              <td
                                align="center"
                                valign="middle"
                                :style="{
                                  'font-weight': styles.cta_font_weight,
                                  'letter-spacing':
                                    styles.cta_letter_spacing + 'px',
                                  'text-transform': styles.cta_text_transform,
                                  color: styles.cta_color,
                                  'font-style': styles.cta_font_style,
                                }"
                              >
                                <span
                                  style="white-space: nowrap;"
                                  :style="{
                                    color: styles.cta_color,
                                    'font-family': `'${styles.cta_font_name_temp}', ${styles.cta_font_family}`,
                                    'font-size': styles.cta_font_size + 'px',
                                    'line-height': styles.cta_line_height + '%',
                                  }"
                                >
                                  <a
                                    href=""
                                    style="color: inherit; text-decoration: none;"
                                  >
                                    {{ styles.cta_text }}
                                  </a>
                                </span>
                              </td>

                              <td
                                v-if="styles.cta_icon_design !== 'none'"
                                :align="
                                  styles.cta_design == 'left' ? 'right' : 'left'
                                "
                                valign="middle"
                                style="line-height: 0px;"
                                :style="[
                                  styles.cta_icon_design == 'left'
                                    ? {
                                        'padding-right':
                                          styles.cta_icon_pad + 'px',
                                        'min-width':
                                          styles.cta_icon_width + 'px',
                                      }
                                    : {
                                        'padding-left':
                                          styles.cta_icon_pad + 'px',
                                        'min-width':
                                          styles.cta_icon_width + 'px',
                                      },
                                ]"
                              >
                                <a href="" target="_blank">
                                  <img
                                    :src="styles.cta_icon_src"
                                    height="auto"
                                    style="display: block;"
                                    border="0"
                                    :width="styles.cta_icon_width"
                                  />
                                </a>
                              </td>
                            </tr>
                          </table>

                          <!-- END INNER CTA -->
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td
                    v-if="styles.cta_design == 'left_right_image_boolean'"
                    align="right"
                    :width="styles.cta_right_image_width"
                  >
                    <a href="" target="_blank">
                      <img
                        agilecontent="true"
                        :src="styles.cta_right_image_src_url"
                        alt=""
                        :width="styles.cta_right_image_width + 'px'"
                        height="auto"
                        border="0"
                        style="display: block"
                    /></a>
                  </td>

                  <td
                    v-if="styles.cta_design == 'border_boolean'"
                    style="line-height: 0px;"
                    :bgcolor="styles.cta_border_color"
                    :width="styles.cta_border_width"
                  >
                    <img
                      src="https://images.harmony.epsilon.com/ContentHandler/images?id=3f67ada7-a01e-4c02-ab71-8b46fd3106ae"
                      :width="styles.cta_border_width"
                      height="1"
                      style="display: block;"
                      border="0"
                    />
                  </td>
                </tr>
                <tr v-if="styles.cta_design == 'border_boolean'">
                  <td
                    colspan="3"
                    style="line-height: 0px;"
                    :bgcolor="styles.cta_border_color"
                  >
                    <img
                      src="https://images.harmony.epsilon.com/ContentHandler/images?id=3f67ada7-a01e-4c02-ab71-8b46fd3106ae"
                      width="20"
                      :height="styles.cta_border_width"
                      style="display: block;"
                      border="0"
                    />
                  </td>
                </tr>
              </table>

              <!-- end BOX CTA -->
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTAPreview',
  props: ['styles'],
  data() {
    return {};
  },
};
</script>
