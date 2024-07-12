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
<img src="https://static.vecteezy.com/system/resources/previews/025/279/123/original/sunflower-bouquet-illustration-decor-png.png" alt="Description of Image" className="responsive-img" />
      </div>
      <style jsx>{`
        .responsive-img {
          width: 100%;
          max-width: 250px;  // Limits the image size to 300px at maximum
          height: auto;      // Maintains the aspect ratio of the image
        }

        @media (max-width: 768px) {
          .responsive-img {
            max-width: 100px;  // Smaller size on smaller screens
          }
        }
      `}</style>
    </div>
  )
}
