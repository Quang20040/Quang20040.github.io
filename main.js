"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const imgTag = (src, alt = "", lazy = true) => {
  const lazyAttrs = lazy ? ' loading="lazy" decoding="async"' : "";
  return `<img src="${src}" alt="${alt}"${lazyAttrs}>`;
};

const repeat = (src, times) => Array.from({ length: times }, () => src);

const scrollToEl = (el) => {
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ================= DATA ================= */

const sliderData = {
  tab2: repeat("public/tab2/slide.webp", 5),
  tab4: repeat("public/tab4/slide.webp", 7),
};

const tab2Cards = [
  {
    id: "tin-tuc",
    title: "Cẩm Nang Tổng Hợp",
    bg: "public/tab2/1.webp",
    character: "public/tab2/nv1.webp",
    openDetail: true,
  },
  {
    id: "su-kien",
    title: "Sự Kiện Đặc Biệt",
    bg: "public/tab2/3.webp",
    character: "public/tab2/nv2.webp",
    openDetail: true,
  },
  {
    id: "thong-bao",
    title: "Hướng Dẫn Tân Thủ",
    bg: "public/tab2/2.webp",
    character: "public/tab2/nv3.webp",
    openDetail: true,
  },
  {
    id: "cskh",
    title: "CSKH Hỗ Trợ",
    bg: "public/tab2/4.webp",
    character: "public/tab2/nv4.webp",
    openDetail: false,
  },
];

const tab2Details = {
  "tin-tuc": {
    title: "Tin Tức",
    content: "",
  },
  "su-kien": {
    title: "Sự Kiện",
    content: "",
  },
  "thong-bao": {
    title: "Thông Báo",
    content: "",
  },
};

const sectData = {
  "ba-dao": {
    name: "Bá Đao",
    icon: "btn-badao.webp",
    nameImg: "public/tab3/text badao.webp",
    element: "Kim",
    hero: "public/tab3/nv-badao.webp",
    radar: "public/tab3/cs badao.webp",
    tag1: "Tử Dương",
    tag2: "Thiên La",
    desc: "Với Kỹ năng Thiên Ngoại Lưu Tinh tấn công phạm vi rộng từ khoảng cách xa, sát thương cộng dồn, chủ lực trong các cuộc hỗn chiến. Thêm vào một số bùa chú lợi hại, Thiên Nhẫn Đao là một vị trí không thể thiếu trong các cuộc chiến lớn.",
  },
  "co-mo": {
    name: "Cổ Mộ",
    icon: "btn-como.webp",
    nameImg: "public/tab3/text como.webp",
    element: "Mộc",
    hero: "public/tab3/nv-como.webp",
    radar: "public/tab3/cs como.webp",
    tag1: "Châm Mộ",
    tag2: "Kiếm Mộ",
    desc: "Tấn công tầm xa trong khoảng cách gần hệ nội công, phạm vi tấn công khá ngắn, xa hơn so với hệ phái cận chiến, chí mạng rất mạnh. Thời gian xung kích ngắn, cơ động, mạnh trong PK đơn, hội đồng khá tốt.",
  },
  "ngu-doc": {
    name: "Ngũ Độc",
    icon: "btn-ngudoc.webp",
    nameImg: "public/tab3/text ngudoc.webp",
    element: "Mộc",
    hero: "public/tab3/nv-ngudoc.webp",
    radar: "public/tab3/cs ngudoc.webp",
    tag1: "Đao Pháp",
    tag2: "Ngoại Công",
    desc: "Cưỡi ngựa tấn công phạm vi nhỏ phía trước, Vô Hình Độc của Ngũ Độc Đao khiến kẻ thù xung quanh nhiễm độc, giảm khả năng kháng độc đồng thời tăng thời gian trúng độc của địch.",
  },
  "cai-bang": {
    name: "Cái Bang",
    icon: "btn-caibang.webp",
    nameImg: "public/tab3/text caibang.webp",
    element: "Hỏa",
    hero: "public/tab3/nv-caibang.webp",
    radar: "public/tab3/cs caibang.webp",
    tag1: "Chưởng Pháp",
    tag2: "Bổng Pháp",
    desc: "Hội tụ đủ cả 2 khả năng tấn công từ xa một cá nhân hoặc trên một phạm vi rộng kèm theo khả năng truy kích, lấy tấn công làm thế mạnh của mình. Một trong các hệ phái được anh hùng ưa chuộng nhất dòng Kiếm Thế.",
  },
  "con-lon": {
    name: "Côn Lôn",
    icon: "btn-conlon.webp",
    nameImg: "public/tab3/text conlon.webp",
    element: "Thổ",
    hero: "public/tab3/nv-conlon.webp",
    radar: "public/tab3/cs conlon.webp",
    tag1: "Kiếm Pháp",
    tag2: "Đao Pháp",
    desc: "Tấn công nhiều mục tiêu, phạm vi cực rộng, hóa giải sát thương, hỗ trợ đồng đội tăng sức chiến đấu và tốc độ di chuyển. Khi sinh mệnh rơi vào trạng thái nguy cấp thì có thể kích hoạt năng lực né tránh hoàn toàn, tăng tốc độ di chuyển và hồi phục sinh mệnh.",
  },
  "doan-thi": {
    name: "Đoàn Thị",
    icon: "btn-doanthi.webp",
    nameImg: "public/tab3/text doanthi.webp",
    element: "Thủy",
    hero: "public/tab3/nv-doanthi.webp",
    radar: "public/tab3/cs doanthi.webp",
    tag1: "Kiếm Đoàn",
    tag2: "Chỉ Đoàn",
    desc: "Có thể tấn công vùng rộng từ khoảng cách hoặc tấn công cá thể ở khoảng cách gần đều được, có hiệu quả truy sát. Với kỹ năng Bắc Minh Thần Công có thể giúp bản thân và đồng đội hóa giải một lượng sát thương nhất định.",
  },
  "duong-mon": {
    name: "Đường Môn",
    icon: "btn-duongmon.webp",
    nameImg: "public/tab3/text duongmon.webp",
    element: "Mộc",
    hero: "public/tab3/nv-duongmon.webp",
    radar: "public/tab3/cs duongmon.webp",
    tag1: "Tụ Tiễn",
    tag2: "Hàm Tĩnh",
    desc: "Cưỡi ngựa tấn công kẻ địch cùng kỹ năng Bạo Vũ Lê Hoa cấp 90 làm mưa làm gió gây ra nhiều tổn hại liên tục. Tính cơ động và khả năng né tránh cao. Ngoài ra kỹ năng Tôi Độc Thuật của Đường Môn Tiễn có khả năng hỗ trợ đồng đội, tăng tốc độ di chuyển và hồi phục sinh mệnh.",
  },
  "minh-giao": {
    name: "Minh Giáo",
    icon: "btn-minhgiao.webp",
    nameImg: "public/tab3/text minhgiao.webp",
    element: "Hỏa",
    hero: "public/tab3/nv-minhgiao.webp",
    radar: "public/tab3/cs minh giao.webp",
    tag1: "Chùy",
    tag2: "Kiếm",
    desc: "Một chiến binh cận chiến trên lưng ngựa, tấn công đối thủ một cách nhanh chóng và cơ động. Nổi tiếng với Kim Qua Thiết Mã, có thể giúp đồng đội và bản thân gia tăng khả năng công kích tất sát.",
  },
  "nga-mi": {
    name: "Nga Mi",
    icon: "btn-ngamy.webp",
    nameImg: "public/tab3/text ngamy.webp",
    element: "Thủy",
    hero: "public/tab3/nv-ngamy.webp",
    radar: "public/tab3/cs ngamy.webp",
    tag1: "Chưởng Pháp",
    tag2: "Kiếm Pháp",
    desc: "Tấn công từ xa, có hiệu quả truy sát, gây sát thương khá lớn trên một địch thủ, lại có khả năng hồi phục tương đối để hỗ trợ cho bản thân và cho đồng đội.",
  },
  "thien-nhan": {
    name: "Thiên Nhẫn",
    icon: "btn-thiennhan.webp",
    nameImg: "public/tab3/text thiennhan.webp",
    element: "Hỏa",
    hero: "public/tab3/nv-thiennhan.webp",
    radar: "public/tab3/cs thiennhan.webp",
    tag1: "Đao Pháp",
    tag2: "Thương Pháp",
    desc: "Với Kỹ năng Thiên Ngoại Lưu Tinh tấn công phạm vi rộng từ khoảng cách xa, sát thương cộng dồn, chủ lực trong các cuộc hỗn chiến. Thêm vào một số bùa chú lợi hại, Thiên Nhẫn Đao là một vị trí không thể thiếu trong các cuộc chiến lớn.",
  },
  "thien-vuong": {
    name: "Thiên Vương",
    icon: "btn-thienvuong.webp",
    nameImg: "public/tab3/text thienvuong.webp",
    element: "Kim",
    hero: "public/tab3/nv-thienvuong.webp",
    radar: "public/tab3/cs thienvuong.webp",
    tag1: "Thương Pháp",
    tag2: "Chùy Pháp",
    desc: "Lấy ngoại công làm trọng. Tấn công cận chiến, đơn lẻ, Thiên Vương Thương cùng với kỹ năng tên tuổi Truy Tinh Trục Nguyệt với tốc độ nhanh, sát thương lớn khiến kẻ địch bị tiêu diệt nhanh chóng.",
  },
  "thuy-yen": {
    name: "Thúy Yên",
    icon: "btn-thuyyen.webp",
    nameImg: "public/tab3/text thuyyen.webp",
    element: "Thủy",
    hero: "public/tab3/nv-thuyyen.webp",
    radar: "public/tab3/cs thuyyen.webp",
    tag1: "Kiếm Pháp",
    tag2: "Đao Pháp",
    desc: "Tấn công từ xa, sở trường tấn công nhiều người cùng lúc, có khả năng giảm đi những hiệu ứng bất lợi trên cơ thể.",
  },
  "vo-dang": {
    name: "Võ Đang",
    icon: "btn-vodang.webp",
    nameImg: "public/tab3/text vodang.webp",
    element: "Kim",
    hero: "public/tab3/nv-vodang.webp",
    radar: "public/tab3/cs vodanhg.webp",
    tag1: "Khí Pháp",
    tag2: "Kiếm Pháp",
    desc: "Tấn công phạm vi rộng từ xa, gây hiệu quả cộng dồn. Với kỹ năng Tọa Vọng làm nên tên tuổi Võ Đang, dùng nội lực hóa giải sát thương, có vai trò cực kì quan trọng trong các trận hỗn chiến và tăng tấn công nội công của đồng đội.",
  },
  "thieu-lam": {
    name: "Thiếu Lâm",
    icon: "btn-thieulam.webp",
    nameImg: "public/tab3/text thieulam.webp",
    element: "Kim",
    hero: "public/tab3/nv-thieulam.webp",
    radar: "public/tab3/cs thieulam.webp",
    tag1: "Đao Pháp",
    tag2: "Bổng Pháp",
    desc: "Thiếu Lâm Đao nghiêng về tấn công trực diện, cộng với khả năng phòng thủ xuất sắc, linh hoạt trong chiến đấu và có thể phản đòn gây sát thương cho đối phương.",
  },
};

const sectKeys = Object.keys(sectData);

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  renderSlides("#tab2Slides", sliderData.tab2);
  renderTab2Cards();
  renderTab2DetailNav();
  renderTab3Nav();
  renderSlides("#tab4Slides", sliderData.tab4);

  initSwiper(".tab2Swiper", {
    delay: 2500,
    nextEl: ".tab2__arrow--next",
    prevEl: ".tab2__arrow--prev",
    dotsEl: ".tab2__dots",
    dotClass: "tab2__dot",
  });

  initTab2Detail();
  initTab3Sect();
  initNavRight();

  initSwiper(".tab4Swiper", {
    delay: 3000,
    nextEl: ".tab4__arrow--next",
    prevEl: ".tab4__arrow--prev",
    dotsEl: ".tab4__dots",
    dotClass: "tab4__dot",
  });
});

