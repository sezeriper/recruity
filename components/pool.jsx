import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ApplicantsTable from '@/components/applicants-table';


const Pool = async ({ poolName, applicants, post_id }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{poolName ? poolName : "Initial Stage"}</CardTitle>
            </CardHeader>
            <CardContent>
                <ApplicantsTable _applicants={applicants} post_id={post_id} />
            </CardContent>
        </Card>
    )
}

export default Pool