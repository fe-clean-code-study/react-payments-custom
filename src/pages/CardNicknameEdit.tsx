function CardNicknameEdit() {
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <div className="card-box">
        <div className="big-card">
          <div className="card-top">
            <span className="card-text__big">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="big-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text__big">1111 - 2222 - oooo - oooo</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">프롱이</span>
              <span className="card-text__big">12 / 23</span>
            </div>
          </div>
        </div>
      </div>
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <div
        className="button-box"
        style={{
          position: "absolute",
          bottom: "25px",
          right: "25px",
        }}
      >
        <span className="button-text">확인</span>
      </div>
    </div>
  );
}

export default CardNicknameEdit;
