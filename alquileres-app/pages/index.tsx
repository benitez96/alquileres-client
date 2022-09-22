import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Avatar } from '../components/property/Avatar'
import { Badge } from '../components/property/Badge'
import { PropertyCard } from '../components/property/PropertyCard'
import { Title } from '../components/property/Title'
import { useRouter } from 'next/router'
import { Modal } from '../components/modal'
import { useDisclosure } from '../hooks/useDisclosure'
import { useEffect } from 'react'

const Home: NextPage = () => {

  const router = useRouter();

  const { property } = router.query;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    router.push('/', '/', { shallow: true });
    onClose()
  }

  useEffect(() => {
    if (property) onOpen() 

  }, [property])

  return (
    <>
      <Head>
        <title>Alquilar .COM</title>
        <meta name="description" content="Venta y alquileres de inmuebles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='mt-20 flex flex-col gap-2'>
        <PropertyCard colorScheme='red' id="112093">
          <Avatar src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/fcbdd3a228648ac062e4977b0eda8c76.png" />
          <div className='w-full min-h-[6rem] flex flex-col justify-between'>
            <Title company='Alquilar .COM' property='Casa en el campo' />
            <div className='items-end flex flex-wrap gap-2 pb-2'>
              <Badge>Buenos Aires</Badge>
              <Badge>Casa</Badge>
              <Badge>Alquiler</Badge>
            </div>
          </div>
          <button className='hidden md:block text-white rounded-md font-semibold min-w-max px-4 py-2 border-2'>Contactar</button>
        </PropertyCard>
        <PropertyCard id="4" colorScheme='light-nebula'>
          <Avatar src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/fcbdd3a228648ac062e4977b0eda8c76.png" />
          <div className='w-full min-h-[6rem] flex flex-col justify-between'>
            <Title company='Alquilar .COM' property='Casa en la ciudad centro' />
            <div className='items-end flex flex-wrap gap-2 pb-2'>
              <Badge>Buenos Aires</Badge>
              <Badge>Casa</Badge>
              <Badge>Alquiler</Badge>
            </div>
          </div>
          <button className='hidden md:block text-white rounded-md font-semibold min-w-max px-4 py-2 border-2'>Contactar</button>
        </PropertyCard>
        <PropertyCard id="4">
          <Avatar src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/fcbdd3a228648ac062e4977b0eda8c76.png" />
          <div className='w-full min-h-[6rem] flex flex-col justify-between'>
            <Title company='Alquilar .COM' property='Casa en la ciudad centro' />
            <div className='items-end flex flex-wrap gap-2 pb-2'>
              <Badge>Buenos Aires</Badge>
              <Badge>Casa</Badge>
              <Badge>Alquiler</Badge>
            </div>
          </div>
          <button className='hidden md:block text-white rounded-md font-semibold min-w-max px-4 py-2 border-2'>Contactar</button>
        </PropertyCard>
        <PropertyCard id="4" colorScheme='dark-nebula'>
          <Avatar src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/fcbdd3a228648ac062e4977b0eda8c76.png" />
          <div className='w-full min-h-[6rem] flex flex-col justify-between'>
            <Title company='Alquilar .COM' property='Casa en la ciudad centro' />
            <div className='items-end flex flex-wrap gap-2 pb-2'>
              <Badge>Buenos Aires</Badge>
              <Badge>Casa</Badge>
              <Badge>Alquiler</Badge>
            </div>
          </div>
          <button className='hidden md:block text-white rounded-md font-semibold min-w-max px-4 py-2 border-2'>Contactar</button>
        </PropertyCard>
        <PropertyCard id="5" colorScheme='dark'>
          <Avatar src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/fcbdd3a228648ac062e4977b0eda8c76.png" />
          <div className='w-full min-h-[6rem] flex flex-col justify-between'>
            <Title company='Alquilar .COM' property='Casa en la ciudad centro' />
            <div className='items-end flex flex-wrap gap-2 pb-2'>
              <Badge>Buenos Aires</Badge>
              <Badge>Casa</Badge>
              <Badge>Alquiler</Badge>
            </div>
          </div>
          <button className='hidden md:block text-white rounded-md font-semibold min-w-max px-4 py-2 border-2'>Contactar</button>
        </PropertyCard>
        <PropertyCard id="2" colorScheme='venus'>
          <Avatar src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/fcbdd3a228648ac062e4977b0eda8c76.png" />
          <div className='w-full min-h-[6rem] flex flex-col justify-between'>
            <Title company='Alquilar .COM' property='Casa en la ciudad centro' />
            <div className='items-end flex flex-wrap gap-2 pb-2'>
              <Badge>Buenos Aires</Badge>
              <Badge>Casa</Badge>
              <Badge>Alquiler</Badge>
            </div>
          </div>
          <button className='hidden md:block text-white rounded-md font-semibold min-w-max px-4 py-2 border-2'>Contactar</button>
        </PropertyCard>
        <PropertyCard id="3" colorScheme='uranus'>
          <Avatar src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/fcbdd3a228648ac062e4977b0eda8c76.png" />
          <div className='w-full min-h-[6rem] flex flex-col justify-between'>
            <Title company='Alquilar .COM' property='Casa en la ciudad centro' />
            <div className='items-end flex flex-wrap gap-2 pb-2'>
              <Badge>Buenos Aires</Badge>
              <Badge>Casa</Badge>
              <Badge>Alquiler</Badge>
            </div>
          </div>
          <button className='hidden md:block text-white rounded-md font-semibold min-w-max px-4 py-2 border-2'>Contactar</button>
        </PropertyCard>
      </div>


      <Modal isOpen={isOpen} onClose={handleClose} className='w-[98%] md:w-10/12 min-h-[90%]' >
        <Modal.Header>
          <h3 className="text-3xl font-semibold">
            Modal Title
          </h3>
        </Modal.Header>
        <Modal.Body>
          <p>
            I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button>
            Solicitar
          </button>
        </Modal.Footer>

      </Modal>
        

    </>
  )
}

export default Home
