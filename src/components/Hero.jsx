import heroImg from "../assets/heroImg.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>
            리액트 수업으로 배운 프로젝트 중 일부입니다. 영화 찾기, 영화 리스트,
            카드 뒤집기 게임, 깃허브 유저 찾기 사이트입니다.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
