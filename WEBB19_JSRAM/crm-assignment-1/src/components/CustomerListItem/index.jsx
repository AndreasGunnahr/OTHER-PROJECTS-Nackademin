import {
  CustomerListItemContainer,
  CustomerListItemLabel,
  CustomerListItemText,
  CustomListItemLabel,
  CustomListItemReadMore,
} from "./style";

const CustomerListItem = ({ customer }) => {
  return (
    <CustomerListItemContainer>
      <CustomerListItemLabel>{customer.name}</CustomerListItemLabel>
      <CustomListItemLabel>Email</CustomListItemLabel>
      <CustomerListItemText>
        {customer.email ? customer.email : "Info not provided"}
      </CustomerListItemText>
      <CustomListItemLabel>Phone</CustomListItemLabel>
      <CustomerListItemText>
        {customer.phoneNumber ? customer.phoneNumber : "Info not provided"}
      </CustomerListItemText>
      <CustomListItemReadMore to={`/customers/${customer.id}`}>
        Read more
      </CustomListItemReadMore>
    </CustomerListItemContainer>
  );
};

export default CustomerListItem;
