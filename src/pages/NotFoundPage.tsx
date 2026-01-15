import { Link } from 'react-router-dom'
import { Layout } from '../components/layout'

export function NotFoundPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-9xl font-bold text-neutral-200">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-900 mt-4">
          Page Not Found
        </h2>
        <p className="text-neutral-500 mt-2 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
          <Link to="/products" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </Layout>
  )
}
