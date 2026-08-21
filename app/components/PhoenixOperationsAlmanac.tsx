"use client";

import React from "react";
import { operationsAlmanac } from "../data/operationsAlmanac";
export default function PhoenixOperationsAlmanac() {

    const weekDays = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
    ];

    const year = 2026;
    const month = 7; // August (JavaScript months are zero-based)

    const firstDayOfMonth =
        (new Date(year, month, 1).getDay() + 6) % 7;
    const totalDays = 31;

    const today = new Date();

    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();

    const calendarCells = [

        ...Array(firstDayOfMonth).fill(null),

        ...Array.from(
            { length: totalDays },
            (_, index) => index + 1
        ),

    ];

    const [selectedDay, setSelectedDay] =
        React.useState<number | null>(null);

    const selectedEvents =
        operationsAlmanac.filter(

            event =>

                event.day === selectedDay &&
                event.month === 8 &&
                event.year === 2026

        );

    return (

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-900">
                    🗓️ Operations Almanac
                </h2>

                <p className="mt-2 text-slate-600">
                    Operational foresight across programme activities,
                    milestones and upcoming deadlines.
                </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                {/* Calendar */}

                <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-6">

                    <h3 className="text-lg font-bold">
                        🗓 August 2026
                    </h3>

                    <p className="text-sm text-slate-500">
                        Operational planning window
                    </p>

                    <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">

                        <div className="grid grid-cols-7 gap-2">

                            {weekDays.map((day) => (

                                <div
                                    key={day}
                                    className="text-center text-sm font-semibold text-slate-500"
                                >
                                    {day}
                                </div>

                            ))}

                        </div>

                        <div className="mt-4 grid grid-cols-7 gap-2">


                            {calendarCells.map((day, index) => {

                                if (!day) {

                                    return (

                                        <div
                                            key={`empty-${index}`}
                                            className="h-12"
                                        />

                                    );

                                }

                                const dayEvents = operationsAlmanac.filter(
                                    (event) =>
                                        event.day === day &&
                                        event.month === 8 &&
                                        event.year === 2026
                                );

                                const highestPriority =
                                    dayEvents.some((event) => event.priority === "high")
                                        ? "high"
                                        : dayEvents.some((event) => event.priority === "medium")
                                            ? "medium"
                                            : dayEvents.length > 0
                                                ? "low"
                                                : null;

                                const priorityColor =
                                    highestPriority === "high"
                                        ? "bg-red-500"
                                        : highestPriority === "medium"
                                            ? "bg-amber-400"
                                            : highestPriority === "low"
                                                ? "bg-sky-500"
                                                : "";

                                return (

                                    <button
                                        key={day}
                                        type="button"

                                        onClick={() => setSelectedDay(day)}

                                        className={`w-full flex h-12 items-center justify-center rounded-lg border text-sm font-medium transition
                                            ${selectedDay === day
                                                ? "border-sky-500 bg-sky-50 ring-2 ring-sky-200"
                                                : "border-slate-200 bg-white text-slate-700 hover:border-sky-400 hover:bg-sky-50"
                                            }
                                        `}                                    >

                                        <div className="flex flex-col items-center justify-center">

                                            <span>{day}</span>

                                            {dayEvents.length > 0 && (
                                                <span
                                                    className={`mt-1 h-2.5 w-2.5 rounded-full ${priorityColor}`}
                                                />
                                            )}

                                        </div>

                                    </button>

                                );

                            })}

                        </div>

                    </div>

                </div>

                {selectedDay === null ? (

                    <p className="text-slate-500">

                        Select a calendar day to view
                        upcoming programme milestones.

                    </p>

                ) : (

                    <>

                        <h4 className="font-semibold">

                            📅 {selectedDay} August 2026

                        </h4>

                        <p className="mt-1 text-sm text-slate-500">

                            {selectedEvents.length} operational event(s)

                        </p>

                        {selectedEvents.length === 0 ? (

                            <p className="mt-3 text-slate-500">

                                No operational activities scheduled.

                            </p>

                        ) : (

                            <div className="mt-4 space-y-4">

                                {selectedEvents.map((event) => (

                                    <div
                                        key={event.id}
                                        className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                                    >

                                        <div className="flex items-center justify-between">

                                            <h5 className="font-semibold text-slate-900">

                                                {event.title}

                                            </h5>

                                            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">

                                                {event.type}

                                            </span>

                                        </div>

                                        <p className="mt-2 text-sm text-slate-500">

                                            🌍 {event.country}

                                        </p>

                                        <p className="mt-3 text-slate-700">

                                            {event.description}

                                        </p>

                                        <div className="mt-4 grid gap-2 text-sm">

                                            <p>

                                                <strong>Owner:</strong> {event.owner}

                                            </p>

                                            <p>

                                                <strong>Priority:</strong> {event.priority}

                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                    </>

                )}

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">

                    <h3 className="font-semibold text-slate-800">

                        📍 Operational Detail

                    </h3>

                    <div className="mt-6">

                        <h4 className="font-semibold text-slate-800">

                            🚀 Upcoming Queue

                        </h4>

                        <ul className="mt-4 space-y-3 text-sm text-slate-700">

                            <li>• Today's activities</li>

                            <li>• Tomorrow's milestones</li>

                            <li>• This week's priorities</li>

                            <li>• This month's publications</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section >

    );

}