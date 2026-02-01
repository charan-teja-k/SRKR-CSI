// src/types/index.ts

import type { ReactNode } from "react";

export interface StudentCoordinator {
  name: string;
  role: string;
}

export interface Winner {
  prize: ReactNode;
  name: string;
  position: string; // e.g., "1st", "2nd"
  year?: string;
}

export interface Event {
  id: string | number;
  title: string;
  year: string; // e.g., "2025"
  academicYear?: string; // e.g., "2024-2025"
  date: string; // Format: "dd-mm-yyyy"
  month?: string;
  category?: string;
  venue: string;
  description: string;
  shortDesc: string;
  fullDescription: string;
  thumbnail?: string;
  images?: string[]; // Array of image URLs for gallery
  facultyCoordinators: string[];
  studentCoordinators: StudentCoordinator[];
  winners?: Winner[];
}

export interface EventYear {
  year: string; // e.g., "2025"
  academicYear: string; // e.g., "2024-2025"
  events: Event[];
}

export interface EventsData {
  years: EventYear[];
}

export interface Member {
  id: string | number;
  name: string;
  role: string;
  image?: string;
  currentStatus?: string; // Specific to SBM (e.g., "Working at Google")
}

export interface AboutData {
  csiHistory: string;
  srkrHistory: string;
}
