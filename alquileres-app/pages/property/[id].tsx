import { useRouter } from "next/router";


const PropertyDetail = () => {

  const router = useRouter();


  return (
    <div>
      {
        router.query.id
      }
    </div>

  )

}


export default PropertyDetail