/* ================= COMMON ================= */

function renderSlides(containerSelector, slides) {
  const container = $(containerSelector);
  if (!container || !slides?.length) return;

  container.innerHTML = slides
    .map((src, index) => `
      <div class="swiper-slide">
        ${imgTag(src, `Slide ${index + 1}`)}
      </div>
    `)
    .join("");
}

function initSwiper(selector, config) {
  if (typeof Swiper === "undefined") return;

  const swiperEl = $(selector);
  if (!swiperEl) return;

  const slideCount = $$(".swiper-slide", swiperEl).length;

  new Swiper(selector, {
    loop: slideCount > 1,
    speed: 700,
    autoplay: slideCount > 1
      ? {
          delay: config.delay,
          disableOnInteraction: false,
        }
      : false,
    navigation: {
      nextEl: config.nextEl,
      prevEl: config.prevEl,
    },
    pagination: {
      el: config.dotsEl,
      clickable: true,
      bulletClass: config.dotClass,
      bulletActiveClass: "is-active",
      renderBullet: (_, className) => `<span class="${className}"></span>`,
    },
  });
}

/* ================= TAB 2 ================= */

function renderTab2Cards() {
  const container = $("#tab2Cards");
  if (!container) return;

  container.innerHTML = tab2Cards
    .map((card) => {
      const openClass = card.openDetail ? " js-open-tab2-detail" : "";

      return `
        <div class="item-tab2 item-tab2--${card.id}${openClass}" data-detail="${card.id}">
          <div class="item-mask">
            <div class="item-bg">
              ${imgTag(card.bg, card.title)}
            </div>

            <div class="item-nv">
              ${imgTag(card.character, card.title)}
            </div>
          </div>

          <div class="item-khung">
            ${imgTag("public/tab2/khung.webp", "")}
          </div>

          <button type="button" class="item-button">
            ${imgTag("public/tab2/button-text.webp", "")}
            <span>${card.title}</span>
          </button>
        </div>
      `;
    })
    .join("");
}

