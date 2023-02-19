:root {
  --portal-color: #5F9EA0;
  --portal-color-old: #ff9715;
}

/* :: 1.0 Import Fonts */
@import url(&#39;https://fonts.googleapis.com/css?family=Lato|Open+Sans|Roboto&#39;);
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: &#39;Lato&#39;, sans-serif;
  color: #1a1a1a;
  line-height: 1.3;
  font-weight: 500; }

p {
   font-family: &#39;Roboto&#39;, sans-serif;
   color: #777777;
   color: #252525;
   font-size: 14px;
   line-height: 2;
   font-weight: 400; }

a,
a:hover,
a:focus {
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
  text-decoration: none;
  outline: 0 solid transparent;
  color: #000000;
  font-weight: 500;
  /*font-size: 14px;*/
  font-family: &quot;Roboto&quot;, sans-serif; }

img {
  height: auto;
  max-width: 100%; }

/* :: 3.1.0 Spacing */
.mt-15 {
  margin-top: 15px !important; }

.mt-30 {
  margin-top: 30px !important; }

.mt-50 {
  margin-top: 50px !important; }

.mt-70 {
  margin-top: 70px !important; }

.mt-100 {
  margin-top: 100px !important; }

.mb-15 {
  margin-bottom: 15px !important; }

.mb-30 {
  margin-bottom: 30px !important; }

.mb-50 {
  margin-bottom: 50px !important; }

.mb-70 {
  margin-bottom: 70px !important; }

.mb-100 {
  margin-bottom: 100px !important; }

.ml-15 {
  margin-left: 15px !important; }

.ml-30 {
  margin-left: 30px !important; }

.ml-50 {
  margin-left: 50px !important; }

.mr-15 {
  margin-right: 15px !important; }

.mr-30 {
  margin-right: 30px !important; }

.mr-50 {
  margin-right: 50px !important; }

.p-15 {
  padding: 15px !important; }

.p-30 {
  padding: 30px !important; }

.p-50 {
  padding: 50px !important; }

.pb-70 {
  padding-bottom: 70px !important; }

.px-30 {
  padding-left: 30px !important;
  padding-right: 30px !important; }

.pt-30 {
  padding-top: 30px; }

/* :: 3.2.0 Height */
.height-400 {
  height: 400px !important; }

.height-500 {
  height: 500px !important; }

.height-600 {
  height: 600px !important; }

.height-700 {
  height: 700px !important; }

.height-800 {
  height: 800px !important; }

    /* :: 3.4.0 Preloader */
    .preloader {
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99999;
    }
  
    .preloader .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
  
    .preloader .lds-ellipsis div {
      position: absolute;
      top: 27px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #000000;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
  
    .preloader .lds-ellipsis div:nth-child(1) {
      left: 6px;
      -webkit-animation: lds-ellipsis1 0.6s infinite;
      animation: lds-ellipsis1 0.6s infinite;
    }
  
    .preloader .lds-ellipsis div:nth-child(2) {
      left: 6px;
      -webkit-animation: lds-ellipsis2 0.6s infinite;
      animation: lds-ellipsis2 0.6s infinite;
    }
  
    .preloader .lds-ellipsis div:nth-child(3) {
      left: 26px;
      -webkit-animation: lds-ellipsis2 0.6s infinite;
      animation: lds-ellipsis2 0.6s infinite;
    }
  
    .preloader .lds-ellipsis div:nth-child(4) {
      left: 45px;
      -webkit-animation: lds-ellipsis3 0.6s infinite;
      animation: lds-ellipsis3 0.6s infinite;
    }
  
    @-webkit-keyframes lds-ellipsis1 {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
  
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  
    @keyframes lds-ellipsis1 {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
  
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  
    @-webkit-keyframes lds-ellipsis3 {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
  
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
    }
  
    @keyframes lds-ellipsis3 {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
  
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
    }
  
    @-webkit-keyframes lds-ellipsis2 {
      0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
      }
  
      100% {
        -webkit-transform: translate(19px, 0);
        transform: translate(19px, 0);
      }
    }
  
    @keyframes lds-ellipsis2 {
      0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
      }
  
      100% {
        -webkit-transform: translate(19px, 0);
        transform: translate(19px, 0);
      }
    }

/* :: 3.3.0 Section Padding */
.section-padding-100 {
  padding-top: 100px;
  padding-bottom: 100px; }

.section-padding-100-0 {
  padding-top: 100px;
  padding-bottom: 0; }

.section-padding-0-100 {
  padding-top: 0;
  padding-bottom: 100px; }

.section-padding-100-70 {
  padding-top: 100px;
  padding-bottom: 70px; }

.section-padding-70-0 {
  padding-top: 70px;
  padding-bottom: 0; }

.section-padding-50-0 {
  padding-top: 50px;
  padding-bottom: 0; }

.section-padding-30-0 {
  padding-top: 30px;
  padding-bottom: 0; }

/* :: 3.4.0 Preloader */
.preloader {
  background-color: #007600;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999; }

.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1; }
  .spinner .double-bounce1,
  .spinner .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffffff;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out; }
  .spinner .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1s; }

@-webkit-keyframes sk-bounce {
  0%,
    100% {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1); } }
@keyframes sk-bounce {
  0%,
    100% {
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1); } }


.bg-img {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat; }

.bg-gray {
  background-color: #f2f4f5; }

.font-bold {
  font-weight: 700; }

.font-light {
  font-weight: 300; }

.bg-overlay {
  background-image: url(&#39;../img/banner/malio.jpg&#39;);
  position: relative;
  z-index: 2;
  background-position: center center;
  background-size: cover; }
  .bg-overlay::after {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(rgba(19, 153, 138, 0.86) 0%, rgba(18, 153, 138, 0.85) 99%);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: &quot;&quot;; }

.bg-fixed {
  background-attachment: fixed !important; }

input:focus {
  outline-style: none;
  box-shadow: none;
  border-color: transparent; }

.box-shadow {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15) !important; }

/* :: 3.6.0 ScrollUp */
#scrollUp {
  background-color: #000000;
  border-radius: 0;
  bottom: 50px;
  color: #ffffff;
  font-size: 14px;
  height: 40px;
  line-height: 42px;
  right: 50px;
  text-align: center;
  width: 40px;
  border-radius: 0%;
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15); }
  #scrollUp:hover, #scrollUp:focus {
    background-color: #007600;
    color: #ffffff; }
  @media only screen and (max-width: 767px) {
    #scrollUp {
      bottom: 30px;
      right: 30px;
      line-height: 32px;
      width: 30px;
      height: 30px; } }

