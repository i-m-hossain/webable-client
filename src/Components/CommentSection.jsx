import React from "react";
import CommentCard from "./CommentCard";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const CommentSection = ({ comments, loading, error,searching }) => {
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="md:w-3/4 px-4">
            {error ? (
                <ErrorMessage className="mx-auto">
                    Oops! We couldn't get any data from server.
                </ErrorMessage>
            ) : comments.length > 0 ? (
                <div className="flex flex-col">
                    {searching && <h4 className="text-blue-500 border rounded p-2 mb-2 font-bold">Search result: {comments.length}</h4>}
                    <div  className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2 ">
                        {comments?.map((comment) => (
                            <CommentCard comment={comment} key={comment.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <h4 className="text-red-500  mx-auto">No comments found</h4>
            )}
        </div>
    );
};

export default CommentSection;
