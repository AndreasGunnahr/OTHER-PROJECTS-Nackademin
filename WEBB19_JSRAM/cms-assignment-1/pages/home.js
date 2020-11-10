import React from "react";
import PrimaryLayout from "layouts/PrimaryLayout";
import { getCustomerList } from "utilities/userServices";
import { parseCookies } from "lib/parseCookies";
import CustomerList from "components/CustomerList";
import { ProtectRoute } from "store/globalProvider";

function Home({ customers }) {
  return (
    <PrimaryLayout placement={"top"}>
      {/* <CustomerList customers={customers} /> */}
      <h1>test</h1>
    </PrimaryLayout>
  );
}

// export async function getServerSideProps({ req }) {
//   const cookie = parseCookies(req);
//   const { response, error } = await getCustomerList(cookie.JWT_APP);

//   return {
//     props: {
//       customers: response.results,
//     },
//   };
// }

export default ProtectRoute(Home);
