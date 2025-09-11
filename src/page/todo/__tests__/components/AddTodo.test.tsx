import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import AddTodo from "../../components/AddTodo";

describe("testing AddTodo", () => {
  test("should render form field and add button", () => {
    const mockAddTodo = vi.fn();
    render(<AddTodo addTodo={mockAddTodo} />);
    expect(screen.getByRole("button", { name: /Add/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Task")).toBeInTheDocument();
  });

  test("should call addTodo on Click add", () => {
    const mockAddTodo = vi.fn();
    render(<AddTodo addTodo={mockAddTodo} />);

    fireEvent.click(screen.getByRole("button", { name: /Add/i }));
    expect(mockAddTodo).toHaveBeenCalled();
  });

  test("should allow user to type todo, and addTodo", () => {
    const mockAddTodo = vi.fn();
    render(<AddTodo addTodo={mockAddTodo} />);

    let input = screen.getByPlaceholderText("Enter Task");
    fireEvent.change(input, { target: { value: "New Task 2" } });
    expect(input).toHaveValue("New Task 2");
    const btn = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(btn);

    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith(
      expect.objectContaining({
        task: "New Task 2",
        id: expect.any(String),
      })
    );
    expect(input).toHaveValue("");
  });
});

