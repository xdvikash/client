import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/50% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex; /* corrected typo */
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
`;

const SubHeading = styled(Typography)` /* corrected typo */
    font-size: 20px;
    color: #FFFFFF;
`;

const Banner = () => {
    return (
        <Image>
            <Heading>Blogs</Heading>
            <SubHeading>MERN STACK</SubHeading> {/* corrected typo */}
        </Image>
    )
}

export default Banner;
