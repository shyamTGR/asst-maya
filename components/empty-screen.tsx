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
        <Image src="https://static.vecteezy.com/system/resources/previews/025/279/123/original/sunflower-bouquet-illustration-decor-png.png" alt="Description of Image" />

      </div>
    </div>
  )
}
