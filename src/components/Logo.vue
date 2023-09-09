<template>
  <FormulateInput type="group" name="logo">
    <p class="text-muted">Step 2/17</p>

    <h2>Logo</h2>
    <p class="text-muted"><em>Optional</em></p>

    <hr class="mb-4" />
    <div class="row">
      <div class="col-md-6 mb-4">
        <FormulateInput label="Name" name="name" type="text" value="" />
      </div>
      <div class="col-md-6 mb-4">
        <FormulateInput
          label="Brand Logo Src URL"
          name="src_url"
          type="url"
          placeholder="e.g. https://website.com/filename.png"
          value=""
        />
      </div>

      <div class="col-md-6 mb-4">
        <FormulateInput
          label="Brand Logo Alt Text"
          name="alt_text"
          type="text"
          value=""
        />
      </div>

      <div class="col-md-6 mb-4">
        <FormulateInput
          label="Brand URL"
          name="logo_url"
          type="url"
          placeholder="e.g. https://website.com"
          value=""
        />
      </div>
    </div>
  </FormulateInput>
</template>

<script>
export default {
  name: 'Business',
  data() {
    return {};
  },
};
</script>
