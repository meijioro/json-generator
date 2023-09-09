<template>
  <div class="card mb-4" style="margin-left: auto; margin-right: auto;">
    <div class="card-header">
      Preview Style
    </div>
    <div
      class="card-body"
      style="background-color: var(--overflow-color, white);"
      :style="{ 'text-align': align }"
    >
      <div
        class="preview-module"
        style="background-color: var(--module-color, white);"
      >
        <span :style="styles">
          {{ text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextPreview',
  props: ['styles', 'text', 'align'],
  data() {
    return {};
  },
};
</script>
