<template>
  <FormulateInput
    type="group"
    name="font_styles"
    label="Standard Module Font Styles *"
    class="mb-3"
    add-label="+ Add Font Styles"
    validation="required"
  >
    <div class="form-group-box">
      <!-- H1 -->
      <h3 class="form-group-box__header mb-4">
        Module 1-004: Headline | H1
      </h3>

      <div class="row mb-3">
        <div class="col">
          <FormulateInput
            name="h1_text"
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
            validation-name="H1 Text"
          />
        </div>
        <div class="col">
          <div class="row">
            <FormulateInput
              name="h1_font_name_temp"
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="H1 Font Name"
            />

            <FormulateInput
              name="h1_font_family"
              label="Fallback Font Family *"
              type="select"
              class="col-md-12"
              :options="fallback_font_list"
              value="Arial, Helvetica, sans-serif"
              validation-name="H1 Font Family"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <FormulateInput
          name="h1_font_size"
          label="Font Size (px) *"
          type="number"
          class="col-md-2"
          value="50"
          placeholder="e.g. 50"
          validation="bail|required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="H1 Font Size"
        />

        <FormulateInput
          name="h1_line_height"
          label="Line Height (%) *"
          type="number"
          class="col-md-2"
          value="120"
          placeholder="e.g. 120"
          validation="bail|required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="H1 Line Height"
        />
        <FormulateInput
          name="h1_font_weight"
          label="Font Weight"
          type="select"
          class="col-md-2"
          :options="font_weight_list"
          value="400"
          help="400 is normal"
        />
        <FormulateInput
          name="h1_text_transform"
          label="Text Transform"
          type="select"
          class="col-md-2"
          :options="text_transform_list"
          value="none"
        />
        <FormulateInput
          name="h1_letter_spacing"
          label="Letter Spacing *"
          type="number"
          class="col-md-2"
          value="0"
          placeholder="e.g. 0"
          validation="required"
          validation-name="Letter Spacing"
        />
        <ColorPicker
          label="Color"
          name="h1_color"
          class="col-md-2"
          :value="colors.black"
          :field="field"
          :index="0"
          :property="'h1_color'"
        />
        <FormulateInput
          name="h1_align"
          label="Align"
          type="select"
          class="col-md-2"
          :options="align_list"
          value="left"
        />
        <FormulateInput
          name="h1_mobile_fontsize"
          label="Mobile Font Size"
          type="select"
          class="col-md-3"
          :options="mobile_fontsize_list"
          value="match"
        />
        <FormulateInput
          name="h2_mobile_alignment"
          label="Mobile Alignment"
          type="select"
          class="col-md-3"
          :options="mobile_align_list"
          value="match"
        />
      </div>
      <!-- end H1 -->

      <!-- H2 -->
      <h3 class="form-group-box__header mt-4 mb-3">
        Module 1-005: Headline | H2
      </h3>

      <div class="row mb-4">
        <div class="col">
          <FormulateInput
            name="h2_text"
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
            validation-name="H2 Text"
          />
        </div>

        <div class="col">
          <div class="row">
            <FormulateInput
              name="h2_font_name_temp"
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="H2 Font Name"
            />
            <FormulateInput
              name="h2_font_family"
              label="Fallback Font Family *"
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
          name="h2_font_size"
          label="Font Size (px) *"
          type="number"
          class="col-md-2"
          value="40"
          placeholder="e.g. 40"
          validation="bail|required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="H2 Font Size"
        />
        <FormulateInput
          name="h2_line_height"
          label="Line Height (%) *"
          type="number"
          class="col-md-2"
          value="120"
          placeholder="e.g. 120"
          validation="required"
        />
        <FormulateInput
          name="h2_font_weight"
          label="Font Weight"
          type="select"
          class="col-md-2"
          :options="font_weight_list"
          value="400"
          help="400 is normal"
        />
        <FormulateInput
          name="h2_text_transform"
          label="Text Transform"
          type="select"
          class="col-md-2"
          :options="text_transform_list"
          value="none"
        />
        <FormulateInput
          name="h2_letter_spacing"
          label="Letter Spacing *"
          type="number"
          class="col-md-2"
          value="0"
          placeholder="e.g. 0"
          validation="required"
          validation-name="H2 Letter Spacing"
        />
        <ColorPicker
          label="Color"
          name="h2_color"
          class="col-md-2"
          :value="colors.black"
          :field="field"
          :index="0"
          :property="'h2_color'"
        />
        <FormulateInput
          name="h2_align"
          label="Align"
          type="select"
          class="col-md-2"
          :options="align_list"
          value="left"
        />
        <FormulateInput
          name="h2_mobile_fontsize"
          label="Mobile Font Size"
          type="select"
          class="col-md-3"
          :options="mobile_fontsize_list"
          value="match"
        />
        <FormulateInput
          name="h2_mobile_alignment"
          label="Mobile Alignment"
          type="select"
          class="col-md-3"
          :options="mobile_align_list"
          value="match"
        />
      </div>
      <!-- end H2 -->

      <!-- H3 -->
      <h3 class="form-group-box__header mt-4 mb-3">
        Module 1-006: Headline | H3
      </h3>

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
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="H3 Font Name"
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
      <!-- end H3 -->

      <!-- H4 -->
      <h3 class="form-group-box__header mt-4 mb-3">
        Module 1-007: Headline | H4
      </h3>

      <div class="row mb-4">
        <div class="col">
          <FormulateInput
            name="h4_text"
            type="textarea"
            label="Text"
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
            validation-name="H4 Text"
          />
        </div>
        <div class="col">
          <div class="row">
            <FormulateInput
              name="h4_font_name_temp"
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="H4 Font Name"
            />
            <FormulateInput
              name="h4_font_family"
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
          name="h4_font_size"
          label="Font Size (px)"
          type="number"
          class="col-md-2"
          value="24"
          placeholder="e.g. 24"
          validation="^required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="H4 Font Size"
        />
        <FormulateInput
          name="h4_line_height"
          label="Line Height (%)"
          type="number"
          class="col-md-2"
          value="120"
          placeholder="e.g. 120"
          validation="required"
          validation-name="H4 Line Height"
        />
        <FormulateInput
          name="h4_font_weight"
          label="Font Weight"
          type="select"
          class="col-md-2"
          :options="font_weight_list"
          value="400"
          help="400 is normal"
        />

        <FormulateInput
          name="h4_text_transform"
          label="Text Transform"
          type="select"
          class="col-md-2"
          :options="text_transform_list"
          value="none"
        />
        <FormulateInput
          name="h4_letter_spacing"
          label="Letter Spacing"
          type="number"
          class="col-md-2"
          value="0"
          placeholder="e.g. 0"
          validation="required"
          validation-name="H4 Letter Spacing"
        />
        <ColorPicker
          label="Color"
          name="h4_color"
          :value="colors.black"
          :field="field"
          :index="0"
          :property="'h4_color'"
        />
        <FormulateInput
          name="h4_align"
          label="Align"
          type="select"
          class="col-md-2"
          :options="align_list"
          value="left"
        />
        <FormulateInput
          name="h4_mobile_fontsize"
          label="Mobile Font Size"
          type="select"
          class="col-md-3"
          :options="mobile_fontsize_list"
          value="match"
        />
        <FormulateInput
          name="h4_mobile_alignment"
          label="Mobile Align"
          type="select"
          class="col-md-3"
          :options="mobile_align_list"
          value="match"
        />
      </div>
      <!-- end H4 -->

      <!-- P1 -->
      <h3 class="form-group-box__header mt-4 mb-3">
        Module 1-008: Paragraph | P1
      </h3>

      <div class="row mb-4">
        <div class="col">
          <FormulateInput
            name="p1_text"
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
            validation-name="P1 Text"
          />
        </div>
        <div class="col">
          <div class="row">
            <FormulateInput
              name="p1_font_name_temp"
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="P1 Font Name"
            />
            <FormulateInput
              name="p1_font_family"
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
          name="p1_font_size"
          label="Font Size (px)"
          type="number"
          class="col-md-2"
          value="16"
          placeholder="e.g. 16"
          validation="^required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="P1 Font Size"
        />
        <FormulateInput
          name="p1_line_height"
          label="Line Height (%)"
          type="number"
          class="col-md-2"
          value="150"
          placeholder="e.g. 150"
          validation="required"
          validation-name="P1 Line Height"
        />
        <FormulateInput
          name="p1_font_weight"
          label="Font Weight"
          type="select"
          class="col-md-2"
          :options="font_weight_list"
          value="400"
          help="400 is normal"
        />
        <FormulateInput
          name="p1_text_transform"
          label="Text Transform"
          type="select"
          class="col-md-2"
          :options="text_transform_list"
          value="none"
        />
        <FormulateInput
          name="p1_letter_spacing"
          label="Letter Spacing"
          type="number"
          class="col-md-2"
          value="0"
          placeholder="e.g. 0"
          validation="required"
          validation-name="P1 Letter Spacing"
        />
        <ColorPicker
          label="Color"
          name="p1_color"
          class="col-md-2"
          :value="colors.black"
          :field="field"
          :index="0"
          :property="'p1_color'"
        />
        <FormulateInput
          name="p1_align"
          label="Align"
          type="select"
          class="col-md-2"
          :options="align_list"
          value="left"
        />
        <FormulateInput
          name="p1_mobile_fontsize"
          label="Mobile Font Size"
          type="select"
          class="col-md-3"
          :options="mobile_fontsize_list"
          value="match"
        />
        <FormulateInput
          name="p1_mobile_alignment"
          label="Mobile Align"
          type="select"
          class="col-md-3"
          :options="mobile_align_list"
          value="match"
        />
      </div>
      <!-- end P1 -->

      <!-- P2 -->
      <h3 class="form-group-box__header mt-4 mb-3">
        Module 1-009: Paragraph | P2
      </h3>

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
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="P2 Font Name"
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
      <!-- end P2 -->

      <!-- P3 -->
      <h3 class="form-group-box__header mt-4 mb-3">
        Module 1-010: Paragraph | P3
      </h3>

      <div class="row mb-4">
        <div class="col">
          <FormulateInput
            name="p3_text"
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
            validation-name="P3 Text"
          />
        </div>
        <div class="col">
          <div class="row">
            <FormulateInput
              name="p3_font_name_temp"
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="P3 Font Name"
            />
            <FormulateInput
              name="p3_font_family"
              label="Font Family"
              type="select"
              class="col-md-12"
              :options="fallback_font_list"
              value="Arial, Helvetica, sans-serif"
              validation="required"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <FormulateInput
          name="p3_font_size"
          label="Font Size (px)"
          type="number"
          class="col-md-2"
          value="12"
          placeholder="e.g. 12"
          validation="^required|matches:/^\d*[02468]$/"
          :validation-messages="{ matches: 'Even numbers only.' }"
          validation-name="P3 Font Size"
        />
        <FormulateInput
          name="p3_line_height"
          label="Line Height (%)"
          type="number"
          class="col-md-2"
          value="150"
          placeholder="e.g. 150"
          validation="required"
          validation-name="P3 Line Height"
        />
        <FormulateInput
          name="p3_font_weight"
          label="Font Weight"
          type="select"
          class="col-md-2"
          :options="font_weight_list"
          value="400"
          help="400 is normal"
        />
        <FormulateInput
          name="p3_text_transform"
          label="Text Transform"
          type="select"
          class="col-md-2"
          :options="text_transform_list"
          value="none"
        />
        <FormulateInput
          name="p3_letter_spacing"
          label="Letter Spacing"
          type="number"
          class="col-md-2"
          value="0"
          placeholder="e.g. P3 Letter Spacing"
          validation="required"
          validation-name="P3 Letter Spacing"
        />
        <ColorPicker
          label="Color"
          name="p3_color"
          class="col-md-2"
          :value="colors.black"
          :field="field"
          :index="0"
          :property="'p3_color'"
        />
        <FormulateInput
          name="p3_align"
          label="Align"
          type="select"
          class="col-md-2"
          :options="align_list"
          value="left"
        />
        <FormulateInput
          name="p3_mobile_fontsize"
          label="Mobile Font Size"
          type="select"
          class="col-md-3"
          :options="mobile_fontsize_list"
          value="match"
        />
        <FormulateInput
          name="p3_mobile_alignment"
          label="Mobile Align"
          type="select"
          class="col-md-3"
          :options="mobile_align_list"
          value="match"
        />
      </div>
      <!-- end P3 -->
      <!-- Bullet -->
      <h3 class="form-group-box__header mb-3">
        Module 1-015: Bullet
      </h3>

      <div class="row mb-4">
        <div class="col">
          <FormulateInput
            name="bullet_text"
            type="textarea"
            label="Text *"
            rows="6"
            placeholder="e.g. &bull; Text"
            value="&bull; Text"
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
              type="text"
              class="col-md-12"
              label="Google or Web Font Name"
              placeholder="e.g. Roboto"
              value=""
              validation="matches:/^[a-zA-Z0-9_ ]*$/"
              validation-message="Only one font name allowed."
              validation-name="Bullet Font Name"
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
        />
      </div>
      <!-- end Bullet -->
    </div>
  </FormulateInput>
</template>

<script>
import ColorPicker from './ColorPicker';

export default {
  name: 'FontStyles',
  components: {
    ColorPicker,
  },
  props: [
    'colors',
    'fallback_font_list',
    'font_weight_list',
    'text_transform_list',
    'align_list',
    'cta_width_list',
    'mobile_fontsize_list',
    'mobile_align_list',
    'field',
  ],
  data() {
    return {};
  },
};
</script>