function renderTab2DetailNav() {
  const nav = $("#tab2DetailNav");
  if (!nav) return;

  nav.innerHTML = Object.entries(tab2Details)
    .map(([key, detail], index) => `
      <button class="tab2-detail__nav-btn${index === 0 ? " is-active" : ""}" type="button" data-detail="${key}">
        ${imgTag("public/tab2/button-text.webp", "")}
        <span>${detail.title}</span>
      </button>
    `)
    .join("");
}

function initTab2Detail() {
  const landing = $(".landing");
  const tab2 = $("#tab2");
  const detailTitle = $("#tab2DetailTitle");
  const detailContent = $("#tab2DetailContent");
  const homeLink = $(".tab2-detail__home");

  if (!landing || !detailTitle || !detailContent) return;

  const openDetail = (type) => {
    const detail = tab2Details[type];
    if (!detail) return;

    landing.classList.add("is-detail-open");
    detailTitle.textContent = detail.title;
    detailContent.innerHTML = detail.content || "";

    $$(".tab2-detail__nav-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.detail === type);
    });

    scrollToEl(landing);
  };

  const closeDetail = () => {
    landing.classList.remove("is-detail-open");
    scrollToEl(tab2 || landing);
  };

  $("#tab2Cards")?.addEventListener("click", (e) => {
    const item = e.target.closest(".js-open-tab2-detail");
    if (!item) return;
    openDetail(item.dataset.detail);
  });

  $("#tab2DetailNav")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab2-detail__nav-btn");
    if (!btn) return;
    openDetail(btn.dataset.detail);
  });

  homeLink?.addEventListener("click", (e) => {
    e.preventDefault();
    closeDetail();
    history.pushState?.(null, "", "index.html#tab2");
  });

  if (window.location.hash === "#tab2") {
    landing.classList.remove("is-detail-open");
    setTimeout(() => scrollToEl(tab2), 100);
  }
}

