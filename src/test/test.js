import { render, screen } from "@testing-library/react";
import ListView from "../components/ListView";

const mockTasks = [
    { id: 1, title: "Task 1", priority: "High" },
    { id: 2, title: "Task 2", priority: "Low" },
];

test("renders task list correctly", () => {
    render(<ListView tasks={mockTasks} />);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
});
