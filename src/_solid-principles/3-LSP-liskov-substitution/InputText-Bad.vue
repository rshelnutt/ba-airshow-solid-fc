<template>
  <input
    :class='classes'
    :value='inputValue'
    class='rounded border border-gray-600 p-2'
    type='text'
  />
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    classes: {
      type: String
    },
    inputValue: {
      type: String || Number,
      default: ''
    },
    type: {
      type: String,
      default: 'border',
      options: ['border', 'underline', 'transparent']
    }
  })
</script>
