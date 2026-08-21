import { OperationalState } from "./OperationalState";
import {
    OperationalTemporalPosition
} from "../utils/formatOperationalDate";

export interface PhoenixOperationalEvent {
    id: number;

    // Identity
    title: string;

    // Temporal
    eventDate?: string;

    // Location
    country?: string;

    // Responsibility
    owner?: string;

    temporalPosition?: OperationalTemporalPosition;

    // Operational state
    state?: OperationalState;

    // Priority
    priority?: string;

    // Operational context
    nextAction?: string;

}