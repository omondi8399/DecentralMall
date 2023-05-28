import styled from "styled-components"

const styledTable = styled.table`
    width: 100%
    th{
        text-align: left;
        text-transform: uppercase;
        color: #ccc;
        font-weight: 600;
        font-size: .7rem;
    }
`

export default function Table({props}) {
    return <styledTable {...props} />
}