"use client"
import React, { useState } from 'react';
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type ViewType = 'day' | 'week' | 'month';

export default function CalendarTab() {
    const [view, setView] = useState<ViewType>('day');

    const hours = Array.from({ length: 24 }, (_, i) => {
        const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
        const ampm = i < 12 ? 'AM' : 'PM';
        return `${hour} ${ampm}`;
    });


    const weekDays = [
        { name: 'Sun', date: '29' }, { name: 'Mon', date: '30' }, { name: 'Tue', date: '31' },
        { name: 'Wed', date: '01' }, { name: 'Thu', date: '02' }, { name: 'Fri', date: '03' }, { name: 'Sat', date: '04' }
    ];

    return (
        <Card className="w-full  max-w-8xl mx-auto shadow-none border-none dark:bg-[#0D1117] bg-white flex flex-col ">
            {/* Header */}
            <CardHeader className="border-b dark:border-gray-800 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Button variant="outline" className="text-sm font-medium dark:bg-[#151B23]">Today</Button>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight className="h-4 w-4" /></Button>
                        </div>
                        <h2 className="text-xl font-semibold dark:text-white text-gray-900">
                            {view === 'day' ? 'Fri March 27, 2026' : view === 'month' ? 'March 2026' : 'Mar - Apr 2026'}
                        </h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <Select value={view} onValueChange={(v) => setView(v as ViewType)}>
                            <SelectTrigger className="w-[100px] dark:bg-[#151B23] dark:text-white">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="day">Day</SelectItem>
                                <SelectItem value="week">Week</SelectItem>
                                <SelectItem value="month">Month</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="bg-black dark:bg-white dark:text-black text-white">
                            <Plus className="mr-2 h-4 w-4" /> New event
                        </Button>
                    </div>
                </div>
            </CardHeader>

            <div className="flex-1 overflow-auto bg-white dark:bg-[#0D1117]">
                {/* --- DAY VIEW --- */}
                {view === 'day' && (
                    <div className="relative flex flex-col pt-4">
                        {hours.map((hour, idx) => (
                            <div key={idx} className="group relative flex h-20 border-b dark:border-gray-800/50 border-gray-100">
                                {/* Time Gutter */}
                                <div className="w-20 py-2 px-4 text-right">
                                    <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                                        {hour}
                                    </span>
                                </div>


                                <div className="flex-1 relative">


                                    {/* Event Block (Team Meeting 10am - 11am) */}
                                    {idx === 10 && (
                                        <div className="absolute inset-x-0 top-0 h-full bg-[#E3F2FD] dark:bg-blue-900/20 border-l-4 border-[#2196F3] p-3 cursor-pointer hover:bg-[#D9EBF9] transition-colors">
                                            <p className="text-xs font-semibold text-[#1565C0] dark:text-blue-300">Team Meeting</p>
                                            <p className="text-[11px] text-[#1E88E5] dark:text-blue-400">10am - 11am</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- WEEK VIEW --- */}
                {/* --- WEEK VIEW --- */}
                {view === 'week' && (
                    <div className="min-w-[1000px] flex flex-col">
                        {/* Week Header Row */}
                        <div className="flex border-b dark:border-gray-800 sticky top-0 bg-white dark:bg-[#0D1117] z-20">
                            {/* GMT Corner */}
                            <div className="w-20 p-2 text-[10px] text-gray-400 text-center flex items-end justify-center uppercase font-medium">
                                GMT+5:30
                            </div>
                            {/* Weekday Labels (Format: Sun 22) */}
                            {[
                                { name: 'Sun', date: '22' },
                                { name: 'Mon', date: '23' },
                                { name: 'Tue', date: '24' },
                                { name: 'Wed', date: '25' },
                                { name: 'Thu', date: '26' },
                                { name: 'Fri', date: '27', isCurrent: true },
                                { name: 'Sat', date: '28' },
                            ].map((day, i) => (
                                <div key={i} className="flex-1 py-4 text-center">
                                    <span className={cn(
                                        "text-[13px] font-medium uppercase tracking-tight",
                                        day.isCurrent ? "text-black dark:text-white font-bold" : "text-gray-400"
                                    )}>
                                        {day.name} {day.date}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Week Grid */}
                        <div className="flex-1">
                            {hours.map((hour, idx) => (
                                <div key={idx} className="flex h-20 border-b dark:border-gray-800/50 border-gray-100">
                                    {/* Time Label Column */}
                                    <div className="w-20 py-2 px-4 text-right">
                                        <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase">
                                            {hour}
                                        </span>
                                    </div>

                                    {/* Day Columns (7 Columns) */}
                                    {Array.from({ length: 7 }).map((_, dayIdx) => (
                                        <div key={dayIdx} className="flex-1 border-l dark:border-gray-800/50 border-gray-100 relative group transition-colors hover:bg-gray-50/50 dark:hover:bg-white/5">

                                            {/* 1. CURRENT TIME LINE (Specifically on Fri 27, dayIdx 5) */}
                                            {dayIdx === 5 && idx === 9 && (
                                                <div className="absolute top-[75%] left-0 right-0 z-30 flex items-center pointer-events-none">
                                                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full -ml-1" />
                                                    <div className="flex-1 h-[2px] bg-black dark:bg-white" />
                                                </div>
                                            )}

                                            {/* 2. BLUE EVENT: Team Meeting (Fri 27, 10am) */}
                                            {dayIdx === 5 && idx === 10 && (
                                                <div className="absolute inset-0 m-[1px] bg-[#E1F5FE] dark:bg-blue-900/30 p-2 border-l-2 border-[#03A9F4] rounded-sm cursor-pointer z-10">
                                                    <p className="text-[10px] font-bold text-[#0277BD] dark:text-blue-300">Team Meeting</p>
                                                    <p className="text-[9px] text-[#039BE5] dark:text-blue-400 font-medium">10am - 11am</p>
                                                </div>
                                            )}

                                            {/* 3. GREEN EVENT: Lunch with Client (Sat 28, 12pm) */}
                                            {dayIdx === 6 && idx === 12 && (
                                                <div className="absolute inset-x-0 top-0 h-[125%] m-[1px] bg-[#E8F5E9] dark:bg-green-900/30 p-2 border-l-2 border-[#4CAF50] rounded-sm cursor-pointer z-10">
                                                    <p className="text-[10px] font-bold text-[#2E7D32] dark:text-green-300">Lunch with Client</p>
                                                    <p className="text-[9px] text-[#43A047] dark:text-green-400 font-medium">12pm - 1:15pm</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- MONTH VIEW --- */}
                {view === 'month' && (
                    <div className="grid grid-cols-7 h-full">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="p-3 text-center text-xs font-semibold border-b border-r dark:border-gray-800 text-gray-500 uppercase">
                                {day}
                            </div>
                        ))}
                        {Array.from({ length: 35 }).map((_, i) => (
                            <div key={i} className="min-h-[120px] p-2 border-b border-r dark:border-gray-800 flex flex-col items-end hover:bg-gray-50/50 transition-colors">
                                <span className="text-sm text-gray-500">{i + 1}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Card>
    );
}