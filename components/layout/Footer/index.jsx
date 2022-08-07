import { Grid, Typography } from "@material-ui/core";
import GoogleMap from "../../../common/GoogleMap";

const Footer = () => {
  return (
    <Grid
      container
      style={{
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: "#cc6600",
        color: "white",
        minHeight: "calc(100vh - 577px)",
      }}
    >
      <Grid item xs={12} md={8} style={{ paddingLeft: 20 + "px" }}>
        <Typography>
          <b>Trụ sở chính: </b>
          Công ty CP BAKERYSHOP - ĐKKD: 0967903498 do sở KHĐT TPHCM cấp lần
          đầu ngày 08/08/2022
        </Typography>
        <Typography>
          <b>Nhà máy: </b>
          Số 11 Nguyễn Đình Chiểu, phường ĐaKao, quận 1, Tp. Hồ Chí Minh, Việt Nam
        </Typography>
        <Typography>
          <b>Địa chỉ: </b>
          97 Man Thiện, Phường Hiệp Phú , Thành phố Thủ Đức , Thành phố Hồ Chí Minh
        </Typography>
        <Typography>
          <b>Điện thoại: </b>
          0967903498
        </Typography>
        <Typography>
          <b>Email: </b>
          nguyenquangtruonghktcute@gmail.com
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <GoogleMap />
      </Grid>
    </Grid>
  );
};

export default Footer;
