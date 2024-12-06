import React from 'react'
import Layout from '../../components/Layouts/Layout'
import "../../styles/HomeStyle.css"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Home() {
  return (
    <>
      <Layout>
     {/* Home Section Hero Banner */}
     <Section1/>
     {/* Home section about */}
     <Section2/>
     {/* Home section Menu */}
     <Section3/>
      </Layout>
    </>
  )
}

export default Home
