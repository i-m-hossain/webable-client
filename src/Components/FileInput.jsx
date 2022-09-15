import React from "react";
import Input from "./Input";
import InputContainer from "./InputContainer";
import Label from "./Label";

const FileInput = ({ onChange }) => (
    <InputContainer>
        <Label content="File" name="file"/>
        <Input name="file" type="file" required={true} onChange={onChange} accept=".json"  />
    </InputContainer>
);

export default FileInput;
