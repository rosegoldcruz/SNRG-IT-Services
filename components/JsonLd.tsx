type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Stringify once at render so crawlers get a raw JSON-LD payload in DOM.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
