import './Header.css';

const Header = () => {
  return (
  <div className="Header">
    <h3>오늘은 😎</h3>
    <h1>{new Date().toDateString()}</h1>
  </div>
  );
};

// 이모지 : 윈도우 키 + .
export default Header;