import SubTit from "./components/subTit";
import ToolsCom from "./components/tools";
import Other from "./components/other";
import styled from "styled-components";

const Box = styled.div`
  background: #f8f8f8;
`

export default function Tools(){
    return <Box>
        <SubTit />
        <ToolsCom />
        <Other />
    </Box>
}
