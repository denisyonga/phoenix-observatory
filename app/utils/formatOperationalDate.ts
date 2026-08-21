export type OperationalTemporalPosition =
    | "past"
    | "today"
    | "tomorrow"
    | "upcoming";

export function getOperationalTemporalPosition(
    dueDate: string
): OperationalTemporalPosition {

    const today = new Date();
    const due = new Date(dueDate);

    const todayDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const dueDateOnly = new Date(
        due.getFullYear(),
        due.getMonth(),
        due.getDate()
    );

    const differenceInDays =
        Math.round(
            (dueDateOnly.getTime() - todayDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

    if (differenceInDays < 0) {
        return "past";
    }

    if (differenceInDays === 0) {
        return "today";
    }

    if (differenceInDays === 1) {
        return "tomorrow";
    }

    return "upcoming";
}

export function formatOperationalDate(
    dueDate: string
): string {

    const today = new Date();

    const due = new Date(dueDate);

    const todayDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const dueDateOnly = new Date(
        due.getFullYear(),
        due.getMonth(),
        due.getDate()
    );

    const differenceInDays =
        Math.round(
            (dueDateOnly.getTime() - todayDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

    if (differenceInDays === 0) {
        return "Today";
    }

    if (differenceInDays === 1) {
        return "Tomorrow";
    }

    if (differenceInDays === -1) {
        return "Yesterday";
    }

    if (differenceInDays > 1) {
        return `In ${differenceInDays} days`;
    }

    return `${Math.abs(differenceInDays)} days ago`;
}