<template>
  <div class="card mb-4">
    <div class="card-header">
      Preview Style
    </div>
    <div
      class="card-body"
      style="background-color: var(--overflow-color, white);"
    >
      <div
        class="preview-module"
        style="background-color: var(--module-color, white);"
      >
        <table border="0" cellspacing="0" cellpadding="0" width="100%">
          <tr>
            <td width="2%" valign="top" align="left" :style="styles">
              •
            </td>
            <td align="left" valign="top" style="padding: 0px 20px 0px 10px">
              <p :style="p_styles">Paragraph</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BulletPreview',
  props: ['styles', 'text', 'p_styles'],
  data() {
    return {};
  },
};
</script>
