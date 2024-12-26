INSERT INTO Job_Postings (Role, Department, Location, ContactEmail, EmploymentType, PositionsAvailable, SalaryRangeEnd, SalaryRangeStart, Summary)
VALUES
('Software Engineer', 'Engineering', 'San Francisco, CA', 'hr@company.com', 'Full-time', 3, 150000, 120000, 'Develop and maintain software solutions.'),
('Data Analyst', 'Data Science', 'Remote', 'data@company.com', 'Part-time', 2, 90000, 70000, 'Analyze and interpret data.'),
('Product Manager', 'Product', 'New York, NY', 'pm@company.com', 'Full-time', 2, 140000, 100000, 'Lead product development.'),
('DevOps Engineer', 'IT', 'Austin, TX', 'it@company.com', 'Full-time', 1, 130000, 90000, 'Manage infrastructure.'),
('HR Specialist', 'Human Resources', 'Chicago, IL', 'hr@company.com', 'Full-time', 1, 80000, 60000, 'Manage HR tasks.'),
('Graphic Designer', 'Design', 'Los Angeles, CA', 'design@company.com', 'Part-time', 1, 70000, 50000, 'Create visual designs.'),
('QA Tester', 'Quality Assurance', 'Remote', 'qa@company.com', 'Full-time', 3, 80000, 60000, 'Test and ensure quality.'),
('Marketing Manager', 'Marketing', 'Boston, MA', 'marketing@company.com', 'Full-time', 1, 110000, 80000, 'Plan marketing strategies.'),
('Sales Associate', 'Sales', 'Phoenix, AZ', 'sales@company.com', 'Part-time', 5, 60000, 40000, 'Assist with sales.'),
('Cybersecurity Analyst', 'IT', 'San Diego, CA', 'security@company.com', 'Full-time', 2, 140000, 100000, 'Secure systems.');

-- Insert data into Skills
INSERT INTO Skills (Name, Description)
VALUES
('Python', 'Programming language'),
('SQL', 'Database query language'),
('Data Analysis', 'Analyzing and interpreting data'),
('Project Management', 'Managing projects effectively'),
('Cloud Computing', 'Cloud-based solutions and services'),
('UX Design', 'User experience design'),
('Testing Automation', 'Automating software testing'),
('Cybersecurity', 'Securing IT systems'),
('Marketing Analytics', 'Analyzing marketing campaigns'),
('Sales Techniques', 'Optimizing sales approaches');


-- Insert data into Required_Skills
INSERT INTO Required_Skills (Job_PostingsPosting_id, SkillsSkillID)
VALUES
(11, 1), -- Software Engineer requires Python
(11, 2), -- Software Engineer requires SQL
(12, 3), -- Data Analyst requires Data Analysis
(12, 2), -- Data Analyst requires SQL
(13, 4), -- Product Manager requires Project Management
(14, 5), -- DevOps Engineer requires Cloud Computing
(15, 4), -- HR Specialist requires Project Management
(16, 6), -- Graphic Designer requires UX Design
(17, 7), -- QA Tester requires Testing Automation
(18, 9), -- Marketing Manager requires Marketing Analytics
(19, 10), -- Sales Associate requires Sales Techniques
(20, 8); -- Cybersecurity Analyst requires Cybersecurity


-- Insert data into User_Datas
INSERT INTO User_Datas (Username, PasswordHash, UserType, Name, Email, ProfilePhotoURI)
VALUES
('jdoe', 'hashed_password1', 'Admin', 'John Doe', 'jdoe@company.com', 'photo1.jpg'),
('asmith', 'hashed_password2', 'Recruiter', 'Alice Smith', 'asmith@company.com', 'photo2.jpg'),
('bwhite', 'hashed_password3', 'Applicant', 'Bob White', 'bwhite@domain.com', 'photo3.jpg'),
('tgreen', 'hashed_password4', 'Recruiter', 'Tina Green', 'tgreen@company.com', 'photo4.jpg'),
('wblack', 'hashed_password5', 'Admin', 'Will Black', 'wblack@company.com', 'photo5.jpg'),
('mjohnson', 'hashed_password6', 'Applicant', 'Mary Johnson', 'mjohnson@domain.com', 'photo6.jpg'),
('klee', 'hashed_password7', 'Applicant', 'Kevin Lee', 'klee@domain.com', 'photo7.jpg'),
('slopez', 'hashed_password8', 'Recruiter', 'Sara Lopez', 'slopez@company.com', 'photo8.jpg'),
('jchen', 'hashed_password9', 'Applicant', 'Jack Chen', 'jchen@domain.com', 'photo9.jpg'),
('nwhite', 'hashed_password10', 'Admin', 'Nina White', 'nwhite@company.com', 'photo10.jpg');


