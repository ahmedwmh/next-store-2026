import { formatQuantity } from '@/utils/format';

type PropertyDetailsProps = {
    details : {
        bedrooms:number;
        bathrooms:number;
        guests:number;
    }
}

function PropertyDetails({
  details: { bedrooms, bathrooms, guests },
}: PropertyDetailsProps) {
  const specs = [
    formatQuantity(bathrooms, "bathroom"),
    formatQuantity(bedrooms, "bedroom"),
    formatQuantity(guests, "guest"),
  ]

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Property capacity">
      {specs.map((label) => (
        <li key={label}>
          <span className="inline-flex rounded-full border border-border bg-muted/60 px-3 py-1 text-sm text-muted-foreground">
            {label}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PropertyDetails