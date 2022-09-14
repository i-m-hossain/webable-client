
import { useEffect, useState } from "react";
import CommentSection from "./Components/CommentSection";
import FileUploadSection from "./Components/FileUploadSection";
import NavBar from "./Components/NavBar";
import useComments from "./hooks/useComments";

export default function App() { 
    const [url, setUrl] = useState("/response.json")
    const [comments, loading, error] = useComments(url)
    return (
        <main className="h-[100vh] bg-gray-100">
            <NavBar setUrl={setUrl} />
            <section className="flex justify-center space-x-4 my-6">
                <FileUploadSection/>
                <CommentSection comments={comments} loading={loading} error={error}/>
            </section>
        </main>
    );
}