/* ================= TAB 3 ================= */

function renderTab3Nav() {
  const nav = $("#tab3Nav");
  if (!nav) return;

  nav.innerHTML = sectKeys
    .map((key, index) => {
      const sect = sectData[key];

      return `
        <button class="tab3__sect-btn${index === 0 ? " is-active" : ""}" type="button" data-sect="${key}">
          <span class="tab3__sect-icon">
            ${imgTag(`public/tab3/${sect.icon}`, sect.name)}
          </span>

          <span class="tab3__sect-active-bg">
            ${imgTag("public/tab3/act.webp", "")}
          </span>

          <span class="tab3__sect-name">${sect.name}</span>
        </button>
      `;
    })
    .join("");
}

function initTab3Sect() {
  const nav = $("#tab3Nav");
  const heroBox = $("#tab3Hero");

  const elements = {
    hero: $("#tab3HeroImg"),
    radar: $("#tab3RadarImg"),
    name: $("#tab3NameImg"),
    element: $("#tab3Element"),
    tag1: $("#tab3Tag1"),
    tag2: $("#tab3Tag2"),
    desc: $("#tab3Desc"),
  };

  if (!nav || !heroBox || Object.values(elements).some((el) => !el)) return;

  const updateSect = (key) => {
    const data = sectData[key];
    if (!data) return;

    heroBox.className = `tab3__hero tab3__hero--${key}`;

    elements.hero.src = data.hero;
    elements.hero.alt = data.name;

    elements.radar.src = data.radar;
    elements.radar.alt = `Chỉ số ${data.name}`;

    elements.name.src = data.nameImg;
    elements.name.alt = data.name;

    elements.element.textContent = data.element;
    elements.tag1.textContent = data.tag1;
    elements.tag2.textContent = data.tag2;
    elements.desc.textContent = data.desc;

    $$(".tab3__sect-btn", nav).forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.sect === key);
    });
  };

  nav.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab3__sect-btn");
    if (!btn) return;
    updateSect(btn.dataset.sect);
  });

  updateSect("ba-dao");
}

/* ================= NAV RIGHT ================= */

function initNavRight() {
  const navRight = $("#navRight");
  if (!navRight) return;

  $$(".js-toggle-nav-right", navRight).forEach((btn) => {
    btn.addEventListener("click", () => {
      navRight.classList.toggle("is-collapsed");
    });
  });
}
