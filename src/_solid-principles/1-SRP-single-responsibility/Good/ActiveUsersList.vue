<!-- Good SRP Example -->

<template>
  <span v-if='isLoading'>Loading Active Users...</span>
  <ul v-else>
    <UserItem
      v-for='user in getActiveUsers(userList)'
      :key='user.id'
      :user='user'
    />
  </ul>
</template>

<script setup>
  import { onMounted } from 'vue'
  import useFetchUsers from '@/_solid-principles/1-SRP-single-responsibility/Good/Composables/useFetchUsers'
  import UserItem from '@/_solid-principles/1-SRP-single-responsibility/Good/UserItem'
  import getActiveUsers from '@/_solid-principles/1-SRP-single-responsibility/Good/Utils/getActiveUsers'

  const { userList, isLoading, fetchUsers } = useFetchUsers()

  onMounted(() => fetchUsers())
</script>
