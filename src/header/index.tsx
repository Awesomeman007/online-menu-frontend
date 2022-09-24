import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    height: 150px;
    jutify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <img src='https://lungyai.com/wp-content/uploads/2019/03/logo-lungyai.png' height="100" />
        </HeaderContainer>
        )
}

export default Header