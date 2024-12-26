import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Pool from '@/components/pool';
import { getApplicants } from '@/lib/queries';

const ApplicantPage = async ({ params }) => {
    const { post_id } = await params;
    const applicants = await getApplicants(post_id);

    return (
        <div className='flex w-full h-full flex-grow flex-1 flex-col items-center gap-6 px-8'>
            <div className='flex w-full min-w-6xl justify-between items-center mb-10'>
                <h1 className='text-3xl font-bold'>Applicants</h1>

                <Link href={`/posting/${post_id}/applicant/create`}>
                    <Button>Add Applicant</Button>
                </Link>
            </div>

            <div className='flex flex-col gap-8'>
                {
                    applicants.map(stage => (
                        <Pool post_id={post_id} key={stage.stagename} poolName={stage.stagename} applicants={stage.applicants}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ApplicantPage;