-- Insert data into User_Access_Permissions
INSERT INTO User_Access_Permissions (UsersUserID, Job_PostingsPostingID, AccessType)
VALUES
(11, 11, 'Edit'), -- John Doe has edit access to Software Engineer
(11, 12, 'Edit'), -- John Doe has edit access to Data Analyst
(12, 13, 'View'), -- Alice Smith has view access to Product Manager
(12, 14, 'View'), -- Alice Smith has view access to DevOps Engineer
(13, 15, 'Apply'), -- Bob White can apply for HR Specialist
(14, 16, 'View'), -- Tina Green has view access to Graphic Designer
(15, 17, 'Edit'), -- Will Black has edit access to QA Tester
(16, 18, 'Apply'), -- Mary Johnson can apply for Marketing Manager
(17, 19, 'Apply'), -- Kevin Lee can apply for Sales Associate
(18, 20, 'View'); -- Sara Lopez has view access to Cybersecurity Analyst


-- Insert data into Applicants
INSERT INTO Applicants (Name, Email, PhoneNumber, LinkedInProfile, Degree, EvaluationMetric, Source, ExpectedSalary, ProposedSalary, NoteField, CVFileMetadata)
VALUES
('Emily Davis', 'edavis@mail.com', '123-456-7890', 'linkedin.com/in/emilydavis', 'Bachelors in CS', 85, 'Job Board', 90000, 85000, 'Strong candidate.', 'emily_cv.pdf'),
('Michael Brown', 'mbrown@mail.com', '987-654-3210', 'linkedin.com/in/michaelbrown', 'Masters in Data Science', 90, 'Referral', 100000, 95000, 'Excellent data skills.', 'michael_cv.pdf'),
('Sophia Green', 'sgreen@mail.com', '456-789-1234', 'linkedin.com/in/sophiagreen', 'Bachelors in Design', 80, 'Agency', 70000, 65000, 'Creative designer.', 'sophia_cv.pdf'),
('Ethan White', 'ewhite@mail.com', '789-123-4560', 'linkedin.com/in/ethanwhite', 'Bachelors in IT', 88, 'University', 85000, 80000, 'Good knowledge of IT systems.', 'ethan_cv.pdf'),
('Olivia Black', 'oblack@mail.com', '321-654-9870', 'linkedin.com/in/oliviablack', 'MBA', 92, 'Referral', 120000, 110000, 'Leadership qualities.', 'olivia_cv.pdf'),
('Lucas Johnson', 'ljohnson@mail.com', '234-567-8901', 'linkedin.com/in/lucasjohnson', 'Masters in Marketing', 87, 'Job Fair', 95000, 90000, 'Strong marketing experience.', 'lucas_cv.pdf'),
('Ava Brown', 'abrown@mail.com', '567-890-1234', 'linkedin.com/in/avabrown', 'Bachelors in CS', 83, 'Job Board', 87000, 83000, 'Good coding skills.', 'ava_cv.pdf'),
('William Green', 'wgreen@mail.com', '678-123-4567', 'linkedin.com/in/williamgreen', 'Bachelors in Engineering', 84, 'Job Fair', 91000, 87000, 'Experienced engineer.', 'william_cv.pdf'),
('Isabella Smith', 'ismith@mail.com', '789-345-6789', 'linkedin.com/in/isabellasmith', 'Bachelors in QA', 79, 'Job Board', 75000, 70000, 'Detailed tester.', 'isabella_cv.pdf'),
('James Black', 'jblack@mail.com', '890-123-4567', 'linkedin.com/in/jamesblack', 'Masters in Cybersecurity', 95, 'Referral', 135000, 125000, 'Expert in cybersecurity.', 'james_cv.pdf');

