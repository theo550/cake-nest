import styled from "styled-components"
import AddImage from "../../components/admin/addProduct/AddImage";
import AddProductForm from "../../components/admin/addProduct/AddProductForm";

function AddProduct() {
  return (
    <AddProductContainer>
      <FormWrapper>
        <AddImage/>
        <AddProductForm/>
      </FormWrapper>
    </AddProductContainer>
  )
}

export default AddProduct

const AddProductContainer = styled.div`
  height: 100%;
`;

const FormWrapper = styled.div`
  display: flex;

  padding: 20px 50px;
`;
