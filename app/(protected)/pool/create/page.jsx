import { auth } from "@/auth";
import PoolCreate from "@/components/pool-create";

const PostingCreatePage = async ({ params }) => {
    return (
        <div className="flex h-full items-center w-full flex-1 flex-col gap-6 py-10">
            <h1 className="text-2xl font-bold">Create Pool</h1>
            <PoolCreate/>
        </div>
    )
};

export default PostingCreatePage;
