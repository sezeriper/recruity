import JobPostingEditor from "@/components/job-posting-editor";
import { getPosting } from "@/lib/queries";

const PostingDetailsPage = async ({ params }) => {
    const id = (await params).post_id
    const posting = await getPosting(id)

    return (
        <div className="flex w-full max-w-2xl h-full flex-grow flex-1 flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">Job Posting Details</h1>
            <JobPostingEditor editing={false} posting={posting}/>
        </div>
    )
}

export default PostingDetailsPage;
