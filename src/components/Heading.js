import React from 'react'
import styled from 'styled-components'



function Heading() {
  return (
    <Container>
        <img src="/images/m1.svg"></img>
        <p>Maths</p>
        <h1> MENTAL MATHS</h1>
    </Container>
  )
}

export default Heading

const Container = styled.div`
    background: white;
    border: 1px 0px solid rgba(0, 0, 0, .1);
    margin-left: 120px;
    display: flex;
    align-items: center;
    padding: 0px 50px;
    overflow-x: hidden;
    margin-bottom: 20px;
    

    img {
        max-height: 25px;
        max- width: 25px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    p {
        font-weight: 700;
        color: blue;
        margin-left : 10px;
        font-size: 18px;
    }
    

`

