import { useState } from 'react'

const people = [
    {
        name: 'Larissa Hilario Clemente',
        role: 'Mobile developer',
        imageUrl:
          '/assets/larissa.jpg',
      },
    {
    name: 'Crescencio Pérez Santiz',
    role: 'Back-end developer',
    imageUrl:
        '/assets/crescencio.jpeg',
    },
    {
    name: 'Kristell Pérez Mateos',
    role: 'Project manager',
    imageUrl:
        '/assets/kristell.png',
    },
  ]
  

  function Team() {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="mx-auto grid max-w-7xl  gap-y-20 px-6 lg:px-8 ">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 flex justify-center">Miembros de la empresa</h2>
            <p >
            En nuestro equipo, nos dedicamos apasionadamente a transformar ideas en realidades, cada miembro aporta una perspectiva invaluable que impulsa nuestro éxito colectivo. 
            Estamos comprometidos con la excelencia y la innovación en cada paso del camino, conozca al equipo que está detrás de cada solución innovadora y descubra cómo estamos redefiniendo el estándar en nuestro campo.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  export default Team
