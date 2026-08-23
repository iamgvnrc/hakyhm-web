import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'HAKYHM — Independent Recording Artist',
      },
      {
        name: 'description',
        content: 'Official website for Ohio recording artist and live performer HAKYHM. Music, live dates, press assets, and booking.',
      },
      {
        property: 'og:title',
        content: 'HAKYHM — Independent Recording Artist',
      },
      {
        property: 'og:description',
        content: 'Official music, live dates, approved press assets, and booking information for HAKYHM.',
      },
      {
        property: 'og:image',
        content: '/images/hakyhm-1.jpg',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'theme-color',
        content: '#10110f',
      },
    ],
    links: [{ rel: 'icon', href: '/mark.svg', type: 'image/svg+xml' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
