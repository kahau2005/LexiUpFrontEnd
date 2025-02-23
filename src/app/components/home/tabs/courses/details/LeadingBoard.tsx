import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function LeadingBoard() {
  return (
    <div>
        <h1 className='text-center font-bold text-xl'>🏆Leading Board</h1>
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Words</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody >
                <TableRow>
                <TableCell className="font-medium">#No.1</TableCell>
                <TableCell>User Demo</TableCell>
                <TableCell className="text-right">210</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">#No.1</TableCell>
                <TableCell>User Demo</TableCell>
                <TableCell className="text-right">210</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">#No.1</TableCell>
                <TableCell>User Demo</TableCell>
                <TableCell className="text-right">210</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">#No.1</TableCell>
                <TableCell>User Demo</TableCell>
                <TableCell className="text-right">210</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}
