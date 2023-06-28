import React, {useState} from "react";
import PostAPI from "../../api/PostApi";
import AccountApi from "../../api/AccountApi";

const MyComment = () => {
    const userId = localStorage.getItem('userId');
    const [commentList, setCommentList] = useState("");

    const myCommentList = async() => {
        try {
            const response = await AccountApi.getMemberComment(userId);
            setCommentList(response.data);
            if(response.status === 200) {
                console.log(commentList);
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>
        <button onClick={myCommentList}><h3>{userId}님의 댓글</h3></button>
        <table className="commentTable">
          <thead>
          </thead>
          <tbody>
            {/* {commentList.map((ll) => (
            //   <tr className="likeItem" key={ll.id}>
            //     <td className="image"><img src={ll.playInfo.imageUrl} alt="image1" className="img-thumb"/></td>
            //     <td className="title">{ll.playInfo.title}</td>
            //     <td className="location">{ll.playInfo.theaterName}</td>
            //     <td className="period">{ll.playInfo.periodStart} ~ {ll.playInfo.periodEnd}</td>
            //   </tr>
            ))} */}
          </tbody>
        </table>
        </>
    )
};

export default MyComment;