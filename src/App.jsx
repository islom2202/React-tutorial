import React from 'react'
import {Greet} from './components/Greet'
import Class from './components/Class'
import Welcome from './components/Welcome'
export const App = () => {
  return (
    <div>
      <Greet name="Bobojon" heroName="Harry Potter" > My friend</Greet>
      <Greet name="Dilnoza" heroName="Seeker's heart">
        <button>I will kill you islom</button>
      </Greet>
      <Greet name="Islom" heroName="Seeker"></Greet>
      <Class name="Islom"/>
      <Welcome/>
    </div>
  )
}
