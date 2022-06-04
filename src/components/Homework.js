import React from 'react'
import styled from 'styled-components'

function Homework() {
  return (
    <Container>
        <h1>Homework</h1>
        <p>Comprehensive home assignments will be provided , which will be an extension of what is done is the class.</p>
    </Container>
  )
}

export default Homework

const Container = styled.div`
    margin-top: 30px;
    margin-left: 120px;
    margin-right: 120px;
    display: grid;
    border: 2px  solid rgba(0, 0, 0, .5);
    border-radius: 10px;

    h1 {
        color: blue;
        margin-left: 50px;
    }

    h2 {
        color: blue;
        margin-left: 50px;
    }

    p {
        margin-left: 50px;
        font-size: 18px; 
    }



`
