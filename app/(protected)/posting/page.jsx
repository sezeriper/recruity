import { Button } from '@/components/ui/button';
import { PostingCard } from '@/components/posting-card';
import CustomLink from '@/components/custom-link';
import { getPostings } from '@/lib/queries';

const PostingPage = async () => {
    const postings = await getPostings();
    
    return (
        <div className='flex flex-col p-4 gap-8 w-full'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-2xl font-bold'>Job Postings</h1>
                <CustomLink href='/posting/create'>
                    <Button>Create Posting</Button>
                </CustomLink>
            </div>

            <div className='grid grid-cols-2 gap-6'>
                {
                    postings.map(posting => {
                        return (
                            <PostingCard
                                key={posting.postingid}
                                id={posting.postingid}
                                title={posting.role}
                                description={posting.summary}
                                applied={posting.numberofapplications}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default PostingPage;