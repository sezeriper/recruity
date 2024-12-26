import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecruitmentOverview({ stats }: { stats: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recruitment Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4 text-center">
          <div>
            <dt className="text-sm font-medium text-gray-500">Total Applications</dt>
            <dd className="text-3xl font-semibold">{parseInt(stats.totalapplications)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Open Positions</dt>
            <dd className="text-3xl font-semibold">{parseInt(stats.totalopenpositions)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Total Proposed Salary</dt>
            <dd className="text-3xl font-semibold">${parseInt(stats.totalproposedsalary)}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Job Postings</dt>
            <dd className="text-3xl font-semibold">{parseInt(stats.totaljobpostings)}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

