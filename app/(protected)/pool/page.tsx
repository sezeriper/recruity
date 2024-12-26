import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ApplicantPool } from "@/lib/types";
import PoolCard from "@/components/pool-card";
import { Button } from "@/components/ui/button";
import CustomLink from "@/components/custom-link";

const PoolPage = async ({ params }: { params: any }) => {
  const samplePools: ApplicantPool[] = [
    {
      id: '1',
      name: 'Future Consideration',
      description: 'Qualified candidates for potential future openings',
      applicantCount: 25
    },
    {
      id: '2',
      name: 'Summer Interns',
      description: 'Candidates for our summer internship program',
      applicantCount: 15
    },
    {
      id: '3',
      name: 'Engineering Managers',
      description: 'Candidates for our engineering manager roles',
      applicantCount: 10
    },
    {
      id: '4',
      name: 'Product Designers',
      description: 'Candidates for our product design roles',
      applicantCount: 5
    }
  ]

  return (
    <div className="flex flex-col items-center p-4 gap-8 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold mb-4">Applicant Pools</h1>
        <CustomLink href="/pool/create">
          <Button className="ml-auto">Create Pool</Button>
        </CustomLink>
      </div>

      <div className="grid w-full gap-6 grid-cols-2">
        {
          samplePools.map(pool => <PoolCard key={pool.id} pool={pool} />)
        }
      </div>
    </div>
  )
}

export default PoolPage;
