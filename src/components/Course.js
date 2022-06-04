import React from 'react'
import styled from 'styled-components'

function Course() {
  return (
    <Container>
        <h2>Available Batches</h2>
        <h1></h1>
        <h1></h1>

    <Wrap>
       <img src="/images/course.png"/> 
    </Wrap>
    <Wrap>
       <img src="/images/course.png"/> 
    </Wrap>
    <Wrap>
       <img src="/images/course.png"/> 
    </Wrap>
    
</Container>
  )
}

export default Course

const Container = styled.div`
    margin-left: 120px;
    margin-right: 120px;
    display: grid;
    border: 1px 0px solid rgba(0, 0, 0, .1);
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr)); 


`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        
        border-color: rgba(249, 249, 249, 0.8);
    }

`