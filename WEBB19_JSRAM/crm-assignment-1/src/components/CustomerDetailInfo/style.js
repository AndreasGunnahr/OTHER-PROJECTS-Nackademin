import styled from "styled-components";
import { H1, P, Label, FlexRowCenter } from "components/Shared";
import { OrangeButton } from "components/Button";

export const DetailContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 1rem auto 0 auto;
`;

export const DetailMainWrapper = styled.div`
  background: ${({ theme }) => theme.color.blue};
  padding: 2rem;
  border-radius: 10px;
`;

export const DetailWrapper = styled.div``;

export const DetailLabel = styled(Label)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.white};
`;

export const DetailText = styled(P)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 1.5rem;
`;

export const DetailGrid = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  margin: 0 auto;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const DetailTitle = styled(H1)`
  display: inline-block;
  font-size: 2rem;
  border-bottom: 3px solid ${({ theme }) => theme.color.orange};
  margin-bottom: 2rem;
`;

export const DetailBottomWrapper = styled(FlexRowCenter)`
  width: 100%;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const DeleteBtn = styled(OrangeButton)`
  background: red;
  margin-left: 1rem;
  border-radius: 10px;
`;
export const EditBtn = styled(OrangeButton)`
  margin-right: 1rem;
  border-radius: 10px;
`;
