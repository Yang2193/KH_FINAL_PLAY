import axios from "axios";

const BorrowDreamAPI = "http://localhost:8111"; // 백엔드 API 서버 주소

const PostAPI = {
  // 게시물 목록 조회
  getAllPosts: async () => {
    try {
      const response = await axios.get(`${BorrowDreamAPI}/posts`);
      return response.data;
    } catch (error) {
      console.error("게시물 목록 조회 오류:", error);
      throw error;
    }
  },

  // 게시물 상세 정보 조회
  getPostById: async (postId) => {
    try {
      const response = await axios.get(`${BorrowDreamAPI}/posts/${postId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("게시물 상세 정보 조회 오류:", error);
      throw error;
    }
  },

  // 게시물 등록
  addPost: async (postTitle,postContent,postImageUrl,postCategory) => {
    const postData ={
      postTitle: postTitle,
      postContent: postContent,
      postImageUrl: postImageUrl,
      postCategory: postCategory,
    }
  
  
    try {
      const response = await axios.post(`${BorrowDreamAPI}/postUpload`, postData);
      return response.data;
    } catch (error) {
      console.error("게시물 등록 오류:", error);
      throw error;
    }
  },

  // 조회수 증가
  increasePostViews: async (postId) => {
    try {
      const response = await axios.put(`${BorrowDreamAPI}/posts/${postId}/increase-views`);
      return response.data;
    } catch (error) {
      console.error("조회수 증가 오류:", error);
      throw error;
    }
  }
};

export default PostAPI;
