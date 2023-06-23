<!-- Bad SRP Example -->

<template>
  <span v-if='isLoading'>Loading Active Users...</span>
  <ul v-else>
    <li
      v-for='user in userList.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo)'
      :key='user.id'
    >
      <img :alt='user.username' :src='user.avatarUrl' />
      <p>{{ user.fullName }}</p>
      <small>{{ user.role }}</small>
    </li>
    )}
  </ul>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const userList = ref([])
  const isLoading = ref(false)

  onMounted(() => {
    const fetchUsers = async () => {
      await fetch('/some-api')
        .then(response => response.json())
        .then(data => userList.value = data)
        .catch(error => console.error('Error fetching users:', error))
        .finally(() => isLoading.value = false)
    }

    fetchUsers()
  })

  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)
</script>
