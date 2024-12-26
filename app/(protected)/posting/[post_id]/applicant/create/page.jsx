import ApplicantDetails from "@/components/applicant-details";

const PostingCreatePage = async ({ params }) => {
    const { post_id } = await params
    return (
        <div className="flex w-full max-w-2xl h-full flex-grow flex-1 flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">Create Applicant</h1>
            <ApplicantDetails post_id={post_id} _applicant={null} isEditing={true}/>
        </div>
    )
};

export default PostingCreatePage;
