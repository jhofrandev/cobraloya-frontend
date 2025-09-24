import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import ClientsView from "@/views/client/ClientsView";
import LoansView from "@/views/loan/LoansView";
import RegisterPaymentView from "@/views/payment/RegisterPaymentView";
import SettingsView from "@/views/setting/SettingsView";
import ClientDetailsView from "@/views/client/ClientDetailsView";
import DetailsLoanView from "./views/loan/DetailsLoanView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} index />
          <Route path="/clients" element={<ClientsView />} />
          <Route path="/clients/:clientId" element={<ClientDetailsView />} />
          <Route path="/loans" element={<LoansView />} />
          <Route path="/loans/:loanId" element={<DetailsLoanView />} />
          <Route path="/payment/register" element={<RegisterPaymentView />} />
          <Route path="/settings" element={<SettingsView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
