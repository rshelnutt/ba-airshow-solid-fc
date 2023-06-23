import { ref } from 'vue'
import api from '~/common/api'

const LoginForm = () => {
  const email = ref('')
  const password = ref('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await api.login(email, password)
  }

  return (
    <template>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          value={email.value}
          onChange={e => email.value = (e.target.value)}
        />
        <input
          type='password'
          value={password.value}
          onChange={e => password.value = (e.target.value)}
        />

        <button type='submit'>Log in</button>
      </form>
    </template>
  )
}

export default LoginForm
