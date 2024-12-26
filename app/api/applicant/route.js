import { pool } from "@/auth";

export const POST = async (request) => {
    const data = await request.json()

    console.log(data);

    // If applicantId is undefined or null, perform an INSERT without ApplicantID
    let applicantId = data.applicantid;

    if (!applicantId) {
        const applicantInsertQuery = `
            INSERT INTO Applicants (
                Name, 
                Email, 
                PhoneNumber, 
                LinkedInProfile, 
                Degree, 
                EvaluationMetric, 
                Source, 
                ExpectedSalary, 
                ProposedSalary, 
                NoteField, 
                CVFileMetadata
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING ApplicantID;
        `;

        const applicantInsertValues = [
            data.name,
            data.email,
            data.phonenumber,
            data.linkedinprofile,
            data.degree,
            data.evaluationmetric || 50,
            data.source,
            data.expectedsalary,
            data.proposedsalary,
            data.notefield,
            data.cvfilemetadata,
        ];

        const applicantResult = await pool.query(applicantInsertQuery, applicantInsertValues);
        applicantId = applicantResult.rows[0].applicantid;

        // Insert a new application for the new applicant
        const applicationInsertQuery = `
            INSERT INTO Application (
                JobPostingID, 
                ApplicationStageID, 
                ApplicantID, 
                CreatedAt, 
                UpdatedAt, 
                Status
            )
            VALUES ($1, $2, $3, $4, $5, $6);
        `;

        const applicationInsertValues = [
            data.jobPostingId,
            data.applicationstageid || null,
            applicantId,
            new Date().toISOString(),
            new Date().toISOString(),
            data.status || 'Pending',
        ];

        await pool.query(applicationInsertQuery, applicationInsertValues);
    } else {
        const applicantUpdateQuery = `
            UPDATE Applicants
            SET 
                Name = $1,
                Email = $2,
                PhoneNumber = $3,
                LinkedInProfile = $4,
                Degree = $5,
                EvaluationMetric = $6,
                Source = $7,
                ExpectedSalary = $8,
                ProposedSalary = $9,
                NoteField = $10,
                CVFileMetadata = $11
            WHERE 
                ApplicantID = $12
            RETURNING ApplicantID;
        `;

        const applicantUpdateValues = [
            data.name,
            data.email,
            data.phonenumber,
            data.linkedinprofile,
            data.degree,
            data.evaluationmetric || 50,
            data.source,
            data.expectedsalary,
            data.proposedsalary,
            data.notefield,
            data.cvfilemetadata,
            applicantId,
        ];

        await pool.query(applicantUpdateQuery, applicantUpdateValues);

        // Update the existing application for the existing applicant
        const applicationUpdateQuery = `
            UPDATE Application
            SET 
                JobPostingID = $1, 
                ApplicationStageID = $2, 
                UpdatedAt = $3, 
                Status = $4
            WHERE 
                ApplicantID = $5;
        `;

        const applicationUpdateValues = [
            data.jobPostingId,
            data.applicationstageid || null,
            new Date().toISOString(),
            data.status || 'Pending',
            applicantId,
        ];

        await pool.query(applicationUpdateQuery, applicationUpdateValues);
    }

    return Response.json({
        status: 200,
        body: { message: 'Applicant updated successfully.' },
    });
}