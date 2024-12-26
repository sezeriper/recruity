import { Applicant } from './types'

const posting1 = {
    role: 'Software Engineer',
    department: 'Marketing',
    location: 'Vancouver, BC',
    contactEmail: 'hr@recruity.com',
    employmentType: 'full-time',
    openPositions: 1,
    minSalary: 10000,
    maxSalary: 12000,
    summary: 'We are looking for a software engineer to join our team.',
    interviewStages: [
        { id: '1', name: 'Phone Interview' },
        { id: '2', name: 'Technical Interview' },
    ],
}

const applicant1: Applicant = {
  applicantId: '42',
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  linkedInUrl: 'https://www.linkedin.com/in/johndoe',
  education: "Bachelor's Degree",
  evaluation: 'Good',
  applicationSource: 'Company Website',
  expectedSalary: 75000,
  proposedSalary: 70000,
  notes: 'Strong technical skills, good cultural fit.',
  cvFileName: 'john_doe_resume.pdf',
  cvUploadDate: new Date('2023-06-15'),
  cvFileType: 'application/pdf'
}

export { posting1, applicant1 }