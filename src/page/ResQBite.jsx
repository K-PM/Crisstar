import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { PaperClipIcon } from '@heroicons/react/20/solid'


const includedFeatures = [
  'Venta de Productos',
  'Protección de datos'
]


  function ResQBite() {
    return (
      <div>
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="public\assets\resBolsa.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">ResQBite</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Conecta a los pequeños comercios con los consumidores que buscan productos de calidad a precios reducidos. Al utilizar ResQBite, los usuarios no solo ahorran dinero, sino que también apoyan a la economía local y ayudan a reducir el desperdicio de alimentos. 
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <a  href='#avisoSeguridad'>
                  Aviso de privacidad <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
          </div>
        </div>
      </div>
      {/* lista */}

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
            <dt className="text-sm font-medium leading-6 text-gray-900">¿Qué se esta resolviendo?</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Reduccion de perdida economica y acceso a alimentos economicos </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
            <dt className="text-sm font-medium leading-6 text-gray-900">Cliente Objetivo</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Pequeños comercios, mini-supermercados y abarrotes minoristas  y consumidores</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
            <dt className="text-sm font-medium leading-6 text-gray-900">Producto aumentado</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Geolocalización Avanzada, Ofertas Personalizadas, Inclusividad de Negocios, Expansión Geográfica</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
            <dt className="text-sm font-medium leading-6 text-gray-900">¿Qué crea?</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">ResQbBite crea una relación de confianza y lealtad entre los comerciantes y los consumidores, y les ofrece la oportunidad de participar en un movimiento social y ambiental positivo</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
            <dt className="text-sm font-medium leading-6 text-gray-900">Conoce mas</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            ResQbBite crea una relación de confianza y lealtad entre los comerciantes y los consumidores, 
            y les ofrece la oportunidad de participar en un movimiento social y ambiental positivo
            </dd>
          </div>


        </dl>
      </div>

      
      {/* membresia*/}

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Suscripción</h3>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6" >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Precio en moneda mexicada</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$207</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">MXN</span>
                </p>
                <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Membresia </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="avisoSeguridad" className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aviso de seguridad</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">¿Quiénes somos?</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Crisstar, mejor conocido como Empresa desarrolladora Crisstar, con domicilio en calle callejon cerro hueco #125, colonia Primavera, ciudad Tuxtla Gutiérrez, municipio o delegación Tuxtla Gutiérrez, c.p. 29049, en la entidad de Chiapas, país Mexico, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p> 
          
          <p className="mt-6 text-lg leading-8 text-gray-600">¿Para qué fines utilizaremos sus datos personales? </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita: <br></br>
            •	Proveer los servicios solicitados por el usuario
            •	Gestión de cuentas de usuario <br></br>
            •	Procesamiento de pagos y transacciones
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">¿Dónde puedo consultar el aviso de privacidad integral? </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral en:
          Se visualiza en la pagina web.</p>
        </div>
    </div>
      
      </div>
      
    )
  }
  export default ResQBite
