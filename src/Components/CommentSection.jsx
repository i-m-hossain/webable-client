import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const CommentSection = ({ comments, loading, error }) => {
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="w-3/4 flex flex-wrap">
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
