import JobPostingEditor from "@/components/job-posting-editor";

const PostingCreatePage = async ({ params }) => {
    return (
        <div className="flex h-full flex-grow flex-1 flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">Create Posting</h1>
            <JobPostingEditor editing={true} posting={null}/>
        </div>
    )
};

export default PostingCreatePage;
