import { Link, Logo, Actions, OtherHomeStuff, OtherDashboardStuff, useRouter } from '@/data/ocp'

const { pathname } = useRouter()

const Header = () => {
  return (
    <template>
      <header>
        <Logo />
        <Actions>
          <Link v-if="pathname === '/'" to='/dashboard'>
            Go to dashboard
          </Link>
          <Link v-if="pathname === '/dashboard'" to='/events/new'>
            Create event
          </Link>
        </Actions>
      </header>
    </template>
  )
}

const HomePage = () => {
  return (
    <template>
      <Header />
      <OtherHomeStuff />
    </template>
  )
}

const DashboardPage = () => {
  return (
    <template>
      <Header />
      <OtherDashboardStuff />
    </template>
  )
}

export default [ Header, HomePage, DashboardPage ]
