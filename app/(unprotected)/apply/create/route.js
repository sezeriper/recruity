import { pool } from '@/auth';

export async function POST(request) {
    const req = await request.json();
    
    const client = await pool.connect();
    
    try {
        await client.query('BEGIN');

        // Insert the Applicant
        const applicantResult = await client.query(`
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
        `, [
            req.fullName,
            req.email,
            req.phone,
            req.linkedInUrl,
            req.education,
            50, // Replace with actual evaluation metric if needed
            req.applicationSource,
            req.expectedSalary,
            0, // Proposed salary placeholder
            "", // Note field placeholder
            "/resumes/john_doe_resume.pdf", // Replace with the actual CV path
        ]);

        const applicantId = applicantResult.rows[0].applicantid;

        // Insert the Application
        await client.query(`
            INSERT INTO Application (
                JobPostingID, 
                ApplicationStageID, 
                ApplicantID, 
                CreatedAt, 
                UpdatedAt, 
                Status
            ) 
            VALUES ($1, $2, $3, $4, $5, $6);
        `, [
            req.jobPostingId, // JobPostingID passed in the request
            req.applicationStageId || null, // ApplicationStageID if available, or null
            applicantId, // Use the returned ApplicantID
            new Date().toISOString(), // CreatedAt timestamp
            null, // UpdatedAt is null initially
            'Pending', // Default status
        ]);

        await client.query('COMMIT');

        return Response.json({
            status: 200,
            body: { message: 'Application submitted successfully' },
        });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error submitting application:', error);
        return Response.json({
            status: 500,
            body: { message: 'Failed to submit application', error: error.message },
        });
    } finally {
        client.release();
    }
}