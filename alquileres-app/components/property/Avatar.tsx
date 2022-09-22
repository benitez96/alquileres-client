import Image from "next/image"


interface Props {
  src: string
}

export const Avatar = ({ src }: Props) => {

  return (

    <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 object-cover min-w-fit rounded-full">
      <Image
        src={src}
        className="rounded-full"
        layout="fill"
      />
    </div>

  )

}
