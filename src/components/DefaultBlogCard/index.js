/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

function DefaultBlogCard({ image, category, title, description, action, onClick }) {

  function onClickHandler() {
    onClick(title, description);
  }

  return (
    <div onClick={onClickHandler}>
    <Card       sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      boxShadow: "",
      overflow: "visible",
    }}>

      <SoftBox  pb={3} px={3}>
        {category && (
          <SoftTypography
            variant="caption"
            color={category.color}
            textTransform="uppercase"
            fontWeight="medium"
            textGradient

          >
            {category.label}
          </SoftTypography>
        )}
        <SoftBox display="block" mt={0.5} mb={1}>

              <SoftTypography
                display="inline"
                variant="caption"
                textTransform="capitalize"
                className="color-background"
              >
                {title}
              </SoftTypography>

        </SoftBox>
        <SoftTypography variant="caption" component={"p"} color="text">
          {description.substr(0, 80) + "..."}
        </SoftTypography>
      </SoftBox>
    </Card>
    </div>
  );
}

// Setting default props for the DefaultBlogCard
DefaultBlogCard.defaultProps = {
  category: false,
  author: false,
};

// Typechecking props for the DefaultBlogCard
DefaultBlogCard.propTypes = {
  image: PropTypes.string,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
  }),
};

export default DefaultBlogCard;