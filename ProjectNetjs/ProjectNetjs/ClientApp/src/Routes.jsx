import { Routes as RoutesDom, Route } from "react-router-dom";
import { PAGES } from "./const/pages.const";

// Pages
import Home from "./pages/Home";
import Receipt from "./pages/Receipt";
import Pdf from "./pages/Pdf";
import Users from "./pages/Users";
import ProviderListReceipt from "./context/contextListReceipt";
import ProviderModal from "./context/contextModal";

const Routes = () => (
  <RoutesDom>
    <Route path={PAGES.default} element={<Home></Home>}></Route>

    <Route
      path={PAGES.receipt}
      element={
        <ProviderModal>
          <ProviderListReceipt>
            <Receipt />
          </ProviderListReceipt>
        </ProviderModal>
      }
    ></Route>

    <Route path={PAGES.user} element={<Users></Users>}></Route>
    <Route path={PAGES.pdf} element={<Pdf></Pdf>}></Route>
  </RoutesDom>
);

export default Routes;
