<script setup lang="ts">
interface link {
  label: string
  url: string
}
const { data, refresh } = useFetch('https://dummyjson.com/quotes/2')
const links: link[] = [
  {
    label: 'About',
    url: '/about'
  },
  {
    label: 'Projects',
    url: '/projects'
  },
  {
    label: 'Contact Me',
    url: '/contact'
  }
]
</script>
<template>
  <header>
    <NuxtLink to="/">
      <p><UnoIcon class="i-iconoir-behance" /> Portfolio</p>
    </NuxtLink>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.url">
          <NuxtLink :to="link.url">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <h3>{{ data?.quote }}</h3>
    <button @click="refresh">Click</button>
  </header>
</template>
