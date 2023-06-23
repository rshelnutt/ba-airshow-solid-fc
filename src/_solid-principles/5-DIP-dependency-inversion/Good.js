import { ref } from 'vue'
import api from '~/common/api'

const LoginForm = ({ onSubmit }) => {
  const email = ref('')
  const password = ref('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await onSubmit(email, password)
  }

  return (
    <template>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          value={email.value}
          onChange={event => email.value = (event.target.value)}
        />
        <input
          type='password'
          value={password.value}
          onChange={event => password.value = (event.target.value)}
        />

        <button type='submit'>Log in</button>
      </form>
    </template>
  )
}

const ConnectedLoginForm = () => {
  const handleSubmit = async (email, password) => {
    await api.login(email, password)
  }

  return (
    <template>
      <LoginForm onSubmit={handleSubmit} />
    </template>
  )
}

export default [LoginForm, ConnectedLoginForm]
