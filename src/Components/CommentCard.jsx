import React from "react";

const CommentCard = ({comment}) => {
    return (
        <div class="p-6 w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {comment.user.username}
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {comment.body}
            </p>
        </div>
    );
};

export default CommentCard;
