import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-octo-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-octo-red/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-octo-dark mb-2">Page Not Found</h1>
        <p className="text-octo-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-octo-red text-white font-semibold hover:bg-octo-red-dark transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
