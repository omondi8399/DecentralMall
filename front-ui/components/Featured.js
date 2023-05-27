import Center from "./Center";
import styled from "styled-components"
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size:3rem;
`
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`
const ColumnWrapper = styled.div`
    display:grid;
    grid-template-columns: 1.1fr .9fr;
    gap:40px;
    img{
        max-width: 100%;
    }
`
const Column = styled.div`
    display: flex;
    align-items: center;
`
const ButtonsWrapper = styled.div`
    display:flex;
    gap:10px;
    margin-top:25px;
`

export default function Featured(product) {
    return (
        <Bg>
            <Center>
                <ColumnWrapper>
                    <Column>
                    <div>
                        <Title>{product.title}</Title>
                        <Desc>{product.description}</Desc>
                        <ButtonsWrapper>
                            <ButtonLink href={'/products/+product._id'} outline={1} white={1} >Read more</ButtonLink>
                            <Button primary >
                                <CartIcon />
                                Add to cart
                            </Button>
                        </ButtonsWrapper>
                    </div>
                    </Column>
                    <Column>
                        <img src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </Column> 
                </ColumnWrapper>
            </Center>
        </Bg>
    )
} 