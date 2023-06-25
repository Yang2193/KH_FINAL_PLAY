import axios from "axios";
import Functions from "../utils/Functions";

const Posts = "http://localhost:8111"; // 백엔드 API 서버 주소

const PostAPI = {
  // 게시물 목록 조회
  getAllPosts: async () => {
    Functions.setAuthorizationHeader();
    return await axios.get(`${Posts}/post/select`);
  },

  // 게시물 상세 정보 조회
  getPostById: async (postId) => {
    const response = await axios.get(`${Posts}/post/select/${postId}`);
    return response.data;
  },

   // 게시물 등록
   addPost: async (postTitle, postContent, postImageUrl, postCategory, userId) => {
    try {
      const postData = {
        postTitle: postTitle,
        postContent: postContent,
        postImageUrl: postImageUrl,
        postCategory: postCategory,
        userId: userId,
      };

      Functions.setAuthorizationHeader();

      const response = await axios.post(`${Posts}/post/postUpload`, postData);
      return response.data;
    } catch (error) {
      await Functions.handleApiError(error);
      const response1 = await axios.post(`${Posts}/post/postUpload`);
      return response1.data;
    }
  },

  // 조회수 증가
  increasePostViews: async (postId) => {
    const response = await axios.post(`${Posts}/post/${postId}/increase-views`);
    return response.data;
  },

  // 댓글 생성
  createComment: async (newComment) => {
    console.log(newComment);
    return await axios.post(`${Posts}/comments/createComment`, newComment);
  },

  // 게시물 ID로 댓글 리스트 조회
  getCommentsByPostId: async (postId) => {
    const response = await axios.get(`${Posts}/comments/detail/${postId}`);
    return response.data;
  },

  // 댓글 삭제
  handleDeleteComment: async (commentId) => {
    return await axios.get(`${Posts}/comments/delete/${commentId}`);
  },
};

export default PostAPI;
