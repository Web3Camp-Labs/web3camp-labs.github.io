import Stack from "./components/stack";
import SubTit from "./components/subTit";
import BooksCom from "./components/book";
import styled from "styled-components";

const Box = styled.div`
    background: #f8f8f8;
`
export default function Tutorial(){
    return <Box>
        <SubTit />
        <Stack />
        <BooksCom />
    </Box>
}
