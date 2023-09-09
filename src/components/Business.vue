<template>
  <section>
    <p class="text-muted">Step 1/17</p>

    <h2>Business Information</h2>
    <p class="text-muted">* required fields</p>

    <hr class="mb-4" />

    <div class="row">
      <div class="col">
        <!-- business -->
        <FormulateInput
          name="name"
          type="text"
          label="Business Name *"
          value=""
          placeholder="e.g. Epsilon"
          validation="required:trim"
          validation-name="Business Name"
        />
      </div>

      <div class="col">
        <FormulateInput
          name="base_url"
          type="text"
          label="Website Url *"
          value=""
          placeholder="e.g. https://epsilon.com"
          validation="bail|required:trim|url"
          validation-name="Website Url"
        />
      </div>

      <div class="col">
        <FormulateInput name="tagline" type="text" label="Tagline" value="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Business',
  data() {
    return {};
  },
};
</script>
