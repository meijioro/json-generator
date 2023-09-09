<template>
  <section>
    <p class="text-muted">Step 11/17</p>

    <h2>Paragraph Two</h2>
    <p class="text-muted">
      Will be applied to module 1-009 and any other standard module which points
      to this "class" in the default cbn-field.
    </p>

    <hr class="mb-4" />

    <TextPreview
      v-if="fontstyles"
      :styles="{
        'font-size': this.fontstyles[0].p2_font_size + 'px',
        'font-family': `'${this.fontstyles[0].p2_font_name_temp}', ${this.fontstyles[0].p2_font_family}`,
        color: this.fontstyles[0].p2_color,
        'line-height': this.fontstyles[0].p2_line_height + '%',
        'font-weight': this.fontstyles[0].p2_font_weight,
        'text-transform': this.fontstyles[0].p2_text_transform,
        'font-style': this.fontstyles[0].p2_font_style,
      }"
      :text="fontstyles[0].p2_text"
      :align="fontstyles[0].p2_align"
    />

    <div class="row mb-4">
      <div class="col">
        <FormulateInput
          name="p2_text"
          type="textarea"
          label="Text *"
          rows="6"
          placeholder="e.g. Paragraph"
          value="Paragraph"
          :validation="[
            ['bail'],
            ['required'],
            ['matches', /^((?!<p>|<h1>|<h2>|<h3>|<h4>|<h5>|<h6>|<div>).)*$/],
          ]"
          :validation-messages="{
            matches: 'Block html tags are not allowed. Only use inline tags.',
          }"
          validation-name="P2 Text"
        />
      </div>
      <div class="col">
        <div class="row">
          <FormulateInput
            name="p2_font_name_temp"
            type="select"
            class="col-md-12"
            label="Google or Web Font Name"
            placeholder="Select a font"
            :options="font_family"
            value=""
            :disable="Object.keys(font_family || {}).length === 0"
            help="Only available if added in Fonts tab."
          />
          <FormulateInput
            name="p2_font_family"
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
        name="p2_font_size"
        label="Font Size (px)"
        type="number"
        class="col-md-2"
        value="14"
        placeholder="e.g. 14"
        validation="^required|matches:/^\d*[02468]$/"
        :validation-messages="{ matches: 'Even numbers only.' }"
        validation-name="P2 Font Size"
      />
      <FormulateInput
        name="p2_line_height"
        label="Line Height (%)"
        type="number"
        class="col-md-2"
        value="150"
        placeholder="e.g. 150"
        validation="required"
        validation-name="P2 Line Height"
      />
      <FormulateInput
        name="p2_font_weight"
        label="Font Weight"
        type="select"
        class="col-md-2"
        :options="font_weight_list"
        value="400"
        help="400 is normal"
      />
      <FormulateInput
        name="p2_text_transform"
        label="Text Transform"
        type="select"
        class="col-md-2"
        :options="text_transform_list"
        value="none"
      />
      <FormulateInput
        name="p2_letter_spacing"
        label="Letter Spacing"
        type="number"
        class="col-md-2"
        value="0"
        placeholder="e.g. 0"
        validation="required"
        validation-name="P2 Letter Spacing"
      />

      <ColorPicker
        label="Color"
        name="p2_color"
        class="col-md-2"
        :value="colors.black"
        :field="field"
        :index="0"
        :property="'p2_color'"
        :preset_colors="brand_colors"
      />
      <FormulateInput
        name="p2_align"
        label="Align"
        type="select"
        class="col-md-2"
        :options="align_list"
        value="left"
      />
      <FormulateInput
        name="p2_font_style"
        label="Style"
        type="select"
        class="col-md-2"
        :options="font_style_list"
        value="normal"
      />
      <FormulateInput
        name="p2_mobile_fontsize"
        label="Mobile Font Size"
        type="select"
        class="col-md-3"
        :options="mobile_fontsize_list"
        value="match"
      />
      <FormulateInput
        name="p2_mobile_alignment"
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
  name: 'ParagraphTwo',
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
