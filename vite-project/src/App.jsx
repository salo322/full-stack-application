import { Spin } from "antd";
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";

function App() {
  return (
    <React.Fragment>
      <Suspense
        fallback={
          <div>
            <Spin />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