/* :: 3.7.0 mag Button */
.mag-btn {
  background-color: #007600;
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
  position: relative;
  z-index: 1;
  display: inline-block;
  min-width: 160px;
  height: 50px;
  color: #ffffff;
  border-radius: 0;
  padding: 0 30px;
  font-size: 16px;
  line-height: 50px;
  font-weight: 500;
  text-transform: capitalize; }
  .mag-btn:hover, .mag-btn:focus {
    font-size: 16px;
    font-weight: 500;
    background-color: #000000;
    color: #ffffff; }

/* :: 4.0 Header Area CSS */
.header-area {
  position: relative;
  z-index: 1000;
  width: 100%; }
  .header-area .mag-main-menu {
    position: relative;
    width: 100%;
    height: 70px; }
    @media only screen and (max-width: 767px) {
      .header-area .mag-main-menu {
        height: 60px; } }
    .header-area .mag-main-menu .classy-navbar {
      padding: 0;
      padding-left: 30px; }
      @media only screen and (max-width: 767px) {
        .header-area .mag-main-menu .classy-navbar {
          padding-left: 15px;
          height: 60px; } }
      .header-area .mag-main-menu .classy-navbar .classynav ul li a {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1px; }
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .header-area .mag-main-menu .classy-navbar .classynav ul li a {
            padding: 0 5px; } }
        .header-area .mag-main-menu .classy-navbar .classynav ul li a:hover, .header-area .mag-main-menu .classy-navbar .classynav ul li a:focus {
          color: #007600; }
      .header-area .mag-main-menu .classy-navbar .classynav ul li ul li a {
        text-transform: capitalize;
        letter-spacing: 0;
        padding: 0 20px; }
     /* @media only screen and (max-width: 767px) {
        .header-area .mag-main-menu .classy-navbar .nav-brand {
          margin-right: 15px;
          max-width: 60px; } }*/
    .header-area .mag-main-menu .top-search-area {
      position: relative;
      z-index: 1;
      margin-left: 30px; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .header-area .mag-main-menu .top-search-area {
          margin-left: 15px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .header-area .mag-main-menu .top-search-area {
          margin-left: 15px; } }
      @media only screen and (max-width: 767px) {
        .header-area .mag-main-menu .top-search-area {
          margin-left: 15px; } }
      .header-area .mag-main-menu .top-search-area form {
        position: relative;
        z-index: 1;
        border-left: 1px solid #ebebeb; }
        .header-area .mag-main-menu .top-search-area form input {
          -webkit-transition-duration: 500ms;
          -o-transition-duration: 500ms;
          transition-duration: 500ms;
          width: 270px;
          height: 70px;
          border: none;
          color: #777777;
          font-size: 14px;
          font-style: italic;
          padding: 0 30px; }
          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .header-area .mag-main-menu .top-search-area form input {
              padding: 0 15px;
              width: 200px;
              font-size: 12px; } }
          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .header-area .mag-main-menu .top-search-area form input {
              width: 230px;
              font-size: 12px; } }
          @media only screen and (max-width: 767px) {
            .header-area .mag-main-menu .top-search-area form input {
              padding: 0 15px;
              width: 110px;
              font-size: 11px;
              height: 60px; } }
          @media only screen and (min-width: 480px) and (max-width: 767px) {
            .header-area .mag-main-menu .top-search-area form input {
              width: 180px; } }
          @media only screen and (min-width: 576px) and (max-width: 767px) {
            .header-area .mag-main-menu .top-search-area form input {
              width: 200px; } }
          .header-area .mag-main-menu .top-search-area form input:focus {
            box-shadow: none; }
        .header-area .mag-main-menu .top-search-area form button {
          position: absolute;
          width: auto;
          height: 70px;
          background-color: transparent;
          top: 50%;
          right: 30px;
          font-size: 16px;
          z-index: 99;
          border: none;
          cursor: pointer;
          color: #1a1a1a;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%); }
          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .header-area .mag-main-menu .top-search-area form button {
              right: 0; } }
          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .header-area .mag-main-menu .top-search-area form button {
              right: 15px; } }
          @media only screen and (max-width: 767px) {
            .header-area .mag-main-menu .top-search-area form button {
              right: 0; } }
          .header-area .mag-main-menu .top-search-area form button:focus {
            box-shadow: none; }
          .header-area .mag-main-menu .top-search-area form button:hover {
            color: #007600; }
    .header-area .mag-main-menu .login-btn {
      position: relative;
      z-index: 1;
      padding: 0 30px;
      height: 70px;
      line-height: 70px;
      font-size: 16px;
      border-left: 1px solid #ebebeb;
      text-align: center; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .header-area .mag-main-menu .login-btn {
          padding: 0 25px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .header-area .mag-main-menu .login-btn {
          padding: 0 25px; } }
      @media only screen and (max-width: 767px) {
        .header-area .mag-main-menu .login-btn {
          padding: 0 15px;
          height: 60px;
          line-height: 60px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .header-area .mag-main-menu .login-btn {
          padding: 0 20px; } }
      .header-area .mag-main-menu .login-btn:hover, .header-area .mag-main-menu .login-btn:focus {
        color: #007600; }
    .header-area .mag-main-menu .submit-video {
      position: relative;
      z-index: 1;
      padding: 0 20px;
      height: 70px;
      background-color: #007600;
      line-height: 70px;
      font-size: 13px;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 1px;
      text-transform: uppercase;
      width: 150px;
      text-align: center; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .header-area .mag-main-menu .submit-video {
          padding: 0 10px;
          width: 130px;
          font-size: 12px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .header-area .mag-main-menu .submit-video {
          padding: 0 10px;
          width: 130px;
          font-size: 12px; } }
      @media only screen and (max-width: 767px) {
        .header-area .mag-main-menu .submit-video {
          padding: 0 15px;
          width: 40px;
          height: 60px;
          line-height: 60px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .header-area .mag-main-menu .submit-video {
          padding: 0 20px;
          width: 50px; } }
      .header-area .mag-main-menu .submit-video:hover, .header-area .mag-main-menu .submit-video:focus {
        background-color: #404040; }
      .header-area .mag-main-menu .submit-video span {
        display: none; }
        @media only screen and (max-width: 767px) {
          .header-area .mag-main-menu .submit-video span {
            font-size: 14px;
            display: block; } }
      .header-area .mag-main-menu .submit-video .video-text {
        display: block; }
        @media only screen and (max-width: 767px) {
          .header-area .mag-main-menu .submit-video .video-text {
            display: none; } }
  .header-area .is-sticky .mag-main-menu {
    z-index: 9999;
    box-shadow: 0 5px 50px 0 rgba(0, 0, 0, 0.2); }

.breakpoint-on .classynav {
  padding-top: 70px;
  padding-bottom: 70px; }

/* :: 5.0 Hero Area CSS */
.hero-blog-post {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 720px; }
  @media only screen and (min-width: 1200px) and (max-width: 1499px) {
    .hero-blog-post {
      height: 650px; } }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .hero-blog-post {
      height: 550px; } }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .hero-blog-post {
      height: 500px; } }
  @media only screen and (max-width: 767px) {
    .hero-blog-post {
      height: 350px; } }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    .hero-blog-post {
      height: 400px; } }
  .hero-blog-post .post-content .post-meta {
    position: relative;
    z-index: 1;
    margin-bottom: 20px; }
    .hero-blog-post .post-content .post-meta a {
      position: relative;
      z-index: 1;
      display: inline-block;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #007600; }
      .hero-blog-post .post-content .post-meta a:last-child {
        margin-left: 20px; }
        .hero-blog-post .post-content .post-meta a:last-child::after {
          content: &#39;/&#39;;
          position: absolute;
          top: 0;
          left: -15px;
          z-index: 1; }
      .hero-blog-post .post-content .post-meta a:hover, .hero-blog-post .post-content .post-meta a:focus {
        color: #ffffff; }
  .hero-blog-post .post-content .post-title {
    font-size: 45px;
    color: #ffffff;
    font-weight: 400;
    display: block;
    margin-bottom: 20px; }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      .hero-blog-post .post-content .post-title {
        font-size: 36px; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .hero-blog-post .post-content .post-title {
        font-size: 30px; } }
    @media only screen and (max-width: 767px) {
      .hero-blog-post .post-content .post-title {
        font-size: 20px; } }
    .hero-blog-post .post-content .post-title:hover, .hero-blog-post .post-content .post-title:focus {
      color: #007600; }
  .hero-blog-post .post-content .video-play {
    width: 60px;
    height: 60px;
    background-color: rgba(26, 26, 26, 0.5);
    border-radius: 50%;
    display: inline-block;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    line-height: 60px; }
    .hero-blog-post .post-content .video-play:hover, .hero-blog-post .post-content .video-play:focus {
      background-color: #007600; }

.hero-area {
  position: relative;
  z-index: 1; }
  .hero-area .owl-prev,
  .hero-area .owl-next {
    position: absolute;
    background-color: rgba(235, 235, 235, 0.2);
    width: 50px;
    height: 50px;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    line-height: 54px;
    top: 50%;
    left: 3%;
    margin-top: -25px;
    /*-webkit-transition-duration: 500ms;*/
    /*-o-transition-duration: 500ms;*/
    transition-duration: 500ms; }
    @media only screen and (max-width: 767px) {
      .hero-area .owl-prev,
      .hero-area .owl-next {
        width: 40px;
        height: 40px;
        font-size: 18px;
        line-height: 44px;
        margin-top: -20px; } }
    .hero-area .owl-prev:hover, .hero-area .owl-prev:focus,
    .hero-area .owl-next:hover,
    .hero-area .owl-next:focus {
      background-color: #007600; }
  .hero-area .owl-next {
    left: auto;
    right: 3%; }

/*.pagination .page-item .page-link {
  background-color: #e1e1e1;
  min-width: 44px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  color: #1a1a1a;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  border-radius: 3px;
  padding: 0 15px;
  margin-right: 5px;
  border: 1px solid #ebebeb; }*/
  .pagination .page-item .page-link {
  height: 33px;
  /*line-height: 1em;*/
  color: #1a1a1a;
  text-align: center;
  display: inline-block;
  border-radius: 20px;
  margin-right: 5px;
  border: 1px solid #dcdada; }
  .pagination .page-item .page-link:hover, .pagination .page-item .page-link:focus {
    background-color: #dcdada;
    color: #ffffff;
    border-color: #dcdada; }
.pagination .page-item.active .page-link {
  background-color: var(--portal-color);
  color: #ffffff;
  border-color: var(--portal-color); }

/* :: 6.0 Post Area CSS */
.mag-posts-area {
  position: relative;
  z-index: 1;
  padding: 0 15px; }

.post-sidebar-area {
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 300px;
  flex: 0 0 300px;
  max-width: 300px;
  width: 300px;
  margin-left: 15px;
  margin-right: 15px; }
  @media only screen and (min-width: 1200px) and (max-width: 1499px) {
    .post-sidebar-area {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 280px;
      flex: 0 0 280px;
      max-width: 280px;
      width: 280px; } }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .post-sidebar-area {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(50% - 30px);
      flex: 0 0 calc(50% - 30px);
      max-width: calc(50% - 30px);
      width: calc(50% - 30px); } }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .post-sidebar-area {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(50% - 30px);
      flex: 0 0 calc(50% - 30px);
      max-width: calc(50% - 30px);
      width: calc(50% - 30px); } }
  @media only screen and (max-width: 767px) {
    .post-sidebar-area {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(100% - 30px);
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      width: calc(100% - 30px); } }

.mag-posts-content {
  position: relative;
  z-index: 1;
  background-color: #ffffff;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 calc(100% - 690px);
  flex: 0 0 calc(100% - 690px);
  max-width: calc(100% - 690px);
  width: calc(100% - 690px);
  margin-left: 15px;
  margin-right: 15px; }
  @media only screen and (min-width: 1200px) and (max-width: 1499px) {
    .mag-posts-content {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(100% - 650px);
      flex: 0 0 calc(100% - 650px);
      max-width: calc(100% - 650px);
      width: calc(100% - 650px); } }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .mag-posts-content {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(100% - 30px);
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      width: calc(100% - 30px); } }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .mag-posts-content {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(100% - 30px);
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      width: calc(100% - 30px); } }
  @media only screen and (max-width: 767px) {
    .mag-posts-content {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 calc(100% - 30px);
      flex: 0 0 calc(100% - 30px);
      max-width: calc(100% - 30px);
      width: calc(100% - 30px); } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .post-sidebar-area.left-sidebar {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    order: 10; } }
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .post-sidebar-area.left-sidebar {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    order: 10; } }
@media only screen and (max-width: 767px) {
  .post-sidebar-area.left-sidebar {
    -webkit-box-ordinal-group: 11;
    -ms-flex-order: 10;
    order: 10; } }

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .post-sidebar-area.right-sidebar {
    -webkit-box-ordinal-group: 31;
    -ms-flex-order: 30;
    order: 30; } }
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .post-sidebar-area.right-sidebar {
    -webkit-box-ordinal-group: 31;
    -ms-flex-order: 30;
    order: 30; } }
@media only screen and (max-width: 767px) {
  .post-sidebar-area.right-sidebar {
    -webkit-box-ordinal-group: 31;
    -ms-flex-order: 30;
    order: 30; } }

.single-blog-post {
  position: relative;
  z-index: 1;
  /*border-bottom: 1px solid #ebebeb;*/
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  padding-bottom: 15px;
  margin-bottom: 15px; }
  .single-blog-post:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none; }
  .single-blog-post .post-thumbnail {
    position: relative;
    z-index: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70px;
    flex: 0 0 70px;
    max-width: 70px;
    width: 70px; }
    .single-blog-post .post-thumbnail img {
      width: 100%; }
  .single-blog-post .post-content {
    padding-left: 15px;
    margin-top: -5px; }
    .single-blog-post .post-content .post-title {
      font-size: 16px;
      margin-bottom: 8px;
      display: block; }
      @media only screen and (max-width: 767px) {
        .single-blog-post .post-content .post-title {
          font-size: 14px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-blog-post .post-content .post-title {
          font-size: 16px; } }
      .single-blog-post .post-content .post-title:hover, .single-blog-post .post-content .post-title:focus {
        color: #007600; }
    .single-blog-post .post-content .post-meta a {
      font-size: 14px;
      color: #777777; }
      @media only screen and (max-width: 767px) {
        .single-blog-post .post-content .post-meta a {
          font-size: 13px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-blog-post .post-content .post-meta a {
          font-size: 14px; } }
      .single-blog-post .post-content .post-meta a:hover, .single-blog-post .post-content .post-meta a:focus {
        color: #007600; }
  .single-blog-post.style-2 {
    border-bottom-color: #3d3d3d; }
    .single-blog-post.style-2:last-child {
      border-bottom: none; }
    .single-blog-post.style-2 .post-content .post-title {
      color: #ffffff;
      font-size: 14px; }
      .single-blog-post.style-2 .post-content .post-title:hover, .single-blog-post.style-2 .post-content .post-title:focus {
        color: #007600; }
  .single-blog-post.style-3 {
    padding-bottom: 0;
    border-bottom: none; }
    .single-blog-post.style-3 .post-thumbnail {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 120px;
      flex: 0 0 120px;
      max-width: 120px;
      width: 120px; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .single-blog-post.style-3 .post-thumbnail {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 50px;
          flex: 0 0 50px;
          max-width: 50px;
          width: 50px; } }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .single-blog-post.style-3 .post-thumbnail {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 100;
          flex: 0 0 100;
          max-width: 100;
          width: 100; } }
      @media only screen and (max-width: 767px) {
        .single-blog-post.style-3 .post-thumbnail {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 60px;
          flex: 0 0 60px;
          max-width: 60px;
          width: 60px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-blog-post.style-3 .post-thumbnail {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 80px;
          flex: 0 0 80px;
          max-width: 80px;
          width: 80px; } }
    .single-blog-post.style-3 .post-content {
      padding-left: 15px; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .single-blog-post.style-3 .post-content {
          padding-left: 10px; } }
      .single-blog-post.style-3 .post-content .post-title {
        font-size: 18px;
        margin-bottom: 15px; }
        @media only screen and (min-width: 1200px) and (max-width: 1499px) {
          .single-blog-post.style-3 .post-content .post-title {
            font-size: 14px; } }
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-blog-post.style-3 .post-content .post-title {
            font-size: 18px; } }
        @media only screen and (max-width: 767px) {
          .single-blog-post.style-3 .post-content .post-title {
            font-size: 14px; } }
        @media only screen and (min-width: 480px) and (max-width: 767px) {
          .single-blog-post.style-3 .post-content .post-title {
            font-size: 16px; } }
      .single-blog-post.style-3 .post-content .post-meta a {
        font-size: 14px;
        color: #777777;
        margin-right: 20px; }
        @media only screen and (min-width: 1200px) and (max-width: 1499px) {
          .single-blog-post.style-3 .post-content .post-meta a {
            margin-right: 10px;
            font-size: 11px; } }
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-blog-post.style-3 .post-content .post-meta a {
            font-size: 12px; } }
        @media only screen and (max-width: 767px) {
          .single-blog-post.style-3 .post-content .post-meta a {
            font-size: 12px;
            margin-right: 10px; } }
        @media only screen and (min-width: 480px) and (max-width: 767px) {
          .single-blog-post.style-3 .post-content .post-meta a {
            font-size: 14px;
            margin-right: 15px; } }
        .single-blog-post.style-3 .post-content .post-meta a:hover, .single-blog-post.style-3 .post-content .post-meta a:focus {
          color: #007600; }
  .single-blog-post.style-4 .post-thumbnail {
    position: relative;
    z-index: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 15px; }
    .single-blog-post.style-4 .post-thumbnail .video-play {
      width: 50px;
      height: 50px;
      background-color: rgba(26, 26, 26, 0.7);
      border-radius: 50%;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -25px;
      z-index: 99; }
      .single-blog-post.style-4 .post-thumbnail .video-play:hover, .single-blog-post.style-4 .post-thumbnail .video-play:focus {
        background-color: #007600; }
    .single-blog-post.style-4 .post-thumbnail .video-duration {
      background-color: #252324;
      font-size: 13px;
      color: #ffffff;
      line-height: 1;
      text-align: center;
      padding: 10px 15px;
      position: absolute;
      right: 10px;
      bottom: 10px;
      z-index: 99;
      font-weight: 500; }
  .single-blog-post.style-4 .post-content {
    padding-left: 0; }
    .single-blog-post.style-4 .post-content .post-title {
      font-size: 22px;
      margin-bottom: 10px; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .single-blog-post.style-4 .post-content .post-title {
          font-size: 18px; } }
      @media only screen and (max-width: 767px) {
        .single-blog-post.style-4 .post-content .post-title {
          font-size: 16px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-blog-post.style-4 .post-content .post-title {
          font-size: 18px; } }
    .single-blog-post.style-4 .post-content .post-meta a {
      font-size: 14px;
      color: #777777;
      margin-right: 20px; }
      .single-blog-post.style-4 .post-content .post-meta a:hover, .single-blog-post.style-4 .post-content .post-meta a:focus {
        color: #007600; }

.add-img {
  width: 100%; }
  .add-img img {
    width: 100%; }


  .single-post-list {
  position: relative;
  z-index: 1;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  border-radius: 10px;
}
  @media only screen and (max-width: 767px) {
    .single-post-list {
      -ms-flex-wrap: flex;
      flex-wrap: flex; } }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    .single-post-list {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap; } }
  .single-post-list .post-list-thumbnail {
    border-radius: 10px;
    margin-right: 15px;
    position: relative;
    z-index: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 130px;
    flex: 0 0 130px;
    max-width: 130px;
    width: 130px; }
    @media only screen and (max-width: 767px) {
      .single-post-list .post-list-thumbnail {
        margin-right: 15px; } }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .single-post-list .post-list-thumbnail {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 120px;
        flex: 0 0 120px;
        max-width: 120px;
        width: 120px; } }
    .single-post-list .post-list-thumbnail::after {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      z-index: 100;
      content: &#39;&#39;;
      opacity: 0;
      visibility: hidden;
      -webkit-transition-duration: 500ms;
      -o-transition-duration: 500ms;
      transition-duration: 500ms; }
    .single-post-list .post-list-thumbnail img {
      height: 80px;
      max-height: 80px;
      width: 100%; 
      border-radius: 10px;
    }
    .single-post-list .post-list-thumbnail .social-btn {
      position: absolute;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      width: 80%;
      bottom: 20px;
      left: 10%;
      right: 10%;
      z-index: 300;
      -webkit-transition-duration: 500ms;
      -o-transition-duration: 500ms;
      transition-duration: 500ms;
      opacity: 0;
      visibility: hidden; }
      .single-post-list .post-list-thumbnail .social-btn a {
        /*border: 1px solid #fff;*/
        padding: 4px 5px;
        color: #ffffff;
        font-size: 18px; }
        .single-post-list .post-list-thumbnail .social-btn a:hover, .single-post-list .post-list-thumbnail .social-btn a:focus {
          color: #fdad0c; }
  .single-post-list .post-list-content {
    /*padding: 15px 30px; */
    /*padding-left: 15px;*/
  }
   .single-post-list .post-list-content a{
    font-size: 14px;
  }

    @media only screen and (max-width: 767px) {
      .single-post-list .post-list-content {
        padding: 0px; } }
        /*padding: 15px 0px; } }*/
    .single-post-list .post-list-content h6 {
      margin-bottom: 5px; }
    .single-post-list .post-list-content span {
      color: #6d6d6d;
      font-size: 13px;
      display: block;
      margin-bottom: 5px; }
    .single-post-list .post-list-content span a{
      color: #6d6d6d;
      font-size: 13px;
      display: block;
      margin-bottom: 5px; }
    .single-post-list .post-list-content p {
      margin-bottom: 0;
      line-height: 1.7;
      font-weight: 300;
      font-size: 14px; }
  .single-post-list:hover .post-list-thumbnail::after, .single-post-list:focus .post-list-thumbnail::after {
    opacity: 1;
    visibility: visible; }
  .single-post-list:hover .post-list-thumbnail .social-btn, .single-post-list:focus .post-list-thumbnail .social-btn {
    opacity: 1;
    visibility: visible; }
  .single-post-list:last-child {
    margin-bottom: 0; }

.social-followers-info {
  position: relative;
  z-index: 1; }
  .social-followers-info a {
    display: block;
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: #ffffff;
    background-color: #007600;
    margin-bottom: 10px;
    padding: 0 30px;
    font-weight: 600;
    line-height: 50px; }
    .social-followers-info a:last-child {
      margin-bottom: 0; }
    @media only screen and (max-width: 767px) {
      .social-followers-info a {
        font-size: 16px;
        padding: 0 20px; } }
    .social-followers-info a i {
      margin-right: 10px; }
    .social-followers-info a span {
      font-size: 14px; }
    .social-followers-info a.facebook-fans {
      background-color: #4b6cd0; }
      .social-followers-info a.facebook-fans:hover {
        background-color: rgba(75, 108, 208, 0.8); }
    .social-followers-info a.twitter-followers {
      background-color: #49a7f3; }
      .social-followers-info a.twitter-followers:hover {
        background-color: rgba(73, 167, 243, 0.8); }
    .social-followers-info a.youtube-subscribers {
      background-color: #db5c3a; }
      .social-followers-info a.youtube-subscribers:hover {
        background-color: rgba(219, 92, 58, 0.8); }
    .social-followers-info a.google-followers {
      background-color: #de3939; }
      .social-followers-info a.google-followers:hover {
        background-color: rgba(222, 57, 57, 0.8); }

.catagory-widgets {
  position: relative;
  z-index: 1; }
  .catagory-widgets li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 16px; }
    .catagory-widgets li a:hover, .catagory-widgets li a:focus {
      color: #007600; }
  .catagory-widgets li:last-child a {
    margin-bottom: 0; }

.single-youtube-channel {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 15px;
  margin-bottom: 15px; }
  .single-youtube-channel:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none; }
  .single-youtube-channel .youtube-channel-thumbnail {
    position: relative;
    z-index: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70px;
    flex: 0 0 70px;
    max-width: 70px;
    width: 70px; }
  .single-youtube-channel .youtube-channel-content {
    padding-left: 15px;
    margin-top: -5px; }
    .single-youtube-channel .youtube-channel-content .channel-title {
      font-size: 16px;
      margin-bottom: 8px;
      display: block; }
    .single-youtube-channel .youtube-channel-content .subscribe-btn {
      width: 120px;
      height: 30px;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      background-color: #007600;
      color: #ffffff;
      padding: 0;
      border-radius: 0;
      font-weight: 500; }
      .single-youtube-channel .youtube-channel-content .subscribe-btn i {
        margin-right: 5px; }
      .single-youtube-channel .youtube-channel-content .subscribe-btn:hover {
        background-color: #404040; }

.newsletter-form {
  position: relative;
  z-index: 1; }
  .newsletter-form input {
    width: 100%;
    height: 50px;
    border: none;
    background-color: #f2f4f5;
    text-align: center;
    font-size: 14px;
    color: #a6a6a6;
    margin-bottom: 10px; }

.single-trending-post {
  background-color: #616065;
  height: 250px;
  position: relative;
  z-index: 1;
  overflow: hidden; 
  border-radius: 10px;
}
  .single-trending-post::after {
    content: &#39;&#39;;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0; }
  .single-trending-post img {
    min-height: 250px;
    width: 100%;
    -webkit-transition-duration: 600ms;
    -o-transition-duration: 600ms;
    transition-duration: 600ms; 
    border-radius: 10px;
  }
  .single-trending-post .post-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 99;
    right: 20px; }
    .single-trending-post .post-content .post-cata {
      display: block;
      margin-bottom: 8px;
      /*color: #007600;*/
      color: #ffffff;
      letter-spacing: 2px;
      text-transform: uppercase; }
      .single-trending-post .post-content .post-cata:hover, .single-trending-post .post-content .post-cata:focus {
        color: #ffffff; }
      @media only screen and (max-width: 767px) {
        .single-trending-post .post-content .post-cata {
          font-size: 12px; } }
        .single-trending-post .post-content .post-title {
          font-size: 18px;
          font-weight: 600;
          color: #fff000;
          margin-bottom: 0; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .single-trending-post .post-content .post-title {
          font-size: 16px; } }
      @media only screen and (max-width: 767px) {
        .single-trending-post .post-content .post-title {
          font-size: 14px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-trending-post .post-content .post-title {
          font-size: 18px; } }
        .single-trending-post .post-content .post-title:hover, .single-trending-post .post-content .post-title:focus {
          color: #ffffff; }
          /*color: #007600; }*/
  .single-trending-post:hover img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1); }

.single-info-terkini {
  /*background-color: #616065;*/
  height: 330px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 10px;
}
  .single-info-terkini::after {
    content: &#39;&#39;;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0; }
  .single-info-terkini img {
    border-radius: 10px;
    min-height: 250px;
    width: 100%;
    -webkit-transition-duration: 600ms;
    -o-transition-duration: 600ms;
    transition-duration: 600ms; 
  }
  .single-info-terkini .post-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 99;
    right: 20px; }
    .single-info-terkini .post-content .post-cata {
      display: block;
      margin-bottom: 8px;
      /*color: #007600;*/
      color: #ffffff;
      letter-spacing: 2px;
      text-transform: uppercase; }
      .single-info-terkini .post-content .post-cata:hover, .single-info-terkini .post-content .post-cata:focus {
        color: #ffffff; }
      @media only screen and (max-width: 767px) {
        .single-info-terkini .post-content .post-cata {
          font-size: 12px; } }
    .single-info-terkini .post-content .post-title {
      font-size: 18px;
      font-weight: 600;
      color: #fdad0c;
      margin-bottom: 0; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .single-info-terkini .post-content .post-title {
          font-size: 16px; } }
      @media only screen and (max-width: 767px) {
        .single-info-terkini .post-content .post-title {
          font-size: 14px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-info-terkini .post-content .post-title {
          font-size: 18px; } }
      .single-info-terkini .post-content .post-title:hover, .single-info-terkini .post-content .post-title:focus {
        color: #ffffff; }
        /*color: #007600; }*/
  .single-info-terkini:hover img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1); }


.pengaduan-slides
.youtube-slides,
.trending-post-slides,
.info-terkini-slides,
.featured-video-posts-slide,
.most-viewed-videos-slide,
.sports-videos-slides {
  position: relative;
  z-index: 1; }
  .pengaduan-slides .owl-prev,
  .pengaduan-slides .owl-next,
  .youtube-slides .owl-prev,
  .youtube-slides .owl-next,
  .trending-post-slides .owl-prev,
  .trending-post-slides .owl-next,
  .info-terkini-slides .owl-prev,
  .info-terkini-slides .owl-next,
  .featured-video-posts-slide .owl-prev,
  .featured-video-posts-slide .owl-next,
  .most-viewed-videos-slide .owl-prev,
  .most-viewed-videos-slide .owl-next,
  .sports-videos-slides .owl-prev,
  .sports-videos-slides .owl-next {
    position: absolute;
    background-color: none;
    border: 1px solid #ccc !important;
    width: 30px;
    height: 30px;
    color: #272727;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
    top: -40px;
    right: 35px;
    /*-webkit-transition-duration: 500ms;*/
    /*-o-transition-duration: 500ms;*/
    /*transition-duration: 500ms; */
  }
    .pengaduan-slides .owl-prev:hover, .pengaduan-slides .owl-prev:focus,
    .pengaduan-slides .owl-next:hover, .pengaduan-slides .owl-next:focus, 
    .youtube-slides .owl-prev:hover, .youtube-slides .owl-prev:focus,
    .youtube-slides .owl-next:hover, .youtube-slides .owl-next:focus, 
    .trending-post-slides .owl-prev:hover, .trending-post-slides .owl-prev:focus,
    .trending-post-slides .owl-next:hover, .trending-post-slides .owl-next:focus, 
    .info-terkini-slides .owl-next:hover, .info-terkini-slides .owl-next:focus,
    .info-terkini-slides .owl-prev:hover, .info-terkini-slides .owl-prev:focus,
    .featured-video-posts-slide .owl-prev:hover,
    .featured-video-posts-slide .owl-prev:focus,
    .featured-video-posts-slide .owl-next:hover,
    .featured-video-posts-slide .owl-next:focus,
    .most-viewed-videos-slide .owl-prev:hover,
    .most-viewed-videos-slide .owl-prev:focus,
    .most-viewed-videos-slide .owl-next:hover,
    .most-viewed-videos-slide .owl-next:focus,
    .sports-videos-slides .owl-prev:hover,
    .sports-videos-slides .owl-prev:focus,
    .sports-videos-slides .owl-next:hover,
    .sports-videos-slides .owl-next:focus {
      background-color: var(--portal-color);
      color: #fff; }
    @media only screen and (max-width: 767px) {
      .pengaduan-slides .owl-prev,
      .pengaduan-slides .owl-next,      
      .youtube-slides .owl-prev,
      .youtube-slides .owl-next,
      .trending-post-slides .owl-prev,
      .trending-post-slides .owl-next,
      .info-terkini-slides .owl-prev,
      .info-terkini-slides .owl-next,
      .featured-video-posts-slide .owl-prev,
      .featured-video-posts-slide .owl-next,
      .most-viewed-videos-slide .owl-prev,
      .most-viewed-videos-slide .owl-next,
      .sports-videos-slides .owl-prev,
      .sports-videos-slides .owl-next {
          width: 30px;
          right: 35px;
          height: 30px;
          top: -47px; } }
  .pengaduan-slides .owl-next,
  .youtube-slides .owl-next,
  .trending-post-slides .owl-next,
  .info-terkini-slides .owl-next,
  .featured-video-posts-slide .owl-next,
  .most-viewed-videos-slide .owl-next,
  .sports-videos-slides .owl-next {
    right: 0; }

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .featured-video-posts-slide {
    margin-top: 30px; } }
@media only screen and (max-width: 767px) {
  .featured-video-posts-slide {
    margin-top: 30px; } }
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .featured-video-posts-slide .owl-prev,
  .featured-video-posts-slide .owl-next {
    display: none; } }
@media only screen and (max-width: 767px) {
  .featured-video-posts-slide .owl-prev,
  .featured-video-posts-slide .owl-next {
    display: none; } }

.single-featured-post {
  position: relative;
  z-index: 1; }
  .single-featured-post .post-thumbnail {
    position: relative;
    z-index: 1; }
    .single-featured-post .post-thumbnail .video-play {
      width: 50px;
      height: 50px;
      background-color: rgba(26, 26, 26, 0.7);
      border-radius: 50%;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -25px;
      z-index: 99; }
      .single-featured-post .post-thumbnail .video-play:hover, .single-featured-post .post-thumbnail .video-play:focus {
        background-color: #007600; }
  .single-featured-post .post-content {
    position: relative;
    z-index: 1; }
    .single-featured-post .post-content .post-meta {
      position: relative;
      z-index: 1;
      margin-bottom: 15px; }
      .single-featured-post .post-content .post-meta a {
        position: relative;
        z-index: 1;
        display: inline-block;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #007600; }
        .single-featured-post .post-content .post-meta a:last-child {
          margin-left: 20px; }
          .single-featured-post .post-content .post-meta a:last-child::after {
            content: &#39;/&#39;;
            position: absolute;
            top: 0;
            left: -15px;
            z-index: 1; }
        .single-featured-post .post-content .post-meta a:hover, .single-featured-post .post-content .post-meta a:focus {
          color: #777777; }
    .single-featured-post .post-content .post-title {
      font-size: 30px;
      display: block;
      margin-bottom: 15px; }
      .single-featured-post .post-content .post-title:hover, .single-featured-post .post-content .post-title:focus {
        color: #007600; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .single-featured-post .post-content .post-title {
          font-size: 20px; } }
      @media only screen and (max-width: 767px) {
        .single-featured-post .post-content .post-title {
          font-size: 18px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-featured-post .post-content .post-title {
          font-size: 20px; } }
  .single-featured-post .post-share-area {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 40px;
    border: 1px solid #ebebeb;
    margin-top: 30px;
    overflow: hidden; }
    .single-featured-post .post-share-area .post-meta a {
      font-size: 14px;
      color: #777777;
      margin-right: 20px; }
      .single-featured-post .post-share-area .post-meta a:hover, .single-featured-post .post-share-area .post-meta a:focus {
        color: #007600; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .single-featured-post .post-share-area .post-meta a {
          margin-right: 10px;
          font-size: 12px; } }
      @media only screen and (max-width: 767px) {
        .single-featured-post .post-share-area .post-meta a {
          margin-right: 8px;
          font-size: 11px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .single-featured-post .post-share-area .post-meta a {
          font-size: 13px;
          margin-right: 12px; } }
    .single-featured-post .post-share-area .share-info {
      position: relative;
      z-index: 1; }
      .single-featured-post .post-share-area .share-info .sharebtn {
        position: relative;
        z-index: 100;
        width: 40px;
        height: 40px;
        line-height: 40px;
        color: #ffffff;
        background-color: #1a1a1a;
        text-align: center;
        font-size: 16px;
        display: block; }
        .single-featured-post .post-share-area .share-info .sharebtn i {
          -webkit-transition-duration: 800ms;
          -o-transition-duration: 800ms;
          transition-duration: 800ms; }
        .single-featured-post .post-share-area .share-info .sharebtn:hover {
          background-color: #007600; }
      .single-featured-post .post-share-area .share-info .all-share-btn {
        position: absolute;
        z-index: 20;
        top: 0;
        right: -200px;
        opacity: 0;
        visibility: hidden;
        -webkit-transition-duration: 800ms;
        -o-transition-duration: 800ms;
        transition-duration: 800ms; }
        .single-featured-post .post-share-area .share-info .all-share-btn a {
          width: 40px;
          height: 40px;
          background-color: #007600;
          color: #ffffff;
          line-height: 40px;
          font-size: 16px;
          text-align: center; }
          .single-featured-post .post-share-area .share-info .all-share-btn a.facebook {
            background-color: #4b6cd0; }
          .single-featured-post .post-share-area .share-info .all-share-btn a.twitter {
            background-color: #49a7f3; }
          .single-featured-post .post-share-area .share-info .all-share-btn a.google-plus {
            background-color: #de3939; }
          .single-featured-post .post-share-area .share-info .all-share-btn a.instagram {
            background-color: #bb8950; }
          .single-featured-post .post-share-area .share-info .all-share-btn a:hover, .single-featured-post .post-share-area .share-info .all-share-btn a:focus {
            color: #ffffff;
            background-color: #1a1a1a; }
      .single-featured-post .post-share-area .share-info:hover .sharebtn i {
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg); }
      .single-featured-post .post-share-area .share-info:hover .all-share-btn {
        opacity: 1;
        visibility: visible;
        right: 40px; }

.single-catagory-post {
  position: relative;
  z-index: 1;
  /* padding-bottom: 20px; */
  /* margin-bottom: 20px; */
  border-bottom: 1px dashed #aaa; }
  .single-catagory-post:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none; }
  .single-catagory-post .post-thumbnail {
    position: relative;
    z-index: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40%;
    flex: 0 0 30%;
    max-width: 30%;
    width: 30%;
    border-radius: 10px;
    /*min-height: 80px; */
/*    max-height: 140px; */
  }
  .single-catagory-post .post-thumbnail img{
      width: 100%;
      height: auto;
      position: absolute; top: 50%; left: 50%; 
      transform: translate(-50%, -50%);
      border-radius: 10px;
    }
    @media only screen and (max-width: 767px) {
      .single-catagory-post .post-thumbnail {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        width: 100%;
        /*height: 180px;*/
        margin-bottom: 30px; } }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .single-catagory-post .post-thumbnail {
        height: 260px; } }
    .single-catagory-post .post-thumbnail .video-play {
      width: 50px;
      height: 50px;
      background-color: rgba(26, 26, 26, 0.7);
      border-radius: 50%;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -25px;
      z-index: 99; }
      .single-catagory-post .post-thumbnail .video-play:hover, .single-catagory-post .post-thumbnail .video-play:focus {
        background-color: #007600; }
  .single-catagory-post .post-content {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70%;
    flex: 0 0 70%;
    max-width: 70%;
    width: 70%;
    position: relative;
    z-index: 1;
    /* padding-left: 30px; */ }
  .single-catagory-post .post-content p { text-align: justify; }
    @media only screen and (max-width: 767px) {
      .single-catagory-post .post-content {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        width: 100%;
        padding-left: 0; } }
    .single-catagory-post .post-content .post-meta {
      position: relative;
      z-index: 1;
      margin-bottom: 2px; }
      .single-catagory-post .post-content .post-meta a {
        position: relative;
        z-index: 1;
        display: inline-block;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #007600; }
        .single-catagory-post .post-content .post-meta a:last-child {
          margin-left: 20px; }
          .single-catagory-post .post-content .post-meta a:last-child::after {
            content: &#39;/&#39;;
            position: absolute;
            top: 0;
            left: -15px;
            z-index: 1; }
        .single-catagory-post .post-content .post-meta a:hover, .single-catagory-post .post-content .post-meta a:focus {
          color: #404040; }
    .single-catagory-post .post-content .post-title {
      font-size: 18px;
      margin-bottom: 2px;
      display: block; }
      .single-catagory-post .post-content .post-title:hover, .single-catagory-post .post-content .post-title:focus {
        color: #007600; }
    .single-catagory-post .post-content p {
      margin-bottom: 0; }
    .single-catagory-post .post-content .post-meta-2 {
      position: relative;
      z-index: 1;
      margin-bottom: 10px; }  
      .single-catagory-post .post-content .post-meta-2 a {
        font-size: 14px;
        color: #777777;
        margin-right: 20px; }
        .single-catagory-post .post-content .post-meta-2 a:last-child {
          margin-right: 0; }
        .single-catagory-post .post-content .post-meta-2 a:hover, .single-catagory-post .post-content .post-meta-2 a:focus {
          color: #007600; }

.post-details-content {
  position: relative;
  z-index: 1; }
  .post-details-content .post-meta {
    position: relative;
    z-index: 1;
    margin-bottom: 15px; }
    .post-details-content .post-meta a {
      position: relative;
      z-index: 1;
      display: inline-block;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #007600; }
      .post-details-content .post-meta a:last-child {
        margin-left: 20px; }
        .post-details-content .post-meta a:last-child::after {
          content: &#39;/&#39;;
          position: absolute;
          top: 0;
          left: -15px;
          z-index: 1; }
      .post-details-content .post-meta a:hover, .post-details-content .post-meta a:focus {
        color: #404040; }
  .post-details-content .post-title {
    font-size: 24px;
    /*margin-bottom: 15px;*/
    display: block; }
    @media only screen and (max-width: 767px) {
      .post-details-content .post-title {
        font-size: 20px; } }
  .post-details-content .post-meta-2 {
    position: relative;
    z-index: 1;
    /*margin-bottom: 15px; }*/ }
    .post-details-content .post-meta-2 a {
      font-size: 14px;
      color: #777777;
      margin-right: 20px; }
      .post-details-content .post-meta-2 a:last-child {
        margin-right: 0; }
      .post-details-content .post-meta-2 a:hover, .post-details-content .post-meta-2 a:focus {
        color: #007600; }
  .post-details-content ul {
    position: relative;
    z-index: 1; }
    /*.post-details-content ul li {
      color: #777777;
      margin-bottom: 10px; }
      .post-details-content ul li i {
        margin-right: 5px; }*/
   .post-details-content ol {
    position: relative;
    z-index: 1; }
    /*.post-details-content ol li {
      color: #777777;
      line-height: 2em }
      .post-details-content ol li i {
        margin-right: 5px; }*/

blockquote {
  background-color: #f2f4f5;
  padding: 15px 30px;
  border-left: 3px solid #007600; }
  blockquote .quote-text {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    line-height: 2;
    margin-bottom: 15px; }
  blockquote .quote-name {
    margin-bottom: 0; }

.like-dislike-share {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; 
  /*border-top: 1px solid #ece5e5;*/
}
  .like-dislike-share a {
    min-width: 180px;
    height: 46px;
    border-radius: 4px;
    background-color: #007600;
    font-size: 14px;
    color: #ffffff;
    padding: 0 20px;
    text-align: center;
    line-height: 46px;
    font-weight: 400;
    margin-right: 15px; }
    .like-dislike-share a:last-child {
      margin-right: 0; }
    .like-dislike-share a i {
      margin-right: 5px; }
    .like-dislike-share a.facebook {
      background-color: #4b6cd0; }
      .like-dislike-share a.facebook:hover {
        background-color: rgba(75, 108, 208, 0.85); }
    .like-dislike-share a.twitter {
      background-color: #49a7f3; }
      .like-dislike-share a.twitter:hover {
        background-color: rgba(73, 167, 243, 0.85); }
    .like-dislike-share a.whatsapp {
      background-color: #25D366; }
      .like-dislike-share a.whatsapp:hover {
        background-color: rgba(37, 211, 102, 0.85); }
    @media only screen and (max-width: 767px) {
      .like-dislike-share a {
        min-width: 50px; } }
  .like-dislike-share .share {
    min-width: auto;
    background-color: transparent;
    color: #1a1a1a;
    font-size: 24px;
    line-height: 1.3;
    text-align: center;
    margin-right: 15px; }
    .like-dislike-share .share span {
      display: block;
      font-size: 14px;
      color: #777777; }

.post-author {
  position: relative;
  z-index: 1;
  padding-top: 40px;
  border-top: 1px solid #ebebeb; }
  .post-author .post-author-thumb {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    max-width: 80px;
    width: 80px;
    height: 80px;
    border-radius: 50%; }
    @media only screen and (max-width: 767px) {
      .post-author .post-author-thumb {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 60px;
        flex: 0 0 60px;
        max-width: 60px;
        width: 60px;
        height: 60px; } }
    .post-author .post-author-thumb img {
      border-radius: 50%; }
  .post-author .post-author-desc .author-name {
    font-size: 16px;
    display: block;
    /*margin-bottom: 10px;*/ }
    @media only screen and (max-width: 767px) {
      .post-author .post-author-desc .author-name {
        font-size: 14px; } }
  .post-author .post-author-desc p {
    margin-bottom: 0; }
    @media only screen and (max-width: 767px) {
      .post-author .post-author-desc p {
        font-size: 12px; } }

.related-post-area {
  position: relative;
  z-index: 1; }
  .related-post-area .single-blog-post.style-4 .post-content .post-title {
    font-size: 16px; }

.video-submit-content {
  position: relative;
  z-index: 1; }
  .video-submit-content label {
    font-size: 12px;
    text-transform: capitalize;
    color: #1a1a1a;
    font-weight: 500; }

/* :: 7.0 Footer Area CSS */
.footer-area {
  position: relative;
  z-index: 1;
  background-color: #111111;
  padding-top: 40px; }
  .footer-area .footer-widget {
    position: relative;
    z-index: 1;
    width: 100%;
    margin-bottom: 10px; }
    .footer-area .footer-widget .widget-title {
      display: block;
      margin-bottom: 30px;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      text-transform: uppercase;
      border-left: 3px solid #007600;
      /*border-left: 3px solid #007600;*/
      padding-left: 10px; }
    .footer-area .footer-widget .foo-logo {
      display: block;
      margin-bottom: 25px; }
    .footer-area .footer-widget p {
      margin-bottom: 30px;
      display: block; }
    .footer-area .footer-widget .footer-social-info a {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-color: #007600;
      text-align: center;
      font-size: 15px;
      color: #ffffff;
      line-height: 40px;
      margin-right: 3px;
      border-radius: 50%; }
      .footer-area .footer-widget .footer-social-info a:hover, .footer-area .footer-widget .footer-social-info a:focus {
        background-color: #007600; }
      .footer-area .footer-widget .footer-social-info a.facebook {
        background-color: #4b6cd0; }
      .footer-area .footer-widget .footer-social-info a.google-plus {
        background-color: #f03b3b; }
      .footer-area .footer-widget .footer-social-info a.instagram {
        background-color: #bb8950; }
      .footer-area .footer-widget .footer-social-info a.twitter {
        background-color: #49a7f3; }
      .footer-area .footer-widget .footer-social-info a.linkedin {
        background-color: #30bad7; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .footer-area .footer-widget .footer-social-info a {
          width: 34px;
          height: 34px;
          line-height: 34px;
          font-size: 13px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .footer-area .footer-widget .footer-social-info a {
          width: 34px;
          height: 34px;
          line-height: 34px;
          font-size: 13px; } }
      @media only screen and (max-width: 767px) {
        .footer-area .footer-widget .footer-social-info a {
          width: 34px;
          height: 34px;
          line-height: 34px;
          font-size: 13px; } }
    .footer-area .footer-widget .footer-widget-nav {
      position: relative;
      z-index: 1; }
      .footer-area .footer-widget .footer-widget-nav ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap; }
        .footer-area .footer-widget .footer-widget-nav ul li {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 50%;
          /*flex: 0 0 50%;*/
          /*max-width: 50%;*/
          width: 100%; }
          .footer-area .footer-widget .footer-widget-nav ul li a {
            /*display: inline-block;*/
            display: contents;
            color: #ffffff;
            margin-bottom: 15px; }
            .footer-area .footer-widget .footer-widget-nav ul li a i {
              color: #777777;
              margin-right: 5px; }
            .footer-area .footer-widget .footer-widget-nav ul li a:hover, .footer-area .footer-widget .footer-widget-nav ul li a:focus {
              color: #007600; }
    .footer-area .footer-widget .footer-tags {
      position: relative;
      z-index: 1;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-top: -5px;
      margin-left: -5px; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .footer-area .footer-widget .footer-tags {
          margin-top: -2px;
          margin-left: -2px; } }
      @media only screen and (min-width: 576px) and (max-width: 767px) {
        .footer-area .footer-widget .footer-tags {
          margin-top: -2px;
          margin-left: -2px; } }
      .footer-area .footer-widget .footer-tags li a {
        height: 30px;
        border-radius: 2px;
        background-color: #272727;
        color: #777777;
        text-transform: uppercase;
        padding: 0 10px;
        display: inline-block;
        line-height: 30px;
        margin: 5px;
        font-size: 12px; }
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .footer-area .footer-widget .footer-tags li a {
            margin: 2px; } }
        @media only screen and (min-width: 576px) and (max-width: 767px) {
          .footer-area .footer-widget .footer-tags li a {
            margin: 2px; } }
        .footer-area .footer-widget .footer-tags li a:hover, .footer-area .footer-widget .footer-tags li a:focus {
          background-color: #007600;
          color: #ffffff; }
  .footer-area .copywrite-area {
    position: relative;
    z-index: 1;
    padding: 10px 0;
    background-color: #0a0a0a; }
    .footer-area .copywrite-area .copywrite-text {
      font-size: 14px;
      margin-bottom: 0;
      font-weight: 400;
      color: #777777; }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .footer-area .copywrite-area .copywrite-text {
          font-size: 12px; } }
      @media only screen and (max-width: 767px) {
        .footer-area .copywrite-area .copywrite-text {
          font-size: 12px; } }
      .footer-area .copywrite-area .copywrite-text a {
        color: #ffffff;
        font-size: 14px;
        font-weight: 400; }
        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .footer-area .copywrite-area .copywrite-text a {
            font-size: 12px; } }
        @media only screen and (max-width: 767px) {
          .footer-area .copywrite-area .copywrite-text a {
            font-size: 12px; } }
        .footer-area .copywrite-area .copywrite-text a:hover, .footer-area .copywrite-area .copywrite-text a:focus {
          color: #007600; }
    .footer-area .copywrite-area .footer-nav {
      position: relative;
      z-index: 1; }
      .footer-area .copywrite-area .footer-nav ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap; }
        @media only screen and (max-width: 767px) {
          .footer-area .copywrite-area .footer-nav ul {
            margin-top: 5px;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start; } }
        .footer-area .copywrite-area .footer-nav ul li a {
          display: inline-block;
          color: #777777;
          font-size: 14px;
          padding: 0 15px;
          font-weight: 400; }
          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .footer-area .copywrite-area .footer-nav ul li a {
              font-size: 12px;
              padding: 0 8px; } }
          @media only screen and (max-width: 767px) {
            .footer-area .copywrite-area .footer-nav ul li a {
              font-size: 12px;
              padding: 0 8px; } }
          .footer-area .copywrite-area .footer-nav ul li a:hover, .footer-area .copywrite-area .footer-nav ul li a:focus {
            font-weight: 400;
            color: #007600; }
        .footer-area .copywrite-area .footer-nav ul li:last-child a {
          padding-right: 0; }

.sidebar-area {
  position: relative;
  z-index: 1; }

.single-widget-area {
  position: relative;
  z-index: 1; }
  /*.single-widget-area form input {
    width: 100%;
    height: 56px;
    background-color: #f2f4f5;
    font-size: 12px;
    font-style: italic;
    padding: 0 30px;
    border: none;
    border-radius: 0;
    margin-bottom: 30px; }
    .single-widget-area form input:focus {
      box-shadow: none;
      background-color: #f2f4f5; }*/

.comment_area {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 50px; }
  .comment_area .comment-content .comment-author {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70px;
    flex: 0 0 70px;
    min-width: 70px;
    margin-right: 20px;
    height: 70px;
    border-radius: 50%; }
    .comment_area .comment-content .comment-author img {
      border-radius: 50%; }
    @media only screen and (max-width: 767px) {
      .comment_area .comment-content .comment-author {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 40px;
        flex: 0 0 40px;
        min-width: 40px;
        margin-right: 10px;
        height: 40px; } }
  .comment_area .comment-content .comment-meta {
    margin-bottom: 30px; }
    .comment_area .comment-content .comment-meta .comment-date {
      font-size: 12px;
      color: #777777;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px; }
    .comment_area .comment-content .comment-meta h6 {
      margin-bottom: 10px; }
    .comment_area .comment-content .comment-meta p {
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 2; }
    .comment_area .comment-content .comment-meta .like,
    .comment_area .comment-content .comment-meta .reply {
      font-size: 13px;
      font-weight: 400;
      text-transform: uppercase;
      height: 30px;
      padding: 0 20px;
      border: 2px solid #ebebeb;
      border-radius: 15px;
      line-height: 26px;
      text-align: center;
      margin-right: 15px; }
      .comment_area .comment-content .comment-meta .like:last-child,
      .comment_area .comment-content .comment-meta .reply:last-child {
        margin-right: 0; }
      .comment_area .comment-content .comment-meta .like:hover,
      .comment_area .comment-content .comment-meta .reply:hover {
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15); }
      @media only screen and (max-width: 767px) {
        .comment_area .comment-content .comment-meta .like,
        .comment_area .comment-content .comment-meta .reply {
          margin-right: 5px; } }
  .comment_area .single_comment_area {
    margin-bottom: 30px; }
    .comment_area .single_comment_area:last-of-type {
      margin-bottom: 0; }
  .comment_area .children .single_comment_area {
    margin-left: 50px;
    margin-top: 30px; }
    @media only screen and (max-width: 767px) {
      .comment_area .children .single_comment_area {
        margin-left: 15px; } }

.breadcrumb-area {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 200px; }
  @media only screen and (max-width: 767px) {
    .breadcrumb-area {
      height: 130px; } }
  .breadcrumb-area .breadcrumb-content {
    text-align: center; }
    .breadcrumb-area .breadcrumb-content h2 {
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 0;
      text-transform: uppercase; }
      @media only screen and (max-width: 767px) {
        .breadcrumb-area .breadcrumb-content h2 {
          font-size: 20px; } }

.mag-breadcrumb .breadcrumb, .mag-breadcrumb .breadcrumb li a{
  font-size: 13px;
  padding: 0;
  margin-bottom: 0;
  background-color: transparent;
  border-radius: 0; }
.mag-breadcrumb .breadcrumb .breadcrumb-item a:hover, .mag-breadcrumb .breadcrumb .breadcrumb-item a:focus { color: #007600; }
.mag-breadcrumb .breadcrumb-item + .breadcrumb-item::before { font-size: 12px; content: &quot;/&quot;; }

.about-us-content {
  position: relative;
  z-index: 1; }
  .about-us-content ul li {
    color: #777777;
    margin-bottom: 10px; }
    .about-us-content ul li i {
      margin-right: 5px; }

.single-team-member {
  position: relative;
  z-index: 1;
  border: 1px solid #ebebeb;
  margin-bottom: 30px; }
  @media only screen and (max-width: 767px) {
    .single-team-member {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap; } }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    .single-team-member {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap; } }
  .single-team-member .team-member-thumbnail {
    position: relative;
    z-index: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 160px;
    flex: 0 0 160px;
    max-width: 160px;
    width: 160px; }
    @media only screen and (max-width: 767px) {
      .single-team-member .team-member-thumbnail {
        margin: 15px; } }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .single-team-member .team-member-thumbnail {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 120px;
        flex: 0 0 120px;
        max-width: 120px;
        width: 120px; } }
    .single-team-member .team-member-thumbnail::after {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      z-index: 100;
      content: &#39;&#39;;
      opacity: 0;
      visibility: hidden;
      -webkit-transition-duration: 500ms;
      -o-transition-duration: 500ms;
      transition-duration: 500ms; }
    .single-team-member .team-member-thumbnail img {
      width: 100%; }
    .single-team-member .team-member-thumbnail .social-btn {
      position: absolute;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      width: 80%;
      bottom: 20px;
      left: 10%;
      right: 10%;
      z-index: 300;
      -webkit-transition-duration: 500ms;
      -o-transition-duration: 500ms;
      transition-duration: 500ms;
      opacity: 0;
      visibility: hidden; }
      .single-team-member .team-member-thumbnail .social-btn a {
        color: #ffffff;
        font-size: 14px; }
        .single-team-member .team-member-thumbnail .social-btn a:hover, .single-team-member .team-member-thumbnail .social-btn a:focus {
          color: #007600; }
  .single-team-member .team-member-content {
    padding: 15px 30px; }
    @media only screen and (max-width: 767px) {
      .single-team-member .team-member-content {
        padding: 15px; } }
    .single-team-member .team-member-content h6 {
      margin-bottom: 5px; }
    .single-team-member .team-member-content span {
      color: #007600;
      font-size: 14px;
      display: block;
      margin-bottom: 5px; }
    .single-team-member .team-member-content p {
      margin-bottom: 0;
      line-height: 1.7;
      font-weight: 300;
      font-size: 14px; }
  .single-team-member:hover .team-member-thumbnail::after, .single-team-member:focus .team-member-thumbnail::after {
    opacity: 1;
    visibility: visible; }
  .single-team-member:hover .team-member-thumbnail .social-btn, .single-team-member:focus .team-member-thumbnail .social-btn {
    opacity: 1;
    visibility: visible; }
  .single-team-member:last-child {
    margin-bottom: 0; }

.single-video-area {
  position: relative;
  z-index: 1; }
  .single-video-area iframe {
    border: none !important;
    width: 100% !important;
    height: 540px !important; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .single-video-area iframe {
        height: 420px !important; } }
    @media only screen and (max-width: 767px) {
      .single-video-area iframe {
        height: 240px !important; } }
  .single-video-area .video-meta-data {
    position: relative;
    z-index: 1;
    padding: 15px 30px; }
    @media only screen and (max-width: 767px) {
      .single-video-area .video-meta-data {
        padding: 15px; } }
    .single-video-area .video-meta-data .total-views {
      margin-bottom: 0;
      font-size: 18px;
      font-weight: 400;
      text-align: center; }
      @media only screen and (max-width: 767px) {
        .single-video-area .video-meta-data .total-views {
          font-size: 12px; } }
    .single-video-area .video-meta-data .like-dislike button {
      border: none;
      background-color: transparent;
      color: #777777;
      margin-right: 20px;
      cursor: pointer;
      font-size: 16px;
      text-align: center; }
      @media only screen and (max-width: 767px) {
        .single-video-area .video-meta-data .like-dislike button {
          font-size: 12px;
          margin-right: 15px; } }
      .single-video-area .video-meta-data .like-dislike button:hover, .single-video-area .video-meta-data .like-dislike button:focus {
        color: #007600; }
    .single-video-area .video-meta-data .like-dislike p {
      text-align: center;
      margin-bottom: 0;
      line-height: 1.5;
      font-size: 16px; }
      @media only screen and (max-width: 767px) {
        .single-video-area .video-meta-data .like-dislike p {
          font-size: 12px; } }

.video-submit-content {
  position: relative;
  z-index: 1;
  margin: 0 auto; }
  .video-submit-content .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block; }
  .video-submit-content .submit--btn {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold; }
  .video-submit-content .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0; }

/* :: 8.0 Contact Area CSS */
.single-contact-info {
  position: relative;
  margin-bottom: 30px; }
  .single-contact-info:last-child {
    margin-bottom: 0; }
  .single-contact-info .icon {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40px;
    flex: 0 0 40px;
    max-width: 40px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    height: 40px;
    border: 1px solid var(--portal-color);
    border-radius: 50%;
    color: var(--portal-color); }
  .single-contact-info p {
    font-size: 14px;
    margin-bottom: 5px; }
  .single-contact-info h6 {
    margin-bottom: 0; }
    @media only screen and (max-width: 767px) {
      .single-contact-info h6 {
        font-size: 12px; } }
    @media only screen and (min-width: 576px) and (max-width: 767px) {
      .single-contact-info h6 {
        font-size: 14px; } }

/*PENCARIAN*/
.search .input-group .form-control{ height: 36px; }

.form-control {
  /*position: relative;*/
  z-index: 2;
  height: 40px;
  width: 100%;
  /*background-color: #ffffff;*/
  font-size: 13px;
  margin-bottom: 10px;
  /*border: 2px solid #ebebeb;*/
  padding: 10px 20px;
  color: #777777;
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms; }
  .form-control:focus {
    box-shadow: none;
    border-color: var(--portal-color); }

select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; }

/*textarea.form-control {
  height: 190px; }*/

.map-area {
  position: relative;
  z-index: 2; }
  .map-area iframe {
    width: 100%;
    height: 400px;
    border: none;
    margin-bottom: 0; }
    @media only screen and (max-width: 767px) {
      .map-area iframe {
        height: 250px; } }


.list-archive-post {
  margin-bottom: 15px;
  position: relative;
  z-index: 1; }
  .list-archive-post .post-thumbnail {
    position: relative;
    z-index: 1; }
    .list-archive-post .post-thumbnail .video-play {
      width: 50px;
      height: 50px;
      background-color: rgba(26, 26, 26, 0.7);
      border-radius: 50%;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -25px;
      z-index: 99; }
      .list-archive-post .post-thumbnail .video-play:hover, .list-archive-post .post-thumbnail .video-play:focus {
        background-color: #007600; }
  .list-archive-post .post-content {
    border-bottom: 1px dashed #ddd;
    position: relative;
    z-index: 1; }
    .list-archive-post .post-content .post-meta {
      position: relative;
      z-index: 1;
      padding: 0px 10px; }
      .list-archive-post .post-content .post-meta a {
        position: relative;
        z-index: 1;
        display: inline-block;
        font-size: 10px;
        /*font-weight: 500;*/
        letter-spacing: 1px;
        /*text-transform: uppercase;*/
        color: #007600; }
        .list-archive-post .post-content .post-meta a:last-child {
          margin-left: 20px; }
          .list-archive-post .post-content .post-meta a:last-child::after {
            content: &#39;/&#39;;
            position: absolute;
            top: 0;
            left: -15px;
            z-index: 1; }
        .list-archive-post .post-content .post-meta a:hover, .list-archive-post .post-content .post-meta a:focus {
          color: #777777; }

    .list-archive-post .post-content .guest-book {
        position: relative;
        z-index: 1;
        margin-bottom: 2px; }
      .list-archive-post .post-content .guest-book span {
        position: relative;
        z-index: 1;
        display: inline-block;
        font-size: 12px;
        letter-spacing: 1px;
        color: #007600; }
    .list-archive-post .forum-list {
      margin-bottom: 10px;
    }
    .list-archive-post .post-content .forums {
        position: relative;
        z-index: 1;
        margin-bottom: 2px; }
      .list-archive-post .post-content .forums span {
        position: relative;
        z-index: 1;
        display: inline-block;
        font-size: 12px;
        color: #ababab; }

    .list-archive-post .post-content .post-title {
      font-size: 30px;
      display: block;
      margin-bottom: 15px; }
      .list-archive-post .post-content .post-title:hover, .list-archive-post .post-content .post-title:focus {
        color: #007600; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .list-archive-post .post-content .post-title {
          font-size: 20px; } }
      @media only screen and (max-width: 767px) {
        .list-archive-post .post-content .post-title {
          font-size: 18px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .list-archive-post .post-content .post-title {
          font-size: 20px; } }
  .list-archive-post .post-share-area {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 40px;
    border: 1px solid #ebebeb;
    /*margin-top: 10px;*/
    overflow: hidden; }
    .list-archive-post .post-share-area .post-meta a {
      font-size: 14px;
      color: #777777;
      margin-right: 20px; }
      .list-archive-post .post-share-area .post-meta a:hover, .list-archive-post .post-share-area .post-meta a:focus {
        color: #007600; }
      @media only screen and (min-width: 1200px) and (max-width: 1499px) {
        .list-archive-post .post-share-area .post-meta a {
          margin-right: 10px;
          font-size: 12px; } }
      @media only screen and (max-width: 767px) {
        .list-archive-post .post-share-area .post-meta a {
          margin-right: 8px;
          font-size: 11px; } }
      @media only screen and (min-width: 480px) and (max-width: 767px) {
        .list-archive-post .post-share-area .post-meta a {
          font-size: 13px;
          margin-right: 12px; } }
    .list-archive-post .post-share-area .share-info {
      position: relative;
      z-index: 1; }
      .list-archive-post .post-share-area .share-info .sharebtn {
        position: relative;
        z-index: 100;
        width: 40px;
        height: 40px;
        line-height: 40px;
        color: #ffffff;
        background-color: #1a1a1a;
        text-align: center;
        font-size: 16px;
        display: block; }
        .list-archive-post .post-share-area .share-info .sharebtn i {
          -webkit-transition-duration: 800ms;
          -o-transition-duration: 800ms;
          transition-duration: 800ms; }
        .list-archive-post .post-share-area .share-info .sharebtn:hover {
          background-color: #007600; }
      .list-archive-post .post-share-area .share-info .all-share-btn {
        position: absolute;
        z-index: 20;
        top: 0;
        right: -200px;
        opacity: 0;
        visibility: hidden;
        -webkit-transition-duration: 800ms;
        -o-transition-duration: 800ms;
        transition-duration: 800ms; }
        .list-archive-post .post-share-area .share-info .all-share-btn a {
          width: 40px;
          height: 40px;
          background-color: #007600;
          color: #ffffff;
          line-height: 40px;
          font-size: 16px;
          text-align: center; }
          .list-archive-post .post-share-area .share-info .all-share-btn a.facebook {
            background-color: #4b6cd0; }
          .list-archive-post .post-share-area .share-info .all-share-btn a.twitter {
            background-color: #49a7f3; }
          .list-archive-post .post-share-area .share-info .all-share-btn a.google-plus {
            background-color: #de3939; }
          .list-archive-post .post-share-area .share-info .all-share-btn a.instagram {
            background-color: #bb8950; }
          .list-archive-post .post-share-area .share-info .all-share-btn a:hover, .list-archive-post .post-share-area .share-info .all-share-btn a:focus {
            color: #ffffff;
            background-color: #1a1a1a; }
      .list-archive-post .post-share-area .share-info:hover .sharebtn i {
        -webkit-transform: rotate(-180deg);
        -ms-transform: rotate(-180deg);
        transform: rotate(-180deg); }
      .list-archive-post .post-share-area .share-info:hover .all-share-btn {
        opacity: 1;
        visibility: visible;
        right: 40px; }

/* ====== The End ====== */


        .intro-news-filter {
          position: relative;
          z-index: 1;
          margin-bottom: 15px;
          height: 35px;
          border-bottom: 2px solid var(--portal-color);
          /*background-color: #f0f4f8;*/
        }
    
        @media only screen and (min-width: 300px) and (max-width: 375px) {
          .intro-news-filter {
            height: auto;
          }
        }
    
        /* @media only screen and (max-width: 767px) {
        .intro-news-filter {
          height: 64px; } }*/
        @media only screen and (min-width: 480px) and (max-width: 767px) {
          .intro-news-filter {
            /*height: 32px; } }*/
            height: auto;
          }
        }
    
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          .intro-news-filter {
            height: auto;
          }
        }
    
        .intro-news-filter h6 {
          font-size: 14px;
          margin-bottom: 0;
          line-height: 35px;
          color: #404040;
          text-transform: uppercase;
          padding-left: 15px;
        }
    
        .intro-news-filter .nav-tabs {
          border-bottom: none;
        }
    
        .intro-news-filter .nav-tabs .nav-link {
          border: none;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          display: block;
          padding: 0 10px;
          font-size: 14px;
          /*color: #000000;*/
          text-transform: uppercase;
          line-height: 35px;
          background-color: transparent;
        }
    
        .intro-news-filter .nav-tabs .nav-link.active {
          background-color: var(--portal-color);
          color: white;
        }
    
        @media only screen and (min-width: 480px) and (max-width: 767px) {
          .intro-news-filter .nav-tabs .nav-link {
            padding: 0 8px;
          }
        }

                /* :: 3.6.0 ScrollUp */
                #scrollUp {
                  background-color: #000000;
                  border-radius: 0;
                  bottom: 50px;
                  color: #ffffff;
                  font-size: 24px;
                  height: 40px;
                  line-height: 40px;
                  right: 50px;
                  text-align: center;
                  width: 40px;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.15);
                }
        
                @media only screen and (max-width: 767px) {
                  #scrollUp {
                    right: 30px;
                    bottom: 30px;
                  }
                }
        
                #scrollUp:hover {
                  background-color: #007600;
                  color: #ffffff;
                }
        
                /* :: 4.0 Header Area CSS */
                .header-area {
                  position: relative;
                  z-index: 1000;
                  width: 100%;
                }
        
                .header-area .newsbox-main-menu {
                  position: relative;
                  width: 100%;
                  /*height: 125px;*/
                  padding: 0 5%;
                }
        
                @media only screen and (max-width: 767px) {
                  .header-area .newsbox-main-menu {
                    height: 90px;
                  }
                }
        
                .header-area .newsbox-main-menu .classy-navbar {
                  /*height: 125px;*/
                  padding: 0;
                }
        
                @media only screen and (max-width: 767px) {
                  .header-area .newsbox-main-menu .classy-navbar {
                    height: 90px;
                  }
                }
        
                .header-area .newsbox-main-menu .classy-navbar .nav-brand {
                  /*max-width: 160px;*/
                  max-width: 220px;
                  margin-right: 30px;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .header-area .newsbox-main-menu .classy-navbar .nav-brand {
                    /*max-width: 130px;*/
                    max-width: 190px;
                    margin-right: 20px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .header-area .newsbox-main-menu .classy-navbar .nav-brand {
                    /*max-width: 120px; } }*/
                    max-width: 170px;
                  }
                }
        
                .header-area .newsbox-main-menu .classy-navbar .classynav ul li a {
                  font-weight: 600;
                  text-transform: capitalize;
                  font-size: 15px;
                  padding: 0 10px;
                  color: #404040;
                }
        
                .header-area .newsbox-main-menu .classy-navbar .classynav ul li a:hover,
                .header-area .newsbox-main-menu .classy-navbar .classynav ul li a:focus {
                  color: #007600;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .header-area .newsbox-main-menu .classy-navbar .classynav ul li a {
                    font-size: 13px;
                    padding: 0 10px;
                  }
                }
        
                .header-area .newsbox-main-menu .classy-navbar .classynav ul li ul li a {
                  color: #404040;
                  font-size: 14px;
                }
        
                .header-area .newsbox-main-menu .header-add-area {
                  position: relative;
                  z-index: 1;
                  margin-left: 50px;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .header-area .newsbox-main-menu .header-add-area {
                    margin-left: 20px;
                    max-width: 250px;
                  }
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .header-area .newsbox-main-menu .header-add-area {
                    margin-left: 0;
                    margin-top: 15px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .header-area .newsbox-main-menu .header-add-area {
                    margin-left: 0;
                    margin-top: 15px;
                  }
                }
        
                /* :: 5.0 Breaking News Area CSS */
                .breaking-news-area {
                  position: relative;
                  z-index: 1;
                  padding: 35px 4%;
                  background-color: #f0f4f8;
                  margin: 0 20px 20px;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .breaking-news-area {
                    padding: 20px 1%;
                  }
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .breaking-news-area {
                    padding: 20px 1%;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .breaking-news-area {
                    padding: 20px 1%;
                  }
                }
        
                .breaking-news-area .breaking-news-ticker {
                  position: relative;
                  z-index: 1;
                }
        
                .breaking-news-area .breaking-news-ticker .title {
                  -webkit-box-flex: 0;
                  -ms-flex: 0 0 180px;
                  flex: 0 0 180px;
                  max-width: 180px;
                  width: 180px;
                  background-color: #007600;
                  height: 55px;
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .breaking-news-area .breaking-news-ticker .title {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 150px;
                    flex: 0 0 150px;
                    max-width: 150px;
                    width: 150px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .breaking-news-area .breaking-news-ticker .title {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 70px;
                    flex: 0 0 70px;
                    max-width: 70px;
                    width: 70px;
                    height: 40px;
                  }
                }
        
                @media only screen and (min-width: 480px) and (max-width: 767px) {
                  .breaking-news-area .breaking-news-ticker .title {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 100px;
                    flex: 0 0 100px;
                    max-width: 100px;
                    width: 100px;
                  }
                }
        
                .breaking-news-area .breaking-news-ticker .title h6 {
                  font-size: 18px;
                  margin-bottom: 0;
                  line-height: 1;
                  color: #ffffff;
                  text-align: center;
                  line-height: 55px;
                }
        
                @media only screen and (max-width: 767px) {
                  .breaking-news-area .breaking-news-ticker .title h6 {
                    line-height: 40px;
                    font-size: 12px;
                  }
                }
        
                .breaking-news-area .breaking-news-ticker .ticker {
                  width: 100%;
                  text-align: left;
                  position: relative;
                  overflow: hidden;
                  padding: 0 20px;
                  -webkit-box-flex: 0;
                  -ms-flex: 0 0 calc(100% - 180px);
                  flex: 0 0 calc(100% - 180px);
                  max-width: calc(100% - 180px);
                  width: calc(100% - 180px);
                }
        
                @media only screen and (max-width: 767px) {
                  .breaking-news-area .breaking-news-ticker .ticker {
                    padding: 0 10px;
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 calc(100% - 70px);
                    flex: 0 0 calc(100% - 70px);
                    max-width: calc(100% - 70px);
                    width: calc(100% - 70px);
                  }
                }
        
                @media only screen and (min-width: 480px) and (max-width: 767px) {
                  .breaking-news-area .breaking-news-ticker .ticker {
                    padding: 0 10px;
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 calc(100% - 100px);
                    flex: 0 0 calc(100% - 100px);
                    max-width: calc(100% - 100px);
                    width: calc(100% - 100px);
                  }
                }
        
                .breaking-news-area .breaking-news-ticker .ticker ul {
                  width: 100%;
                  position: relative;
                  z-index: 1;
                }
        
                .breaking-news-area .breaking-news-ticker .ticker ul li {
                  display: none;
                  width: 100%;
                }
        
                .breaking-news-area .breaking-news-ticker .ticker ul li a {
                  display: block;
                  font-size: 16px;
                  color: #404040;
                  height: 38px;
                  line-height: 38px;
                }
        
                @media only screen and (max-width: 767px) {
                  .breaking-news-area .breaking-news-ticker .ticker ul li a {
                    font-size: 12px;
                  }
                }
        
                .breaking-news-area .breaking-news-ticker .ticker ul li a:hover,
                .breaking-news-area .breaking-news-ticker .ticker ul li a:focus {
                  color: #007600;
                }
        
                /* :: 6.0 Hero Area CSS */
                .hero-area {
                  position: relative;
                  z-index: 1;
                  padding: 0 5px;
                }
        
                /* :: 7.0 Footer Area CSS */
                .footer-area {
                  position: relative;
                  z-index: 1;
                }
        
                .footer-area .footer-logo {
                  position: relative;
                  z-index: 10;
                  text-align: center;
                  width: 100%;
                }
        
                .footer-area .footer-logo a {
                  display: inline-block;
                  background-color: #ffffff;
                  padding: 0 10px;
                }
        
                .footer-area .footer-logo::after {
                  position: absolute;
                  width: 100%;
                  content: &#39;&#39;;
                  background-color: #d6dfe2;
                  height: 2px;
                  top: 50%;
                  left: 0;
                  right: 0;
                  margin-top: -1px;
                  z-index: -1;
                }
        
                .footer-area .footer-nav {
                  position: relative;
                  z-index: 1;
                  margin-bottom: 60px;
                  display: block;
                }
        
                .footer-area .footer-nav ul {
                  display: -webkit-box;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  -ms-grid-row-align: center;
                  align-items: center;
                  -webkit-box-pack: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                }
        
                .footer-area .footer-nav li a {
                  color: #404040;
                  font-size: 16px;
                  padding: 0 40px;
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .footer-area .footer-nav li a {
                    padding: 0 20px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .footer-area .footer-nav li a {
                    font-size: 14px;
                    padding: 0 5px;
                  }
                }
        
                @media only screen and (min-width: 576px) and (max-width: 767px) {
                  .footer-area .footer-nav li a {
                    font-size: 15px;
                    padding: 0 20px;
                  }
                }
        
                .footer-area .footer-nav li a:hover,
                .footer-area .footer-nav li a:focus {
                  color: #007600;
                }
        
                .footer-area .footer-social-info {
                  position: relative;
                  z-index: 1;
                  display: block;
                  margin-bottom: 30px;
                }
        
                .footer-area .footer-social-info a {
                  display: inline-block;
                  padding: 0 15px;
                  font-size: 14px;
                  color: #404040;
                }
        
                .footer-area .copywrite-text {
                  font-size: 12px;
                  margin-bottom: 0;
                  color: #a9a9a9;
                  font-weight: 500;
                  padding: 15px 0;
                }
        
                .footer-area .copywrite-text a {
                  color: #a9a9a9;
                  font-size: 12px;
                  font-weight: 500;
                }
        
                .footer-area .copywrite-text a:hover,
                .footer-area .copywrite-text a:focus {
                  color: #007600;
                }
        
                /* :: 8.0 Footer Add Area */
                .big-add-area {
                  position: relative;
                  z-index: 1;
                  padding: 0 4%;
                }
        
                .big-add-area img {
                  width: 100%;
                }
        
                /* :: 9.0 Blog Area CSS */
                .single-blog-post {
                  position: relative;
                  z-index: 1;
                  overflow: hidden;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-1 .blog-thumbnail {
                  position: relative;
                  z-index: 1;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-1 .blog-thumbnail img {
                  width: 100%;
                  -webkit-transition-duration: 800ms;
                  transition-duration: 800ms;
                }
        
                .single-blog-post.style-1 .blog-thumbnail.bg-overlay::after {
                  z-index: 5;
                }
        
                .single-blog-post.style-1 .blog-content {
                  position: absolute;
                  bottom: 30px;
                  left: 30px;
                  z-index: 50;
                }
        
                .single-blog-post.style-1 .blog-content .post-date {
                  font-size: 14px;
                  color: #ffffff;
                  font-weight: 500;
                  display: block;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-1 .blog-content .post-title {
                  font-weight: 500;
                  font-size: 30px;
                  margin-bottom: 0;
                  color: #ffffff;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .single-blog-post.style-1 .blog-content .post-title {
                    font-size: 24px;
                  }
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .single-blog-post.style-1 .blog-content .post-title {
                    font-size: 16px;
                  }
                }
        
                @media only screen and (min-width: 576px) and (max-width: 767px) {
                  .single-blog-post.style-1 .blog-content .post-title {
                    font-size: 18px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .single-blog-post.style-1 .blog-content .post-title {
                    font-size: 16px;
                  }
                }
        
                .single-blog-post.style-1 .blog-content .post-title:hover,
                .single-blog-post.style-1 .blog-content .post-title:focus {
                  color: #007600;
                }
        
                .single-blog-post.style-1:hover .blog-thumbnail img {
                  -webkit-transform: scale(1.1);
                  transform: scale(1.1);
                }
        
                .single-blog-post.style-2 .blog-thumbnail {
                  margin-bottom: 20px;
                }
        
                .single-blog-post.style-2 .blog-thumbnail img {
                  width: 100%;
                }
        
                .single-blog-post.style-2 .blog-content {
                  position: relative;
                  z-index: 1;
                }
        
                .single-blog-post.style-2 .blog-content .post-date {
                  font-size: 12px;
                  color: #636363;
                  margin-bottom: 10px;
                }
        
                .single-blog-post.style-2 .blog-content .post-title {
                  display: block;
                  /*font-weight: 600;*/
                  font-weight: 400;
                  font-size: 22px;
                  margin-bottom: 10px;
                  color: #232323;
                }
        
                .single-blog-post.style-2 .blog-content .post-title:hover,
                .single-blog-post.style-2 .blog-content .post-title:focus {
                  color: #007600;
                }
        
                .single-blog-post.style-2 .blog-content .post-author {
                  display: block;
                  font-size: 12px;
                  color: #636363;
                  font-weight: 400;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-2 .blog-content .post-author:hover,
                .single-blog-post.style-2 .blog-content .post-author:focus {
                  color: #007600;
                }
        
                .single-blog-post.style-2:hover {
                  -webkit-transform: translateY(-15px);
                  transform: translateY(-15px);
                }
        
                .single-blog-post.style-2:hover .blog-content .post-title {
                  color: #007600;
                }
        
                .single-blog-post.style-3 .blog-thumbnail {
                  margin-bottom: 20px;
                  position: relative;
                  z-index: 1;
                }
        
                .single-blog-post.style-3 .blog-thumbnail img {
                  width: 100%;
                }
        
                .single-blog-post.style-3 .blog-thumbnail .video-btn {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  width: 63px;
                  height: 63px;
                  background-color: #007600;
                  color: #ffffff;
                  font-size: 24px;
                  line-height: 63px;
                  display: block;
                  border-radius: 50%;
                  text-align: center;
                  margin: 0 auto 20px;
                  z-index: 50;
                }
        
                .single-blog-post.style-3 .blog-thumbnail .video-btn:hover {
                  background-color: #000000;
                  color: #ffffff;
                }
        
                .single-blog-post.style-3 .blog-content {
                  position: relative;
                  z-index: 1;
                }
        
                .single-blog-post.style-3 .blog-content .post-date {
                  font-size: 12px;
                  color: #ffffff;
                  margin-bottom: 10px;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-3 .blog-content .post-title {
                  display: block;
                  font-weight: 600;
                  font-size: 22px;
                  margin-bottom: 10px;
                  color: #ffffff;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                  line-height: 1.3;
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .single-blog-post.style-3 .blog-content .post-title {
                    font-size: 18px;
                  }
                }
        
                .single-blog-post.style-3 .blog-content .post-title:hover,
                .single-blog-post.style-3 .blog-content .post-title:focus {
                  color: #007600;
                }
        
                .single-blog-post.style-3 .blog-content .post-author {
                  display: block;
                  font-size: 12px;
                  color: #ffffff;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                  font-weight: 500;
                }
        
                .single-blog-post.style-3 .blog-content .post-author:hover,
                .single-blog-post.style-3 .blog-content .post-author:focus {
                  color: #007600;
                }
        
                .single-blog-post.style-3:hover .blog-content .post-title {
                  color: #007600;
                }
        
                .single-blog-post.style-4 .blog-thumbnail {
                  -webkit-box-flex: 0;
                  -ms-flex: 0 0 120px;
                  flex: 0 0 120px;
                  max-width: 120px;
                  width: 120px;
                  margin-right: 15px;
                }
        
                .single-blog-post.style-4 .blog-thumbnail img {
                  width: 100%;
                }
        
                .single-blog-post.style-4 .blog-content {
                  position: relative;
                  z-index: 1;
                }
        
                .single-blog-post.style-4 .blog-content .post-date {
                  font-size: 12px;
                  color: #636363;
                  margin-bottom: 5px;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-4 .blog-content .post-title {
                  display: block;
                  /*font-weight: 600;*/
                  font-weight: 400;
                  font-size: 16px;
                  margin-bottom: 0;
                  color: #232323;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-4 .blog-content .post-title:hover,
                .single-blog-post.style-4 .blog-content .post-title:focus {
                  font-weight: 400;
                  color: #007600;
                }
        
                .single-blog-post.style-4:hover .blog-content .post-title {
                  color: #007600;
                }
        
                .single-blog-post.style-5 .blog-thumbnail {
                  -webkit-box-flex: 0;
                  -ms-flex: 0 0 45%;
                  flex: 0 0 45%;
                  max-width: 45%;
                  width: 45%;
                  margin-right: 30px;
                }
        
                .single-blog-post.style-5 .blog-thumbnail img {
                  width: 100%;
                }
        
                @media only screen and (max-width: 767px) {
                  .single-blog-post.style-5 .blog-thumbnail {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 100%;
                    flex: 0 0 100%;
                    max-width: 100%;
                    width: 100%;
                    margin-right: 0;
                    margin-bottom: 30px;
                  }
                }
        
                .single-blog-post.style-5 .blog-content {
                  position: relative;
                  z-index: 1;
                  -webkit-box-flex: 0;
                  -ms-flex: 0 0 calc(55% - 30px);
                  flex: 0 0 calc(55% - 30px);
                  max-width: calc(55% - 30px);
                  width: calc(55% - 30px);
                }
        
                @media only screen and (max-width: 767px) {
                  .single-blog-post.style-5 .blog-content {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 100%;
                    flex: 0 0 100%;
                    max-width: 100%;
                    width: 100%;
                  }
                }
        
                .single-blog-post.style-5 .blog-content .post-date {
                  font-size: 12px;
                  color: #636363;
                  margin-bottom: 10px;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-5 .blog-content .post-title {
                  display: block;
                  font-weight: 600;
                  font-size: 24px;
                  margin-bottom: 10px;
                  color: #232323;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .single-blog-post.style-5 .blog-content .post-title {
                    font-size: 18px;
                  }
                }
        
                .single-blog-post.style-5 .blog-content .post-title:hover,
                .single-blog-post.style-5 .blog-content .post-title:focus {
                  font-weight: 600;
                  color: #007600;
                }
        
                .single-blog-post.style-5 .blog-content .post-author {
                  font-size: 12px;
                  color: #636363;
                  margin-bottom: 30px;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                  display: block;
                }
        
                .single-blog-post.style-5:hover .blog-content .post-title {
                  color: #007600;
                }
        
                .single-blog-post.style-6 .blog-thumbnail {
                  margin-bottom: 15px;
                  position: relative;
                  z-index: 1;
                }
        
                .single-blog-post.style-6 .blog-thumbnail img {
                  display: inherit;
                  margin-right: 10px;
                  min-width: 100px;
                  max-width: 100px;
                }
        
                .single-blog-post.style-6 .blog-thumbnail .video-btn {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  width: 44px;
                  height: 44px;
                  background-color: #007600;
                  color: #ffffff;
                  font-size: 18px;
                  line-height: 44px;
                  display: block;
                  border-radius: 50%;
                  text-align: center;
                  margin: 0 auto 20px;
                  z-index: 50;
                }
        
                .single-blog-post.style-6 .blog-thumbnail .video-btn:hover {
                  background-color: #000000;
                  color: #ffffff;
                }
        
                .single-blog-post.style-6 .blog-content {
                  position: relative;
                  z-index: 1;
                }
        
                .single-blog-post.style-6 .blog-content .post-date {
                  font-size: 11px;
                  color: #6d6b6b;
                  /*margin-bottom: 10px;*/
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-6 .blog-content .post-date a {
                  font-weight: normal;
                  font-size: 11px;
                  color: #6d6b6b;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                }
        
                .single-blog-post.style-6 .blog-content .post-title {
                  display: block;
                  font-weight: 600;
                  font-size: 12px;
                  margin-bottom: 0;
                  color: #232323;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                  line-height: 1.3;
                }
        
                .single-blog-post.style-6 .blog-content span {
                  line-height: unset;
                }
        
                .single-blog-post.style-6 .blog-content p {
                  line-height: unset;
                  font-size: 12px;
                  font-weight: 400;
                }
        
                .single-blog-post.style-6 .blog-content .post-title:hover,
                .single-blog-post.style-6 .blog-content .post-title:focus {
                  font-weight: 600;
                  color: #007600;
                }
        
                .single-blog-post.style-6:hover .blog-content .post-title {
                  color: #007600;
                }
        
                .sidebar-area {
                  position: relative;
                  z-index: 1;
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .sidebar-area {
                    margin-top: 100px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .sidebar-area {
                    margin-top: 100px;
                  }
                }
        
        
                .catagory-featured-post {
                  position: relative;
                  z-index: 1;
                  height: 500px;
                  padding: 35px 4%;
                  background-color: #f0f4f8;
                  margin: 0 20px 20px;
                }
        
                .catagory-featured-post.bg-overlay::after {
                  background-color: rgba(0, 0, 0, 0.65);
                }
        
                .catagory-featured-post .post-content .tag {
                  position: relative;
                  z-index: 1;
                  margin-bottom: 0;
                  height: 45px;
                  min-width: 180px;
                  background-color: #31ba7e;
                  color: #ffffff;
                  display: inline-block;
                  margin-bottom: 50px;
                  text-align: center;
                  -webkit-transform: skewX(-30deg);
                  transform: skewX(-30deg);
                }
        
                .catagory-featured-post .post-content .tag span {
                  position: absolute;
                  width: 100%;
                  left: 0;
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 45px;
                  text-transform: uppercase;
                  -webkit-transform: skew(30deg);
                  transform: skew(30deg);
                }
        
                .catagory-featured-post .post-content a {
                  display: block;
                  color: #ffffff;
                  font-size: 72px;
                  line-height: 1.1;
                  margin-bottom: 15px;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .catagory-featured-post .post-content a {
                    font-size: 48px;
                  }
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .catagory-featured-post .post-content a {
                    font-size: 42px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .catagory-featured-post .post-content a {
                    font-size: 24px;
                  }
                }
        
                .catagory-featured-post .post-content a:hover,
                .catagory-featured-post .post-content a:focus {
                  color: #007600;
                }
        
                .catagory-featured-post .post-content p {
                  color: #ffffff;
                  font-size: 15px;
                }
        
                @media only screen and (max-width: 767px) {
                  .catagory-featured-post .post-content p {
                    font-size: 12px;
                  }
                }
        
                .catagory-featured-post .post-content .post-date {
                  display: block;
                  font-size: 14px;
                  color: #ffffff;
                }
        
                @media only screen and (max-width: 767px) {
                  .catagory-featured-post .post-content .post-date {
                    font-size: 12px;
                  }
                }
        
                .post-details-title-area {
                  position: relative;
                  z-index: 1;
                  height: 500px;
                  padding: 35px 4%;
                  background-color: #f0f4f8;
                  margin: 0 20px 20px;
                }
        
                @media only screen and (max-width: 767px) {
                  .post-details-title-area {
                    height: 300px;
                  }
                }
        
                .post-details-title-area.bg-overlay::after {
                  background-color: rgba(0, 0, 0, 0.65);
                }
        
                .post-details-title-area .post-content .tag {
                  position: relative;
                  z-index: 1;
                  margin-bottom: 0;
                  height: 45px;
                  min-width: 180px;
                  background-color: #d66a0b;
                  color: #ffffff;
                  display: inline-block;
                  margin-bottom: 100px;
                  text-align: center;
                  -webkit-transform: skewX(-30deg);
                  transform: skewX(-30deg);
                }
        
                @media only screen and (max-width: 767px) {
                  .post-details-title-area .post-content .tag {
                    margin-bottom: 50px;
                  }
                }
        
                .post-details-title-area .post-content .tag span {
                  position: absolute;
                  width: 100%;
                  left: 0;
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 45px;
                  text-transform: uppercase;
                  -webkit-transform: skew(30deg);
                  transform: skew(30deg);
                }
        
                .post-details-title-area .post-content .post-title {
                  display: block;
                  color: #ffffff;
                  font-size: 72px;
                  line-height: 1.1;
                  margin-bottom: 15px;
                  font-weight: 700;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .post-details-title-area .post-content .post-title {
                    font-size: 48px;
                  }
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .post-details-title-area .post-content .post-title {
                    font-size: 42px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .post-details-title-area .post-content .post-title {
                    font-size: 24px;
                  }
                }
        
                .post-details-title-area .post-content p {
                  color: #ffffff;
                  font-size: 15px;
                }
        
                .post-details-title-area .post-content .post-date {
                  display: block;
                  font-size: 14px;
                  color: #ffffff;
                }
        
                @media only screen and (max-width: 767px) {
                  .post-details-title-area .post-content .post-date {
                    font-size: 12px;
                  }
                }
        
                .hero-contact-area {
                  position: relative;
                  z-index: 1;
                  height: 500px;
                  padding: 35px 4%;
                  background-color: #f0f4f8;
                  margin: 0 20px 20px;
                }
        
                .hero-contact-area.bg-overlay::after {
                  background-color: rgba(0, 0, 0, 0.65);
                }
        
                @media only screen and (max-width: 767px) {
                  .hero-contact-area {
                    height: 300px;
                  }
                }
        
                .hero-contact-area .post-content .tag {
                  position: relative;
                  z-index: 1;
                  margin-bottom: 0;
                  height: 45px;
                  min-width: 180px;
                  background-color: #0b87d6;
                  color: #ffffff;
                  display: inline-block;
                  margin-bottom: 100px;
                  text-align: center;
                  -webkit-transform: skewX(-30deg);
                  transform: skewX(-30deg);
                }
        
                @media only screen and (max-width: 767px) {
                  .hero-contact-area .post-content .tag {
                    margin-bottom: 50px;
                  }
                }
        
                .hero-contact-area .post-content .tag span {
                  position: absolute;
                  width: 100%;
                  left: 0;
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 45px;
                  text-transform: uppercase;
                  -webkit-transform: skew(30deg);
                  transform: skew(30deg);
                }
        
                .hero-contact-area .post-content .post-title {
                  display: block;
                  color: #ffffff;
                  font-size: 72px;
                  line-height: 1.1;
                  margin-bottom: 15px;
                  font-weight: 700;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .hero-contact-area .post-content .post-title {
                    font-size: 48px;
                  }
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .hero-contact-area .post-content .post-title {
                    font-size: 42px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .hero-contact-area .post-content .post-title {
                    font-size: 24px;
                  }
                }
        
                .hero-contact-area .post-content p {
                  color: #ffffff;
                  font-size: 15px;
                }
        
                .hero-contact-area .post-content .post-date {
                  display: block;
                  font-size: 14px;
                  color: #ffffff;
                }
        
                @media only screen and (max-width: 767px) {
                  .hero-contact-area .post-content .post-date {
                    font-size: 12px;
                  }
                }
        
                .post-details-content {
                  position: relative;
                  z-index: 1;
                }
        
                .post-details-content p {
                  margin-bottom: 15px;
                }
        
                .post-details-content ol {
                  margin-top: 0;
                  margin-bottom: 10px;
                }
        
                .comment_area {
                  border-bottom: 1px solid #eaeaea;
                  padding-bottom: 50px;
                }
        
                .comment_area .comment-content .comment-author {
                  -webkit-box-flex: 0;
                  -ms-flex: 0 0 51px;
                  flex: 0 0 51px;
                  min-width: 51px;
                  margin-right: 45px;
                  height: 51px;
                  border-radius: 50%;
                }
        
                @media only screen and (max-width: 767px) {
                  .comment_area .comment-content .comment-author {
                    margin-right: 15px;
                  }
                }
        
                .comment_area .comment-content .comment-author img {
                  border-radius: 50%;
                }
        
                .comment_area .comment-content .comment-meta {
                  margin-bottom: 30px;
                }
        
                .comment_area .comment-content .comment-meta .post-author,
                .comment_area .comment-content .comment-meta .post-date,
                .comment_area .comment-content .comment-meta .reply {
                  position: relative;
                  z-index: 1;
                  margin-bottom: 5px;
                  display: inline-block;
                  font-size: 14px;
                  color: #232323;
                  margin-right: 30px;
                }
        
                @media only screen and (max-width: 767px) {
        
                  .comment_area .comment-content .comment-meta .post-author,
                  .comment_area .comment-content .comment-meta .post-date,
                  .comment_area .comment-content .comment-meta .reply {
                    font-size: 12px;
                    margin-right: 15px;
                  }
                }
        
                .comment_area .comment-content .comment-meta .post-author::after,
                .comment_area .comment-content .comment-meta .post-date::after,
                .comment_area .comment-content .comment-meta .reply::after {
                  position: absolute;
                  top: 0;
                  right: -16px;
                  content: &#39;|&#39;;
                  z-index: 1;
                }
        
                @media only screen and (max-width: 767px) {
        
                  .comment_area .comment-content .comment-meta .post-author::after,
                  .comment_area .comment-content .comment-meta .post-date::after,
                  .comment_area .comment-content .comment-meta .reply::after {
                    right: -8px;
                  }
                }
        
                .comment_area .comment-content .comment-meta .post-author:hover,
                .comment_area .comment-content .comment-meta .post-date:hover,
                .comment_area .comment-content .comment-meta .reply:hover {
                  color: #007600;
                }
        
                .comment_area .comment-content .comment-meta .reply {
                  margin-right: 0;
                }
        
                .comment_area .comment-content .comment-meta .reply::after {
                  display: none;
                }
        
                .comment_area .comment-content .comment-meta p {
                  margin-bottom: 15px;
                  font-size: 14px;
                  line-height: 2;
                  font-weight: 500;
                }
        
                .comment_area .single_comment_area {
                  margin-bottom: 30px;
                }
        
                .comment_area .single_comment_area:last-of-type {
                  margin-bottom: 0;
                }
        
                .comment_area .children .single_comment_area {
                  margin-left: 50px;
                  margin-top: 30px;
                }
        
                /* :: 10.0 Video Area CSS */
                .featured-video-area {
                  position: relative;
                  z-index: 1;
                  width: 100%;
                  height: 430px;
                }
        
                .featured-video-area .video-btn {
                  width: 63px;
                  height: 63px;
                  background-color: #007600;
                  color: #ffffff;
                  font-size: 24px;
                  line-height: 63px;
                  display: block;
                  border-radius: 50%;
                  text-align: center;
                  margin: 0 auto 20px;
                }
        
                .featured-video-area .video-btn:hover {
                  background-color: #000000;
                  color: #ffffff;
                }
        
                .featured-video-area .published-date {
                  font-size: 14px;
                  color: #ffffff;
                  font-weight: 500;
                  display: block;
                }
        
                .featured-video-area .video-title {
                  font-weight: 500;
                  font-size: 36px;
                  margin-bottom: 0;
                  color: #ffffff;
                }
        
                @media only screen and (max-width: 767px) {
                  .featured-video-area .video-title {
                    font-size: 24px;
                  }
                }
        
                .video-slideshow {
                  position: relative;
                  z-index: 5;
                  border-top: 2px solid #007600;
                }
        
                .video-slideshow::after {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  background-color: rgba(0, 0, 0, 0.7);
                  content: &#39;&#39;;
                  z-index: -1;
                }
        
                .video-slides {
                  position: relative;
                  z-index: 1;
                }
        
                .video-slides .owl-prev,
                .video-slides .owl-next {
                  position: absolute;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  top: 50%;
                  margin-top: -20px;
                  font-size: 18px;
                  color: #ffffff;
                  background-color: #007600;
                  left: -20px;
                  text-align: center;
                  line-height: 40px;
                  opacity: 0;
                  visibility: hidden;
                }
        
                @media only screen and (max-width: 767px) {
        
                  .video-slides .owl-prev,
                  .video-slides .owl-next {
                    left: -10px;
                  }
                }
        
                .video-slides .owl-prev:hover,
                .video-slides .owl-next:hover {
                  background-color: #000000;
                  color: #ffffff;
                }
        
                .video-slides .owl-next {
                  left: auto;
                  right: -20px;
                }
        
                @media only screen and (max-width: 767px) {
                  .video-slides .owl-next {
                    right: -10px;
                  }
                }
        
                .video-slides:hover .owl-next,
                .video-slides:hover .owl-prev {
                  opacity: 1;
                  visibility: visible;
                }
        
                /* :: 11.0 Contact Area CSS */
                .contact-content {
                  position: relative;
                  z-index: 2;
                }
        
                .contact-content .contact-social-info a {
                  display: inline-block;
                  margin-right: 20px;
                  font-size: 14px;
                  color: #000000;
                }
        
                .contact-content .contact-social-info a:hover,
                .contact-content .contact-social-info a:focus {
                  color: #007600;
                }
        
                .contact-content .single-contact-info {
                  position: relative;
                  margin-bottom: 20px;
                }
        
                .contact-content .single-contact-info:last-child {
                  margin-bottom: 0;
                }
        
                .contact-content .single-contact-info p {
                  font-size: 15px;
                  margin-bottom: 0;
                }
        
                .contact-content .single-contact-info .icon {
                  -webkit-box-flex: 0;
                  -ms-flex: 0 0 25px;
                  flex: 0 0 25px;
                  max-width: 25px;
                  width: 25px;
                }
        
                .map-area {
                  position: relative;
                  z-index: 2;
                }
        
                .map-area iframe {
                  width: 100%;
                  height: 400px;
                  border: none;
                  margin-bottom: 0;
                }
        
                @media only screen and (max-width: 767px) {
                  .map-area iframe {
                    height: 300px;
                  }
                }
        
                /* :: 12.0 Elements Area CSS */
                .elements-title {
                  position: relative;
                  z-index: 1;
                }
        
                .elements-title h2 {
                  font-size: 24px;
                }
        
                /* :: 12.1.0 Cool Facts CSS */
                .single-cool-fact {
                  position: relative;
                  z-index: 1;
                  text-align: center;
                }
        
                .single-cool-fact .scf-icon {
                  position: relative;
                  z-index: 1;
                  margin-bottom: 30px;
                }
        
                .single-cool-fact .scf-text h2 {
                  font-size: 48px;
                  margin-bottom: 25px;
                  color: #2f2f2f;
                  font-weight: 500;
                }
        
                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                  .single-cool-fact .scf-text h2 {
                    font-size: 42px;
                  }
                }
        
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                  .single-cool-fact .scf-text h2 {
                    font-size: 36px;
                  }
                }
        
                @media only screen and (max-width: 767px) {
                  .single-cool-fact .scf-text h2 {
                    font-size: 30px;
                  }
                }
        
                .single-cool-fact .scf-text p {
                  font-size: 15px;
                  margin-bottom: 0;
                  color: #858585;
                  line-height: 1;
                }
        
                /* :: 12.2.0 Accordians Area CSS */
                .single-accordion.panel {
                  background-color: #ffffff;
                  border: 0 solid transparent;
                  border-radius: 4px;
                  box-shadow: 0 0 0 transparent;
                  margin-bottom: 15px;
                }
        
                .single-accordion:last-of-type {
                  margin-bottom: 0;
                }
        
                .single-accordion h6 {
                  margin-bottom: 0;
                }
        
                .single-accordion h6 a {
                  background-color: #000000;
                  border-radius: 0;
                  color: #ffffff;
                  display: block;
                  margin: 0;
                  padding: 20px 70px 20px 30px;
                  position: relative;
                  font-size: 14px;
                  text-transform: capitalize;
                  border: 1px solid #000000;
                }
        
                .single-accordion h6 a span {
                  background: transparent;
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                  font-size: 10px;
                  position: absolute;
                  right: 0;
                  text-align: center;
                  top: 0;
                  width: 58px;
                  height: 100%;
                  color: #ffffff;
                  line-height: 58px;
                }
        
                .single-accordion h6 a span.accor-open {
                  opacity: 0;
                }
        
                .single-accordion h6 a.collapsed {
                  -webkit-transition-duration: 500ms;
                  transition-duration: 500ms;
                  background-color: transparent;
                  color: #232323;
                }
        
                .single-accordion h6 a.collapsed span {
                  color: #000000;
                }
        
                .single-accordion h6 a.collapsed span.accor-close {
                  opacity: 0;
                }
        
                .single-accordion h6 a.collapsed span.accor-open {
                  opacity: 1;
                }
        
                .single-accordion .accordion-content {
                  border-top: 0 solid transparent;
                  box-shadow: none;
                }
        
                .single-accordion .accordion-content p {
                  padding: 20px 15px 5px;
                  margin-bottom: 0;
                }
        
                /* :: 12.3.0 Skill Area CSS */
                .single-skils-area {
                  position: relative;
                  z-index: 1;
                  text-align: center;
                }
        
                .single-skils-area .circle {
                  position: relative;
                  z-index: 10;
                  margin-bottom: 15px;
                }
        
                .single-skils-area .skills-text {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  text-align: center;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                }
        
                .single-skils-area .skills-text span {
                  font-size: 24px;
                  color: #232323;
                  font-weight: 500;
                }
        
                .single-skils-area p {
                  font-size: 15px;
                  color: #858585;
                  line-height: 1;
                  margin-bottom: 0;
                }
        
                /* :: 3.5.0 Miscellaneous */
                .section-heading {
                  height: 35px;
                  position: relative;
                  z-index: 1;
                  margin-bottom: 15px;
                  /*background-color: #f2f4f5;*/
                  padding: 10px 0px;
                  /*border-left: 4px solid #ed3974; }*/
                  /*border-left: 4px solid red;*/
                }
        
                .section-heading h5 {
                  margin-bottom: 0;
                  text-transform: uppercase;
                  font-size: 16px;
                  line-height: 1;
                }
        
                .section-heading h5:after {
                  background-color: var(--portal-color);
                  bottom: 0;
                  content: &#39;&#39;;
                  display: block;
                  height: 2px;
                  top: 5px;
                  left: 0;
                  position: relative;
                  /*     transform: translate(-50%,0); */
                  width: 100px;
                }
        
                @media only screen and (max-width: 767px) {
                  .section-heading h5 {
                    font-size: 14px;
                  }
                }
