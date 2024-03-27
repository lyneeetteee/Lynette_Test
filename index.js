// To allow button to work
const btn = document.querySelector(".login");

btn.addEventListener("click", function () {
  var url =
    "https://stg-id.singpass.gov.sg/auth?scope=openid&response_type=code&redirect_uri=https://elegantcaramelynettelim.netlify.app&nonce=7863ce84-ad96-40e8-992e-09778646eb07&client_id=CykS2AyGjhh2PGrZ67thKrsnXOpwvxMb&state=dGVzdCBzdHJpbmcK";

  window.open(url, "blank");
  console.log("click");
});
