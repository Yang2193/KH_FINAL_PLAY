import axios from "axios";

const ReviewBoard = "http://localhost:8111"; // 백엔드에 대한 주소

//reviewNo 값으로 조회수 증가
const increaseViews = async (reviewNo) => {
  try {
    const response = await axios.put(ReviewBoard + `/review-board/${reviewNo}/increase-views`);
    if (response.status === 200) {
      console.log(`조회수 1 증가 ${reviewNo}`);
    } else {
      console.log(`조회수 실패 ${reviewNo}`);
    }
  } catch (error) {
    console.error(`리뷰의 조회수를 증가하는 동안 오류가 발생했습니다: ${error}`);
  }
};

const ExApi = {
  // 리뷰 리스트 조회
  boardList: async () => {
    return await axios.get(ReviewBoard + "/review-board");
  },
  // 리뷰 상세 페이지 조회
  getReview: async (reNo) => {
    return await axios.get(ReviewBoard + `/review-board/${reNo}`);
  },  
  // 리뷰 등록 업데이트
  uploadReview: async (reTitle, reTitle2, reImg, reExplanation) => {
    const reviewData = {
      reTitle: reTitle,
      reTitle2: reTitle2,
      reImg: reImg,
      reExplanation: reExplanation,
    };

    try {
      const response = await axios.post(ReviewBoard + "/review-board-upLoad", reviewData);
      if (response.status === 200) {
        alert("리뷰 등록 성공");
      } else {
        alert("리뷰 등록 실패");
      }
      return response;
    } catch (error) {
      console.error("리뷰 등록 에러:", error);
      throw error;
    }
  },
  // 조회수 증가
  increaseViews,

  // -------------------------------한줄 평
    OneList: async () => {
      return await axios.get(ReviewBoard + "/one-comment");
    },
};

export default ExApi;
