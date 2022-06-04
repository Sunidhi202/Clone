import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <img src="/images/footer.png"/>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    img {
        width:100%;
        height: 100%;
    }

`