<template>
  <code class="v-codearea" :class="{'code-block': block}" v-html="code"></code>
</template>

<script>
const Prism = require('prismjs');

export default {
  props: {
    lang: {
      type: String,
      default: 'javascript'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    code() {
      return Prism.highlight(
        this.$slots.default[0].text.trim(),
        Prism.languages[this.lang],
        this.lang
      )
    }
  }
}
</script>

<style>
@import url('../../node_modules/prismjs/themes/prism.css');
.v-codearea.code-block {
  display: block;
  white-space: pre;
}
</style>
