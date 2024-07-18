import { useNavigate } from "react-router-dom";
import { Card } from "../components";

function CardEdit() {
  const navigate = useNavigate();

  return (
    <>
      <div className="app">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <button
            style={{
              padding: 0,
              height: "24px",
              marginLeft: "-10px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => navigate("..")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
            </svg>
          </button>
          <h3 className="page-title">카드 추가</h3>
        </div>
        <Card
          type="filled"
          cardName=""
          cardNumber={["", "", "", ""]}
          userName=""
          expiredMonth=""
          expiredYear=""
          nickname=""
        />
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <input className="input-basic" type="text" />-
            <input className="input-basic" type="text" />-
            <input className="input-basic" type="password" />-
            <input className="input-basic" type="password" />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input className="input-basic" type="text" placeholder="MM" />
            <input className="input-basic" type="text" placeholder="YY" />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <input
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </div>
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input className="input-basic w-25" type="password" />
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="13.5"
                cy="13.5"
                r="13"
                fill="white"
                stroke="#BABABA"
              />
              <path
                d="M12.5547 16.8203C12.5547 15.9544 12.6621 15.2643 12.877 14.75C13.0918 14.2357 13.515 13.6725 14.1465 13.0605C14.7845 12.4421 15.1882 12.0026 15.3574 11.7422C15.6178 11.3451 15.748 10.9154 15.748 10.4531C15.748 9.84115 15.5951 9.37565 15.2891 9.05664C14.9896 8.73112 14.5469 8.56836 13.9609 8.56836C13.401 8.56836 12.9486 8.72786 12.6035 9.04688C12.265 9.35938 12.0957 9.78581 12.0957 10.3262H9.72266C9.73568 9.17383 10.1263 8.26237 10.8945 7.5918C11.6693 6.92122 12.6914 6.58594 13.9609 6.58594C15.2695 6.58594 16.2884 6.91797 17.0176 7.58203C17.7533 8.24609 18.1211 9.17383 18.1211 10.3652C18.1211 11.4264 17.6263 12.4714 16.6367 13.5L15.4355 14.6816C15.0059 15.1699 14.7845 15.8828 14.7715 16.8203H12.5547ZM12.3887 19.8574C12.3887 19.4733 12.5091 19.1641 12.75 18.9297C12.9909 18.6888 13.3164 18.5684 13.7266 18.5684C14.1432 18.5684 14.472 18.6921 14.7129 18.9395C14.9538 19.1803 15.0742 19.4863 15.0742 19.8574C15.0742 20.2155 14.957 20.515 14.7227 20.7559C14.4883 20.9967 14.1562 21.1172 13.7266 21.1172C13.2969 21.1172 12.9648 20.9967 12.7305 20.7559C12.5026 20.515 12.3887 20.2155 12.3887 19.8574Z"
                fill="#969696"
              />
            </svg>
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <div style={{ display: "flex", gap: "5px" }}>
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <div className="flex-center w-15">•</div>
            <div className="flex-center w-15">•</div>
          </div>
        </div>
        <div className="button-box mt-10">
          <span className="button-text">다음</span>
        </div>
      </div>

      {/* <h2>2️⃣ 카드 추가 - 카드사 선택</h2>
      <div className="root">
        <div className="app">
          <h3 className="page-title">카드 추가</h3>
          <div className="card-box">
            <div className="small-card">
              <div className="card-top">
                <span className="card-text">클린카드</span>
              </div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom__number">
                  <span className="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              <input className="input-basic" type="text" value="1111" />
              <input className="input-basic" type="text" value="2222" />
              <input className="input-basic" type="password" value="1111" />
              <input className="input-basic" type="password" value="1111" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              <input className="input-basic" type="text" placeholder="MM" />
              <input className="input-basic" type="text" placeholder="YY" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <input
              type="text"
              className="input-basic"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <input className="input-basic w-25" type="password" />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
            <input className="input-basic w-15" type="password" />
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
        <div className="modal-dimmed">
          <div className="modal">
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
            </div>
            <div className="flex-center">
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
              <div className="modal-item-container">
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      <div className="root">
        <div className="app">
          <h3 className="page-title">카드 추가</h3>
          <div className="card-box">
            <div className="small-card">
              <div className="card-top">
                <span className="card-text">클린카드</span>
              </div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom__number">
                  <span className="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div className="card-bottom__info">
                  <span className="card-text">프롱이</span>
                  <span className="card-text">12 / 23</span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <div className="input-box">
              <input className="input-basic" type="text" value="1111" />
              <input className="input-basic" type="text" value="2222" />
              <input className="input-basic" type="password" value="1111" />
              <input className="input-basic" type="password" value="1111" />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <div className="input-box w-50">
              <input
                className="input-basic"
                type="text"
                placeholder="MM"
                value="12"
              />
              <input
                className="input-basic"
                type="text"
                placeholder="YY"
                value="23"
              />
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <input type="text" className="input-basic" value="프롱이" />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <input className="input-basic w-25" type="password" value="111" />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <input className="input-basic w-15" type="password" value="1" />
            <input className="input-basic w-15" type="password" value="1" />
            <input className="input-basic w-15" type="password" value="1" />
            <input className="input-basic w-15" type="password" value="1" />
          </div>
          <div className="button-box">
            <span className="button-text">다음</span>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default CardEdit;
