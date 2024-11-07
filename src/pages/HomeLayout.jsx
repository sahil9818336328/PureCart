import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Loading, Navbar } from '../components'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <>
      <nav>
        <Header />
        <Navbar />
      </nav>
      {isLoading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
    </>
  )
}

export default HomeLayout
