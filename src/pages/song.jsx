import '../App.css'
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
import { songs } from '../songs.js'

function Song() {
    return (
        <div className="h-screen w-full mx-8 mt-8 flex flex-col gap-6">
            <div className="flex flex-row justify-left items-center gap-6">
                <h1 className="text-4xl font-medium">Song Title</h1>
                <h2 className="text-2xl font-normal">Song Artist</h2>
                <p className="bg-gray-300 px-4 py-2 rounded-full">Capo 4</p>
            </div>
            <div className="flex flex-col gap-6 p-6 bg-white w-full h-auto rounded-2xl">
                <div className="flex flex-row justify-between items-center">
                    <Button variant="outline">Record Session</Button>
                    <div className="flex flex-row gap-6 items-center">
                        <p>Last Played: DD MM YYYY</p>
                        <Button variant="outline">Edit Tabs</Button>
                    </div>
                </div>
                <div className="bg-gray-300 w-full h-40"></div>
            </div>
            <div>
                <h2 className="text-2xl font-normal">
                    <Table>
                        <TableCaption>A list of all your recordings of this song</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]"></TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead className="text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">PLAY</TableCell>
                                <TableCell>Jan 12 2025</TableCell>
                                <TableCell>2:43</TableCell>
                                <TableCell className="text-right">MORE</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </h2>
            </div>
        </div>
    )
}
export default Song;