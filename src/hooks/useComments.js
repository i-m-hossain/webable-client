import { useEffect, useState } from "react";

const useComments = (url, isFileUploaded) => {
    const [comments, setComments] = useState([]);//all comments
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchComments = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();
                setComments(result.comments);
                setLoading(false);
                setError(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };
        fetchComments();
    }, [isFileUploaded, url]);
    return [comments, loading, error];
};

export default useComments;
