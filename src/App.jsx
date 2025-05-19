import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { songs } from './songs.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-full mx-8 mt-8 flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-medium">Songs</h1>
        <div className="flex gap-6">
          <Button variant="outline">Write Song</Button>
          <Button variant="outline">Add Song</Button>
        </div>
      </div>
      <Input placeholder="Search" />
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="mem">Memorize</TabsTrigger>
          <TabsTrigger value="jam">Jam</TabsTrigger>
          <TabsTrigger value="ogl">Originals</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Artist</TableHead>
                <TableHead>Capo</TableHead>
                <TableHead className="text-right">Last Played</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="mem">memorize</TabsContent>
        <TabsContent value="jam">jam</TabsContent>
        <TabsContent value="ogl">originals</TabsContent>
      </Tabs>

    </div>
  )
}

export default App
