// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import SoftButton from "components/SoftButton";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";


function FilterCategory() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const text = {
    color: "#0B2F8A",
    fontSize: "15px",
    fontWeight: "500",
    marginRight: "10px",
  };
  const box = {
    width: "20px",
    marginRight: "20px",
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={15} textAlign="center">
        <SoftTypography
          mb={6}
          style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "30px", lineHeight: "30px",fontFamily:"Inter" }}
        >
          Filter Your Category
        </SoftTypography>
        <SoftBox mt={6}>
          <SoftBox style={{ display: "flex", justifyContent: "center" }}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>PRODUCTION ORDER NUMBER</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>ORDER DATE</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>FROM WAREHOUSE</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>TO WAREHOUSE</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>PRODUCTION ITEM NAME</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>PRODUCTION ITEM CODE</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>QUANTITY PLANNED</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>DOCUMENT ENTRY</SoftTypography>
          </SoftBox>
          <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={3}>
            <input type="checkbox" style={box} />
            <SoftTypography style={text}>OBJECT TYPE</SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox mt={5}>
        <SoftButton
        variant="contained"
        color="info"
        style={{
          backgroundColor: "#0B2F8A",
          boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
          
        }}
      >
       Continue with Selected Category
      </SoftButton>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default FilterCategory;
