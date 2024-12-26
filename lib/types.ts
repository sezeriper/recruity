export interface InterviewStage {
  StageID: number
  Name: string
  InternalNotes: string
  StageOrder: number
}

export interface JobPosting {
  postingid: number
  role: string
  department: string
  location: string
  contactemail: string
  employmenttype: string
  positionsavailable: number
  salaryrangestart: number
  salaryrangeend: number
  summary: string
  interviewstages: Array<InterviewStage>
}

export interface Applicant {
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
}

export interface ApplicantPool {
  id: string
  name: string
  description: string
  applicantCount: number
}