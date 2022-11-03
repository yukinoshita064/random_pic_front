<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>

import store from "@/units/status";

export default {
  name: 'App',
  beforeMount() {
    store.commit('initQueue')
    store.commit('initStack')
  }
}
</script>

<style>

</style>
