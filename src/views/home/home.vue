<script setup lang="ts">
import { ref } from 'vue';

const bottom = ref(10);
</script>

<template>
  <a-layout>
    <a-card></a-card>
    <a-card></a-card>
    <a-button type="primary">Affix bottom</a-button>
  </a-layout>
</template>
