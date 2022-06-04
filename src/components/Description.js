import React from 'react'
import styled from 'styled-components'


function Description() {
  return (
    <Container>
        <h1>Description</h1>
        <p>The course aims at enhancing mathematical skills and brain development. It improves one's number sense and helps them gain the ability to understand relationships between quantities, while stimulating their brain and improving observation skills.</p>
        <h2>Details</h2>
        <p>
        CLASS 1- Criss-cross multiplication<br/>

CLASS 2- Subtraction with numbers near to 10 and multiples of 10 Cutoff method addition/ Vyavakalanam method Dot method addition/ Rekhanth method

<br/>CLASS 3- Multiplication upto 100 (Done mentally)

<br/>CLASS 4- Subtraction with Numbers near 10 and multiple of 10

<br/>CLASS 5- Digit sum method Multiplication using base method part 1/ Nikhilam method, Fractions

<br/>CLASS 6- Base method multiplication part 2 Division part 1

<br/>CLASS 7 - LCM and HCF

<br/>CLASS 8- Multiplication with series of 9 Division part 2

<br/>CLASS 9- Multiplication with series of 1 Multiplication with 21,31 41 91 Base complement method subtraction/ Nikhil am method ,Division of any number by 11

<br/>CLASS 10- Division with series of 9 Multiplication by digits 12 to 19 Multiplication with 5, 25, 125 Percentage


        </p>
    
    </Container>
  )
}

export default Description

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
        font-size: 16px; 
    }



`
