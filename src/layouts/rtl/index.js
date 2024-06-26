import { useEffect } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/DashboardNavbar";
import Footer from "components/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Data
import reportsBarChartData from "layouts/rtl/data/reportsBarChartData";

// Soft UI Dashboard React contexts
import { useSoftUIController, setDirection } from "context";

function RTL() {
  const [, dispatch] = useSoftUIController();
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch);

    return () => setDirection(dispatch);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "أموال اليوم" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "مستخدمو اليوم" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "عملاء جدد" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "مبيعات" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid> */}
        </SoftBox>
        <SoftBox mb={3}>
          {/* <Grid container spacing={3}>
            
            
          </Grid> */}
        </SoftBox>
        <SoftBox mb={3}>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="المستخدمين النشطين"
                description={
                  <>
                    (<strong>+23%</strong>) من الأسبوع الماضي
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="نظرة عامة على المبيعات"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% أكثر في عام{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={examples}
              />
            </Grid>
          </Grid> */}
        </SoftBox>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid> */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
