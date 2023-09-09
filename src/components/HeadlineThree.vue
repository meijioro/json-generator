<template>
  <section>
    <p class="text-muted">Step 8/17</p>

    <h2>Headline Three</h2>
    <p class="text-muted">
      Will be applied to module 1-006 any other standard module which has a
      headine that points to this "class" in the default cbn-field.
    </p>

    <hr class="mb-4" />

    <TextPreview
      v-if="fontstyles"
      :styles="{
        'font-size': this.fontstyles[0].h3_font_size + 'px',
        'font-family': `'${this.fontstyles[0].h3_font_name_temp}', ${this.fontstyles[0].h3_font_family}`,
        color: this.fontstyles[0].h3_color,
        'line-height': this.fontstyles[0].h3_line_height + '%',
        'font-weight': this.fontstyles[0].h3_font_weight,
        'text-transform': this.fontstyles[0].h3_text_transform,
        'font-style': this.fontstyles[0].h3_font_style,
      }"
      :text="fontstyles[0].h3_text"
      :align="fontstyles[0].h3_align"
    />

    <div class="row mb-4">
      <div class="col">
        <FormulateInput
          name="h3_text"
          type="textarea"
          label="Text *"
          rows="6"
          placeholder="e.g. Headline"
          value="Headline"
          :validation="[
            ['bail'],
            ['required'],
            ['matches', /^((?!<p>|<h1>|<h2>|<h3>|<h4>|<h5>|<h6>|<div>).)*$/],
          ]"
          :validation-messages="{
            matches: 'Block html tags are not allowed. Only use inline tags.',
          }"
          validation-name="H3 Text"
        />
      </div>
      <div class="col">
        <div class="row">
          <FormulateInput
            name="h3_font_name_temp"
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
            name="h3_font_family"
            label="Font Family"
            type="select"
            class="col-md-12"
            :options="fallback_font_list"
            value="Arial, Helvetica, sans-serif"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <FormulateInput
        name="h3_font_size"
        label="Font Size (px)"
        type="number"
        class="col-md-2"
        value="30"
        placeholder="e.g. 30"
        validation="required|matches:/^\d*[02468]$/"
        :validation-messages="{ matches: 'Even numbers only.' }"
        validation-name="H3 Font Size"
      />
      <FormulateInput
        name="h3_line_height"
        label="Line Height (%)"
        type="number"
        class="col-md-2"
        value="120"
        validation="required"
        validation-name="H3 Line Height"
      />
      <FormulateInput
        name="h3_font_weight"
        label="Font Weight"
        type="select"
        class="col-md-2"
        :options="font_weight_list"
        value="400"
        help="400 is normal"
      />
      <FormulateInput
        name="h3_text_transform"
        label="Text Transform"
        type="select"
        class="col-md-2"
        :options="text_transform_list"
        value="none"
      />
      <FormulateInput
        name="h3_letter_spacing"
        label="Letter Spacing"
        type="number"
        class="col-md-2"
        value="0"
        placeholder="e.g. 0"
        validation="required"
        validation-name="H3 Letter Spacing"
      />

      <ColorPicker
        label="Color"
        name="h3_color"
        :value="colors.black"
        :field="field"
        :index="0"
        :property="'h3_color'"
        :preset_colors="brand_colors"
      />
      <FormulateInput
        name="h3_align"
        label="Align"
        type="select"
        class="col-md-2"
        :options="align_list"
        value="left"
      />
      <FormulateInput
        name="h3_font_style"
        label="Style"
        type="select"
        class="col-md-2"
        :options="font_style_list"
        value="normal"
      />
      <FormulateInput
        name="h3_mobile_fontsize"
        label="Mobile Font Size"
        type="select"
        class="col-md-3"
        :options="mobile_fontsize_list"
        value="match"
      />
      <FormulateInput
        name="h3_mobile_alignment"
        label="Mobile Align"
        type="select"
        class="col-md-3"
        :options="mobile_align_list"
        value="match"
      />
    </div>
  </section>
</template>

<script>
import ColorPicker from './ColorPicker';
import TextPreview from './TextPreview';

export default {
  name: 'HeadlineThree',
  components: {
    ColorPicker,
    TextPreview,
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
    'font_style_list',
    'brand_colors',
  ],
  data() {
    return {};
  },
};
</script>
