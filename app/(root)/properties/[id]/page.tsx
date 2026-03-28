import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import PropertyRating from "@/components/card/PropertyRating"
import BookingCalndar from "@/components/property/booking/BookingCalndar"
import BreadcrumbComponent from "@/components/property/Breadcrumb"
import ImageContainer from "@/components/property/ImageContainer"
import ShareProperty from "@/components/property/ShareProperty"
import PropertyDetails from "@/components/property/propertyDetails"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { fetchPropertyDetails } from "@/utils/actions"
import { formatPrice } from "@/utils/format"
import Link from "next/link"
import { notFound } from "next/navigation"
import ServicesProperty from "@/components/property/ServicesProperty"
import PropertyMap from "@/components/property/PropertyMap"

async function PropertyId({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = await fetchPropertyDetails(id)

  if (!property) {
    notFound()
  }

  const details = {
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    guests: property.guests,
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6">
      <BreadcrumbComponent name={property.name} />

      <header className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 space-y-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {property.name}
            </h1>
            <PropertyRating propertyId={property.id} inPage />
          </div>
          {property.tagline ? (
            <p className="text-muted-foreground text-base leading-relaxed">
              {property.tagline}
            </p>
          ) : null}
          <p className="text-muted-foreground text-sm">
            {property.category}
            {property.country ? ` · ${property.country}` : null}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:pt-1">
          <ShareProperty propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>

      <ImageContainer image={property.image} name={property.name} />

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-8 lg:col-span-7">
          <section className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight">
              About this place
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {property.description}
            </p>
          </section>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight">Details</h2>
            <PropertyDetails details={details} />
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight">Amenities</h2>
            <ServicesProperty services={property.services} />
          </section>
          
        </div>

        <aside className="lg:col-span-5">
          <Card className="sticky top-24 gap-0 py-0 shadow-sm">
            <CardHeader className="space-y-1 border-b px-5 py-5">
              <CardTitle className="text-2xl font-semibold tabular-nums">
                {formatPrice(property.price)}
                <span className="text-muted-foreground ml-1.5 text-sm font-normal">
                  / night
                </span>
              </CardTitle>
              <CardDescription>Select check-in and check-out dates</CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-4 sm:px-5">
              <BookingCalndar />
            </CardContent>
            <CardFooter className="flex-col gap-2 border-t px-5 py-5">
              <Button className="w-full" size="lg" asChild>
                <Link href={`/checkout?propertyId=${property.id}`}>
                  Continue to checkout
                </Link>
              </Button>
              <p className="text-muted-foreground text-center text-xs">
                You won&apos;t be charged yet
              </p>
            </CardFooter>
          </Card>
        </aside>
      </div>

      <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight">Map</h2>
            <PropertyMap contryCode={property.country} />
      </section>
    </div>
  )
}

export default PropertyId
