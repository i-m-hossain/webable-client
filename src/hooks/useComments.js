import { useEffect, useState } from "react";

const useComments = (url) => {
    const [comments, setComments] = useState([]);
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
    }, [url]);
    return [comments, loading, error];
};

export default useComments;
