import styled from "styled-components"
import AddImage from "../../components/admin/addProduct/AddImage";
import AddProductForm from "../../components/admin/addProduct/AddProductForm";
import { useState } from "react";

function AddProduct() {
  const [image, setImage] = useState('');

  return (
    <AddProductContainer>
      <FormWrapper>
        <AddImage image={image}/>
        <AddProductForm image={image} setImage={setImage} button/>
      </FormWrapper>
    </AddProductContainer>
  )
}

export default AddProduct

const AddProductContainer = styled.div`
  height: 300px;
`;

const FormWrapper = styled.div`
  display: flex;

  padding: 20px 50px;
`;
