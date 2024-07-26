
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Team from './Team'

const navigation = [
  { name: 'Product', href: '/resQbite' },
]

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="public/assets/logoCriss.png"
                className="h-12 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Crisstar</span>
                <img
                  alt=""
                  src="public/assets/logoCriss.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Crisstar Software
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestra misión es proporcionar soluciones de software innovadoras y de alta calidad que permitan a nuestros clientes alcanzar sus objetivos empresariales de manera eficiente y efectiva. Nos esforzamos por ofrecer productos personalizados y servicios excepcionales que impulsan la transformación digital, mejoran la productividad y fomentan el crecimiento sostenible. 
            A través de la colaboración estrecha con nuestros clientes y un compromiso inquebrantable con la excelencia, buscamos ser un socio confiable en su camino hacia el éxito tecnológico.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://www.facebook.com/profile.php?id=61562362614037" className="text-sm font-semibold leading-6 text-gray-900">
                Conoce mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* OTRO */}

      <section>
        <div >
          <figure>
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Programando la arquitectura de tus sueños”
              </p>
            </blockquote>
            <figcaption >
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Crisstar Software</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Empresa desarrolladora</div>
              </div>
              <img
                alt=""
                src="src\assets\logoCriss.png"
                className="mx-auto mt-10 h-20 w-20 rounded-full"
              />
            </figcaption>
          </figure>
        </div>
      </section>

      <Team></Team>

      
    {/* UBICACION */}
    <section className="py-10">
      
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="ml-8 bg-white rounded-lg shadow p-6">
              <p className=" font-bold text-gray-900 sm:text-2xl mb-4 ">Dirección:</p>
              <p className="text-sm text-gray-600">
                Colonia colonial, callejon cerro hueco #A25 <br />
                AV. El palmar y AV.Torreones <br />
                C.P 29045
              </p>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3820.7918786965124!2d-93.09333482484963!3d16.73723308404329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ0JzE0LjAiTiA5M8KwMDUnMjYuNyJX!5e0!3m2!1ses!2smx!4v1720435112444!5m2!1ses!2smx"
                width="550"
                height="270"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </div>
    </section>

    {/* REDES */}
    <div className='mt-12 mb-12'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Nos puedes encontrar en nuestras redes sociales
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <a href="https://www.facebook.com/profile.php?id=61562362614037">
          <img
            alt="facebook"
            src="public/assets/facebook.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            
          /></a>
          
          <a href="https://www.tiktok.com/@crisstarsoftware">
            <img
              alt="tiktok"
              src="src\assets\tik-tok.png"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>

          <a href="https://x.com/crisstarSft">
            <img
              alt="twitter" 
              href="./src//assets//logoCriss.png"
              src="public/assets/twitter.png"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>

          <a href="">
          <img
            alt="Instagram"
            src="public/assets/instagram.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          /></a>

          <a href="https://www.linkedin.com/in/crisstar-software/">
            <img
              alt="Linkedin"
              src="public/assets/linkedin.png"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </a>

        </div>
      </div>
    </div>



    </div>
  )
}

export default Home

