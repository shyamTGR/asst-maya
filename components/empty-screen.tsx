import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome Mayaa!
        </h1>
<img src="https://example.com/path-to-your-image.jpg" alt="Description of Image" className="responsive-img" />
      </div>
      <style jsx>{`
        .responsive-img {
          width: 100%;
          max-width: 100px;  // Limits the image size to 300px at maximum
          height: auto;      // Maintains the aspect ratio of the image
        }

        @media (max-width: 768px) {
          .responsive-img {
            max-width: 50px;  // Smaller size on smaller screens
          }
        }
      `}</style>
    </div>
  )
}
