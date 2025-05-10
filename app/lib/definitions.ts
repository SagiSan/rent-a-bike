export type Bike = {
    id: string; // Will be created on the database
    title: string;
    description?: string;
    location?: string;
    available: boolean;
};