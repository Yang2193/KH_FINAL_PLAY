import axios from "axios";
import Functions from "../utils/Functions";
const Posts = "http://localhost:8111"; // 백엔드 API 서버 주소

const PostAPI = {
  // 게시물 목록 조회
  getAllPosts: async () => {
    Functions.setAuthorizationHeader();
    return await axios.get(Posts+`/post/select`);
  },

  // 게시물 상세 정보 조회
  getPostById: async (postId) => {
    const response = await axios.get(`${Posts}/post/select/${postId}`);
    return response.data;
  },

  // 게시물 등록
  addPost: async (postTitle, postContent, postImageUrl, postCategory, userId) => {
    const postData = {
      postTitle: postTitle,
      postContent: postContent,
      postImageUrl: postImageUrl,
      postCategory: postCategory,
      userId: userId,
    };

    const response = await axios.post(`${Posts}/post/postUpload`, postData);
    return response.data;
  },

  // 조회수 증가
  increasePostViews: async (postId) => {
    const response = await axios.post(`${Posts}/post/${postId}/increase-views`);
    return response.data;
  },

  // 댓글 생성
  createComment: async (postId, newComment) => {
    const commentData = {
      postId: postId,
      ...newComment,
    };

    const response = await axios.post(`${Posts}/comments`, commentData);
    return response.data;
  },

};

export default PostAPI;