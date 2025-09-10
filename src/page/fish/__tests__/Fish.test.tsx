import { render, screen } from "@testing-library/react";
import { test, vi } from "vitest";
import { BrowserRouter } from "react-router";
import Fish from "../Fish";
import { useFishSelectors } from "../FishSelector";

// Minimal mock
vi.mock("../FishSelector", () => ({
  useFishSelectors: {
    fishes: vi.fn(() => 0),
    addFish: vi.fn(() => vi.fn()),
    removeFish: vi.fn(() => vi.fn()),
  },
}));

test("renders Fish component", () => {
  render(
    <BrowserRouter>
      <Fish />
    </BrowserRouter>
  );

  screen.getByText("Fishes: 0");
  screen.getByText("Add Fish");
  screen.getByText("Remove Fish");
  screen.getByText("Goto");
});
