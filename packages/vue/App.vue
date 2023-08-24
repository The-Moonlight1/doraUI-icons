<!-- ./SvgRaw.vue -->
<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

const modules = import.meta.glob('../svg/*.svg', {
  as: 'component',
});
const props = withDefaults(defineProps<{ name: string }>(), {});
const currentComponent = computed<Component>(() => {
  const fileName = '/' + props.name + '.svg';
  for (const path in modules) {
    const mod = modules[path];
    if (path.endsWith(fileName)) {
      return mod as Component;
    }
  }
  throw new Error('not found svg file:' + fileName);
});
</script>
<template>
  <component :is="currentComponent" />
</template>
