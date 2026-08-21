import { OperationalState }
    from "../types/OperationalState";

import { PhoenixOperationalEvent }
    from "../types/PhoenixOperationalEvent";

import {
    getOperationalTemporalPosition
}
    from "../utils/formatOperationalDate";

export const activities = [

    {
        id: 1,

        status: "🟢",

        country: "Romania",

        title: "Dataset Validation Complete",

        timestamp: "09:42 UTC",

        owner: "Maria Popescu",

        nextAction: "Prepare publication package",

        priority: "normal",
    },

    {
        id: 2,

        status: "🟡",

        country: "Spain",

        title: "Awaiting Country Submission",

        timestamp: "Yesterday",

        owner: "Carlos Ruiz",

        nextAction: "Contact national focal point",

        priority: "high",
    },

    {
        id: 3,

        status: "🔵",

        country: "Hungary",

        title: "Review Session Scheduled",

        timestamp: "Tomorrow 14:00",

        owner: "Programme Team",

        nextAction: "Review submitted indicators",

        priority: "normal",
    },

    {
        id: 4,

        status: "🟢",

        country: "Bulgaria",

        title: "Publication Approved",

        timestamp: "08:15 UTC",

        owner: "Elena Petrova",

        nextAction: "Archive quarterly evidence",

        priority: "low",

        // Demo dataset.
        // Activities and Country Registry intentionally evolve independently
        // until backend integration.

    },

];

export const countries = [

    {
        id: 1,

        flag: "🇷🇴",

        name: "Romania",

        status: "Healthy",

        statusIcon: "🟢",

        programmeManager: "Maria Popescu",

        latestUpdate: "Dataset validation completed.",

        nextMilestone: "Prepare publication package.",

        submission: "Completed",
        publication: "Ready for publication package",
        recommendation:
            "Proceed with publication review. No operational blockers identified.",
    },

    {
        id: 2,

        flag: "🇪🇸",

        name: "Spain",

        status: "Awaiting Submission",

        statusIcon: "🟡",

        programmeManager: "Carlos Ruiz",

        latestUpdate: "National data collection ongoing.",

        nextMilestone: "Submit evidence package.",

        submission: "Outstanding",
        publication: "Awaiting validation",
        recommendation:
            "Follow up with the national focal point before the validation deadline.",
    },

    {
        id: 3,

        flag: "🇭🇺",

        name: "Hungary",

        status: "Scheduled Review",

        statusIcon: "🔵",

        programmeManager: "Programme Team",

        latestUpdate: "Review session booked.",

        nextMilestone: "Validate submitted indicators.",

        submission: "Submitted",
        publication: "Review scheduled",
        recommendation:
            "Prepare reviewers and supporting evidence before tomorrow's session.",
    },

];

export default class PhoenixOperationsService {

    static getActivities() {

        return activities;

    }

    static getCountries() {

        return countries;

    }

    static getOperationalIndicators() {

        return {

            submissions: 18,

            totalCountries: 20,

            pendingValidation: 3,

            publications: 15,

            activeAlerts: 1,

        };

    }

    static getTimeline() {
        return timeline;
    }

    static getOperationalEvents(): PhoenixOperationalEvent[] {

        return timeline.map((item) => ({
    
            id: item.id,
    
            title: item.milestone,
    
            eventDate: item.dueDate,
    
            country: item.country,
    
            owner: item.owner,
    
            temporalPosition: item.dueDate
                ? getOperationalTemporalPosition(item.dueDate)
                : undefined,
    
            state: item.operationalState,
    
            priority: item.priority,
    
        }));
    
    }

}

interface OperationalTimelineItem {
    id: number;
    flag: string;
    country: string;
    milestone: string;
    owner: string;
    dueDate?: string;
    due: string;
    priority: string;
    operationalState: OperationalState;
}

export const timeline: OperationalTimelineItem[] = [

    {
        id: 1,

        flag: "🇷🇴",

        country: "Romania",

        milestone: "Publication Package",

        owner: "Maria Popescu",

        dueDate: "2026-08-13",

        due: "Today",

        priority: "normal",

        operationalState: "scheduled",
    },

    {
        id: 2,

        flag: "🇪🇸",

        country: "Spain",

        milestone: "Country Submission",

        owner: "Carlos Ruiz",

        dueDate: "2026-08-16",

        due: "In 3 days",

        priority: "high",

        operationalState: "pending",
    },

    {
        id: 3,

        flag: "🇭🇺",

        country: "Hungary",

        milestone: "Review Session",

        owner: "Programme Team",

        dueDate: "2026-08-14T14:00:00",

        due: "Tomorrow 14:00",

        priority: "normal",

        operationalState: "scheduled",
    },

    {
        id: 4,

        flag: "🇧🇬",

        country: "Bulgaria",

        milestone: "Archive Evidence",

        owner: "Elena Petrova",

        due: "Completed",

        priority: "low",

        operationalState: "completed",
    },

];