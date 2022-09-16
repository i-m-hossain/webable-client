import React from "react";
import avatar from './../img/user.png'
const CommentCard = ({comment}) => {
    return (
            <div className="bg-gray-200 border border-gray-300 dark:bg-gray-800 text-black dark:text-gray-200 p-2 rounded-md flex">
                <img className="rounded-full h-8 w-8 mr-2 mt-1 " src={avatar} alt="avatar"/>
                <div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl px-4 pt-2 pb-2.5">
                        <div className="font-semibold text-sm leading-relaxed">{comment?.user.username}</div>
                        <div className="text-normal leading-snug md:leading-normal">
                            {comment?.body}
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default CommentCard;
