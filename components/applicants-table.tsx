'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpDown } from 'lucide-react'
import CustomLink from '@/components/custom-link'

interface Applicant {
  ApplicantID: 11
  CVFileMetadata: "emily_cv.pdf"
  Degree: "Bachelors in CS"
  Email: "edavis@mail.com"
  EvaluationMetric: 85
  ExpectedSalary: 90000
  LinkedInProfile: "linkedin.com/in/emilydavis"
  Name: "Emily Davis"
  NoteField: "Strong candidate."
  PhoneNumber: "123-456-7890"
  ProposedSalary: 85000
  Source: "Job Board"
}


export default function ApplicantsTable({ _applicants, post_id }: { _applicants: Applicant[], post_id: number }) {
  const [applicants, setApplicants] = React.useState<Applicant[]>(_applicants)
  const [sortColumn, setSortColumn] = React.useState<keyof Applicant | null>(null)
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc')

  const handleSort = (column: keyof Applicant) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }

    const sortedApplicants = [...applicants].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    setApplicants(sortedApplicants)
  }

  return (
    <div className="container mx-auto">
      <Table>
        <TableCaption>List of Job Applicants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              <Button variant="ghost" onClick={() => handleSort('Name')}>
                Full Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('Email')}>
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('Degree')}>
                Education
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('EvaluationMetric')}>
                Evaluation
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button variant="ghost" onClick={() => handleSort('ProposedSalary')}>
                Proposed Salary
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.map((applicant) => (
            <TableRow className='text-center' key={applicant.ApplicantID}>
              <TableCell className="font-medium">{applicant.Name}</TableCell>
              <TableCell>{applicant.Email}</TableCell>
              <TableCell>{applicant.Degree}</TableCell>
              <TableCell>{applicant.EvaluationMetric}</TableCell>
              <TableCell>${applicant.ProposedSalary.toLocaleString()}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => navigator.clipboard.writeText(applicant.Email)}>
                      Copy email
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><CustomLink href={`/posting/${post_id}/applicant/${applicant.ApplicantID}`}>View details</CustomLink></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}