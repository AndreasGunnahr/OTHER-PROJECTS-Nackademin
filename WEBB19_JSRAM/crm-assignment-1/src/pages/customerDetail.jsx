import React, { useEffect } from "react";
import PrimaryLayout from "layouts/PrimaryLayout";
import CustomerDetailInfo from "components/CustomerDetailInfo";
import { getCustomerList, onEdit } from "utilities/userServices";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "store/globalContext";
import CustomerModal from "components/CustomerModal";
import useModal from "hooks/useModal";

const CustomerDetail = () => {
  const { isShowing, toggle } = useModal();
  const { id } = useParams();
  const { dispatch, customers } = useGlobalContext();

  useEffect(() => {
    const fetchCustomers = async () => {
      const { response, error } = await getCustomerList();
      if (!error && response.hasOwnProperty("results")) {
        dispatch({ type: "SET_CUSTOMER_LIST", customers: response.results });
      }
    };

    fetchCustomers();
  }, [dispatch]);

  const handleEditCustomer = async (editCustomer) => {
    const { error } = await onEdit(id, editCustomer);
    if (!error) {
      dispatch({ type: "EDIT_CUSTOMER", editCustomer });
      toggle();
    }
  };

  return (
    <PrimaryLayout placement={"top"}>
      {customers && (
        <>
          <CustomerDetailInfo
            customers={customers}
            customerId={parseInt(id)}
            dispatch={dispatch}
            toggle={toggle}
          />
          <CustomerModal
            isShowing={isShowing}
            hide={toggle}
            handleSubmit={handleEditCustomer}
            title={"Edit customer"}
            customers={customers}
            customerId={parseInt(id)}
          />
        </>
      )}
    </PrimaryLayout>
  );
};

export default CustomerDetail;
