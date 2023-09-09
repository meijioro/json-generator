<template>
  <FormulateInput type="group" name="email_settings">
    <p class="text-muted">Step 3/17</p>

    <h2>Email Settings</h2>
    <p class="text-muted">Quam vulputate dignissim suspendisse in est ante</p>
    <p>* required fields</p>

    <hr class="mb-4" />

    <div class="row">
      <div class="col-3 mb-4">
        <ColorPicker
          label="Page Overflow *"
          name="overflow_color"
          :value="colors.white"
          :field="field"
          :index="0"
          :property="'overflow_color'"
          :preset_colors="brand_colors"
        />
      </div>
      <div class="col-3 mb-4">
        <ColorPicker
          label="Email Background *"
          name="email_background_color"
          :value="colors.white"
          :field="field"
          :index="0"
          :property="'email_background_color'"
          :preset_colors="brand_colors"
        />
      </div>
      <div class="col-3 mb-4">
        <ColorPicker
          label="Module Background *"
          name="module_bgcolor"
          :value="colors.white"
          :field="field"
          :index="0"
          :property="'module_bgcolor'"
          :preset_colors="brand_colors"
        />
      </div>

      <div class="col-3 mb-4">
        <ColorPicker
          label="Box Background *"
          name="box_bgcolor"
          :value="colors.white"
          :field="field"
          :index="0"
          :property="'box_bgcolor'"
          :preset_colors="brand_colors"
        />
      </div>
      <div class="col-3 mb-4">
        <ColorPicker
          label="Divider Background *"
          name="divider_bgcolor"
          :value="colors.gray"
          :field="field"
          :index="0"
          :property="'divider_bgcolor'"
          :preset_colors="brand_colors"
        />
      </div>
      <div class="col-3 mb-4">
        <FormulateInput
          name="divider_height"
          type="number"
          label="Divider Height (px) *"
          value="2"
          v-model.number="divider_height"
          validation="^required|number"
          validation-name="Divider Height"
        />
      </div>
      <div class="col-3 mb-4">
        <ColorPicker
          label="Border Color *"
          name="border_color"
          :value="colors.gray"
          :data="field"
          :index="0"
          :property="'border_color'"
          :preset_colors="brand_colors"
        />
      </div>
      <div class="col-3 mb-4">
        <FormulateInput
          name="border_width"
          type="number"
          label="Border Width (px) *"
          value="1"
          v-model.number="border_width"
          validation="^required|number"
          validation-name="Border Width"
        />
      </div>
      <div class="col-6">
        <FormulateInput
          name="full_boolean"
          v-model="full_boolean"
          type="checkbox"
          label="Add Side Margins"
        />
      </div>
    </div>
  </FormulateInput>
</template>

<script>
import ColorPicker from './ColorPicker';

export default {
  name: 'EmailSettings',
  components: {
    ColorPicker,
  },
  props: ['colors', 'field', 'brand_colors'],
  data() {
    return {
      full_boolean: false,
      divider_height: '',
      border_width: '',
    };
  },
};
</script>
