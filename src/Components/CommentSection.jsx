import React from "react";
import CommentCard from "./CommentCard";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const CommentSection = ({ comments, loading, error }) => {
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="md:w-3/4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2 px-4">
            {error ? (
                <ErrorMessage>Comment could not be found!</ErrorMessage>
            ) : comments.length > 0 ? (
                comments?.map((comment) => (
                    <CommentCard comment={comment} key={comment.id} />
                ))
            ) : (
                <h4 className="text-red-500  mx-auto">No comments found</h4>
            )}
        </div>
    );
};

export default CommentSection;
