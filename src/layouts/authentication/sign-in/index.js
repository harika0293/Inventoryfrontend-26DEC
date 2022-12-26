import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import PhoneInput from "react-phone-number-input";
import { Form, Alert, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { useUserAuth } from "../../context/user-auth";
import "react-phone-number-input/style.css";

function SignIn() {
  const button = {
    width: "400px",
    height: "40px",
    textAlign: "center",
    fontWeight: 600,
    border: "none",
    borderRadius: "16px",
    background: "#0B2F8A",
    boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
    color: "white",
  };
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined) {
      return alert("Please enter a valid Phone Number...");
    }
    //return setError("Please enter a valid Phone Number...");
    //return alert("Please enter a valid Phone Number...");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      //alert("Too many Phone OTP Requests From Browser Today");
      //setError(err.message);
      console.log(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/dashboard");
    } catch (err) {
      alert("Please Enter Valid OTP");
      // setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <CoverLayout image={curved9}>
      <div className="p-4 box">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div
              className="button-right"
              style={{ marginTop: "10px", display: "flex", flexDirection: "row" }}
            >
              <PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
                fullWidth="true"
                containerStyle={{
                  border: "10px solid red",
                  height: "55px",
                  width: "300px",
                }}
                inputStyle={{
                  height: "55px",
                  width: "300px",
                }}
              />
            </div>
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div
            className="button-right"
            style={{ marginTop: "50px", display: "flex", flexDirection: "row" }}
          >
            &nbsp;
            <Button type="submit" variant="primary" style={button}>
              SEND OTP
            </Button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder=" Enter OTP Here"
              onChange={(e) => setOtp(e.target.value)}
              style={{
                width: "400px",
                height: "40px",
                borderRadius: "15px",
                borderColor: "#0B2F8A",
                textAlign: "center",
              }}
            />
          </Form.Group>
          <div
            className="button-right"
            style={{ marginTop: "35px", display: "flex", flexDirection: "row" }}
          >
            &nbsp;
            <Button type="submit" style={button}>
              VERIFY
            </Button>
          </div>
        </Form>

        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Didn&apos;t get an OTP?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-in"
              variant="button"
              style={{ color: "#0B2F8A" }}
              fontWeight="bold"
            >
              Click Here
            </SoftTypography>
          </SoftTypography>
        </SoftBox>

        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              style={{ color: "#0B2F8A" }}
              fontWeight="bold"
            >
              Register
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftBox textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            <SoftTypography
              component={Link}
              to="/authentication/email-signin"
              variant="button"
              style={{ color: "#0B2F8A" }}
              fontWeight="bold"
            >
              Signin with Email
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </div>
    </CoverLayout>
  );
}

export default SignIn;
