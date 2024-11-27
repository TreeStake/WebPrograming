import React from "react";
import { Div } from "./successBox.styled";
import { SearchButton } from "../Search/search.styled";
import { useNavigate } from "react-router-dom";

const SuccessBox = () => {
    const navigate = useNavigate()

    const onBackClick = () => {
        navigate('/catalog')
    }
    return(
        <Div>
            <img src="./like.png" width='300px' alt="like"></img>
            <SearchButton type="button" onClick={onBackClick}>Go back to catalog</SearchButton>
        </Div>
    )
}

export default SuccessBox