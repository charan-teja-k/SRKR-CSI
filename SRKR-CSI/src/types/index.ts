// src/types/index.ts

export interface StudentCoordinator {
  name: string;
  role: string;
}

export interface Winner {
  name: string;
  position: string; // e.g., "1st", "2nd"
  year?: string;
}

export interface Event {
  id: string | number;
  title: string;
  year: string; // e.g., "2024-2025"
  date: string;
  thumbnail?: string;
  shortDesc: string;
  fullDescription: string;
  facultyCoordinators: string[];
  studentCoordinators: StudentCoordinator[];
  winners?: Winner[];
  images?: string[]; // Array of image URLs for gallery
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
