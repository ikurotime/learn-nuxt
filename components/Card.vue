<script setup lang="ts">
defineProps<{
  title: string
  description: string
  _path: string
}>()
</script>
<template>
  <article>
    <NuxtLink :to="_path">
      <h2>{{ title }}</h2>
    </NuxtLink>
    <p>{{ description }}</p>
  </article>
</template>
