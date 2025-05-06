import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">{children}</section>
  )
}
