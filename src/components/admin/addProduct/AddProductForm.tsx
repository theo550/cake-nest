import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button"
import Input from "../../ui/Input";
import { GiCupcake } from 'react-icons/gi';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
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
  update?: boolean;
}

const AddProductForm = (props: Props) => {
  const {image, button, update, setImage} = props;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const { menu, setMenu } = useContext(menuContext) as MenuContextType;
  const { selectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;
  const { selectedTab } = useContext(AdminTabContext) as SelectedTabContextType;
  
  const [isAvailable, setIsAvailable] = useState(selectedMenu.isAvailable);

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
  const renderPackage = () => {
    return <FiPackage color={theme.colors.greyMedium}/>
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
        } else if (value === 'price') {
          if (isNaN(Number(e.target.value))) {
            setPrice('0,00')
            menu.price = 0;
          } else {
            menu.price = Number(e.target.value);
            setPrice(e.target.value)
          }
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
    setMenu([{
      id: crypto.randomUUID(),
      imageSource: image,
      price: Number(price),
      title: name,
      quantity: 0,
      isAdvertised: false,
      isAvailable: true
    }, ...menu]);
    resteForm();
    handleSuccessMessage();
  }

  const handleIsAvalaible = () => {
    const array = [...menu]
    array.map(menu => {
      if (menu.id === selectedMenu.id) {
        menu.isAvailable = !menu.isAvailable
        setIsAvailable(!isAvailable)
      }
    })
    setMenu(array);
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
        isFirstInput
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
      <InputContainer>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            selectedTab === 0
            ? handleChange(e, 'price')
            : handleUpdate(e, 'price')
            }}
          value={price}
          width={update ? 75 : 250}
          placeholer="Prix"
          Icon={renderEuro}
          type="number"
        />
        {update &&
          <div
            className="input-container__stock"
            onClick={handleIsAvalaible}
          >
            {renderPackage()}
            <div>
              <p>En {selectedMenu.isAvailable ? 'stock' : 'rupture'}</p>
            </div>
          </div>
        }
      </InputContainer>
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  .input-container__stock {
    display: flex;
    gap: 10px;

    background-color: ${theme.colors.greyLight};

    padding: 12px 20px;
    border-radius: ${theme.borderRadius.round};

    cursor: pointer;
  }
`;
