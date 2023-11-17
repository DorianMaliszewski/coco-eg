import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="hero h-full">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Apprends à configurer ton EdgeRouter</h1>
          <p className="mb-5">Retrouve toutes les informations dont tu as besoin pour configurer ton routeur avec via le ssh</p>
          <Link href="/docs" className="btn btn-primary">C&apos;est parti</Link>
        </div>
      </div>
    </div>
  )
}