-- Insert data into Applicant_Skills
-- Insert data into Applicant_Skills
INSERT INTO Applicant_Skills (SkillsSkillID, ApplicantApplicant_id, ProficiencyLevel)
VALUES
(11, 11, 8), -- Emily Davis has proficiency level 8 in Python
(12, 11, 7), -- Emily Davis has proficiency level 7 in SQL
(12, 12, 9), -- Michael Brown has proficiency level 9 in SQL
(13, 12, 8), -- Michael Brown has proficiency level 8 in Data Analysis
(16, 13, 9), -- Sophia Green has proficiency level 9 in UX Design
(15, 14, 7), -- Ethan White has proficiency level 7 in Cloud Computing
(14, 15, 9), -- Olivia Black has proficiency level 9 in Project Management
(19, 16, 8), -- Lucas Johnson has proficiency level 8 in Marketing Analytics
(20, 17, 7), -- Ava Brown has proficiency level 7 in Sales Techniques
(18, 20, 10); -- James Black has proficiency level 10 in Cybersecurity

-- Insert data into Pools
INSERT INTO Pools (Name, Description)
VALUES
('Engineering Pool', 'Applicants for engineering roles'),
('Data Science Pool', 'Applicants for data science roles'),
('Design Pool', 'Applicants for design roles'),
('IT Pool', 'Applicants for IT roles'),
('HR Pool', 'Applicants for HR roles'),
('QA Pool', 'Applicants for QA roles'),
('Marketing Pool', 'Applicants for marketing roles'),
('Sales Pool', 'Applicants for sales roles'),
('Cybersecurity Pool', 'Applicants for cybersecurity roles'),
('Leadership Pool', 'Applicants for leadership roles');

-- Insert data into Applicant_Pool
INSERT INTO Applicant_Pool (ApplicantID, PoolsPoolID)
VALUES
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5),
(6, 7), (7, 1), (8, 1), (9, 6), (10, 9);

-- Insert data into Application
-- Insert data into Application
INSERT INTO Application (JobPostingID, ApplicationStageID, ApplicantID, CreatedAt, UpdatedAt, Status)
VALUES
(11, 1, 11, '2024-12-01', '2024-12-10', 'In Progress'), -- Emily Davis
(12, 2, 12, '2024-12-05', '2024-12-15', 'Completed'),   -- Michael Brown
(13, 3, 13, '2024-12-07', '2024-12-17', 'Pending'),     -- Sophia Green
(14, 4, 14, '2024-12-08', '2024-12-18', 'In Progress'), -- Ethan White
(15, 5, 15, '2024-12-09', '2024-12-19', 'Completed'),   -- Olivia Black
(16, 6, 16, '2024-12-10', '2024-12-20', 'Pending'),     -- Lucas Johnson
(17, 7, 17, '2024-12-11', '2024-12-21', 'In Progress'), -- Ava Brown
(18, 8, 18, '2024-12-12', '2024-12-22', 'Completed'),   -- William Green
(19, 9, 19, '2024-12-13', '2024-12-23', 'Pending'),     -- Isabella Smith
(20, 10, 20, '2024-12-14', '2024-12-24', 'Completed');  -- James Black



-- Insert data into Application_Stages
INSERT INTO Application_Stages (JobPostingID, ApplicationID, Name, InternalNotes, StageOrder)
VALUES
(11, 11, 'Initial Screening', 'Passed initial check', 1),     -- Linked to Software Engineer
(12, 12, 'Technical Interview', 'Strong technical skills', 2), -- Linked to Data Analyst
(13, 13, 'Portfolio Review', 'Good portfolio', 3),            -- Linked to Product Manager
(14, 14, 'HR Interview', 'Cultural fit', 4),                  -- Linked to DevOps Engineer
(15, 15, 'Offer Stage', 'Offer accepted', 5),                 -- Linked to HR Specialist
(16, 16, 'Final Review', 'Pending decision', 6),              -- Linked to Graphic Designer
(17, 17, 'Background Check', 'Clear', 7),                     -- Linked to QA Tester
(18, 18, 'Contract Signing', 'Signed contract', 8),           -- Linked to Marketing Manager
(19, 19, 'Onboarding', 'Completed onboarding', 9),            -- Linked to Sales Associate
(20, 20, 'Probation Period', 'Successful completion', 10);    -- Linked to Cybersecurity Analyst

