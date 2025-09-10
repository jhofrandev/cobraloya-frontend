import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardView from "./views/DashboardView";
import CreateClientView from "./views/clients/CreateClientView";
import ClientDetailsView from "./views/clients/ClientDetailsView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} index />
          {/* <Route path="/clients/create" element={<CreateClientView />} />
          <Route path="/clients/:clienteId" element={<ClientDetailsView />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
