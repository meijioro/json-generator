<template>
  <section>
    <p class="text-muted">Step 4/17</p>

    <h2>Fonts</h2>
    <p class="text-muted">
      Add custom web fonts if needed. Only one font weight per entry. For
      example, if there are two weights for one family then have two separate
      entries.
    </p>
    <p class="text-muted">* required fields</p>

    <hr class="mb-4" />

    <FormulateInput
      type="group"
      name="fonts"
      label="Google Fonts"
      class="mb-3"
      add-label="+ Add Font"
      :repeatable="true"
      :value="[]"
      v-model="fonts"
    >
      <div class="repeat-input">
        <FormulateInput
          name="name"
          type="text"
          label="Font Name *"
          placeholder="e.g. Roboto"
          value=""
          validation="^required:trim"
          validation-name="Google Font Name"
        />
        <FormulateInput
          name="font_family"
          label="Fallback Font *"
          type="select"
          :options="fallback_font_list"
          value="Arial, Helvetica, sans-serif"
        />
        <FormulateInput
          name="src_url"
          label="Url *"
          type="url"
          placeholder="e.g. https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          value=""
          validation="bail|required:trim|matches:/^https:\/\/fonts.googleapis.com\/css2?\?family=((?!;).)*$/"
          :validation-messages="{
            matches: 'Only one font weight allowed per entry.',
          }"
          validation-name="Google Font Url"
        />
      </div>
    </FormulateInput>

    <FormulateInput
      type="group"
      name="webfonts"
      label="Hosted Fonts"
      class="mb-3"
      add-label="+ Add Font"
      :repeatable="true"
      :value="[]"
      v-model="webfonts"
    >
      <div class="row">
        <div class="col-md-6 mb-3">
          <FormulateInput
            name="name"
            type="text"
            label="Font Name *"
            placeholder="e.g. Aldine-Light-Italic"
            value=""
            validation="^required:trim"
            validation-name="Font Name"
          />
        </div>
        <div class="col-md-6 mb-3">
          <FormulateInput
            name="fallback_font_family"
            label="Fallback Font *"
            type="select"
            :options="fallback_font_list"
            value="Arial, Helvetica, sans-serif"
          />
        </div>
        <div class="col-md-6 mb-3">
          <FormulateInput
            name="weight"
            label="Weight *"
            type="select"
            :options="font_weight_list"
            value="400"
          />
        </div>
        <div class="col-md-6 mb-3">
          <FormulateInput
            name="styles"
            label="Style *"
            type="select"
            :options="font_style_list"
            value="normal"
          />
        </div>
        <div class="col-md-12 mb-3">
          <FormulateInput
            name="woff2_src_url"
            label="WOFF2 Url *"
            type="url"
            value=""
            validation="bail|required:trim"
            :validation-messages="{
              matches: 'Only one font weight allowed per entry.',
            }"
            validation-name="WOFF2 Url"
          />
        </div>
        <div class="col-md-12 mb-3">
          <FormulateInput
            name="woff_src_url"
            label="WOFF Url"
            type="url"
            value=""
          />
        </div>
        <div class="col-md-12 mb-3">
          <FormulateInput
            name="ttf_src_url"
            label="TTF Url"
            type="url"
            placeholder="e.g. https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            value=""
          />
        </div>
        <div class="col-md-12 mb-3">
          <FormulateInput
            name="svg_src_url"
            label="SVG Url"
            type="url"
            placeholder="e.g. https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            value=""
          />
        </div>
        <div class="col-md-12 mb-3">
          <FormulateInput
            name="eot_src_url"
            label="EOT Url"
            type="url"
            placeholder="e.g. https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            value=""
          />
        </div>
      </div>
      <FormulateInput name="type" type="hidden" value="web" />
    </FormulateInput>
  </section>
</template>

<script>
export default {
  name: 'Fonts',
  props: ['fallback_font_list', 'font_weight_list', 'font_style_list'],
  data() {
    return {
      fonts: [{}],
      webfonts: [{}],
    };
  },
  watch: {
    // whenever question changes, this function will run
    fonts(array) {
      let fontface = '';
      for (let i in array) {
        if (array[i].src_url) {
          fontface += `
            @import url('${array[i].src_url}');
          `;
        }
      }
      document.getElementsByTagName('style')[0].innerHTML = fontface;
    },
    webfonts(array) {
      let fontface = '';
      for (let i in array) {
        if (array[i].woff2_src_url) {
          fontface += `
            @font-face {
              font-family: ${array[i].name};
              src: url('${array[i].eot_src_url}') format('embedded-opentype'),url('${array[i].ttf_src_url}') format('truetype'),url('${array[i].svg_src_url}') format('svg'),url('${array[i].woff_src_url}') format('woff'),url('${array[i].woff2_src_url}') format('woff2');
              font-style: ${array[i].styles};
              font-weight: ${array[i].weight};
            }
          `;
        }
      }
      document.getElementsByTagName('style')[1].innerHTML = fontface;
    },
  },
};
</script>
