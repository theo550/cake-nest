import styled from "styled-components";
import Button from "../../ui/Button"
import Input from "../../ui/Input";
import { GiCupcake } from 'react-icons/gi';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { theme } from "../../../theme/theme";
import React, { useState } from "react";
import { formatPrice, replaceDot } from "../../../utils/math";
import { FiCheck } from "react-icons/fi";

function AddProductForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const resteForm = () => {
    setName('');
    setImage('');
    setPrice('');
  }

  const renderCupcake = () => {
    return <GiCupcake color={theme.colors.greyMedium}/>
  }
  const renderCamera = () => {
    return <BsFillCameraFill color={theme.colors.greyMedium}/>
  }
  const renderEuro = () => {
    return <MdOutlineEuro color={theme.colors.greyMedium}/>
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    switch (value) {
      case 'name':
        setName(e.target.value);
        break;
      case 'image':
        setImage(e.target.value);
        break;
      case 'price':
        setPrice(e.target.value);
        break;
    
      default:
        break;
    }
  };

  const handleSuccessMessage = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  }

  const handleSubmit = () => {
    console.log({
      name,
      image,
      price: replaceDot(formatPrice(Number(price)))
    });
    resteForm();
    handleSuccessMessage();
  }

  return (
    <FormContainer>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'name')}
        value={name}
        width={300}
        placeholer="Nom du produit"
        Icon={renderCupcake}
        type="text"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'image')}
        value={image}
        width={400}
        placeholer="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        Icon={renderCamera}
        type="text"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'price')}
        value={price}
        width={250}
        placeholer="Prix"
        Icon={renderEuro}
        type="number"
      />
      <FormButtonContainer>
        <Button
          size="sm"
          background={theme.colors.success}
          text="Ajouter un nouveau produit"
          onClick={handleSubmit}
        />
        {submitted &&
          <FormCustomText>
            <span><FiCheck/></span>
            Ajouté avec succès !
          </FormCustomText>
        }
      </FormButtonContainer>
    </FormContainer>
  )
}

export default AddProductForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 30px;
`;

const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FormCustomText = styled.p`
  color: ${theme.colors.success};

  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;

    margin: 0 5px 0 15px;

    border-radius: ${theme.borderRadius.circle};
    border: 1px solid ${theme.colors.success};
  }
`;
