'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { PlusCircle, X } from 'lucide-react'
import { JobPosting } from '@/lib/types'
import { redirect } from 'next/navigation'

export default function JobPostingEditor({ posting }: { posting: JobPosting }) {
  const [newStage, setNewStage] = useState('')

  const [jobPosting, setJobPosting] = useState<JobPosting>(posting  || {
    postingid: 0,
    role: '',
    department: '',
    location: '',
    contactemail: '',
    employmenttype: '',
    positionsavailable: 1,
    salaryrangestart: 0,
    salaryrangeend: 0,
    summary: '',
    interviewStages: []
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setJobPosting(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    console.log('Selected:', value)
    setJobPosting(prev => ({ ...prev, [name]: value }))
    console.log('Job Posting:', jobPosting)
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setJobPosting(prev => ({ ...prev, [name]: parseInt(value, 10) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch("/api/posting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobPosting),
    })

    // Here you would typically send the jobPosting data to your backend
    return
    redirect('/posting')
  }

  const addInterviewStage = () => {
    if (newStage.trim()) {
      setJobPosting(prev => ({
        ...prev,
        interviewstages: [...prev.interviewstages, { StageID: 0, Name: newStage, InternalNotes: '', StageOrder: 0 }]
      }))
      setNewStage('')
    }
  }

  const removeInterviewStage = (id: number) => {
    setJobPosting(prev => ({
      ...prev,
      interviewstages: prev.interviewstages.filter(stage => stage.StageID !== id)
    }))
  }

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Job Posting Editor</h1> */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="role">Role</Label>
            <Input id="role" name="role" value={jobPosting.role} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="department">Department</Label>
            <Input id="department" name="department" value={jobPosting.department} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={jobPosting.location} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="contactEmail">Contact Email</Label>
            <Input id="contactEmail" name="contactemail" type="email" value={jobPosting.contactemail} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="employmenttype">Employment Type</Label>
            <Select name="employmenttype" onValueChange={handleSelectChange('employmenttype')} value={jobPosting.employmenttype}>
              <SelectTrigger>
                <SelectValue placeholder="Select employment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="positionsavailable">Open Positions</Label>
            <Input id="positionsavailable" name="positionsavailable" type="number" min="1" value={jobPosting.positionsavailable} onChange={handleNumberChange} required />
          </div>
          <div>
            <Label htmlFor="minSalary">Minimum Salary</Label>
            <Input id="minSalary" name="salaryrangestart" type="number" min="0" value={jobPosting.salaryrangestart} onChange={handleNumberChange} required />
          </div>
          <div>
            <Label htmlFor="maxSalary">Maximum Salary</Label>
            <Input id="maxSalary" name="salaryrangeend" type="number" min="0" value={jobPosting.salaryrangeend} onChange={handleNumberChange} required />
          </div>
          <div>
            <Label htmlFor="summary">Summary</Label>
            <Textarea id="summary" name="summary" value={jobPosting.summary} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="interviewStages">Interview Stages</Label>
            <div className="flex space-x-2 mb-2">
              <Input
                id="newStage"
                value={newStage}
                onChange={(e) => setNewStage(e.target.value)}
                placeholder="Add new stage"
              />
              <Button className="w-40" type="button" onClick={addInterviewStage} variant="outline">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Stage
              </Button>
            </div>
            <ul className="space-y-2">
              {jobPosting?.interviewstages && jobPosting.interviewstages.map((stage) => (
                <li key={stage.StageID} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                  <span>{stage.Name}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeInterviewStage(stage.StageID)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove stage</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <Button type="submit">Save Job Posting</Button>
        </form>
    </div>
  )
}