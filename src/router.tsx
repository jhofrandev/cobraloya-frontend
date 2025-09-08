import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardView from "./views/DashboardView";
import CreateClientView from "./views/clients/CreateClientView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} index />
          <Route path="/clients/create" element={<CreateClientView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
