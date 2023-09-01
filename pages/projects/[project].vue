<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface project extends MarkdownParsedContent {
  link: string
  description: string
}
const { path } = useRoute()

const { data: doc } = await useAsyncData(`content-${path}`, () => {
  return queryContent<project>().where({ _path: path }).findOne()
})
</script>
<template>
  <div>
    <ContentRenderer :value="doc">
      <template #empty>
        <p>No se ha encontrado contenido</p>
      </template>
      <h1>{{ doc.title }}</h1>
      <NuxtLink :to="doc.link">
        {{ doc.link }}
      </NuxtLink>
      <ContentRendererMarkdown :value="doc" />
    </ContentRenderer>
  </div>
</template>
