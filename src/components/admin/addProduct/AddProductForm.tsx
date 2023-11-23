import styled from "styled-components";
import Button from "../../ui/Button"
import Input from "../../ui/Input";
import { GiCupcake } from 'react-icons/gi';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { theme } from "../../../theme/theme";

function AddProductForm() {
  const renderCupcake = () => {
    return <GiCupcake color={theme.colors.greyMedium}/>
  }
  const renderCamera = () => {
    return <BsFillCameraFill color={theme.colors.greyMedium}/>
  }
  const renderEuro = () => {
    return <MdOutlineEuro color={theme.colors.greyMedium}/>
  }

  return (
    <FormContainer>
      <Input width={300} placeholer="Nom du produit" Icon={renderCupcake}/>
      <Input width={400} placeholer="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" Icon={renderCamera}/>
      <Input width={250} placeholer="Prix" Icon={renderEuro}/>
      <Button size="sm" background={theme.colors.success} text="Ajouter un nouveau produit"/>
    </FormContainer>
  )
}

export default AddProductForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 30px;
`;
