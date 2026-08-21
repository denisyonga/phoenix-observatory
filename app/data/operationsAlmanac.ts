export type AlmanacEvent = {

    id: string;

    day: number;

    month: number;

    year: number;

    country: string;

    title: string;

    type:
        | "submission"
        | "validation"
        | "publication"
        | "meeting"
        | "deadline"
        | "budget";

    priority:
        | "low"
        | "medium"
        | "high";

    owner: string;

    description: string;

};

export const operationsAlmanac: AlmanacEvent[] = [

    {
        id: "ROM-001",
        day: 12,
        month: 8,
        year: 2026,
        country: "Romania",
        title: "Dataset Validation",
        type: "validation",
        priority: "medium",
        owner: "Maria Popescu",
        description: "Quarterly validation review.",
    },

    {
        id: "ESP-001",
        day: 18,
        month: 8,
        year: 2026,
        country: "Spain",
        title: "Publication Package",
        type: "publication",
        priority: "high",
        owner: "Carlos Ruiz",
        description: "Prepare publication package for release.",
    },

    {
        id: "FRA-001",
        day: 23,
        month: 8,
        year: 2026,
        country: "France",
        title: "Country Submission",
        type: "submission",
        priority: "medium",
        owner: "Claire Martin",
        description: "Submit national operational dataset.",
    },

];