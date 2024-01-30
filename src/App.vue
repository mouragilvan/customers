<template>
  <router-view />
</template>
<script>
import router from './router';

export default {
  name: 'App',
  created() {
    router.push({ name: 'home' })
  }
}
</script>

<style></style>
