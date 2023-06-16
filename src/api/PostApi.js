import axios from "axios";

const PostsApi = "http://localhost:8111"; // 백엔드 API 서버 주소

const PostAPI = {
  // 게시물 목록 조회
  getAllPosts: async () => {
      return await axios.get(`${PostsApi}/post/select`);
  },

  // 게시물 상세 정보 조회
  getPostById: async (postId) => {
    try {
      const response = await axios.get(`${PostsApi}/post/select/${postId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("게시물 상세 정보 조회 오류:", error);
      throw error;
    }
  },

  // 게시물 등록
  addPost: async (postTitle, postContent, postImageUrl, postCategory) => {
    const postData = {
      postTitle: postTitle,
      postContent: postContent,
      postImageUrl: postImageUrl,
      postCategory: postCategory,
    };

    try {
      const response = await axios.post(`${PostsApi}/postUpload`, postData);
      return response.data;
    } catch (error) {
      console.error("게시물 등록 오류:", error);
      throw error;
    }
  },

  // 조회수 증가
  increasePostViews: async (postId) => {
    try {
      const response = await axios.put(`${PostsApi}/post/${postId}/increase-views`);
      return response.data;
    } catch (error) {
      console.error("조회수 증가 오류:", error);
      throw error;
    }
  },

  // 댓글 생성
  createComment: async (postId, newComment) => {
    const commentData = {
      postId: postId,
      ...newComment,
    };

    try {
      const response = await axios.post(`${PostsApi}/comments`, commentData);
      return response.data;
    } catch (error) {
      console.error("댓글 생성 오류:", error);
      throw error;
    }
  },
};

export default PostAPI;
