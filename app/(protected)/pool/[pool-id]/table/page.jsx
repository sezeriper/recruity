import PoolTable from '@/components/pool-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function PoolPage({ params }) {
  const id = (await params)["pool-id"]

  return (
    <div className="container mx-auto py-10">
      <div className="flex w-full justify-between items-center mb-10">
        <h1 className="text-3xl font-bold mb-6">Future Considiration</h1>

        <Link href={`/pool/${id}/add`}>
          <Button variant="default">Add applicant</Button>
        </Link>
      </div>
      <PoolTable />
    </div>
  )
}