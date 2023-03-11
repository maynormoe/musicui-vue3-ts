<template>
  <div v-if="singerIntroduction" class="singerIntro">
    <span>&emsp;&emsp;{{ singerIntroduction.briefDesc }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  singerIntroduction: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.singerIntro {
  margin: 2vmin;
  padding: 1vmin;

  span {
    font-size: 2vmin;
    color: #6b6b6b;
  }
}
</style>
