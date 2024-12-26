'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { role: 'Software Engineer', applications: 350 },
  { role: 'Product Manager', applications: 220 },
  { role: 'Data Scientist', applications: 180 },
  { role: 'UX Designer', applications: 150 },
  { role: 'Sales Representative', applications: 120 },
]

export default function TopRolesChart({ data }: { data: any }) {
  data = data.map((d: any) => ({ role: d.role, applications: parseInt(d.numberofapplications) }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Roles by Applications</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="applications" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

