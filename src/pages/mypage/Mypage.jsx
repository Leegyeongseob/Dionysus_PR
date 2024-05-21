import "../../style/mypagestyle/MypageStyle.scss";
import { Link } from "react-router-dom";
import ReviewItem from "./Common/ReviewItem";
import JjimItem from "./Common/JjimItem";

// import { UseContext, useState } from "react";
// import { UserContext } from "../../global/UserStore";
// import { storage } from "../../firebase/profileupload/ProfileImgUpload";
const Mypage = () => {
  // const context = UseContext(UseContext);
  // const { profileimg, setProfileimg } = context;
  // const [file, setFile] = useState(null); // 선택된 파일에 대한 상태관리
  // const [url, setUrl] = useState(""); // 사진 경로 (파이어베이스의 업로드된 경로)
  // const handleUploadClick = async () => {
  //   if (!file) {
  //     alert("파일을 선택해 주세요.");
  //     return;
  //   }
  //   try {
  //     const storageRef = storage.ref();
  //     const fileRef = storageRef.child(file.name);
  //     await fileRef.put(file); // 파이어베이스에 생성한 스토리지에 파일 업로드
  //     // 업로드 후 이미지 URL 가져오기
  //     const uploadedUrl = await fileRef.getDownloadURL();
  //     console.log(uploadedUrl);
  //     setUrl(uploadedUrl);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div>
      <div className="container">
        <div className="contents">
          <div className="mem">
            <div className="meminfo1">
              <div className="profile">
                <div className="person">
                  <div className="img"></div>
                  <p>
                    <span>홍길동</span>님 반갑습니다!
                  </p>
                </div>
                <div className="btn">
                  <Link to="/MemInfo">
                    <button>정보수정</button>
                  </Link>
                  <Link to="/SignOut">
                    <button>회원탈퇴</button>
                  </Link>
                  <Link to="/">
                    <button>로그아웃</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="meminfo2">
              <p>아이디 :</p>
              <p>주소 : </p>
              <p>전화번호 :</p>
            </div>
          </div>

          <h2>찜 목록</h2>
          <hr />
          <JjimItem />
          <h2>후기</h2>
          <hr />
          <ReviewItem />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
