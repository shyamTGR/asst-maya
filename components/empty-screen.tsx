import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8" style={{ alignItems: 'center' }}>
        <h1 className="text-lg font-semibold" style={{ textAlign: 'center' }}>
          Welcome Mayaa!
        </h1 >
<img src="https://static.vecteezy.com/system/resources/previews/025/279/123/original/sunflower-bouquet-illustration-decor-png.png" alt="Description of Image" className="responsive-img" style={{ display: 'block', maxWidth: '300px', width: '100%', height: 'auto' }} />
      </div>

    </div>
  )
}
