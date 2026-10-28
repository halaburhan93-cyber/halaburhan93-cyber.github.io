// كل المشاريع هنا. لإضافة مشروع جديد: انسخ سطر وعدله، وحط صورته في مجلد images
const GH = "https://halaburhan93-cyber.github.io";
const REPO = "https://github.com/halaburhan93-cyber";

const CATEGORIES = [
  { id: "web",  name: "مشاريع الويب والبرمجة",           icon: "💻", about: "مواقع وأدوات تفاعلية بنيتها بـ HTML وCSS وJavaScript" },
  { id: "design", name: "التصميم والمونتاج والوسائط المتعددة", icon: "🎨", about: "عروض وتصاميم ومحتوى رقمي يجمع الصورة والصوت والفيديو" },
  { id: "ai",   name: "مشاريع الذكاء الاصطناعي",          icon: "✨", about: "أدوات تستخدم الذكاء الاصطناعي لتسهيل المهام اليومية" },
  { id: "uni",  name: "التسليمات والواجبات الجامعية",       icon: "🎓", about: "تسليماتي في مواد الدبلوم" },
];

const PROJECTS = [
  { cat: "web", name: "تحدي الوسائط المتعددة", image: "multimedia-quiz.png",
    about: "كويز تفاعلي من 15 سؤالًا في التصميم الجرافيكي والمونتاج والأنيميشن وتصميم الويب.",
    url: `${GH}/multimedia-quiz/`, code: `${REPO}/multimedia-quiz` },
  { cat: "web", name: "بوابة التوظيف CareerGate", image: "careergate.png",
    about: "موقع لتقديم الوظائف: تسجيل دخول، وتصفح الوظائف المتاحة، والتقديم عليها.",
    url: `${GH}/careergate/`, code: `${REPO}/careergate` },
  { cat: "web", name: "محوّل الوسائط", image: "multimedia-converter.png",
    about: "أداة لتحويل ملفات الصور والصوت والفيديو من صيغة إلى صيغة.",
    url: `${GH}/multimedia-converter/`, code: `${REPO}/multimedia-converter` },
  { cat: "design", name: "تقنية الوسائط المتعددة وتقنيات الويب", image: "hala-design.png",
    about: "موقع يعرّف بالتخصص ومجالاته: التصميم، والمونتاج، والأنيميشن، وتطوير الويب.",
    url: `${GH}/hala-design/`, code: `${REPO}/hala-design` },
  { cat: "design", name: "عرض «صيغة» لمحوّل الوسائط", image: "media-converter-presentation.png",
    about: "عرض تقديمي لمشروع محوّل الوسائط، فيه فيديو تعريفي وتعليق صوتي لكل شريحة.",
    url: `${GH}/media-converter-presentation/`, code: `${REPO}/media-converter-presentation` },
  { cat: "ai", name: "منظّم الدراسة الذكي", image: "study-planner.png",
    about: "تكتب موادك ومواعيد اختباراتها، والذكاء الاصطناعي يرتب لك جدول مذاكرة يومي بالأولويات والاستراحات.",
    note: "توليد الجدول يشتغل داخل Claude، والصفحة تعرض مثالًا منه",
    url: `${GH}/study-planner/`, code: `${REPO}/study-planner` },

  // التسليمات الجامعية: type "pdf" يفتح أو ينزل الملف، و"video" يشتغل داخل البطاقة
  { cat: "uni", type: "pdf", name: "مجلة الإبداع الرقمي", image: "uni-digital-zine.png",
    about: "مجلة من ست صفحات عن التصميم الرقمي وعناصره ومجالات الوسائط المتعددة.",
    file: "university/files/digital-zine.pdf" },
  { cat: "uni", type: "pdf", name: "ملف أعمالي في التصميم", image: "uni-design-portfolio.png",
    about: "هوية بصرية لـ SRMG (شعار وكروت عمل وتيشيرت)، ورسم شخصية، وبوستر، وكود موقع، وتصميم تطبيق، وإنفوجرافيك.",
    file: "university/files/design-portfolio.pdf" },
  { cat: "uni", type: "pdf", name: "عرض تقنية الوسائط المتعددة وتقنيات الويب", image: "uni-specialty-presentation.png",
    about: "عرض تقديمي من سبع شرائح: وش التخصص، ووش نتعلم فيه، والبرامج، ومجالات العمل.",
    file: "university/files/specialty-presentation.pdf" },
  { cat: "uni", type: "video", name: "From Idea to Design", image: "uni-idea-to-design.png",
    about: "فيديو قصير بالطول عن رحلة العمل من الفكرة إلى التصميم الجرافيكي.",
    file: "university/files/idea-to-design.mp4" },
  { cat: "uni", type: "video", name: "إعلان محوّل الوسائط (عربي)", image: "uni-converter-ad-ar.png",
    about: "فيديو تعريفي يعرض واجهة أداة تحويل الفيديو والصوت وطريقة استخدامها.",
    file: "university/files/converter-ad-ar.mp4" },
  { cat: "uni", type: "video", name: "إعلان محوّل الوسائط (إنجليزي)", image: "uni-converter-ad-en.png",
    about: "النسخة الإنجليزية من الفيديو التعريفي لأداة تحويل الوسائط.",
    file: "university/files/converter-ad-en.mp4" },
  { cat: "uni", type: "video", name: "«ملفك ما يشتغل؟»", image: "uni-file-not-working.png",
    about: "موشن جرافيك قصير عن صيغ الملفات، مقدمة تشويقية لمحوّل الوسائط.",
    file: "university/files/file-not-working.mp4" },
];

function cardHTML(p, imgBase) {
  const cat = CATEGORIES.find(c => c.id === p.cat);
  const root = imgBase.replace("images/", "");
  const img = imgBase + p.image;
  const thumb = p.type === "video"
    ? `<video controls preload="none" playsinline poster="${img}" src="${root}${p.file}" aria-label="${p.name}"></video>`
    : `<img src="${img}" alt="معاينة ${p.name}" loading="lazy">`;
  const buttons = p.type === "pdf"
    ? `<a class="btn btn-primary" href="${root}${p.file}" target="_blank" rel="noopener">افتح الملف</a>
       <a class="btn btn-ghost" href="${root}${p.file}" download>تنزيل</a>`
    : p.type === "video"
    ? `<a class="btn btn-ghost" href="${root}${p.file}" target="_blank" rel="noopener">افتح بشاشة كاملة</a>`
    : `<a class="btn btn-primary" href="${p.url}" target="_blank" rel="noopener">افتح المشروع</a>
       ${p.code ? `<a class="btn btn-ghost" href="${p.code}" target="_blank" rel="noopener">الكود</a>` : ""}`;
  return `
  <article class="card">
    <div class="thumb${p.type === "video" ? " video" : ""}">${thumb}</div>
    <div class="card-body">
      <span class="tag">${cat.name}</span>
      <h3>${p.name}</h3>
      <p>${p.about}</p>
      ${p.note ? `<span class="note">${p.note}</span>` : ""}
      <div class="actions">${buttons}</div>
    </div>
  </article>`;
}
