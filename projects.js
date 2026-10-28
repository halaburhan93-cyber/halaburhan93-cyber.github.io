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
];

function cardHTML(p, imgBase) {
  const cat = CATEGORIES.find(c => c.id === p.cat);
  return `
  <article class="card">
    <div class="thumb"><img src="${imgBase}${p.image}" alt="معاينة ${p.name}" loading="lazy"></div>
    <div class="card-body">
      <span class="tag">${cat.name}</span>
      <h3>${p.name}</h3>
      <p>${p.about}</p>
      ${p.note ? `<span class="note">${p.note}</span>` : ""}
      <div class="actions">
        <a class="btn btn-primary" href="${p.url}" target="_blank" rel="noopener">افتح المشروع</a>
        ${p.code ? `<a class="btn btn-ghost" href="${p.code}" target="_blank" rel="noopener">الكود</a>` : ""}
      </div>
    </div>
  </article>`;
}
