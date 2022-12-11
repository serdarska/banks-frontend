<template>
<div>
  <custom-navbar class="z-index-0" />
  <banks-component class="z-index-1"/>
</div>
</template>

<script>
export default {
name: "banks"
}
</script>

<style scoped>

.z-index-0 {
  z-index: 0;
}

.z-index-1 {
  z-index: 1;
}
</style>
