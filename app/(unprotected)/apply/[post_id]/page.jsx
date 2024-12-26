import JobApplicationForm from '@/components/application-form'

export default async function ApplyPage({ params }) {
  const id = (await params).post_id

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Apply for a Job</h1>
      <JobApplicationForm jobPostingId={id}/>
    </div>
  )
}