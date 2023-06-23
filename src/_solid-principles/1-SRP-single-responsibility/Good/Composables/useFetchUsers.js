import { ref } from 'vue'

const useFetchUsers = () => {
  const userList = ref([])
  const isLoading = ref(false)

  const fetchUsers = async () => {
    isLoading.value = true

    await fetch('/some-api')
      .then(response => response.json())
      .then(data => userList.value = data)
      .catch(error => console.error('Error fetching users:', error))
      .finally(() => isLoading.value = false)
  }

  return { userList, isLoading, fetchUsers }
}


export default useFetchUsers
