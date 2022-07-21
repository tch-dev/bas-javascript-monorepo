import { Divider } from "antd";
import { observer } from "mobx-react";
import { Switch, Route } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import CookieConsent from "react-cookie-consent";

import BlockInfo from "./BlockInfo";
import Conditions from "./Conditions";

const Header = observer(() => {
  return (
    <div style={{ width: "100%" }}>
      <div className="main-page">
        <header className="header">
          <h1>
            <a href="https://co2ledger.net">
              <img alt="" className="logo" src="../logo-chain-co2.svg" />
            </a>
          </h1>
          <nav>
            <a href="https://exp.co2ledger.net">Explorer</a>
          </nav>
        </header>

        <BlockInfo />
        <Divider />
        <Switch>
          <Route component={HomePage} path="/" />
        </Switch>
      </div>
      <CookieConsent
        overlay
        buttonStyle={{
          color: "#fff",
          backgroundColor: "#c60000",
          fontSize: "13px",
          borderRadius: "30px",
          padding: "4px 16px",
          margin: "auto",
        }}
        buttonText="ยอมรับข้อตกลง"
        contentClasses="condition-page"
        contentStyle={{
          margin: "0",
          display: "block",
          flex: "none",
          with: "auto",
        }}
        cookieName="jfinstk"
        expires={365}
        location="top"
        style={{
          background: "#2e3338",
          display: "block",
          padding: "32px",
          maxWidth: "600px",
          position: "relative",
          margin: "20px auto",
          borderRadius: "16px",
        }}
      >
        <Conditions />
      </CookieConsent>
    </div>
  );
});

export default Header;
