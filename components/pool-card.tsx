import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Info, Users } from 'lucide-react'
import { ApplicantPool } from '@/lib/types'
import Link from 'next/link'


interface ApplicantPoolCardProps {
  pool: ApplicantPool
}

export default function PoolCard({ pool }: ApplicantPoolCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {pool.name}
          <Badge variant="secondary">{pool.applicantCount} applicants</Badge>
        </CardTitle>
        <CardDescription>{pool.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Additional content can be added here if needed */}
      </CardContent>
      <CardFooter className="flex gap-4">
        <Link href={`/pool/${pool.id}`}>
          <Button variant="outline">
            <Info className="mr-2 h-4 w-4" />
            Details
          </Button>
        </Link>
        <Link href={`/pool/${pool.id}/table`}>
          <Button variant="default">
            <Users className="mr-2 h-4 w-4" />
            See applicants
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}