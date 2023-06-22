import React, { useContext, useState, useEffect } from "react";
import { AccountInfoContext } from "../../context/AccountInfo";
import PostAPI from "../../api/PostApi";
import { Link } from 'react-router-dom';
import AccountApi from "../../api/AccountApi";

const MyReview = () => {

    // 로그인 한 회원정보 가져오기
    const context = useContext(AccountInfoContext);
    const {userId} = context;

    // 리뷰 내역 저장
    const [posts, setPosts] = useState([]);

    const increaseViews = async (postId) => {
        try {
          await PostAPI.increasePostViews(postId);
        } catch (error) {
          console.log(error);
        }
      };

    const formatWriteDate = (date) => {
        const currentDate = new Date();
        const writeDate = new Date(date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        if (isSameDay(currentDate, writeDate)) {
            const formattedTime = writeDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return `오늘 ${formattedTime}`;
        } else {
            const formattedDate = writeDate.toLocaleDateString('ko', options);
            return formattedDate;
        }
    };

    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const rsp = await AccountApi.getMemberReview(userId);
            if (rsp.status === 200) {
              setPosts([rsp.data]);
              console.log(posts);
            } else {
              console.log("데이터가 없음");
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, [userId]);
      
    return (
        <>
        <h3>{userId}님의 리뷰</h3>
        <table className="ReviewTable">
          <thead>
            <tr>
              <th>리뷰 제목</th>
              <th>설명</th>
              <th>작성 날짜</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr className="ReviewItem" key={post.id}>
                <td className="ReviewTitle">
                  <Link
                    to={`/post/select/${post.id}`}
                    className="ReviewLink"
                    onClick={() => increaseViews(post.id)}
                  >
                    {post.postTitle}
                  </Link>
                </td>
                <td className="Explaination2">{post.postContent}</td>
                <td className="WriteDate">{formatWriteDate(post.postDate)}</td>
                <td className="Views">{post.postViews}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
    );
}

export default MyReview;