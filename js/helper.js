const valueId = (id) => document.getElementById(id).value;

const resetId = (id) => document.getElementById(id).value = '';

const getElement = (id) => document.getElementById(id);

const locationHref = (id) => window.location.href = id;

const getFormatDate = (date) => {
  let d = new Date(`${date}`);
  let getDate = d.getDate()
  let months = ["January","Februrar","March","April","May","June","July","August","September","October","November","December"]
  let shortM = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]  
  return `${getDate <= 9 ? `0${getDate}` : getDate} ${shortM[d.getMonth()]} ${d.getFullYear()}`
}

const getFormatNumber = (number) => {
  const n = (typeof number === 'number') ? number : parseFloat(number)
  return (n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

// function Number(number) {
//   this.CleanNumber = number
//   console.log(this.CleanNumber)
// }

// Number.prototype.formatMoney = function(cc, dd, tt){
//   let n = this.CleanNumber,
//   c = isNaN(cc = Math.abs(cc)) ? 2 : cc,
//   d = dd == undefined ? "." : dd,
//   t = tt == undefined ? "," : tt,
//   s = n < 0 ? "-" : "",
//   i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
//   j = (i.length) > 3 ? j % 3 : 0;
//   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
// };


const Footer = () => `
  <section class="hero is-light" style="box-shadow: 0px 1px 2px #c5c5c5 inset; background-color: #fafafa">
    <div class="hero-body">
      <div class="container">
        <div class="columns" style="color: #777777;">
          <div class="column is-2 has-text-centered">
            <img src="../../images/icon/logo-index.png" alt="Logo" style="
              position: relative;
              left: 0px;
              top: 30px;
              width: 110px;
              margin-bottom: 40px;
            ">
          </div>
          <div class="column is-6">
            <p>
              ความทรงจำดีๆ คุณเก็บไว้ที่ไหน ? เรื่องราวดีๆ อาจมีหลงลืมไปได้ หากไม่ได้จดบันทึก
              ประสบการณ์ ที่น่าแบ่งปัน อาจไม่มีใครได้รับรู้ หากคุณไม่ได้เป็นคนเล่าเรื่องราว
              รายละเอียดของภาพถ่าย ในความรู้สึกเก่าๆ อาจมีลบเลือนไปบ้าง หากคุณเผลอละเลยไป
            </p>
            <p class="hightlight">#มาเขียน_มาแชร์_มาเล่า_กับเรา #OHO_Diary</p>
            <p>© 2017 OHO Diary All Rights Reserved</p>
          </div>
          <div class="column is-4">
            <table style="border-left-style:solid; border-left-width:1px">
              <tr><td>&nbsp;นักท่องเที่ยวกว่า <strong>5,210</strong> คน</td></tr>
              <tr><td>&nbsp;นักอ่านกว่า <strong>8,524,742</strong> คน</td></tr>
              <tr><td>&nbsp;เรื่องราวกว่า <strong>8,450</strong> เรื่อง</td></tr>
              <tr><td>&nbsp;โรงแรมกว่า <strong>25,571</strong> แห่ง</td></tr>
              <tr><td>&nbsp;ร้านอาหารกว่า <strong>18,773</strong> แห่ง</td></tr>
              <tr><td>&nbsp;สถานที่ท่องเที่ยว <strong>1,085</strong> แห่ง</td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <div class="columns">
          <div class="column is-9">
            <div id="navMenuTransparentExample" class="navbar-menu">
              <div class="navbar-start" style="position: absolute;bottom: -20px;">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link white colorWhite font_footer_prompt_15 padding__LeftRight" href="#!" style="line-height: 38px;"> <!-- is-active -->
                    Home
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link set-lightGreen lightGreen colorWhite font_footer_prompt_15 padding__LeftRight" href="#!">
                    OHO Calendar
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a href="#!" class="navbar-link set-orange orange colorWhite font_footer_prompt_15 padding__LeftRight">
                    All Topics
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable font_footer_prompt_15">
                  <a class="navbar-link set-blue blue colorWhite padding__LeftRight" href="#!">
                    OHO Topic
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable font_footer_prompt_15">
                  <a class="navbar-link white colorWhite padding__LeftRight" href="#!">
                    เกี่ยวกับเรา
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable font_footer_prompt_15">
                  <a class="navbar-link white colorWhite padding__LeftRight" href="#!">
                    ติดต่อโฆษณา
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-3">
            <div class="social">
              <a class="is-inverted">
                <img src="../../images/icon/if_twitter_252077.svg" class="social-twitter-icon">
              </a>
              <a class="is-inverted">
                <img src="../../images/icon/if_facebook_986944.svg" class="social-facebook-icon">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
`


