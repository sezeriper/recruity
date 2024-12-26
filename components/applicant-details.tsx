'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CustomLink from './custom-link'
import { useRouter } from 'next/navigation'
import { Applicant } from '@/lib/types'

export default function ApplicantDetails({ _applicant, post_id, stages } :
  { _applicant: Applicant, post_id: number, stages: any })
{
  const router = useRouter()
  const [applicant, setApplicant] = useState<Applicant>(_applicant || {
    applicantid: '',
    name: '',
    email: '',
    phonenumber: '',
    linkedinprofile: '',
    degree: '',
    evaluationmetric: '',
    source: '',
    expectedsalary: 0,
    proposedsalary: 0,
    notefield: '',
    cvfilemetadata: '',
    jobpostingid: '',
    applicationstageid: '',
    createdat: '',
    updatedat: '',
    status: '',
  })

  console.log('Applicant data:', applicant)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setApplicant(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setApplicant(prev => ({ ...prev, [name]: value }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setApplicant(prev => ({ ...prev, [name]: parseInt(value, 10) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the applicant data to your backend

    const data = {...applicant, jobPostingId: post_id}
    console.log('Data:', data)

    await fetch("/api/applicant", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    router.push(`/posting/${post_id}/applicant`)
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Applicant Details</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={applicant.name} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={applicant.email} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="phonenumber">Phone</Label>
                <Input id="phonenumber" name="phonenumber" value={applicant.phonenumber} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="linkedinprofile">LinkedIn URL</Label>
                <Input id="linkedinprofile" name="linkedinprofile" value={applicant.linkedinprofile} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="degree">Education</Label>
                <Select name="degree" onValueChange={handleSelectChange('degree')} value={applicant.degree}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select degree level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High School">High School</SelectItem>
                    <SelectItem value="Associate's Degree">Associate's Degree</SelectItem>
                    <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                    <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                    <SelectItem value="Ph.D.">Ph.D.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="evaluationmetric">Evaluation</Label>
                <Input id="evaluationmetric" name="evaluationmetric" type="number" value={applicant.evaluationmetric} onChange={handleNumberChange} required />
              </div>
              <div>
                <Label htmlFor="source">Application Source</Label>
                <Input id="source" name="source" value={applicant.source} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="expectedsalary">Expected Salary</Label>
                <Input id="expectedsalary" name="expectedsalary" type="number" value={applicant.expectedsalary} onChange={handleNumberChange} required />
              </div>
              <div>
                <Label htmlFor="proposedsalary">Proposed Salary</Label>
                <Input id="proposedsalary" name="proposedsalary" type="number" value={applicant.proposedsalary} onChange={handleNumberChange} required />
              </div>
              <div>
                <Label htmlFor="notefield">Notes</Label>
                <Textarea id="notefield" name="notefield" value={applicant.notefield} onChange={handleInputChange}/>
              </div>
              <div>
                <span className='text-sm flex items-center gap-2'>
                    CV File Name: <CustomLink href={`/resumes/${applicant.cvfilemetadata}`}>{applicant.cvfilemetadata}</CustomLink>`
                </span>
                <Input type="file" id="cvfilemetadata" name="cvfilemetadata" accept="application/pdf"/>
              </div>
              {stages && (
                <div>
                  <Label htmlFor="applicationstageid">Application Stage</Label>
                  <Select name="applicationstageid" onValueChange={handleSelectChange('applicationstageid')} value={applicant.applicationstageid?.toString()}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select application stage" />
                    </SelectTrigger>
                    <SelectContent>
                      {stages.map((stage: any) => (
                        <SelectItem key={stage.stageid.toString()} value={stage.stageid.toString()}>{stage.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )
              }
              <Button type="submit">Save Changes</Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}