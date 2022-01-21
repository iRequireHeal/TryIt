import React from 'react';
import {Rules} from "./components/Rules";
import {Razd1} from "./components/R1";
import {Razd2} from "./components/R2";
import {Razd3} from "./components/R3";
import {Razd4} from "./components/R4";
import {Razd5} from "./components/R5";
import {Razd6} from "./components/R6";
import {Razd7} from "./components/R7";
import {Razd8} from "./components/R8";
import {Wrapper,Content,SideBar,ALink, ANav} from "./components/styles";
import './App.css';
import {Footer} from "./components/Footer";
import {ModalButton} from "./components/ModalButton";

function App() {
  return (
    <div>
        <Wrapper>
            <SideBar>
                <ANav>
                    <ALink href="#r1">Раздел 1</ALink>
                    <ALink href="#r2">Раздел 2</ALink>
                    <ALink href="#r3">Раздел 3</ALink>
                    <ALink href="#r4">Раздел 4</ALink>
                    <ALink href="#r5">Раздел 5</ALink>
                    <ALink href="#r6">Раздел 6</ALink>
                    <ALink href="#r7">Раздел 7</ALink>
                    <ALink href="#r8">Раздел 8</ALink>
                </ANav>
            </SideBar>
            <Content>
                <Rules/>
                <Razd1/>
                <Razd2/>
                <Razd3/>
                <Razd4/>
                <Razd5/>
                <Razd6/>
                <Razd7/>
                <Razd8/>
            </Content>
        </Wrapper>
        <ModalButton/>
        <Footer/>
    </div>
  );
}

export default App;
