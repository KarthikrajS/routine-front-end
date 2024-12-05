import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("task creation and update flow", () => {
    render(<App />);

    // Simulate task creation
    fireEvent.click(screen.getByText("Add Task"));
    fireEvent.change(screen.getByPlaceholderText("Enter task title"), {
        target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Save"));

    // Check if the task is created
    expect(screen.getByText("New Task")).toBeInTheDocument();

    // Simulate task update
    fireEvent.click(screen.getByText("Edit"));
    fireEvent.change(screen.getByDisplayValue("New Task"), {
        target: { value: "Updated Task" },
    });
    fireEvent.click(screen.getByText("Save"));

    // Verify the update
    expect(screen.getByText("Updated Task")).toBeInTheDocument();
});
