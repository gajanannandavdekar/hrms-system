import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";

describe("LoginPage", () => {
  test("renders login page heading", () => {
    render(<LoginPage />);

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
});
