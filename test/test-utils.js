import React from "react";
import { ModalProvider } from "react-modal-hook";
import { render } from "@testing-library/react";

const AllTheProviders = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
