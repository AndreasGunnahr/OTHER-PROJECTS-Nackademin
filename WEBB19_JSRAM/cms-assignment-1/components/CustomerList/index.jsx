import {
  CustomerListContainer,
  CustomerListTitle,
  CustomListLink,
  CustomListWrapper,
} from "./style";
import CustomerListItem from "components/CustomerListItem";

const CustomerList = ({ customers }) => {
  return (
    <CustomerListContainer>
      <CustomerListTitle>Customers</CustomerListTitle>
      <CustomListWrapper>
        {customers.map((customer) => (
          <CustomerListItem key={customer.id} customer={customer} />
        ))}
      </CustomListWrapper>
    </CustomerListContainer>
  );
};

export default CustomerList;
