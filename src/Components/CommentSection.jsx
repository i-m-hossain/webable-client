import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const CommentSection = ({comments, loading, error}) => {
    
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="w-3/4 flex flex-wrap">
            {error ? (
                <ErrorMessage>Comment could not be found!</ErrorMessage>
            ) : (
                comments.map((comment) => <CommentCard comment={comment} />)
            )}
        </div>
    );
};

export default CommentSection;
