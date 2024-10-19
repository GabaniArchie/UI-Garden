export interface TableProps {
    headers: string[]; // Array of headers for the table
    data: Array<{ id: number; name: string }>; // Adjust based on the data structure you expect
    isDisabled?: boolean; // Optional property to control the disabled state
}
