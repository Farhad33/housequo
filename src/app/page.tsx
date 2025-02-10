"use client"
import styled from "styled-components"

export default function Home() {
  return <Container>
    <h1>House Quo</h1>
    <h3>Selling house made easier</h3>
  </Container>
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  color: white;
`