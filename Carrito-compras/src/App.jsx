import React, { useState } from 'react'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Guitar from './componentes/Guitar'
import { db } from './data/db'




const App = () => {

  const [data, setData]=useState(db);
  console.log(data);

  return (
    <>
      <Header />
      <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="row mt-5">
          <Guitar nombre="Guitarra 1"/>
          <Guitar  nombre="Guitarra 2"/>
          <Guitar  nombre="Guitarra 3"/>

        </div>
      </main>
      <Footer />

    </>
  )
}

export default App
