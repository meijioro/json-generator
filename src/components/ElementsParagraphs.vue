<template>
  <section>
    <p class="text-muted">Step 16/17</p>

    <h2>Paragraph Styles For Custom Modules</h2>
    <p class="text-muted">
      Additional needed paragraph versions which have a different style than the
      main paragraphs used in standard modules. These will be used only for
      custom modules.
    </p>
    <p class="text-muted">
      Do add the same paragraph styles as step 10&mdash;12. Those styles will be
      automatically copied over to be reuseable in custom modules if needed as
      to be kept independent from standards.
    </p>

    <hr class="mb-4" />

    <FormulateInput
      type="group"
      name="paragraphs"
      class="mb-3"
      :repeatable="true"
      add-label="+ Add Paragraph"
      #default="{ index }"
      :value="[]"
      v-model="paragraphs"
    >
      <TextPreview
        v-if="paragraphs[index]"
        :styles="{
          'font-size': paragraphs[index].font_size + 'px',
          'font-family': `'${paragraphs[index].font_name_temp}', ${paragraphs[index].font_family}`,
          color: paragraphs[index].color,
          'line-height': paragraphs[index].line_height + '%',
          'font-weight': paragraphs[index].font_weight,
          'text-transform': paragraphs[index].text_transform,
          'font-style': paragraphs[index].font_style,
        }"
        :text="paragraphs[index].text"
        :align="paragraphs[index].align"
      />

      <div class="row">
        <FormulateInput
          name="name"
          label="Primary Key"
          type="text"
          class="col"
          placeholder="e.g. swisslight_16"
          help="Must be unique from other paragraphs"
          :validation="[['bail'], ['required'], ['matches', /^(\d|\w)+$/]]"
          :validation-messages="{
            matches: 'No spaces or special characters.',
          }"
          validation-name="Primary Key"
        />
        <FormulateInput
          name="readable_name"
          label="Name"
          type="text"
          class="col"
          placeholder="e.g. Swiss Light 16"
          validation="required"
        />
      </div>

      <div class="row mb-4">
        <div class="col">
          <FormulateInput
            name="text"
            type="textarea"
            label="Text"
            rows="6"
            value="Paragraph"
            placeholder="e.g. Paragraph"
            :validation="[
              ['bail'],
              ['required'],
              ['matches', /^((?!<p>|<h1>|<h2>|<h3>|<h4>|<h5>|<h6>|<div>).)*$/],
            ]"
            :validation-messages="{
              matches: 'Block html tags are not allowed. Only use inline tags.',
            }"
            validation-name="Text"
          />
        </div>
        <div class="col">
          <div class="row">
            <FormulateInput
              name="font_name_temp"
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
              name="font_family"
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
          name="font_size"
          label="Font Size (px)"
          type="number"
          class="col-md-2"
          value="16"
          placeholder="e.g. 16"
          validation="bail|required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="Font Size"
        />
        <FormulateInput
          name="line_height"
          label="Line Height (%)"
          type="number"
          class="col-md-2"
          value="150"
          placeholder="e.g. 150"
          validation="bail|required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="Line Height"
        />
        <FormulateInput
          name="font_weight"
          label="Font Weight"
          type="select"
          class="col-md-2"
          :options="font_weight_list"
          value="400"
          help="400 is normal"
        />
        <FormulateInput
          name="text_transform"
          label="Text Transform"
          type="select"
          class="col-md-2"
          :options="text_transform_list"
          value="none"
        />

        <FormulateInput
          name="letter_spacing"
          label="Letter Spacing"
          type="number"
          class="col-md-2"
          value="0"
          placeholder="e.g. 0"
          validation="required"
          validation-name="Letter Spacing"
        />
        <ColorPicker
          label="Color"
          name="color"
          clas="col-md-2"
          :value="colors.black"
          :field="field"
          :index="index"
          :property="'color'"
          :preset_colors="brand_colors"
        />

        <FormulateInput
          name="align"
          label="Align"
          type="select"
          class="col-md-2"
          :options="align_list"
          value="center"
        />
        <FormulateInput
          name="font_style"
          label="Font Style"
          type="select"
          class="col-md-2"
          :options="font_style_list"
          value="normal"
        />
        <FormulateInput
          name="mobile_fontsize"
          label="Mobile Font Size"
          type="select"
          class="col-md-3"
          :options="mobile_fontsize_list"
          value="p1"
        />
        <FormulateInput
          name="mobile_alignment"
          label="Mobile Align"
          type="select"
          class="col-md-3"
          :options="mobile_fontsize_list"
          value="match"
        />
      </div>
    </FormulateInput>
  </section>
</template>

<script>
import ColorPicker from './ColorPicker';
import TextPreview from './TextPreview';

export default {
  name: 'ElementsParagraphs',
  props: [
    'colors',
    'fallback_font_list',
    'font_weight_list',
    'text_transform_list',
    'align_list',
    'cta_width_list',
    'mobile_fontsize_list',
    'field',
    'font_family',
    'font_style_list',
    'brand_colors',
  ],
  components: {
    ColorPicker,
    TextPreview,
  },
  data() {
    return {
      paragraphs: [{}],
    };
  },
};
</script>
