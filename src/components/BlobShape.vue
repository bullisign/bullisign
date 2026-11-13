<template>
  <svg viewBox="0 0 202 221" aria-hidden="true" focusable="false">
    <path :style="{ fill }" :d="BLOB_PATH" />
  </svg>
</template>

<script setup lang="ts">
import { BLOB_PATH } from '@/data/blob'

withDefaults(defineProps<{ fill?: string }>(), { fill: 'currentColor' })
</script>
