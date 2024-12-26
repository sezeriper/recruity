-- Job_Postings Table
CREATE TABLE Job_Postings (
    PostingID SERIAL PRIMARY KEY,
    Role VARCHAR(32) NOT NULL,
    Department VARCHAR(32) NOT NULL,
    Location VARCHAR(64), 
    ContactEmail VARCHAR(64) NOT NULL,
    EmploymentType VARCHAR(10) NOT NULL,
    PositionsAvailable INT NOT NULL,
    SalaryRangeEnd INT,
    SalaryRangeStart INT,
    Summary VARCHAR(255)
);

-- Skills Table
CREATE TABLE Skills (
    SkillID SERIAL PRIMARY KEY,
    Name VARCHAR(32) NOT NULL, 
    Description VARCHAR(128) 
);

-- Required_Skills Table
CREATE TABLE Required_Skills (
    Job_PostingsPosting_id INT REFERENCES Job_Postings(PostingID) ON DELETE CASCADE,
    SkillsSkillID INT REFERENCES Skills(SkillID) ON DELETE CASCADE,
    PRIMARY KEY (Job_PostingsPosting_id, SkillsSkillID)
);

-- User_Datas Table
CREATE TABLE User_Datas (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(32) UNIQUE,
    PasswordHash VARCHAR(64) NOT NULL,
    UserType VARCHAR(10) NOT NULL,
    Name VARCHAR(64) NOT NULL,
    Email VARCHAR(32) NOT NULL,
    ProfilePhotoURI VARCHAR(255)
);

-- User_Access_Permissions Table
CREATE TABLE User_Access_Permissions (
    UsersUserID INT REFERENCES User_Datas(UserID) ON DELETE CASCADE,
    Job_PostingsPostingID INT REFERENCES Job_Postings(PostingID) ON DELETE CASCADE,
    AccessType VARCHAR(10) NOT NULL,
    PRIMARY KEY (UsersUserID, Job_PostingsPostingID)
);

-- Applicants Table
CREATE TABLE Applicants (
    ApplicantID SERIAL PRIMARY KEY,
    Name VARCHAR(32) NOT NULL,
    Email VARCHAR(32) NOT NULL,
    PhoneNumber VARCHAR(15) NOT NULL,
    LinkedInProfile VARCHAR(64),
    Degree VARCHAR(32),
    EvaluationMetric INT,
    Source VARCHAR(32) NOT NULL,
    ExpectedSalary INT,
    ProposedSalary INT,
    NoteField VARCHAR(256),
    CVFileMetadata VARCHAR(256) NOT NULL
);

-- Applicant_Skills Table
CREATE TABLE Applicant_Skills (
    SkillsSkillID INT REFERENCES Skills(SkillID) ON DELETE CASCADE,
    ApplicantApplicant_id INT REFERENCES Applicants(ApplicantID) ON DELETE CASCADE,
    ProficiencyLevel INT,
    PRIMARY KEY (SkillsSkillID, ApplicantApplicant_id)
);

-- Applicant_Pool Table
CREATE TABLE Applicant_Pool (
    ApplicantID INT REFERENCES Applicants(ApplicantID) ON DELETE CASCADE,
    PoolsPoolID INT,
    PRIMARY KEY (ApplicantID, PoolsPoolID)
);

-- Pools Table
CREATE TABLE Pools (
    PoolID SERIAL PRIMARY KEY,
    Name VARCHAR(32) NOT NULL,
    Description VARCHAR(128)
);

-- Application Table
CREATE TABLE Application (
    ApplicationID SERIAL PRIMARY KEY,
    JobPostingID INT REFERENCES Job_Postings(PostingID) ON DELETE CASCADE,
    ApplicationStageID INT,
    ApplicantID INT REFERENCES Applicants(ApplicantID) ON DELETE CASCADE,
    CreatedAt DATE NOT NULL,
    UpdatedAt DATE,
    Status VARCHAR(20) NOT NULL
);

-- Application_Stages Table
CREATE TABLE Application_Stages (
    StageID SERIAL PRIMARY KEY,
    JobPostingID INT REFERENCES Job_Postings(PostingID) ON DELETE CASCADE,
    ApplicationID INT REFERENCES Application(ApplicationID) ON DELETE CASCADE,
    Name VARCHAR(32) NOT NULL,
    InternalNotes VARCHAR(128),
    StageOrder INT NOT NULL
);

-- Email_Templates Table
CREATE TABLE Email_Templates (
    ApplicationStageID INT REFERENCES Application_Stages(StageID) ON DELETE CASCADE,
    Name VARCHAR(32) NOT NULL,
    Subject VARCHAR(64) NOT NULL,
    Body VARCHAR(512) NOT NULL
);

-- Survey_Forms Table
CREATE TABLE Survey_Forms (
    SurveyID SERIAL PRIMARY KEY,
    ApplicationStageID INT REFERENCES Application_Stages(StageID) ON DELETE CASCADE,
    FormName VARCHAR(32) NOT NULL,
    FormStructureMetadata VARCHAR(255) NOT NULL,
    CreatedAt DATE NOT NULL,
    UpdatedAt DATE
);

-- Survey_Taken Table
CREATE TABLE Survey_Taken (
    ApplicantID INT REFERENCES Applicants(ApplicantID) ON DELETE CASCADE,
    SurveyID INT REFERENCES Survey_Forms(SurveyID) ON DELETE CASCADE,
    SurveyData VARCHAR(255) NOT NULL,
    CreatedAt DATE NOT NULL
);
