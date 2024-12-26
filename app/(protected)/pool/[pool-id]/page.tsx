import PoolEditor from '@/components/pool-editor'

export default async function EditPoolPage({ params } : {
  params: Promise<{ "pool-id": string }>
}) {

  const id = (await params)["pool-id"]
  console.log('Pool ID:', id)
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Applicant Pool</h1>
      <PoolEditor poolId={id} />
    </div>
  )
}