<template>
  <article class="container-fluid">
    <div class="masthead">
      <header class="col">
        <h1 class="jumbotron-heading">Custom Module Override Styles</h1>
        <p class="lead text-muted">
          The generator will create an override code to paste into the
          <code>custom_modules</code> array in the brand style json file.
        </p>

        <p class="lead text-muted">
          You will need to add a bookmarklet to your browser to download the
          module data from Visual Editor.
        </p>

        <Bookmarklet />
      </header>
    </div>

    <FormulateForm
      #default="{ hasErrors }"
      invalid-message="Not all fields were filled out properly."
      class="pt-4"
      v-if="isUploadingFile"
    >
      <FormulateInput
        type="file"
        name="file"
        id="selectFiles"
        label="Upload JSON File"
        help="Upload the Visual JSON Content file downloaded from bookmarklet"
        validation="mime:application/json"
        @change="uploadFile"
      />
    </FormulateForm>

    <div class="progress mt-4 mb-4" v-if="isUploading">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        style="width: 100%"
      ></div>
    </div>

    <h3 id="result" class="display-4 mt-4 mb-3"></h3>

    <FormulateForm
      @submit="getBrandOverride"
      #default="{ isLoading }"
      class="row"
      :style="{ display: display_list }"
    >
      <div class="col">
        <p>
          Check all style(s) to override.
        </p>
        <FormulateInput
          type="group"
          name="overrides"
          v-model.lazy="overrides"
          :debounce="20"
          class="override-list"
        >
          <FormulateInput
            name="keep_override"
            label=""
            type="checkbox"
            class="override-list__checkbox"
          />
          <FormulateInput
            name="key"
            label=""
            type="text"
            class="cbn-id"
            disabled
          />
          <FormulateInput name="value" label="" type="hidden" hidden />
        </FormulateInput>

        <div class="fixed-bottom border-top" style="background-color: white;">
          <div class="container pt-2 pb-2">
            <FormulateInput
              type="submit"
              :disabled="isLoading"
              :label="isLoading ? 'Loading...' : 'Compile Override Style'"
            />
          </div>
        </div>
      </div>

      <div class="col output-col">
        <pre>{{ output }},</pre>
      </div>
    </FormulateForm>
  </article>
</template>

<script>
import Bookmarklet from '../components/Bookmarklet';
export default {
  name: 'Override',
  components: {
    Bookmarklet,
  },
  data() {
    return {
      overrides: [],
      output: {},
      module_id: [],
      display_list: 'none',
      isUploading: false,
      isUploadingFile: true,
    };
  },
  methods: {
    filterStyles() {
      const filtered_list = this.overrides.filter((obj) => obj.keep_override);
      const filtered_arr = filtered_list.map((obj) => [obj.key, obj.value]);
      filtered_arr.unshift(this.module_id);

      return Promise.all(filtered_arr);
    },
    renderCheckboxes(data) {
      const keys = Object.keys(data);
      const arr = [];

      keys.forEach((key) => {
        if (!key.includes('instruction_') && key != 'module_css') {
          arr.push({
            keep_override: false,
            key: key,
            value: data[key],
          });
        }
      });

      return Promise.all(arr);
    },
    async uploadFile() {
      // https://stackoverflow.com/questions/59155812/vue-upload-local-json-file
      const files = document.getElementById('selectFiles').files;
      if (files.length <= 0) {
        return false;
      }

      // show progress bar
      this.isUploading = !this.isUploading;

      const fr = new FileReader();
      // parse data uploaded
      fr.onload = (e) => {
        const result = JSON.parse(e.target.result);
        const data = result[0].data;
        const keys = Object.keys(data);

        // if (keys) {
        //   keys.forEach((key) => {
        //     if (!key.includes('instruction_') && key != 'module_css') {
        //       let obj = {
        //         keep_override: false,
        //         key: key,
        //         value: data[key],
        //       };
        //       this.overrides.push(obj);
        //     }
        //   });
        // }

        this.renderCheckboxes(data).then((arr) => {
          this.overrides = arr;
          document.getElementById('result').innerHTML = result[0].module;
          this.isUploading = !this.isUploading;
          this.isUploadingFile = !this.isUploadingFile;
          this.display_list = 'flex';
        });

        this.module_id = ['name', result[0].module_id];
      };

      // call file ready to execute
      fr.readAsText(files.item(0));
    },

    getBrandOverride() {
      this.filterStyles().then((filtered_arr) => {
        this.output = Object.fromEntries(filtered_arr);
      });
    },
  },
};
</script>

<style>
.display-4 {
  font-size: 2rem;
}
/* override field */
.override-list .formulate-input[data-classification='text'] input {
  border: none;
  padding: 0;
}

.override-list .formulate-input-group-repeatable {
  display: flex;
}

.override-list .cbn-id {
  flex-grow: 1;
}

.override-list__checkbox {
  flex-basis: content;
}

.override-list .formulate-input {
  /*width: 47.5%;*/
  /*width: 100%;*/
  margin-bottom: 0;
  margin-right: 10px;
}

pre {
  background-color: #d6dce6;
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  border-radius: 6px;
  overflow: auto;
  min-height: 500px;
}
@media (min-width: 720px) {
  .output-col {
    max-width: 50%;
  }
}

.formulate-input[data-classification='button'] button:hover {
  filter: opacity(0.8);
}
</style>
