<template>
  <div class="mt-4 text-right">
    <button
      type="button"
      class="btn btn-link"
      :data-target="prev"
      data-toggle="collapse"
      v-if="prev"
      @click="goto"
    >
      Back
    </button>
    <button
      type="button"
      class="btn btn-primary"
      :data-target="next"
      data-toggle="collapse"
      v-if="next"
      @click="goto(current)"
    >
      Next Step
    </button>
  </div>
</template>

<script>
export default {
  name: 'NextStep',
  props: ['next', 'prev', 'current'],
  data() {
    return {};
  },
  methods: {
    goto(current) {
      this.$emit('update-nav', current);
    },
  },
  emits: ['update-nav'],
};
</script>
