import { useRouter } from "next/router";
import { Modal } from "../../components/modal";
import { useDisclosure } from "../../hooks/useDisclosure";


const PropertyDetail = () => {

  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {
        router.query.id
      }
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={onOpen}
      >
        Open regular modal
      </button>
      <Modal isOpen={isOpen} onClose={onClose} className='' >
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

    </div>

  )

}


export default PropertyDetail
