<template>
  <section>
    <p class="text-muted">Step 13/17</p>

    <h2>Bullets</h2>
    <p class="text-muted">
      Will be applied to module 1-015 and any other standard module which has a
      bulleted list that points to this "class" in the default cbn-field. The
      paragraph portion is the same style used for Standard Paragraph One.
    </p>

    <hr class="mb-4" />

    <BulletPreview
      v-if="fontstyles"
      :styles="{
        'font-size': this.fontstyles[0].bullet_font_size + 'px',
        'font-family': `'${this.fontstyles[0].bullet_font_name_temp}', ${this.fontstyles[0].bullet_font_family}`,
        color: this.fontstyles[0].bullet_color,
        'line-height': this.fontstyles[0].bullet_line_height + '%',
        'font-weight': this.fontstyles[0].bullet_font_weight,
      }"
      :p_styles="{
        'font-size': this.fontstyles[0].p1_font_size + 'px',
        'font-family': `'${this.fontstyles[0].p1_font_name_temp}', ${this.fontstyles[0].p1_font_family}`,
        color: this.fontstyles[0].p1_color,
        'line-height': this.fontstyles[0].p1_line_height + '%',
        'font-weight': this.fontstyles[0].p1_font_weight,
        'text-transform': this.fontstyles[0].p1_text_transform,
        'font-style': this.fontstyles[0].p1_font_style,
      }"
    />

    <div class="row mb-4">
      <div class="col">
        <FormulateInput
          name="bullet_text"
          type="text"
          label="Text *"
          rows="6"
          placeholder="e.g. &bull;"
          value="&bull;"
          help="&bull; is unicode version of bullets (e.g. •)"
          :validation="[
            ['bail'],
            ['required'],
            ['matches', /^((?!<p>|<h1>|<h2>|<h3>|<h4>|<h5>|<h6>|<div>).)*$/],
          ]"
          :validation-messages="{
            matches: 'Block html tags are not allowed. Only use inline tags.',
          }"
          validation-name="Bullet Text"
        />
      </div>
      <div class="col">
        <div class="row">
          <FormulateInput
            name="bullet_font_name_temp"
            type="select"
            class="col-md-12"
            label="Google or Web Font"
            placeholder="Select a font"
            :options="font_family"
            value=""
            :disable="Object.keys(font_family || {}).length === 0"
            help="Only available if added in Fonts tab."
          />
          <FormulateInput
            name="bullet_font_family"
            label="Font Family"
            type="select"
            class="col-md-12"
            :options="fallback_font_list"
            value="Arial, Helvetica, sans-serif"
          />
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <FormulateInput
        name="bullet_font_size"
        label="Font Size (px)"
        type="number"
        class="col-md-2"
        value="16"
        placeholder="e.g. 16"
        validation="^required|matches:/^\d*[02468]$/"
        :validation-messages="{ matches: 'Even numbers only.' }"
        validation-name="Bullet Font Size"
      />
      <FormulateInput
        name="bullet_line_height"
        label="Line Height (%)"
        type="number"
        class="col-md-2"
        value="150"
        placeholder="e.g. 150"
        validation="required"
        validation-name="Bullet Line Height"
      />
      <FormulateInput
        name="bullet_font_weight"
        label="Font Weight"
        type="select"
        class="col-md-2"
        :options="font_weight_list"
        value="400"
        help="400 is normal"
      />
      <FormulateInput
        name="bullet_mobile_fontsize"
        label="Mobile Font Size"
        type="select"
        class="col-md-3"
        :options="mobile_fontsize_list"
        value="match"
      />
      <ColorPicker
        label="Color"
        name="bullet_color"
        class="col-md-3"
        :value="colors.black"
        :field="field"
        :index="0"
        :property="'bullet_color'"
        :preset_colors="brand_colors"
      />
    </div>
  </section>
</template>

<script>
import ColorPicker from './ColorPicker';
import BulletPreview from './BulletPreview';

export default {
  name: 'Bullets',
  components: {
    ColorPicker,
    BulletPreview,
  },
  props: [
    'fontstyles',
    'colors',
    'fallback_font_list',
    'font_weight_list',
    'text_transform_list',
    'align_list',
    'cta_width_list',
    'mobile_fontsize_list',
    'mobile_align_list',
    'field',
    'font_family',
    'brand_colors',
  ],
  data() {
    return {};
  },
};
</script>
