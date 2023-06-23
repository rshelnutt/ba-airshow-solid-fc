<template>
  <li>
    <img :alt='user.username' :src='user.avatarUrl' />
    <p>{{ user.fullName }}</p>
    <small>{{ user.role }}</small>
  </li>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    user: {
      type: Object,
      required: true
    }
  })
</script>
