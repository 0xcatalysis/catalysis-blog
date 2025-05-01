import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-56">{children}</section>
  )
}
