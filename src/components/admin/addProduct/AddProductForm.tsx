import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button"
import Input from "../../ui/Input";
import { GiCupcake } from 'react-icons/gi';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { theme } from "../../../theme/theme";
import { FiCheck } from "react-icons/fi";
import { SelectedMenuContext, menuContext } from "../../../context/menuContext";
import { MenuContextType } from "../../../types/menu";
import { SelectedMenuContextType, SelectedTabContextType } from "../../../types/admin";
import { AdminTabContext } from "../AdminPanel";

type Props = {
  image: string;
  setImage?: React.Dispatch<React.SetStateAction<string>>;
  button?: boolean;
}

function AddProductForm(props: Props) {
  const {image, button, setImage} = props;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { menu, setMenu } = useContext(menuContext) as MenuContextType;
  const { selectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;
  const { selectedTab } = useContext(AdminTabContext) as SelectedTabContextType;

  useEffect(() => {
    setName(selectedMenu.title);
    setPrice(String(selectedMenu.price));
    setImage && setImage(selectedMenu.imageSource);
  }, [selectedMenu, setImage]);

  const resteForm = () => {
    setName('');
    setImage && setImage('');
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

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const array = [...menu];
    array.map(menu => {
      if (menu.id === selectedMenu.id) {
        if (value === 'name') {
          menu.title = e.target.value
          setName(e.target.value);
        } else if (value === 'image') {
          menu.imageSource = e.target.value
          setImage && setImage(e.target.value)
        } else {
          menu.price = Number(e.target.value);
          setPrice(e.target.value);
        }
      }
    })
    setMenu(array);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    switch (value) {
      case 'name':
        setName(e.target.value);
        break;
      case 'image':
        setImage && setImage(e.target.value);
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
    setMenu([...menu, {
      id: menu.length + 1,
      imageSource: image,
      price: Number(price),
      title: name,
      quantity: 0,
      isAdvertised: false,
      isAvailable: true
    }]);
    resteForm();
    handleSuccessMessage();
  }

  return (
    <FormContainer>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          selectedTab === 0
           ? handleChange(e, 'name')
           : handleUpdate(e, 'name')
          }}
        value={name}
        width={300}
        placeholer="Nom du produit"
        Icon={renderCupcake}
        type="text"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          selectedTab === 0
           ? handleChange(e, 'image')
           : handleUpdate(e, 'image')
          }}
        value={image}
        width={400}
        placeholer="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        Icon={renderCamera}
        type="text"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          selectedTab === 0
           ? handleChange(e, 'price')
           : handleUpdate(e, 'price')
          }}
        value={price}
        width={250}
        placeholer="Prix"
        Icon={renderEuro}
        type="number"
      />
      <FormButtonContainer>
        {button ?
          <Button
            size="sm"
            background={theme.colors.success}
            text="Ajouter un nouveau produit"
            onClick={handleSubmit}
          />
          :
          <StyledText>Cliquez sur un produit pour le modifier en temps réel</StyledText>
        }
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

const StyledText = styled.p`
 color: ${theme.colors.primary};
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
