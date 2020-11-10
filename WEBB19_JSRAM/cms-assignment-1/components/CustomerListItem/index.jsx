import {
  CustomerListItemContainer,
  CustomerListItemLabel,
  CustomerListItemText,
  CustomListItemReadMore,
} from "./style";

const CustomerListItem = ({ customer }) => {
  return (
    <CustomerListItemContainer>
      <CustomerListItemLabel>{customer.name}</CustomerListItemLabel>
      <CustomerListItemText>{customer.email}</CustomerListItemText>
      <CustomerListItemText>{customer.phoneNumber}</CustomerListItemText>
      <CustomListItemReadMore href={`/customers/${customer.id}`}>
        Read more
      </CustomListItemReadMore>
    </CustomerListItemContainer>
  );
};

export default CustomerListItem;
