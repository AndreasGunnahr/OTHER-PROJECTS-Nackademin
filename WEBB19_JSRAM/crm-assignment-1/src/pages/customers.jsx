import React, { useEffect } from "react";

import { useGlobalContext } from "store/globalContext";
import { getCustomerList, setNewCustomer } from "utilities/userServices";
import useModal from "hooks/useModal";

import PrimaryLayout from "layouts/PrimaryLayout";
import CustomerList from "components/CustomerList";
import CustomerModal from "components/CustomerModal";

const Home = () => {
  const { isShowing, toggle } = useModal();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    const fetchCustomers = async () => {
      const { response, error } = await getCustomerList();

      if (!error && response.hasOwnProperty("results")) {
        dispatch({ type: "SET_CUSTOMER_LIST", customers: response.results });
      }
    };

    fetchCustomers();
  }, [dispatch]);

  const handleAddCustomer = async (customer) => {
    const { response } = await setNewCustomer(customer);
    if (Object.entries(response).length > 5) {
      dispatch({ type: "ADD_CUSTOMER", customer: response });
      toggle();
      return;
    }
  };

  return (
    <PrimaryLayout placement={"top"}>
      <CustomerList toggle={toggle} />
      <CustomerModal
        isShowing={isShowing}
        hide={toggle}
        handleSubmit={handleAddCustomer}
        title={"Create customer"}
      />
    </PrimaryLayout>
  );
};

export default Home;
