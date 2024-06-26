import { Box, Button, FormControl, InputBase, styled, TextareaAutosize } from "@mui/material";
import { AddCircle as Add, Description } from "@mui/icons-material";
import { useState } from "react";

const Conteiner = styled(Box)`
  margin: 50px 100px;
`;

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const StyledFromeControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 18px;
    border: none;
`;

const createPost = () => {

    const initialPost = {
        title: '',
        description: '',
        picture: '',
        username: '',
        category: '',
        createDate: new Date()
    }

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const [post, setPost] = useState(initialPost);
    
    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }


  return (
    <Conteiner>
      <Image src={url} alt="Banner" />
      <StyledFromeControl>
        <label htmlFor="fileInput" >
          <Add fontSize="large" color="action" />
        </label>
        <input type="file" id="fileInput" style={{display: 'none' }} />
        <InputTextField placeholder="Title....!"  />
        <Button variant="contained">Publish</Button>
      </StyledFromeControl>

      <Textarea minRows={5} placeholder="Tell your story....!" onChange={(e) => handleChange(e)}/>
    </Conteiner>
  );
};

export default createPost;
