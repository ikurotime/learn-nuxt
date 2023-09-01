<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="text-5xl font-bold text-sky-8">
      Nuxt Routing set up successfully!
    </h1>
    <ContentList path="projects" v-slot="{ list }">
      <Card v-for="project in list" :key="project._path" v-bind="project" />
    </ContentList>
  </div>
</template>
