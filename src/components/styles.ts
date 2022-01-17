import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  color: #DAA520;
  margin: 0;
`

export const Text = styled.p`
  font-size: 18px;
  color: black;
  margin: 0;
`
export const RText = styled.p`
  font-size: 20px;
  color: #DAA520;
`

export const Esli = styled.span`
  color: darkviolet;
  font-weight: bold;
`

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 5%;
`

export const Content = styled.div`
  margin: auto;
  justify-content: center;
`

export const SideBar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

export const ALink = styled.a`
  margin: 20px 20px;
  align-self: center;
  width: 80px;
  position: relative;
  font-size: 16px;
  font-weight: bold;
  color:  #DAA520;
  text-decoration: none;
  text-shadow: 0 -1px 1px #cc5500;
  user-select: none;
  padding: .5em 2em;
  outline: none;
  border-radius: 20px;
  background-color: antiquewhite;
  background-size: 100% 100%, auto;
  background-position: 50% 50%;
  box-shadow: inset #ebab00 0 -1px 1px, inset 0 1px 1px #ffbf00, #cc7722 0 0 0 1px, #000 0 10px 15px -10px;
  transition: 0.2s;
  &:hover  {
    background-size: 140% 100%, auto;
  }
  &:active {
    top: 1px;
    color: #ffdead;
    box-shadow: inset #ebab00 0 -1px 1px, inset 0 1px 1px #ffbf00, #cc7722 0 0 0 1px, 0 10px 10px -9px #000;
  }
`
export const ANav = styled.nav`
  display: flex;
  flex-wrap: wrap;
`

export const Razdel = styled.div`
    margin-top: 5%;
`
export const SubTitle = styled.h3`
  text-align: center;
  color: #DAA520;
`

export const Imgs = styled.img `
  width: 100%;
  -webkit-border-radius: 5%;
  border: antiquewhite solid 2px;
`

export const Footer_Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  justify-content: center;
  
`
