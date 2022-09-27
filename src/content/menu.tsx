import React from 'react';
import styled from 'styled-components';

interface MenuInterface {
    imageUrl: string,
    name: string,
    description: string,
    price: string
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 150px;
    padding: 5px 10px;
    max-width: 600px;
`
const ImageContainer = styled.div`
    flex-grow: 1;
    width: 50%;
`

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`

const DetailContainer = styled.div`
    flex-grow: 1;
    width: 50%;
    text-align: left;
    padding: 5px;
    position: relative;
`

const StyledTitle = styled.h4`
    font-weight: 500;
    margin: 0;
`

const StyledDesc = styled.h5`
    color: grey;
    font-weight: 400;
    margin: 0;
`

const StyledPrice = styled.h5`
    color: orange;
    font-weight: 500;
    position: absolute;
    bottom: 0;
    margin: 0;
`

const Menu: React.FC<MenuInterface> = ({imageUrl, name, description, price}) => {
    return (
        <MenuContainer>
            <ImageContainer>
                <StyledImage src={imageUrl} />
            </ImageContainer>
            <DetailContainer>
                <StyledTitle>{name}</StyledTitle>
                <StyledDesc>{description}</StyledDesc>
                <StyledPrice>{price}</StyledPrice>
            </DetailContainer>
        </MenuContainer>
    )
}

export default Menu;