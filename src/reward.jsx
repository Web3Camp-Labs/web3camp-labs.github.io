import styled from "styled-components";
import SubTit from "./components/subTit";
import Tasks from "./components/rewardTask"
import TaskList from "./components/TaskList"

const Box = styled.div`
    background: #f8f8f8;
`
export default function Rewards(){
    return <Box>
        <SubTit />
        <TaskList />
        <Tasks />
    </Box>
}
