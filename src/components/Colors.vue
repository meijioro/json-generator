<template>
  <section>
    <p class="text-muted">Step 5/17</p>

    <h2>Colors</h2>
    <p class="text-muted">
      These colors will show in the dropdown field in the right rail.
    </p>
    <p class="text-muted">
      * required field
    </p>

    <hr class="mb-4" />

    <FormulateInput
      type="group"
      name="colors"
      add-label="+ Add Color"
      :repeatable="true"
      #default="{ index }"
      :value="[]"
      v-model="colors_values"
    >
      <div class="repeat-input">
        <FormulateInput
          label="Name *"
          name="name"
          type="text"
          placeholder="Light Blue"
          value=""
          validation="required:trim"
          validation-name="Color Name"
        />
        <ColorPicker
          label="Color *"
          name="value"
          :value="colors.black"
          :field="colors_values"
          :index="index"
          :property="'value'"
          :isColorsArr="true"
        />
      </div>
    </FormulateInput>
  </section>
</template>

<script>
import ColorPicker from './ColorPicker';

export default {
  name: 'FontStyles',
  components: {
    ColorPicker,
  },
  props: ['colors'],
  data() {
    return { colors_values: [{}] };
  },
};
</script>
