import React from "react"
import Image from "next/image"

function ImageContainer({
  image,
  name,
}: {
  image: string
  name: string
}) {
  return (
    <figure className="relative mt-6 aspect-21/9 min-h-[220px] w-full overflow-hidden rounded-xl border border-border bg-muted shadow-sm md:min-h-[320px]">
      <Image
        src={image}
        alt={name}
        fill
        priority
        sizes="(max-width: 768px) 100vw, min(1152px, 100vw)"
        className="object-cover"
      />
    </figure>
  )
}

export default ImageContainer