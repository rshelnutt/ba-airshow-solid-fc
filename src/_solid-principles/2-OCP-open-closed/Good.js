import { Link, Logo, Actions, OtherHomeStuff, OtherDashboardStuff } from '@/data/ocp'

const Header = () => {
  return (
    <template>
      <header>
        <Logo />
        <Actions>
          <slot/>
        </Actions>
      </header>
    </template>
  )
}

const HomePage = () => {
  return (
    <template>
      <Header>
        <Link to='/dashboard'>
          Go to dashboard
        </Link>
      </Header>
      <OtherHomeStuff />
    </template>
  )
}

const DashboardPage = () => {
  return (
    <template>
      <Header>
        <Link to='/events/new'>
          Create event
        </Link>
      </Header>
      <OtherDashboardStuff />
    </template>
  )
}

export default [ Header, HomePage, DashboardPage ]
