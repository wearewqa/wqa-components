import React from "react";
import { render } from "@testing-library/react";

import Layout from "./Layout";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Layout theme="default">Hello World!!</Layout>);
  });
});
