import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function PatientDetailsHeader() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4" >
                <Card className="col-span-1 max-w-md border-none shadow-sm bg-white rounded-2xl">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <h1 className="font-bold text-2xl text-slate-800">Shrey</h1>
                            </div>
                            <MoreHorizontal className="text-slate-400 cursor-pointer" />
                        </div>
                        <hr className="mt-6 border-slate-100" />
                    </CardHeader>

                    <CardContent className="grid grid-cols-2 gap-y-6 pt-2">
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Age:</p>
                            <p className="text-lg font-semibold text-slate-700">21</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Gender</p>
                            <p className="text-lg font-semibold text-slate-700">Male</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Phone</p>
                            <p className="text-lg font-semibold text-slate-700">8265010448</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Blood Group</p>
                            <p className="text-lg font-semibold text-slate-700">-</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">No. of Visits</p>
                            <p className="text-lg font-semibold text-slate-700">3</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Total Spent</p>
                            <p className="text-lg font-semibold text-slate-700">₹900</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="col-span-2  flex flex-col gap-4 ">
                    <Card  >
                        <CardHeader >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-xl font-bold">
                                        Contact Information
                                    </h1>
                                </div>

                                <div>
                                    <Button variant="outline">
                                        Edit
                                    </Button>
                                </div>
                            </div>

                        </CardHeader>
                        <CardContent>
                            {/* Main Grid for the two sub-boxes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                                <div className="border rounded-xl p-5  border-slate-100 bg-white">
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">Location</p>
                                            <p className="font-medium text-slate-800">Goa</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">Email</p>
                                            <p className="font-medium text-slate-800">-</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Sub-Box (Emergency Contact) */}
                                <div className="border rounded-xl p-5 border-slate-100 bg-white">
                                    <h2 className="font-bold text-slate-800 mb-4">Emergency Contact</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">Name</p>
                                            <p className="font-medium text-slate-800">-</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">Phone</p>
                                            <p className="font-medium text-slate-800">-</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h1 className="font-bold text-xl">
                                Medal History
                            </h1>
                        </CardHeader>
                        <CardContent className="px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                               
                                <div className="flex items-center p-4 border border-slate-200 rounded-xl space-x-4">
                                    <div className="p-3 bg-[#eefafb] rounded-xl">
                                        <svg className="w-6 h-6 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Allergies</p>
                                        <p className="text-slate-800 font-semibold">-</p>
                                    </div>
                                </div>

                               
                                <div className="flex items-center p-4 border border-slate-200 rounded-xl space-x-4">
                                    <div className="p-3 bg-[#eefafb] rounded-xl">
                                        <svg className="w-6 h-6 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Medications</p>
                                        <p className="text-slate-800 font-semibold">-</p>
                                    </div>
                                </div>

                                {/* Medical Conditions Card */}
                                <div className="flex items-center p-4 border border-slate-200 rounded-xl space-x-4">
                                    <div className="p-3 bg-[#eefafb] rounded-xl">
                                        <svg className="w-6 h-6 text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium">Medical Conditions</p>
                                        <p className="text-slate-800 font-semibold text-lg">random</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </div>

            </div>


        </>
    )
}