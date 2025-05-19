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

function Home() {
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
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="mem">Memorize</TabsTrigger>
                    <TabsTrigger value="jam">Jam</TabsTrigger>
                    <TabsTrigger value="ogl">Originals</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <Table>
                        <TableCaption>A list of all your songs</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Title</TableHead>
                                <TableHead>Artist</TableHead>
                                <TableHead>Capo</TableHead>
                                <TableHead className="text-right">Last Played</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {songs.map((song, index) => (
                                <TableRow>
                                    <TableCell className="font-medium">{song.title}</TableCell>
                                    <TableCell>{song.artist}</TableCell>
                                    <TableCell>{song.capo}</TableCell>
                                    <TableCell className="text-right">{song.lastOpened}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="mem">
                    <Table>
                        <TableCaption>A list of all your songs</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Title</TableHead>
                                <TableHead>Artist</TableHead>
                                <TableHead>Capo</TableHead>
                                <TableHead className="text-right">Last Played</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {songs.map((song, index) => (
                                <TableRow>
                                    <TableCell className="font-medium">{song.title}</TableCell>
                                    <TableCell>{song.artist}</TableCell>
                                    <TableCell>{song.capo}</TableCell>
                                    <TableCell className="text-right">{song.lastOpened}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="jam">
                    <Table>
                        <TableCaption>A list of all your songs</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Title</TableHead>
                                <TableHead>Artist</TableHead>
                                <TableHead>Capo</TableHead>
                                <TableHead className="text-right">Last Played</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {songs.map((song, index) => (
                                <TableRow>
                                    <TableCell className="font-medium">{song.title}</TableCell>
                                    <TableCell>{song.artist}</TableCell>
                                    <TableCell>{song.capo}</TableCell>
                                    <TableCell className="text-right">{song.lastOpened}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="ogl">
                    <Table>
                        <TableCaption>A list of all your songs</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Title</TableHead>
                                <TableHead>Artist</TableHead>
                                <TableHead>Capo</TableHead>
                                <TableHead className="text-right">Last Played</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {songs.map((song, index) => (
                                <TableRow>
                                    <TableCell className="font-medium">{song.title}</TableCell>
                                    <TableCell>{song.artist}</TableCell>
                                    <TableCell>{song.capo}</TableCell>
                                    <TableCell className="text-right">{song.lastOpened}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>

        </div>
    )
}
export default Home;