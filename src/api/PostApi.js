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
      Functions.setAuthorizationHeader();
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
    // 게시물 삭제
    deletePost: async (postId) => {
      return await axios.post(`${Posts}/post/delete/${postId}`);
    },

  // 조회수 증가
  increasePostViews: async (postId) => {
    const response = await axios.post(`${Posts}/post/${postId}/increase-views`);
    return response.data;
  },




  // 게시물 ID로 댓글 리스트 조회
  getCommentsByPostId: async (postId) => {
    const response = await axios.get(`${Posts}/comments/detail/${postId}`);
    return response.data;
  },

    // 댓글 생성
  createComment: async (newComment) => {
    Functions.setAuthorizationHeader();
    console.log(newComment);
    return await axios.post(`${Posts}/comments/createComment`, newComment);
  },

  // 댓글 삭제
  deleteComment: async (commentId) => {

    return await axios.post(`${Posts}/comments/delete/${commentId}`);
   
  },

  // 댓글 수정
  updateComment: async (commentId, updatedComment) => {
    return await axios.post(`${Posts}/comments/${commentId}`, updatedComment);
  },
  // 카테고리에 해당하는 게시물 목록 조회
   getPostsByCategory: async (categoryId) => {
    return await axios.get(`${Posts}/post/category/${categoryId}`);
  },
    // 게시물 수정
    updatePost: async (postId, updatedPostData) => {
      return await axios.post(`${Posts}/post/update/${postId}`, updatedPostData);
    },
  
};



export default PostAPI;
