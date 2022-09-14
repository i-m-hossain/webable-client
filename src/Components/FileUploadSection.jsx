import React, { useState } from "react";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import FileInput from "./FileInput";

const FileUploadSection = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState({
        fileError: false,
        uploadError: false,
    });
    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleFileUpload = (e) => {
        e.preventDefault();
        if (selectedFile.type === "application/json") {
            setError((prev) => ({ ...prev, fileError: false }));
            const formData = new FormData();
            formData.append("file", selectedFile);
            console.log({ selectedFile });
        } else {
            setError((prev) => ({ ...prev, fileError: true }));
        }

        // ! todo: api call
    };
    return (
        <div className="w-1/4">
            <form
                onSubmit={handleFileUpload}
                className="border-r-2 border-slate-200 px-4"
            >
                <FileInput onChange={onFileChange} />
                <ErrorMessage
                    className={`${
                        error.fileError || error.uploadError
                            ? "visible"
                            : "invisible"
                    } h-6 `}
                >
                    {error.fileError && "Please upload a json file"}
                    {error.uploadError && "couldn't upload file"}
                </ErrorMessage>
                <Button type="submit">Upload File</Button>
            </form>
        </div>
    );
};

export default FileUploadSection;
