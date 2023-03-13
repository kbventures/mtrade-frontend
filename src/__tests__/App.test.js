import * as React from "react";

import i18n, { I18nextProvider} from "react-i18next";

import App from "../App";
import { AuthContextProvider } from "../context/AuthContext";
import { TradesContextProvider } from "../context/TradeContext";
import { render } from "@testing-library/react";

describe("App", () => {
  it("renders App component", () => {
    render(
      <AuthContextProvider>
        <TradesContextProvider>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </TradesContextProvider>
      </AuthContextProvider>
    );
  });
});
