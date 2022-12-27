import Link from 'next/link'
import BaseLayout from '../src/components/Layout/BaseLayout'

export default function Download() {
  return (
      <BaseLayout>
          <h1 className="h3 mb-4 text-gray-800">Descargar</h1>
          <p>1- Precios unitarios España:</p> <Link href="https://github.com/falconsoft3d/preciosconstruccion/blob/main/public/data/apus/spain/apus.csv"
          target="_blank"
          >Descargar</Link>
      </BaseLayout>
  )
}