import Dropdown from "./Dropdown";

export const StatusFilter = ({ onFilterChange }) => {
    const filterOptions = [
        { label: "All", action: () => onFilterChange("all") },
        { label: "Completed", action: () => onFilterChange("completed") },
        { label: "Pending", action: () => onFilterChange("pending") },
    ];

    return <Dropdown items={filterOptions} buttonName="Filter Tasks" />;
};