-- Insert data into Email_Templates
INSERT INTO Email_Templates (ApplicationStageID, Name, Subject, Body)
VALUES
(11, 'Initial Screening Passed', 'Congratulations!', 'Dear [Name], you have passed the initial screening.'),
(12, 'Interview Invitation', 'Interview Scheduled', 'Dear [Name], your interview is scheduled for [Date].'),
(13, 'Portfolio Review Feedback', 'Portfolio Reviewed', 'Dear [Name], your portfolio has been reviewed.'),
(14, 'HR Interview Scheduled', 'HR Interview', 'Dear [Name], your HR interview is scheduled for [Date].'),
(15, 'Offer Letter', 'Offer Letter', 'Dear [Name], we are pleased to offer you a position.'),
(16, 'Final Review Pending', 'Decision Pending', 'Dear [Name], your application is under final review.'),
(17, 'Background Check Cleared', 'Clearance', 'Dear [Name], your background check has been cleared.'),
(18, 'Contract Signing Reminder', 'Contract Reminder', 'Dear [Name], please sign your contract.'),
(19, 'Onboarding Details', 'Welcome Onboard', 'Dear [Name], here are your onboarding details.'),
(20, 'Probation Period Feedback', 'Probation Success', 'Dear [Name], congratulations on completing probation.');

-- Insert data into Survey_Forms
INSERT INTO Survey_Forms (ApplicationStageID, FormName, FormStructureMetadata, CreatedAt, UpdatedAt)
VALUES
(11, 'Technical Skills Assessment', 'Structure for skills assessment', '2024-12-01', '2024-12-10'),
(12, 'Behavioral Survey', 'Structure for behavioral survey', '2024-12-05', '2024-12-15'),
(13, 'Portfolio Review Form', 'Structure for portfolio review', '2024-12-07', '2024-12-17'),
(14, 'HR Feedback Form', 'Structure for HR feedback', '2024-12-08', '2024-12-18'),
(15, 'Offer Acceptance Form', 'Structure for offer acceptance', '2024-12-09', '2024-12-19'),
(16, 'Final Decision Form', 'Structure for final decision', '2024-12-10', '2024-12-20'),
(17, 'Background Check Form', 'Structure for background check', '2024-12-11', '2024-12-21'),
(18, 'Contract Details Form', 'Structure for contract details', '2024-12-12', '2024-12-22'),
(19, 'Onboarding Checklist', 'Structure for onboarding checklist', '2024-12-13', '2024-12-23'),
(20, 'Probation Feedback Form', 'Structure for probation feedback', '2024-12-14', '2024-12-24');

-- Insert data into Survey_Taken
INSERT INTO Survey_Taken (ApplicantID, SurveyID, SurveyData, CreatedAt)
VALUES
(11, 1, 'Assessment data for Emily Davis', '2024-12-02'),
(12, 2, 'Behavioral data for Michael Brown', '2024-12-06'),
(13, 3, 'Portfolio data for Sophia Green', '2024-12-08'),
(14, 4, 'HR feedback for Ethan White', '2024-12-09'),
(15, 5, 'Offer response from Olivia Black', '2024-12-10'),
(16, 6, 'Decision review for Lucas Johnson', '2024-12-11'),
(17, 7, 'Background check for Ava Brown', '2024-12-12'),
(18, 8, 'Contract form for William Green', '2024-12-13'),
(19, 9, 'Onboarding data for Isabella Smith', '2024-12-14'),
(20, 10, 'Probation feedback for James Black', '2024-12-15');
