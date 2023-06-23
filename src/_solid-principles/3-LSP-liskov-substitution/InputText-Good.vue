<template>
  <input
    :class='[props.class, variant]'
    :type='type'
    class='rounded border border-gray-600 p-2'
  />
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    class: {
      type: String
    },
    variant: {
      type: String,
      default: 'border',
      options: ['border', 'underline', 'transparent']
    },
    type: {
      type: String,
      default: 'text'
    },
  })
</script>
