<template>
  <div ref="colorpicker">
    <div class="color-picker-input">
      <FormulateInput
        type="color"
        style="margin-bottom:0;"
        :value="value"
        v-bind="$attrs"
        v-on="$listeners"
        @click="togglePicker"
      />
      <ChromePicker
        v-if="displayPicker && isColorsArr"
        :value="selected_color || value"
        @input="updateFromPicker($event, field[index], property)"
      />

      <SketchPicker
        v-if="displayPicker && !isColorsArr"
        :value="selected_color || value"
        :preset-colors="preset_colors"
        @input="updateFromPicker($event, field[index], property)"
      />

      <!-- <ChromePicker
        :value="value"
        @input="updateFromPicker($event, field[index], property)"
      /> -->

      <!--SketchPicker
        v-if="displayPicker"
        :value="selected_color"
        :preset-colors="preset_colors"
        @input="updateFromPicker($event, field[index], property)"
      /-->
    </div>
  </div>
</template>

<script>
import { Chrome, Sketch } from 'vue-color';

export default {
  name: 'ColorPicker',
  inheritAttrs: false,
  components: {
    ChromePicker: Chrome, //rename
    SketchPicker: Sketch,
  },
  props: [
    'value',
    'field',
    'index',
    'property',
    'preset_colors',
    'isColorsArr',
  ],
  data() {
    return {
      selected_color: '',
      displayPicker: false,
    };
  },
  methods: {
    showPicker(event) {
      //stop broswer color field
      event.preventDefault();
      document.addEventListener('click', this.documentClick);
      this.displayPicker = true;
    },
    hidePicker(event) {
      event.preventDefault();
      document.removeEventListener('click', this.documentClick);
      this.displayPicker = false;
    },
    togglePicker(event) {
      this.displayPicker ? this.hidePicker(event) : this.showPicker(event);
    },
    documentClick(e) {
      const el = this.$refs.colorpicker;
      const target = e.target;
      if (el !== target && !el.contains(target)) {
        this.hidePicker(e);
      }
    },
    /**
     * @param {obj} color data from picker
     * @param {obj} field data path
     * @param {string} field name
     */
    updateFromPicker(color, field, property) {
      field[property] = color.hex; //update data to push up the chain
      this.selected_color = color.hex; //store new color for picker ui
    },
  },
};
</script>

<style>
.color-picker-input {
  position: relative;
  width: 105px;
}

.color-picker-input .formulate-input-label {
  white-space: nowrap;
}

.vc-chrome,
.vc-sketch {
  position: absolute !important;
  top: 65px;
  right: 0;
  z-index: 2;
}
.vc-chrome svg,
.vc-sketch-field--single {
  display: none;
}
</style>
