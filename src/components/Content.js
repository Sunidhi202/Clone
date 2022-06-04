import React from 'react'
import styled from 'styled-components'


function Content() {
  return (
    <Container>
        <Wrap>
            <p>Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!</p>
            <icon>
                <img src="/images/m1.svg"/>
                <span>6 - 8 Years</span>
            </icon>
            <icon>
                <img src="/images/m2.svg"/>
                <span>6 - 8 Years</span>
            </icon>
            <icon>
                <img src="/images/m2.svg"/>
                <span>6 - 8 Years</span>
            </icon>
            <icon>
                <img src="/images/m1.svg"/>
                <span>6 - 8 Years</span>
            </icon>
        </Wrap>
        
        <Wrap>
           <img src="/images/image1.webp"/> 
        </Wrap>
        
    </Container>
  )
}

export default Content

const Container = styled.div`
    margin-left: 120px;
    margin-right: 80px;
    display: grid;
    border: 1px 0px solid rgba(0, 0, 0, .1);
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(0, 1fr)); 


`
const Wrap = styled.div`
    border-radius: 10px;
    

    img{
        width: 500px;
        border-radius: 10px;
        height: 300px;
    }

    icon {
            margin-right:170px;
            

            img{
                width: 40px;
                height: 40px;
                margin-bottom: 5px;
            }

            p {
                font-size: 22px;
                
            }
    }

    span {
        align-items: center;
        font-size: 22px;
    }

`
const Button = styled.a`

`
