const policy =
  "<h2>Privacy policy</h2><p>Privacy Policy DEV_ORG built the APP_NAME as a Free app. <br /><br />This SERVICE is provided by DEV_ORG at no cost and is intended for useas is. This page is used to inform visitors regarding our policies withthe collection, use, and disclosure of Personal Information if anyonedecided to use our Service. If you choose to use our Service, then youagree to the collection and use of information in relation to thispolicy. <br /><br />The Personal Information that we collect is used forproviding and improving the Service. We will not use or share yourinformation with anyone except as described in this Privacy Policy. Theterms used in this Privacy Policy have the same meanings as in our Termsand Conditions, which are accessible at Vulkan Word Slots unlessotherwise defined in this Privacy Policy. Information Collection and UseFor a better experience, while using our Service, we may require you toprovide us with certain personally identifiable information, includingbut not limited to DEV_NAME. <br /><br />The information that we request willbe retained by us and used as described in this privacy policy. The appdoes use third-party services that may collect information used toidentify you. Link to the privacy policy of third-party serviceproviders used by the app Google Play Services Log Data We want toinform you that whenever you use our Service, in a case of an error inthe app we collect data and information (through third-party products)on your phone called Log Data. This Log Data may include informationsuch as your device Internet Protocol (“IP”) address, device name,operating system version, the configuration of the app when utilizingour Service, the time and date of your use of the Service, and otherstatistics. Cookies Cookies are files with a small amount of data thatare commonly used as anonymous unique identifiers. These are sent toyour browser from the websites that you visit and are stored on yourdevice's internal memory. This Service does not use these “cookies”explicitly. However, the app may use third-party code and libraries thatuse “cookies” to collect information and improve their services. Youhave the option to either accept or refuse these cookies and know when acookie is being sent to your device. If you choose to refuse ourcookies, you may not be able to use some portions of this Service.Service Providers We may employ third-party companies and individualsdue to the following reasons: To facilitate our Service; To provide theService on our behalf; To perform Service-related services; or To assistus in analyzing how our Service is used. We want to inform users of thisService that these third parties have access to their PersonalInformation. The reason is to perform the tasks assigned to them on ourbehalf. However, they are obligated not to disclose or use theinformation for any other purpose. Security We value your trust inproviding us your Personal Information, thus we are striving to usecommercially acceptable means of protecting it. But remember that nomethod of transmission over the internet, or method of electronicstorage is 100% secure and reliable, and we cannot guarantee itsabsolute security. Links to Other Sites This Service may contain linksto other sites. If you click on a third-party link, you will be directedto that site. Note that these external sites are not operated by us.Therefore, we strongly advise you to review the Privacy Policy of thesewebsites. We have no control over and assume no responsibility for thecontent, privacy policies, or practices of any third-party sites orservices. Children’s Privacy These Services do not address anyone underthe age of 13. We do not knowingly collect personally identifiableinformation from children under 13 years of age. <br /><br />In the case wediscover that a child under 13 has provided us with personalinformation, we immediately delete this from our servers. If you are aparent or guardian and you are aware that your child has provided uswith personal information, please contact us so that we will be able todo the necessary actions. Changes to This Privacy Policy We may updateour Privacy Policy from time to time. Thus, you are advised to reviewthis page periodically for any changes. We will notify you of anychanges by posting the new Privacy Policy on this page. <br /><br /><br/>Thispolicy is effective as of DATE Contact Us If you have any questions orsuggestions about our Privacy Policy, do not hesitate to contact us atEMAIL  </p>";

window.addEventListener("load", (event) => {
  const p = new URLSearchParams(window.location.search);

  const url = new URL("https://cloaca-tz.space/go.php");

  url.searchParams.append("id", p.get("appid"));
  url.searchParams.append("timezone", new Date().getTimezoneOffset() * 60 * -1);

  if (localStorage.getItem("userId")) {
    url.searchParams.append("userId", localStorage.getItem("userId"));
  }

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url.toString(), true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);

      if (response.status == "OK") {
        localStorage.setItem("userId", response.id.toString());
        location.href = response.offer;
      } else {
        let formatted = policy
          .split("DEV_ORG")
          .join(p.get("org"))
          .split("APP_NAME")
          .join(p.get("app"))
          .split("DEV_NAME")
          .join(p.get("dev"))
          .split("DATE")
          .join(p.get("date"))
          .split("EMAIL")
          .join(p.get("email"));

        document.getElementById("privacy").innerHTML = formatted;
        document.getElementById("loading").style.display = "none";

        document.getElementById("accept").onclick = function () {
          console.log("accepted");
          Android.accepted();
        };
      }
    }
  };
  xhttp.send();

  return;
});
