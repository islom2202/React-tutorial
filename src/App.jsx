import React from 'react'
import {Greet} from './components/Greet'
import Welcome from './components/Class'
export const App = () => {
  return (
    <div>
      <Greet name="Bobojon" heroName="Harry Potter" > My friend</Greet>
      <Greet name="Dilnoza" heroName="Seeker's heart">
        <button>I will kill you islom</button>
      </Greet>
      <Greet name="Islom" heroName="Seeker"></Greet>
      <Welcome name="Islom"/>
    </div>
  )
}
