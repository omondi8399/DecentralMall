import Center from "./Center";
import styled from "styled-components"

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`
const Title = styled.h1`
    margin:0;
    font-weight:normal;
`
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`
const Wrapper = styled.div`
    display:grid;
    grid-template-columns: .8fr 1fr;
    gap:40px;
    img{
        max-width: 100%;
    }
`
const Column = styled.div`
    display: flex;
    align-items: center;
`

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                    <div>
                        <Title>Pro anywhere</Title>
                        <Desc>This is a long paragraph</Desc>
                    </div>
                    </Column>
                    <Column>
                        <img src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    )
}