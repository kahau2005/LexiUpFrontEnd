import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { day: "Monday", desktop: 186 },
    { day: "Tuesday", desktop: 305 },
    { day: "Wednesday", desktop: 237 },
    { day: "Thursday", desktop: 73 },
    { day: "Friday", desktop: 209 },
    { day: "Saturday", desktop: 214 },
    { day: "Sunday", desktop: 180 }
]

const chartConfig = {
    desktop: {
        label: "Words",
        color: "#ffffff",
    }
} satisfies ChartConfig

export default function WeekChart() {
  return (
    <div className='absolute w-full h-full'>
        <h1 className='font-bold text-xl mb-2 h-[20%] absolute top-0'>Weekly Statistics</h1>
                <div className="flex-1 h-[80%] w-full absolute bottom-0">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    
                                    dataKey="day"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />

                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
    </div>
  )
}
