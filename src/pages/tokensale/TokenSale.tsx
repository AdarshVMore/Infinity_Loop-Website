import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Navbar } from "./navbar/Navbar.tsx";
import Maincontainer from "./maincontainer/Maincontainer.tsx";

const queryClient = new QueryClient();

function TokenSale() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <Maincontainer />
      </div>
    </QueryClientProvider>
  );
}

export default TokenSale;
