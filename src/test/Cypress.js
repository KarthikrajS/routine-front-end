describe("Routines App", () => {
    it("logs in and creates a task", () => {
        cy.visit("/login");
        cy.get("input[name='email']").type("test@example.com");
        cy.get("input[name='password']").type("password123");
        cy.get("button").contains("Login").click();

        // Verify login and navigate to dashboard
        cy.url().should("include", "/dashboard");

        // Create a task
        cy.get("button").contains("Add Task").click();
        cy.get("input[name='taskTitle']").type("Sample Task");
        cy.get("button").contains("Save").click();

        // Verify the task in the list
        cy.contains("Sample Task").should("be.visible");
    });
});
