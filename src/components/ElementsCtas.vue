<template>
  <section>
    <p class="text-muted">Step 17/17</p>

    <h2>CTA Styles For Custom Modules</h2>
    <p class="text-muted">
      Additional needed CTA versions which have a different style than the main
      cta used in standard modules. These will be used only for custom modules.
    </p>
    <p class="text-muted">
      Do add the same cta style as step 14. That style will be automatically
      copied over to be reuseable in custom modules if needed as to be kept
      independent from standards.
    </p>

    <hr class="mb-4" />

    <FormulateInput
      type="group"
      name="ctas"
      class="mb-3"
      :repeatable="true"
      add-label="+ Add CTA"
      #default="{ index }"
      :value="[]"
      v-model="ctas"
    >
      <CTAPreview v-if="ctas[index]" :styles="renameKeynames(ctas[index])" />

      <h5>Unique Identifier</h5>
      <div class="row mb-4">
        <FormulateInput
          name="name"
          label="Primary Key"
          type="text"
          class="col"
          placeholder="e.g. cta_secondary"
          help="Must be unique from other ctas."
          :validation="[['bail'], ['required'], ['matches', /^(\d|\w)+$/]]"
          :validation-messages="{
            matches: 'No spaces or special characters.',
          }"
          validation-name="Primary Key"
        />

        <FormulateInput
          name="readable_name"
          label="Name *"
          type="text"
          class="col"
          value=""
          placeholder="e.g. CTA - Blue"
          help="Human readable for Visual Editor UI"
          validation="required"
          validation-name="Name"
        />
      </div>

      <h5>Design Type</h5>

      <FormulateInput
        name="cta_design"
        type="radio"
        :options="{
          none: 'None',
          border_boolean: 'Add a Border',
          rounded_boolean: 'Add Rounded Corners',
          border_rounded_boolean: 'Add Border & Rounded Corners',
          img_cta_boolean: 'Make the CTA an Image',
          left_right_image_boolean: 'Add Left and Right Images',
        }"
        class="cta-design-radio"
        value="none"
      />

      <section
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_design') &&
          ctas[index].cta_design == 'img_cta_boolean'
            ? { display: 'none' }
            : { display: 'block' },
        ]"
      >
        <h5>Text</h5>

        <div class="row">
          <div class="col-md-6 mb-4">
            <FormulateInput
              name="text"
              type="textarea"
              label="Text"
              rows="6"
              value="CTA Text"
              placeholder="e.g. CTA Text"
              :validation="[
                ['bail'],
                ['required'],
                [
                  'matches',
                  /^((?!<p>|<h1>|<h2>|<h3>|<h4>|<h5>|<h6>|<div>).)*$/,
                ],
              ]"
              :validation-messages="{
                matches:
                  'Block html tags are not allowed. Only use inline tags.',
              }"
              validation-name="Text"
            />
          </div>
          <div class="col-md-6 mb-4">
            <div class="row">
              <FormulateInput
                name="cta_font_name_temp"
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
            value="120"
            placeholder="e.g. 120"
            validation="bail|required|matches:/^\d*[02468]$/"
            :validation-messages="{ matches: 'Even numbers only.' }"
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
            validation="required"
            validation-name="Letter Spacing"
          />
          <ColorPicker
            label="Color"
            name="color"
            class="col-md-2"
            :value="colors.white"
            :field="field"
            :index="index"
            :property="'color'"
            :preset_colors="brand_colors"
          />
          <FormulateInput
            name="text_alignment"
            label="Align"
            type="select"
            class="col-md-2"
            :options="align_list"
            value="center"
          />
          <FormulateInput
            name="font_style"
            label="Style"
            type="select"
            class="col-md-2"
            :options="font_style_list"
            value="normal"
          />
          <FormulateInput
            name="text_pad_topbottom"
            label="Padding Top/Bottom (px)"
            type="number"
            class="col-md-3"
            value="10"
            validation="bail|required|matches:/^\d*[02468]$/"
            :validation-messages="{ matches: 'Even numbers only.' }"
            validation-name="Padding Top/Bottom"
          />
          <FormulateInput
            name="text_pad_leftright"
            label="Padding Left/Right (px)"
            type="number"
            class="col-md-3"
            value="0"
            placeholder="e.g. 0"
            validation="required"
            validation-name="Padding Left/Right"
          />
        </div>
      </section>

      <h5>Box Style</h5>
      <div
        class="row"
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_design') &&
          ctas[index].cta_design == 'img_cta_boolean'
            ? { display: 'none' }
            : { display: 'flex' },
        ]"
      ></div>

      <div class="row mb-4">
        <div class="col-md-4 border-right">
          <FormulateInput
            name="cta_icon_design"
            type="radio"
            label="Add an Icon"
            :options="{
              none: 'No Icon',
              right: 'Add to Right',
              left: 'Add to Left',
            }"
            value="none"
          />
        </div>
        <div class="col-md-8">
          <div class="row">
            <FormulateInput
              name="alignment"
              label="CTA Alignment"
              type="select"
              help="If width is less than max or CTA is an image"
              :options="align_list"
              class="col-md-3"
              value="center"
            />
            <FormulateInput
              name="width_type"
              label="Width Type"
              type="select"
              :options="cta_width_list"
              class="col-md-3"
              value="fixed"
            />

            <FormulateInput
              name="width"
              label="Width (px)"
              type="number"
              help="w/o side margins: max 640, w/side margins: max 600"
              class="col-md-3"
              value="280"
              :style="[
                ctas[index] &&
                ctas[index].hasOwnProperty('width_type') &&
                ctas[index].width_type == 'fixed'
                  ? { display: 'block' }
                  : { display: 'none' },
              ]"
            />
            <ColorPicker
              label="Background Color *"
              name="bgcolor"
              class="col-md-4"
              :value="colors.red"
              :field="field"
              :index="index"
              :property="'bgcolor'"
              :preset_colors="brand_colors"
            />
          </div>
        </div>
        <!-- -->
      </div>

      <!-- icon -->
      <div
        class="row"
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_icon_design') &&
          ctas[index].cta_icon_design !== 'none'
            ? { display: 'flex' }
            : { display: 'none' },
        ]"
      >
        <FormulateInput
          name="icon_src"
          label="Icon Image Url"
          type="url"
          class="col-md-6"
          value="https://via.placeholder.com/20x20/999999/ffffff"
          placeholder="e.g. https://via.placeholder.com/20x20/999999/ffffff"
          help="https://placeholder.com/ for more information."
          :validation="[
            ['bail'],
            ['required'],
            [
              'matches',
              /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
            ],
          ]"
          :validation-messages="{
            matches: 'Block html tags are not allowed. Only use inline tags.',
          }"
          validation-name="Icon Image Url"
        />
        <FormulateInput
          name="icon_width"
          label="Icon Width (px)"
          type="number"
          class="col-md-3"
          value="20"
          placeholder="e.g. 20"
          validation="required"
          validation-name="Icon Width"
        />
        <FormulateInput
          name="icon_pad"
          label="Icon Padding (px)"
          type="number"
          class="col-md-3"
          value="10"
          placeholder="e.g. 10"
          validation="required"
          validation-name="Icon Padding"
        />
      </div>

      <!-- border -->
      <div
        class="row"
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_design') &&
          ctas[index].cta_design == 'border_boolean'
            ? { display: 'flex' }
            : { display: 'none' },
        ]"
      >
        <FormulateInput
          name="border_width"
          label="Border Width (px)"
          type="number"
          class="col-md-4"
          value="5"
          placeholder="e.g. 5"
          validation="required"
          validation-name="Border Width"
        />
        <ColorPicker
          label="Border Color *"
          name="border_color"
          class="col-md-3"
          :value="colors.med_gray"
          :field="field"
          :index="index"
          :property="'border_color'"
          :preset_colors="brand_colors"
        />
      </div>

      <!-- round corners -->
      <div
        class="row"
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_design') &&
          ctas[index].cta_design == 'rounded_boolean'
            ? { display: 'flex' }
            : { display: 'none' },
        ]"
      >
        <FormulateInput
          name="border_radius"
          label="Border Radius (px)"
          type="number"
          class="col-md-4"
          value="100"
          placeholder="e.g. 100"
          validation="required"
          validation-name="Border Radius"
        />
      </div>

      <!-- border rounded corners -->
      <div
        class="row"
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_design') &&
          ctas[index].cta_design == 'border_rounded_boolean'
            ? { display: 'flex' }
            : { display: 'none' },
        ]"
      >
        <FormulateInput
          name="border_rounded_width"
          label="Border Width (px)"
          type="number"
          class="col-md-4"
          value="5"
          placeholder="e.g. 5"
          validation="required"
          validation-name="Border Width"
        />
        <FormulateInput
          name="border_rounded_radius"
          label="Border Radius (px)"
          type="number"
          class="col-md-4"
          value="10"
          placeholder="e.g. 10"
          validation="required"
          validation-name="Border Radius"
        />
        <ColorPicker
          label="Border Color *"
          name="border_rounded_color"
          class="col-md-3"
          :value="colors.med_gray"
          :field="field"
          :index="index"
          :property="'border_rounded_color'"
          :preset_colors="brand_colors"
        />
      </div>

      <!-- image -->
      <div
        class="row"
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_design') &&
          ctas[index].cta_design == 'img_cta_boolean'
            ? { display: 'flex' }
            : { display: 'none' },
        ]"
      >
        <FormulateInput
          name="src_url"
          label="Button Image"
          type="url"
          class="col-md-6"
          value="https://via.placeholder.com/280x50/999999/ffffff?text=Max280+x+FLEX"
          placeholder="e.g. https://via.placeholder.com/280x50/999999/ffffff?text=Max280+x+FLEX"
          help="w/o margins: max 280px width x flexible height, w/margins: Max 240px width x flexible height"
          :validation="[
            ['bail'],
            ['required'],
            [
              'matches',
              /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
            ],
          ]"
          :validation-messages="{
            matches: 'Block html tags are not allowed. Only use inline tags.',
          }"
          validation-name="Buttom Image"
        />
        <FormulateInput
          name="alt_text"
          label="Button Alt Text"
          type="text"
          class="col-md-3"
          value="CTA Text"
        />
        <FormulateInput
          name="image_width"
          label="Image Width (px)"
          type="number"
          class="col-md-3"
          value="200"
          placeholder="e.g. 200"
          validation="required"
          validation-name="Image Width"
        />
      </div>

      <!-- right left image -->
      <div
        class="row"
        :style="[
          ctas[index] &&
          ctas[index].hasOwnProperty('cta_design') &&
          ctas[index].cta_design == 'left_right_image_boolean'
            ? { display: 'flex' }
            : { display: 'none' },
        ]"
      >
        <FormulateInput
          name="left_image_src_url"
          label="Left Image"
          type="url"
          class="col-md-6"
          value="https://via.placeholder.com/50x50/999999/ffffff?text=Max100+x+FLEX"
          placeholder="e.g. https://via.placeholder.com/50x50/999999/ffffff?text=Max100+x+FLEX"
          help="w/o margins: max 280px width x flexible height, w/margins: Max 240px width x flexible height"
          :validation="[
            ['bail'],
            ['required'],
            [
              'matches',
              /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
            ],
          ]"
          :validation-messages="{
            matches: 'Block html tags are not allowed. Only use inline tags.',
          }"
          validation-name="Left Image"
        />
        <FormulateInput
          name="left_image_alt_text"
          label="Left Image Alt Text"
          type="text"
          class="col-md-3"
          value="CTA Text"
        />
        <FormulateInput
          name="left_image_width"
          label="Left Image Width (px)"
          type="number"
          class="col-md-3"
          value="50"
          placeholder="e.g. 50"
          validation="required"
          validation-name="Left Image Width"
        />

        <FormulateInput
          name="right_image_src_url"
          label="Right Image"
          type="url"
          class="col-md-6"
          value="https://via.placeholder.com/50x50/999999/ffffff?text=Max100+x+FLEX"
          placeholder="e.g. https://via.placeholder.com/280x50/999999/ffffff?text=Max280+x+FLEX"
          help="w/o margins: max 280px width x flexible height, w/margins: Max 240px width x flexible height"
          :validation="[
            ['bail'],
            ['required'],
            [
              'matches',
              /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
            ],
          ]"
          :validation-messages="{
            matches: 'Block html tags are not allowed. Only use inline tags.',
          }"
          validation-name="Right Image"
        />
        <FormulateInput
          name="right_image_alt_text"
          label="Right Image Alt Text"
          type="text"
          class="col-md-3"
          value="CTA Text"
        />
        <FormulateInput
          name="right_image_width"
          label="Right Image Width (px)"
          type="number"
          class="col-md-3"
          value="50"
          placeholder="e.g. 50"
          validation="required"
          validation-name="Right Image Width"
        />
      </div>

      <h5 class="mt-4">
        Responsive
      </h5>

      <div class="row mb-4">
        <div class="col">
          <FormulateInput
            name="box_boolean"
            v-model="box_boolean"
            type="checkbox"
            label="Retain Desktop CTA Width | FULL WIDTH: If 100%/320 or less; MARGINS: If 100%/280 or less"
            checked="true"
          />
          <FormulateInput
            name="mobile_fontsize"
            label="Mobile Font Size"
            type="select"
            :options="{
              match: 'match desktop',
              cta: 'CTA',
            }"
            value="match"
          />
        </div>
      </div>
    </FormulateInput>
  </section>
</template>

<script>
import ColorPicker from './ColorPicker';
import CTAPreview from './CtaPreview';

export default {
  name: 'ElementsCtas',
  props: [
    'colors',
    'fallback_font_list',
    'font_weight_list',
    'text_transform_list',
    'align_list',
    'cta_width_list',
    'field',
    'font_family',
    'font_style_list',
    'brand_colors',
  ],
  components: {
    ColorPicker,
    CTAPreview,
  },
  data() {
    return {
      box_boolean: false,
      ctas: [{}],
    };
  },
  methods: {
    renameKeynames(item) {
      if (item) {
        let clone = Object.assign({}, item);
        for (const [key, value] of Object.entries(clone)) {
          if (!key.match('cta_')) {
            clone[`cta_${key}`] = clone[`${key}`];
            delete clone[`${key}`];
          }
        }
        return clone;
      }

      return item;
    },
  },
};
</script>
