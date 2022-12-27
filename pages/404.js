import BaseLayout from '../src/components/Layout/BaseLayout'
import Link from 'next/link'

export default function Blog() {
  return (
      <BaseLayout>
                    <div className="text-center">
                        <div className="error mx-auto" data-text="404">404</div>
                        <p className="lead text-gray-800 mb-5">Página no encontrada</p>
                        <p className="text-gray-500 mb-0">El contenido que tratas de buscar no se encuentra en este sitio web...</p>
                        <Link href="/">&larr; Regresar a Inicio</Link>
                    </div>
      </BaseLayout>
  )
}
