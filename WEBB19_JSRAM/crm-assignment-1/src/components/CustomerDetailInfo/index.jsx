import data from "../CustomerModal/data";
import { onDelete } from "utilities/userServices";
import { useHistory } from "react-router-dom";

import {
  DetailContainer,
  DetailTitle,
  DetailGrid,
  DetailMainWrapper,
  DetailWrapper,
  DetailLabel,
  DetailText,
  DetailBottomWrapper,
  DeleteBtn,
  EditBtn,
} from "./style";

const CustomerDetailInfo = ({ customers, customerId, dispatch, toggle }) => {
  const history = useHistory();
  const customer = customers.find((customer) => customer.id === customerId);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const { error } = onDelete(customerId);
      if (!error) {
        dispatch({ type: "DELETE_CUSTOMER", customerId });
        history.push("/customers");
        return;
      }
    }
  };

  return (
    <DetailContainer>
      <DetailTitle>Customer Details</DetailTitle>
      <DetailMainWrapper>
        <DetailGrid>
          {data.map((item, key) => (
            <DetailWrapper key={key}>
              <DetailLabel>{item.name}</DetailLabel>
              <DetailText>
                {customer[item.type]
                  ? customer[item.type]
                  : "Info not provided"}
              </DetailText>
            </DetailWrapper>
          ))}
        </DetailGrid>
        <DetailBottomWrapper>
          <EditBtn onClick={() => toggle()}>Edit customer</EditBtn>
          <DeleteBtn onClick={handleDelete}>Delete customer</DeleteBtn>
        </DetailBottomWrapper>
      </DetailMainWrapper>
    </DetailContainer>
  );
};

export default CustomerDetailInfo;
