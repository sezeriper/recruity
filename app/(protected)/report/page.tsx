import { Metadata } from 'next'
import RecruitmentOverview from '@/components/RecruitmentOverview'
import TopRolesChart from '@/components/TopRolesChart'
import DepartmentHiresChart from '@/components/DepartmentHiresChart'
import ApplicationTrendsChart from '@/components/ApplicationTrendsChart'
import { getApplicantsByDepartment, getApplicationsByRole, getApplicationStatistics, getTotalProposedSalaryByMonth } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Recruitment Reports',
  description: 'Overview of recruitment process and statistics',
}

export default async function RecruitmentReportsPage() {

  const departmentHiresData = await getApplicantsByDepartment()
  const rolesData = await getApplicationsByRole()
  const applicationTrendsData = await getTotalProposedSalaryByMonth()
  const overviewData = await getApplicationStatistics()

  console.log(overviewData)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Recruitment Reports</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <RecruitmentOverview stats={overviewData[0]} />
        <TopRolesChart data={rolesData}/>
        <DepartmentHiresChart data={departmentHiresData} />
        <ApplicationTrendsChart data={applicationTrendsData}/>
      </div>
    </div>
  )
}
