
import { useState } from "react";
import CommentSection from "./Components/CommentSection";
import FileUploadSection from "./Components/FileUploadSection";
import NavBar from "./Components/NavBar";
import useComments from "./hooks/useComments";

export default function App() { 
    const [isFileUploaded, setIsFileUploaded]= useState(null)//whenever a file is uploaded we will render the comment section to see the new comments
    const [url, setUrl] = useState("http://localhost:5000/comments")
    const [comments, loading, error] = useComments(url, isFileUploaded)
    const [searching ,setSearching] = useState(false)
    return (
        <>
            <NavBar setUrl={setUrl} setSearching={setSearching}/>
            <section className="md:flex justify-center md:space-x-4 my-6">
                <FileUploadSection setIsFileUploaded={setIsFileUploaded}/>
                <CommentSection comments={comments} loading={loading} error={error} searching={searching}/>
            </section>
        </>
    );
}
