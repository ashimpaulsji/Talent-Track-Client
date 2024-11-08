'use client'

import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Applied", value: 500 },
  { name: "Shortlisted", value: 300 },
  { name: "Interviewed", value: 200 },
  { name: "Offered", value: 100 },
  { name: "Hired", value: 80 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function JobStatistics() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}