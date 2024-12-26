import ApplicantDetails from '@/components/applicant-details';
import { getApplicant, getApplicationStages } from '@/lib/queries';

const ApplicantDetailsPage = async ({ params }) => {
    const {post_id, applicant_id} = await params

    const applicant = await getApplicant(applicant_id);
    const stages = await getApplicationStages(post_id);

    console.log(stages)

    return (
        <div className='flex w-full max-w-2xl h-full flex-grow flex-1 flex-col items-center gap-6'>
            <ApplicantDetails stages={stages} post_id={post_id} _applicant={applicant}/>
        </div>
    );
};

export default ApplicantDetailsPage;