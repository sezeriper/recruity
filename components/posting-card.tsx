import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CustomLink from '@/components/custom-link';
import { Badge } from './ui/badge';

interface PostingCardProps {
    id: number,
    title: string;
    description: string;
    applied: number;
}

const PostingCard = async ({id, title, description, applied }: PostingCardProps) => {
    return (
        <Card>
            <CardHeader>
                <div className='flex items-center justify-between'>
                <CardTitle>{title}</CardTitle>
                <Badge variant={'default'}>{applied} applied</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter className='flex gap-4'>
                <CustomLink href={`/posting/${id}`}>
                    <Button variant={'outline'}>Details</Button>
                </CustomLink>
                <CustomLink href={`/posting/${id}/applicant`}>
                    <Button>See applicants</Button>
                </CustomLink>
                <CustomLink href={`apply/${id}`}>
                    Go to form
                </CustomLink>
            </CardFooter>
        </Card>
    )
}

export { PostingCard }