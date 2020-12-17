import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppComponent } from "./components/app";
import { createStores } from "./models/stores";
import * as Shutterbug from "shutterbug";

import "./index.sass";

const stores = createStores({ });

Shutterbug.enable();

ReactDOM.render(
  <Provider stores={stores}>
    <AppComponent />
  </Provider>,
  document.getElementById("app")
);
