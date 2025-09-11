import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Todo from "../Todo";

describe("testing Todo", () => {
  beforeEach(() => {
    vi.resetModules(); // clear previous mocks & module cache
  });

  test("renders", () => {
    vi.mock("../components/TodoList", () => ({
      default: vi.fn(() => <div>Todo List</div>),
    }));

    vi.mock("../components/AddTodo", () => ({
      default: vi.fn(() => <div>Add Todo</div>),
    }));
    render(<Todo />);
    expect(screen.getByText("Add Todo")).toBeInTheDocument();
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

//   test("test handleAdd", async () => {
//     vi.doMock("../components/AddTodo", () => ({
//       default: ({ addTodo }: any) => {
//         addTodo({ id: "1", task: "Task A" }); // simulate add
//         return <div>Mock AddTodo A</div>;
//       },
//     }));

//     vi.doMock("../components/TodoList", () => ({
//       default: ({ todolist }: any) => (
//         <div>
//           {todolist.map((t: any) => (
//             <div key={t.id}>{t.task}</div>
//           ))}
//         </div>
//       ),
//     }));

//     const { default: Todo } = await import("../Todo");
//     render(<Todo />);

//     expect(screen.getByText("Task A")).toBeInTheDocument();
//   });
});
