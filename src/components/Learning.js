import React from 'react'
import styled from 'styled-components'

function Learning() {
  return (
    <Container>
        <h1>Learning Goals</h1>
        <p>Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!</p>
    </Container>

  )
}

export default Learning

const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
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
