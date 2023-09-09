<template>
  <section>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Add Bookmarklet
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ol>
              <li>Open your browser's bookmark manager</li>
              <li>Click your browser's add new bookmark link.</li>
              <li>
                Paste the below code into the URL field and name the bookmark.
              </li>
            </ol>
            <code
              >javascript:(function(){const
              data=JSON.parse(document.querySelector('#visual-json-content').getAttribute('value')).layout_config.layout;const%20text=JSON.stringify(data,null,2);const%20filename=%22visual_json_content.json%22;const%20element=document.createElement(%22a%22);element.setAttribute(%22href%22,%22data:application/json;charset=utf-8,%22+encodeURIComponent(text));element.setAttribute(%22download%22,filename);element.style.display=%22none%22;document.body.appendChild(element);element.click();document.body.removeChild(element)}())</code
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Bookmarklet',
  data() {
    return {};
  },
  methods: {},
};
</script>
