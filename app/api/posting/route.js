import { pool } from "@/auth";

export const POST = async (request) => {
    const jobPosting = await request.json()

    const jobPostingQuery = `
      INSERT INTO Job_Postings (
        PostingID, Role, Department, Location, ContactEmail, EmploymentType, 
        PositionsAvailable, SalaryRangeStart, SalaryRangeEnd, Summary
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (PostingID) 
      DO UPDATE SET 
        Role = EXCLUDED.Role,
        Department = EXCLUDED.Department,
        Location = EXCLUDED.Location,
        ContactEmail = EXCLUDED.ContactEmail,
        EmploymentType = EXCLUDED.EmploymentType,
        PositionsAvailable = EXCLUDED.PositionsAvailable,
        SalaryRangeStart = EXCLUDED.SalaryRangeStart,
        SalaryRangeEnd = EXCLUDED.SalaryRangeEnd,
        Summary = EXCLUDED.Summary
      RETURNING PostingID;
    `;

    const jobPostingValues = [
      jobPosting.postingid,
      jobPosting.role,
      jobPosting.department,
      jobPosting.location,
      jobPosting.contactemail,
      jobPosting.employmenttype,
      jobPosting.positionsavailable,
      jobPosting.salaryrangestart,
      jobPosting.salaryrangeend,
      jobPosting.summary,
    ];

    const result = await pool.query(jobPostingQuery, jobPostingValues);
    const postingId = result.rows[0].postingid;

    // Clear existing interview stages for the job posting
    const deleteStagesQuery = `
      DELETE FROM Application_Stages WHERE JobPostingID = $1;
    `;
    await pool.query(deleteStagesQuery, [postingId]);

    // Insert new interview stages
    const stageQuery = `
      INSERT INTO Application_Stages (
        JobPostingID, Name, InternalNotes, StageOrder
      ) VALUES ($1, $2, $3, $4);
    `;

    if (jobPosting.interviewstages) {
      for (const stage of jobPosting.interviewstages) {
        const stageValues = [
          postingId,
          stage.Name,
          stage.InternalNotes,
          stage.StageOrder,
        ];
        await pool.query(stageQuery, stageValues);
      }
    }

    return Response.json({
        status: 200,
        body: { message: 'Postings updated successfully.' },
    });
}