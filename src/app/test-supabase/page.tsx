'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestSupabase() {
  const [status, setStatus] = useState('Testing...')
  const [error, setError] = useState('')

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test basic connection
        const { data, error } = await supabase
          .from('items')
          .select('count')
          .limit(1)

        if (error) {
          setError(`Supabase Error: ${error.message}`)
          setStatus('❌ Connection Failed')
        } else {
          setStatus('✅ Supabase Connected Successfully')
        }
      } catch (err) {
        setError(`Connection Error: ${err}`)
        setStatus('❌ Connection Failed')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Supabase Connection Test</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Status: {status}</h2>
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
              <h3 className="text-red-800 font-semibold">Error Details:</h3>
              <p className="text-red-700 mt-2">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Environment Variables:</h3>
              <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</p>
              <p>Supabase Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</p>
            </div>

            <div>
              <h3 className="font-semibold">Next Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Check that your Supabase project is running</li>
                <li>Verify the database schema has been applied</li>
                <li>Make sure environment variables are set in GitHub secrets</li>
                <li>Check the GitHub Actions logs for any build errors</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
