import {
  CustomerListContainer,
  CustomerListTitle,
  CustomListWrapper,
  CustomerTopWrapper,
  AddCustomerBtn,
} from "./style";

import CustomerListItem from "components/CustomerListItem";
import { useGlobalContext } from "store/globalContext";

const CustomerList = ({ toggle }) => {
  const { customers } = useGlobalContext();

  return (
    <CustomerListContainer>
      <CustomerTopWrapper>
        <CustomerListTitle>Customers</CustomerListTitle>
        <AddCustomerBtn onClick={() => toggle()}>
          Add new customer
        </AddCustomerBtn>
      </CustomerTopWrapper>
      {customers && (
        <CustomListWrapper>
          {customers.map((customer) => (
            <CustomerListItem key={customer.id} customer={customer} />
          ))}
        </CustomListWrapper>
      )}
    </CustomerListContainer>
  );
};

export default CustomerList;
