import { pool } from '@/auth';

export const getPostings = async () => {
    return (await pool.query(`
        SELECT 
            jp.PostingID,
            jp.Role,
            jp.Department,
            jp.Location,
            jp.ContactEmail,
            jp.EmploymentType,
            jp.PositionsAvailable,
            jp.SalaryRangeStart,
            jp.SalaryRangeEnd,
            jp.Summary,
            COUNT(a.ApplicationID) AS NumberOfApplications
        FROM 
            Job_Postings jp
        LEFT JOIN 
            Application a ON jp.PostingID = a.JobPostingID
        GROUP BY 
            jp.PostingID, jp.Role, jp.Department, jp.Location, jp.ContactEmail, 
            jp.EmploymentType, jp.PositionsAvailable, jp.SalaryRangeStart, 
            jp.SalaryRangeEnd, jp.Summary;
        `)).rows;
}

export const getPosting = async (id) => {
    const data = (await pool.query(`
    SELECT 
      jp.PostingID, 
      jp.Role, 
      jp.Department, 
      jp.Location, 
      jp.ContactEmail, 
      jp.EmploymentType, 
      jp.PositionsAvailable, 
      jp.SalaryRangeStart, 
      jp.SalaryRangeEnd, 
      jp.Summary,
      json_agg(
        json_build_object(
          'StageID', st.StageID,
          'Name', st.Name,
          'InternalNotes', st.InternalNotes,
          'StageOrder', st.StageOrder
        )
      ) AS InterviewStages
    FROM 
      Job_Postings jp
    LEFT JOIN 
      Application_Stages st ON jp.PostingID = st.JobPostingID
    WHERE 
      jp.PostingID = $1
    GROUP BY 
      jp.PostingID, 
      jp.Role, 
      jp.Department, 
      jp.Location, 
      jp.ContactEmail, 
      jp.EmploymentType, 
      jp.PositionsAvailable, 
      jp.SalaryRangeStart, 
      jp.SalaryRangeEnd, 
      jp.Summary;
        `, [id])).rows[0];

    if (data?.interviewstages) {
        data.interviewstages = data.interviewstages.filter(stage => stage.StageID !== null);
    }

    return data;
}

export const getApplicants = async (jobPostingId) => {
    const query = `
        SELECT 
            st.Name AS StageName,
            json_agg(
                json_build_object(
                    'ApplicantID', a.ApplicantID,
                    'Name', a.Name,
                    'Email', a.Email,
                    'PhoneNumber', a.PhoneNumber,
                    'LinkedInProfile', a.LinkedInProfile,
                    'Degree', a.Degree,
                    'EvaluationMetric', a.EvaluationMetric,
                    'Source', a.Source,
                    'ExpectedSalary', a.ExpectedSalary,
                    'ProposedSalary', a.ProposedSalary,
                    'NoteField', a.NoteField,
                    'CVFileMetadata', a.CVFileMetadata
                )
            ) AS Applicants
        FROM 
            Application app
        LEFT JOIN 
            Application_Stages st ON app.ApplicationStageID = st.StageID
        LEFT JOIN 
            Applicants a ON app.ApplicantID = a.ApplicantID
        WHERE 
            app.JobPostingID = $1
        GROUP BY 
            st.Name
        ORDER BY 
            st.Name;
    `;

    const result = await pool.query(query, [jobPostingId]);
    return result.rows;
};

export const getApplicant = async (applicantId) => {
    const query = `
    SELECT 
        a.ApplicantID, 
        a.Name, 
        a.Email, 
        a.PhoneNumber, 
        a.LinkedInProfile, 
        a.Degree, 
        a.EvaluationMetric, 
        a.Source, 
        a.ExpectedSalary, 
        a.ProposedSalary, 
        a.NoteField, 
        a.CVFileMetadata, 
        app.JobPostingID, 
        app.ApplicationStageID, 
        app.CreatedAt, 
        app.UpdatedAt, 
        app.Status
    FROM 
        Applicants a
    LEFT JOIN 
        Application app ON a.ApplicantID = app.ApplicantID
    WHERE 
        a.ApplicantID = $1;
    `;

    const result = await pool.query(query, [applicantId]);
    return result.rows[0];
};

export const getApplicationStages = async (jobPostingId) => {
    const query = `
        SELECT 
            st.StageID,
            st.Name,
            st.InternalNotes,
            st.StageOrder
        FROM 
            Application_Stages st
        WHERE 
            st.JobPostingID = $1;
    `;

    const result = await pool.query(query, [jobPostingId]);
    return result.rows;
}

export const getApplicantsByDepartment = async () => {
    const query = `
        SELECT 
            jp.Department, 
            COUNT(a.ApplicantID) AS NumberOfApplicants
        FROM 
            Applicants a
        JOIN 
            Application app ON a.ApplicantID = app.ApplicantID
        JOIN 
            Job_Postings jp ON app.JobPostingID = jp.PostingID
        GROUP BY 
            jp.Department
        ORDER BY 
            jp.Department;
    `;

    const result = await pool.query(query);
    return result.rows;
}

export const getApplicationsByRole = async () => {
    const query = `
        SELECT 
            jp.Role, 
            COUNT(app.ApplicationID) AS NumberOfApplications
        FROM 
            Application app
        JOIN 
            Job_Postings jp ON app.JobPostingID = jp.PostingID
        GROUP BY 
            jp.Role
        ORDER BY 
            NumberOfApplications DESC;
    `;

    const result = await pool.query(query);
    return result.rows;
};


export const getTotalProposedSalaryByMonth = async () => {
    const query = `
        SELECT 
        TO_CHAR(app.CreatedAt, 'IYYY-IW') AS Week, 
            SUM(a.ProposedSalary) AS TotalProposedSalary
        FROM 
            Applicants a
        JOIN 
            Application app ON a.ApplicantID = app.ApplicantID
        GROUP BY 
            TO_CHAR(app.CreatedAt, 'IYYY-IW')
        ORDER BY 
            Week;
    `;

    const result = await pool.query(query);
    return result.rows;
};


export const getApplicationStatistics = async () => {
    const query = `
        SELECT 
            (SELECT COUNT(*) FROM Application) AS TotalApplications,
            (SELECT SUM(PositionsAvailable) FROM Job_Postings) AS TotalOpenPositions,
            (SELECT SUM(ProposedSalary) FROM Applicants) AS TotalProposedSalary,
            (SELECT COUNT(*) FROM Job_Postings) AS TotalJobPostings
    `

    const result = await pool.query(query)
    return result.rows
};
