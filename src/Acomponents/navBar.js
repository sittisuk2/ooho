const getEleMenuActiveUser = (name, picture, spoon, linkspoon) => `
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item hover-none-style" href="../../index.html">
                <img src="${spoon}images/icon/logo-index.png" alt="Logo" style="width: 83px; margin-left: -12px;">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navMenuTransparentExample" class="navbar-menu">
              <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link brown padding__LeftRight" href="${linkspoon}home.html"> <!-- is-active -->
                    Home
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link lightGreen padding__LeftRight" href="#!">
                    OHO Calendar
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a href="#!" class="navbar-link orange padding__LeftRight">
                    All Topics
                  </a>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link blue padding__LeftRight" href="#!">
                    OHO Topic
                  </a>
                </div>
              </div>

              <div id="navbarMenuHeroB" class="navbar-menu">
                <div class="navbar-end">
                  <span class="navbar-item">
                    <img src="${picture}" alt="" style="width: 30px;margin-top: 5px;margin-right: 10px">
                    <a class="is-inverted" href="${linkspoon}home.html">
                      <p class="font__colorBlack"><u><b id="username">${name}</b></u></p>
                    </a>
                  </span>
                  <span class="navbar-item" style="margin-right: -6px;">
                    <span class="line"></span>
                    <a class="is-inverted">
                      <img src="${spoon}images/icon/Bell.png" alt="" style="width: 30px;margin-top: 5px;">
                    </a>
                  </span>
                  <div class="dropdown" style="z-index: 1000">
                    <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                      <div class="dropdown-content">
                        <!-- <div class="dropdown-item">
                          <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                        </div>
                        <hr class="dropdown-divider"> -->
                        <a href="#" onclick="console.log('edit profile')" class="dropdown-item">
                          Edit Profile
                        </a> 
                        <hr class="dropdown-divider">
                        <a href="#" onclick="logout('${spoon}')" class="dropdown-item">
                          <font color="red"><b>Log out</b></font>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button onclick="dropdown()" class="btn" aria-haspopup="true" aria-controls="dropdown-menu2">
                    <span class="navbar-item">
                      <span class="line"></span>
                      <a class="is-inverted" style="font-size: 26px;">
                        <i class="fa fa-cog font__colorBlack" aria-hidden="true"></i>
                      </a>
                    </span>
                  </button>
                  <span class="navbar-item">
                    <span class="line"></span>
                    <a class="is-inverted">
                      <img src="${spoon}images/language/thailand_square_sticker_640.png" alt="" style="width: 30px;margin-top: 5px;">
                    </a>
                  </span>
                  <span class="navbar-item">
                    <a class="is-inverted" style="font-size: 23px; margin-top: -5px">
                      <i class="fa fa-search font__colorBlack" aria-hidden="true"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  `

const TextTest = 'สปอร์ตจิตพิสัย ช็อคตัวตนฮองเฮา มุมมองโคโยตี้ไลท์รวมมิตรโปรเจ็กต์ เบลอแอปเปิล พลานุภาพสงบสุข เบญจมบพิตรช็อปปิ้งกษัตริยาธิเพรส เมาท์ บร็อกโคลีแจมม้าหินอ่อนโหลน สหรัฐซิง'
const sliceText = (src) => src.slice(0, 166).concat('...')

const getElementCardFunc = (id, title, viewCount, startTravel) => `
<div class="row">
  <div class="columns">
    <div class="column is-3">
      <figure class="image is-4by2">
        <img src="images/blog/img-1.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="column is-7">
      <div class="content">
        <a href="src/topicScreen/topic.html#${id}"><h1 style="cursor: pointer">${title}</h1></a>
        <p>${sliceText(TextTest)}</p>
        <!-- <span><span><img src="images/icon/map-icon.png"/></span>  <a href="#!" class="underline">ถนนข้าวสาร</a></span> -->
      </div>
    </div>
    <div class="column is-2">
      <div class="card">
        <div class="card-content card-content-hight">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="images/writer/writer-1.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle">Tommy โล..</p>
              <p style="position: relative;right: 60px;bottom: -5px; width: 10em;font-weight: 700">
                <img src="images/icon/view-icon.png"/>
                <span style="position: relative;bottom: 6px;">450</span>
              </p>
              <p class="writer-like-icon">
                <img src="images/icon/like-icon.png"/>
                <span style="position: relative;bottom: 10px;">51</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`

window.getProfile = (spoon = '', linkspoon = '') => {
  const profile = JSON.parse(localStorage.getItem('profile'))
  if (profile) {
    const splitString = profile.sub.split('|')
    if (splitString[0] === 'auth0') {
      document.getElementById('menu').innerHTML = getEleMenuActiveUser(profile.nickname, profile.picture, spoon, linkspoon)
    } else {
      document.getElementById('menu').innerHTML = getEleMenuActiveUser(profile.given_name, profile.picture, spoon, linkspoon)
    }
  }
}

const logout = (linkspoon = '') => {
  localStorage.clear()
  window.location.href = `${linkspoon}index.html`
}

window.dropdown = () => {
  var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('is-active');
}