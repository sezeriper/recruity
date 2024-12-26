'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'
import { ApplicantPool } from '@/lib/types'

export default function PoolEditor({ poolId }: { poolId: string | null }) {
  const [pool, setPool] = useState<ApplicantPool | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchPool = async () => {
      // In a real application, you would fetch the pool data from your API
      // For this example, we'll use mock data
      setIsLoading(true)
      try {
        if (!poolId) {
          setPool({
            id: '',
            name: '',
            description: '',
            applicantCount: 0,
          })
          return
        }
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setPool({
          id: poolId,
          name: 'Future Consideration',
          description: 'Qualified candidates for potential future openings',
          applicantCount: 25,
        })
      } catch (error) {
        console.error('Error fetching pool:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPool()
  }, [poolId])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      // In a real application, you would send the updated pool data to your API
      // For this example, we'll just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Pool updated:', pool)
      router.push('/pool') // Redirect to pools list page
    } catch (error) {
      console.error('Error updating pool:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPool(prev => prev ? { ...prev, [name]: value } : null)
  }

  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!pool) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <p className="text-center">Pool not found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Pool Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Pool Name</Label>
            <Input
              id="name"
              name="name"
              value={pool.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={pool.description}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="button" variant="destructive" onClick={() => router.back()}>
            Delete Pool
          </Button>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

