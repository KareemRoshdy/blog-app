import Logo from "../header/Logo";

const Footer = () => {
  return (
    <footer style={styles}>
      <Logo />
      <p style={{lineHeight: 1.6}}>
        Created By Kareem Roshdy{" "}
        <span style={{ color: "red"}}>&hearts; </span>
        <br />
        Copyright 2023 &copy;
      </p>
    </footer>
  );
};

const styles = {
  color: "var(--white-color)",
  fontSize: "18px",
  padding: "20px 0",
  backgroundColor: "var(--dark2-color)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

export default Footer;
