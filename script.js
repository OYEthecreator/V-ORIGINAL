document.addEventListener('DOMContentLoaded', function () {
  // =========================
  // GUEST ENTRY
// =========================
// GLOBAL USER STATE FLAG
// =========================
let USER_EXISTS = false; // will be true if the email exists during signup
// =========================
// SIGNUP CHECK (override redirect)
// =========================
const createBtn = document.getElementById("createBtn");
if (createBtn) {
  createBtn.addEventListener("click", () => {
    const email = document.getElementById("su-email").value.trim().toLowerCase();
    const users = JSON.parse(localStorage.getItem("vouxUsers") || "[]");

    const userExists = users.some(u => u.email.toLowerCase() === email);
    if (userExists) {
      alert("Account already exists. Please log in.");
      USER_EXISTS = true; // BLOCK guest fallback
      return; // stop signup flow
    }
    // continue normal signup flow...
  });
}

// =========================
// GUEST BUTTON
// =========================
const guest = document.getElementById('enter-as-guest');
if (guest) {
  guest.addEventListener('click', () => {
    if (USER_EXISTS) {
      alert("You already have an account. Please log in.");
      return; // STOP redirect
    }
    window.location.href = 'guest.html';
  });
}

// =========================
// GUEST FORM SUBMISSION
// =========================
const form = document.getElementById('guestForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (USER_EXISTS) {
      alert("You already have an account. Please log in.");
      return; // BLOCK redirect
    }

    const name = document.getElementById('username')?.value.trim();
    if (name) localStorage.setItem('username', name);

    const login = document.getElementById('logging-in'); 
    if (login) login.innerText = 'Logging in...';

    setTimeout(() => {
      window.location.href = 'entry.html';
    }, 5000);
  });
}

    // ===========================
// VOUX SIGNUP LOCAL STORAGE
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.getElementById("createBtn");

  createBtn.addEventListener("click", () => {
    // Collect signup input values
    const name = document.getElementById("su-name").value.trim();
    const email = document.getElementById("su-email").value.trim();
    const password = document.getElementById("su-pass").value;
    const confirmPassword = document.getElementById("su-pass2").value;
    const phone = document.getElementById("su-phone").value.trim();
    const country = document.getElementById("su-country").value;
    const stylePref = document.getElementById("su-style").value;
    const socialHandles = document.getElementById("su-socials") 
                          ? document.getElementById("su-socials").value.trim() 
                          : "";

    // Simple required fields validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("vouxUsers") || "[]");

    // Check if user already exists (based on email)
    const userExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());
    if (userExists) {
      alert("User already exists. Please log in instead.");
      return;
    }

    // Create new user object
    const newUser = {
      name,
      email,
      password, // in production, store hashed password
      phone: phone || "",
      country: country || "",
      stylePreference: stylePref || "",
      socialHandles: socialHandles || ""
    };

    // Add new user to array and save back to localStorage
    users.push(newUser);
    localStorage.setItem("vouxUsers", JSON.stringify(users));

    alert("Account created successfully!");
  });
});
// ===========================
// VOUX SIGN-IN LOCAL STORAGE
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  const signInBtn = document.getElementById("signInBtn");

  signInBtn.addEventListener("click", () => {
    const email = document.getElementById("si-email").value.trim().toLowerCase();
    const password = document.getElementById("si-pass").value;

    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Get stored users
    const users = JSON.parse(localStorage.getItem("vouxUsers") || "[]");

    // Check if user exists
    const user = users.find(u => u.email.toLowerCase() === email);

    if (!user) {
      alert("Account does not exist. Please sign up to create an account.");
      return;
    }

    // Check password
    if (user.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }const loader = document.getElementById("loginLoader");
const popup = document.getElementById("welcomePopup");
const nameEl = document.getElementById("welcomeName");
const closeBtn = document.querySelector(".welcome-close");

// Extract FIRST name only
const firstName = user.name.trim().split(" ")[0];

// Show loader
loader.classList.add("active");

// Wait 5 seconds
setTimeout(() => {
  loader.classList.remove("active");

  // Show popup
  nameEl.textContent = firstName;
  popup.classList.add("active");

  // Auto redirect after popup
  setTimeout(() => {
    popup.classList.remove("active");
    window.location.href = "entry.html";
  }, 2500);

}, 5000);

// Manual close
closeBtn.onclick = () => {
  popup.classList.remove("active");
  window.location.href = "entry.html";
};

  });
});
// ===========================
// PROFILE POPUP JS
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const profileIcon = document.querySelector("profileBtn");

  // Create popup container dynamically
  const popup = document.createElement("div");
  popup.id = "profilePopup";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.width = "320px";
  popup.style.maxWidth = "90%";
  popup.style.background = "#111";
  popup.style.color = "#fff";
  popup.style.padding = "25px";
  popup.style.borderRadius = "12px";
  popup.style.boxShadow = "0 8px 24px rgba(0,0,0,0.7)";
  popup.style.zIndex = "9999";
  popup.style.display = "none";
  popup.style.fontFamily = "'Arial', sans-serif";

  // Close button
  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "10px";
  closeBtn.style.right = "15px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontSize = "20px";
  closeBtn.style.color = "#d4af37";
  popup.appendChild(closeBtn);

  // Greeting container
  const greeting = document.createElement("h2");
  greeting.style.marginTop = "0";
  greeting.style.marginBottom = "15px";
  greeting.style.fontSize = "20px";
  greeting.style.color = "#f0d98a";
  popup.appendChild(greeting);

  // User details container
  const detailsContainer = document.createElement("div");
  detailsContainer.style.fontSize = "14px";
  detailsContainer.style.lineHeight = "1.6";
  popup.appendChild(detailsContainer);

  document.body.appendChild(popup);

  // Close popup function
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Show profile popup on icon click
  profileIcon.addEventListener("click", () => {
    const loggedEmail = localStorage.getItem("loggedInEmail");
    const users = JSON.parse(localStorage.getItem("vouxUsers") || "[]");

    if (!loggedEmail) {
      alert("No user is currently logged in.");
      return;
    }

    const user = users.find(u => u.email.toLowerCase() === loggedEmail.toLowerCase());
    if (!user) {
      alert("User not found. Please log in again.");
      return;
    }

    // Extract first name for greeting
    const firstName = user.name.trim().split(" ")[0];

    greeting.textContent = `Welcome, ${firstName}!`;

    // Clear previous details
    detailsContainer.innerHTML = "";

    // Build details
    const fields = [
      { label: "Full Name", value: user.name },
      { label: "Email", value: user.email },
      { label: "Phone", value: user.phone || "N/A" },
      { label: "Country", value: user.country || "N/A" },
      { label: "Style Preference", value: user.stylePreference || "N/A" },
      { label: "Social Handles", value: user.socialHandles || "N/A" }
    ];

    fields.forEach(f => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${f.label}:</strong> ${f.value}`;
      detailsContainer.appendChild(div);
    });

    popup.style.display = "block";
  });
});
 // Get references
const welcomeSection = document.getElementById("welcome-section");
const welcomeText = document.getElementById("welcome-text");
const welcomeSubtext = document.getElementById("welcome-subtext");
const closeBtn = document.getElementById("closeBtn");

// Function to show welcome message
function showWelcomeMessage() {
  const name = localStorage.getItem("username"); // Grab name from signup page
  const hasSeenWelcome = sessionStorage.getItem("welcomeDisplayed"); // Track if displayed

  if (name && !hasSeenWelcome) {
    // Set welcome content
    welcomeText.innerText = `Welcome, ${name}!`;
    welcomeSubtext.innerText =
      "Explore the bold, the refined, and the unexpected. This is your gateway into the world of VOUX.";

    // Show box
    welcomeSection.style.display = "block";

    // Mark as displayed for this session
    sessionStorage.setItem("welcomeDisplayed", "true");
  }
}

// Close button functionality
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    welcomeSection.style.display = "none";
  });
}

// Trigger the welcome box on page load
window.addEventListener("DOMContentLoaded", showWelcomeMessage);

  // =========================
  // DROPS COUNTDOWN TIMER
  // =========================
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const dropDate = new Date("April 24, 2026 00:00:00").getTime();

  function updateCountDown() {
    const now = new Date().getTime();
    const diff = dropDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    if (days) days.innerHTML = d;
    if (hours) hours.innerHTML = h < 10 ? "0" + h : h;
    if (minutes) minutes.innerHTML = m < 10 ? "0" + m : m;
    if (seconds) seconds.innerHTML = s < 10 ? "0" + s : s;
  }
  if (days || hours || minutes || seconds) {
    updateCountDown();
    setInterval(updateCountDown, 1000);
  }
  // PRODUCT IMAGE SLIDER
  // =========================
  const images = document.querySelectorAll('.product-image img');
  if (images.length > 0) {
    let currentIndex = 0;
    const realSlidesCount = images.length;
    images[currentIndex].classList.add('active');
    const prevBtn = document.getElementById('rotate-left');
    const nextBtn = document.getElementById('rotate-right');

    function updateSlidePosition() {
      images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) img.classList.add('active');
      });
    }

    function resetPosition() {
      updateSlidePosition();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex++;
        updateSlidePosition();
        if (currentIndex === realSlidesCount) {
          setTimeout(() => {
            currentIndex = 0;
            resetPosition();
          }, 500);
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex--;
        updateSlidePosition();
        if (currentIndex < 0) {
          setTimeout(() => {
            currentIndex = realSlidesCount - 1;
            resetPosition();
          }, 500);
        }
      });
    }
  }
// =====================
// CONTACT FORM SETUP
// =====================
  // =====================
  // CUSTOM REPLIES
  // =====================
const inquiryReplies = {
  "Orders": [
    // 1-10: Order Tracking
    {
      keywords: ["where is my order", "track my order", "order status", "package location", "tracking number", "shipping status", "delivery update", "order tracking", "parcel location", "shipment status"],
      reply: ["Your order is currently in transit and should arrive within 3-5 business days.", "I can check your order status. Please provide your order number for detailed tracking."]
    },
    {
      keywords: ["tracking not updating", "stuck in transit", "tracking frozen", "no tracking update", "tracking delayed", "status not changing", "tracking stuck", "no movement", "tracking inactive", "update delayed"],
      reply: ["Tracking updates may delay during transit. It typically refreshes every 24 hours.", "Sometimes carriers experience tracking delays. Your package is still moving normally."]
    },
    // 11-20: Shipping Time
    {
      keywords: ["shipping time", "delivery time", "how long shipping", "when arrive", "delivery estimate", "transit time", "shipping duration", "arrival time", "delivery date", "ship time"],
      reply: ["Standard shipping takes 5-7 business days. Express shipping delivers in 2-3 days.", "Delivery times vary by location. You'll receive tracking once shipped."]
    },
    {
      keywords: ["shipping delay", "delivery late", "order delayed", "shipment delayed", "late delivery", "delayed order", "shipping slow", "delivery postponed", "shipment late", "delivery delayed"],
      reply: ["Delays can occur due to weather or high volume. Check tracking for current status.", "We're monitoring delayed shipments and will update you via email."]
    },
    // 21-30: International Shipping
    {
      keywords: ["international shipping", "ship to country", "overseas delivery", "international delivery", "ship abroad", "global shipping", "worldwide shipping", "international order", "cross border", "overseas order"],
      reply: ["We ship to 150+ countries. International delivery takes 10-21 business days.", "Customs fees may apply for international orders depending on your country."]
    },
    {
      keywords: ["customs fees", "import tax", "customs charge", "duty fees", "import duty", "customs tax", "international fees", "cross border fees", "customs payment", "import charges"],
      reply: ["Customs fees are determined by your country and are the recipient's responsibility.", "Some orders may incur import taxes based on your local regulations."]
    },
    // 31-40: Order Changes
    {
      keywords: ["change address", "update address", "wrong address", "change delivery address", "shipping address change", "update shipping", "address modification", "delivery address update", "change location", "update delivery"],
      reply: ["Address changes are possible before shipment. Contact support immediately.", "Once shipped, address changes depend on carrier policies and may incur fees."]
    },
    {
      keywords: ["cancel order", "stop order", "order cancellation", "cancel purchase", "stop shipment", "cancel my order", "order cancel", "purchase cancellation", "stop delivery", "cancel transaction"],
      reply: ["Orders can be canceled within 1 hour of placement. After that, contact support.", "Cancellation availability depends on order processing stage."]
    },
    // 41-50: Returns & Refunds
    {
      keywords: ["return order", "send back", "return item", "return product", "item return", "product return", "send item back", "return merchandise", "return goods", "send back order"],
      reply: ["Returns are accepted within 30 days of delivery in original condition.", "Start your return through your account dashboard for fastest processing."]
    },
    {
      keywords: ["refund", "money back", "get refund", "refund request", "payment return", "refund money", "get money back", "refund payment", "return funds", "refund amount"],
      reply: ["Refunds process within 3-5 business days after we receive your return.", "Refunds are issued to your original payment method."]
    },
    // 51-60: Damaged/Missing Items
    {
      keywords: ["damaged order", "broken item", "damaged product", "broken order", "item damaged", "product broken", "damaged package", "broken package", "damaged goods", "broken goods"],
      reply: ["We're sorry! Please provide photos of the damage for immediate assistance.", "Damaged items qualify for instant replacement or full refund."]
    },
    {
      keywords: ["missing item", "item missing", "missing product", "order incomplete", "missing from order", "item not received", "product missing", "incomplete order", "missing part", "item absent"],
      reply: ["Missing items are prioritized for resolution. Please provide your order details.", "We'll ship missing items immediately or refund the missing portion."]
    },
    // 61-70: Payment Issues
    {
      keywords: ["payment failed", "payment declined", "transaction failed", "payment error", "card declined", "payment problem", "transaction declined", "payment issue", "card failed", "payment unsuccessful"],
      reply: ["Payment failures can occur due to bank restrictions or incorrect details.", "Try a different payment method or contact your bank for authorization."]
    },
    {
      keywords: ["double charged", "charged twice", "duplicate charge", "multiple charges", "overcharged", "extra charge", "double payment", "charged multiple", "repeated charge", "duplicate payment"],
      reply: ["Duplicate charges are usually temporary authorizations that clear automatically.", "If charges persist for 3 days, contact support with transaction details."]
    },
    // 71-80: Order Status
    {
      keywords: ["order processing", "order confirmed", "order received", "processing order", "order in process", "order being processed", "processing status", "order preparation", "order fulfillment", "processing stage"],
      reply: ["Orders typically process within 24-48 hours before shipping.", "You'll receive shipping confirmation once processing is complete."]
    },
    {
      keywords: ["order shipped", "order dispatched", "shipped out", "dispatched order", "order sent", "package shipped", "shipment sent", "order departed", "shipped order", "dispatched package"],
      reply: ["Shipped orders include tracking numbers sent to your email.", "Track your package using the provided tracking link for real-time updates."]
    },
    // 81-90: Delivery Issues
    {
      keywords: ["failed delivery", "delivery attempt", "delivery failed", "missed delivery", "delivery unsuccessful", "failed attempt", "missed package", "delivery issue", "failed dropoff", "missed dropoff"],
      reply: ["Failed deliveries usually result in a new delivery attempt the next day.", "Check tracking for specific delivery instructions or pickup locations."]
    },
    {
      keywords: ["delivery instructions", "leave at door", "delivery note", "delivery preference", "delivery option", "delivery request", "dropoff instruction", "delivery direction", "package instruction", "delivery note"],
      reply: ["Delivery instructions can be added to your order before shipment.", "Contact the carrier directly for specific delivery arrangement requests."]
    },
    // 91-100: General Order Questions
    {
      keywords: ["order confirmation", "order receipt", "purchase confirmation", "order details", "order summary", "order information", "purchase details", "order receipt", "confirmation email", "order proof"],
      reply: ["Order confirmations are sent immediately after purchase to your email.", "Check your spam folder if you don't see the confirmation email."]
    },
    {
      keywords: ["order history", "previous orders", "past orders", "order record", "purchase history", "previous purchases", "order archive", "past purchases", "order log", "purchase record"],
      reply: ["Order history is available in your account dashboard with full details.", "You can track all previous orders and reorder favorite items easily."]
    }
  ],

  "Partnerships": [
    // 1-10: Brand Collaborations
    {
      keywords: ["brand collaboration", "work together", "partner with you", "collaborate with brand", "brand partnership", "co-branding opportunity", "joint collaboration", "brand alliance", "strategic partnership", "co-marketing"],
      reply: ["We're always open to exciting brand collaborations that align with our values.", "Partnership proposals are reviewed by our team within 3-5 business days."]
    },
    {
      keywords: ["collaboration proposal", "partnership pitch", "collab proposal", "partnership offer", "collaboration idea", "partnership concept", "collab opportunity", "partnership proposal", "collaboration offer", "partnership pitch"],
      reply: ["Please send your collaboration proposal to partnerships@voux.co for review.", "Include your brand details, audience demographics, and collaboration vision."]
    },
    // 11-20: Influencer Partnerships
    {
      keywords: ["influencer program", "content creator", "influencer collaboration", "creator partnership", "influencer marketing", "content creator program", "influencer partnership", "creator collaboration", "influencer program", "content partner"],
      reply: ["Our influencer program requires minimum 10K engaged followers across platforms.", "Content creators receive product seeding and commission opportunities."]
    },
    {
      keywords: ["influencer requirements", "creator criteria", "influencer guidelines", "creator requirements", "influencer standards", "creator criteria", "influencer qualifications", "creator guidelines", "influencer specs", "creator standards"],
      reply: ["We evaluate influencers based on engagement rate, content quality, and audience fit.", "Successful creators typically have 3%+ engagement and authentic content."]
    },
    // 21-30: Sponsorship Opportunities
    {
      keywords: ["sponsorship", "event sponsorship", "sponsor event", "sponsorship opportunity", "event partner", "sponsor program", "sponsorship program", "event sponsorship", "sponsor opportunity", "sponsorship request"],
      reply: ["We sponsor events that align with our brand values and target audience.", "Sponsorship proposals should include event details and audience demographics."]
    },
    {
      keywords: ["sponsorship criteria", "sponsor requirements", "sponsorship guidelines", "sponsor criteria", "sponsorship standards", "sponsor qualifications", "sponsorship specs", "sponsor guidelines", "sponsorship requirements", "sponsor specs"],
      reply: ["Sponsorship decisions consider event scale, audience alignment, and brand exposure.", "We prioritize events with 500+ attendees or significant digital reach."]
    },
    // 31-40: Retail Partnerships
    {
      keywords: ["retail partnership", "store partnership", "retail collaboration", "store collaboration", "retail partner", "store partner", "retail distribution", "store distribution", "retail stockist", "store stockist"],
      reply: ["We consider retail partnerships with established boutiques and concept stores.", "Retail partners receive wholesale pricing and marketing support."]
    },
    {
      keywords: ["wholesale account", "bulk order", "wholesale pricing", "bulk purchase", "wholesale order", "bulk pricing", "wholesale program", "bulk program", "wholesale partnership", "bulk partnership"],
      reply: ["Wholesale accounts require business registration and retail location verification.", "Minimum order quantities apply for wholesale pricing tiers."]
    },
    // 41-50: Media Partnerships
    {
      keywords: ["media partnership", "press partnership", "media collaboration", "press collaboration", "media partner", "press partner", "media alliance", "press alliance", "media cooperation", "press cooperation"],
      reply: ["Media partnerships include content features, exclusive releases, and joint campaigns.", "We work with publications that reach our target demographic effectively."]
    },
    {
      keywords: ["content partnership", "editorial partnership", "content collaboration", "editorial collaboration", "content partner", "editorial partner", "content feature", "editorial feature", "content cooperation", "editorial cooperation"],
      reply: ["Content partnerships focus on authentic storytelling and brand alignment.", "We prefer long-term content relationships over one-time features."]
    },
    // 51-60: Affiliate Programs
    {
      keywords: ["affiliate program", "referral program", "affiliate partnership", "referral partnership", "affiliate marketing", "referral marketing", "affiliate opportunity", "referral opportunity", "affiliate collab", "referral collab"],
      reply: ["Our affiliate program offers competitive commissions for qualified referrals.", "Affiliates need consistent traffic and relevant audience for approval."]
    },
    {
      keywords: ["affiliate commission", "referral commission", "affiliate rate", "referral rate", "affiliate payout", "referral payout", "affiliate earnings", "referral earnings", "affiliate percentage", "referral percentage"],
      reply: ["Commission rates vary by product category and affiliate performance tier.", "Top affiliates can earn up to 20% commission on qualified sales."]
    },
    // 61-70: Corporate Partnerships
    {
      keywords: ["corporate partnership", "business partnership", "corporate collaboration", "business collaboration", "corporate partner", "business partner", "corporate program", "business program", "corporate alliance", "business alliance"],
      reply: ["Corporate partnerships include employee programs, gifting, and bulk orders.", "We customize corporate programs based on company size and needs."]
    },
    {
      keywords: ["employee program", "staff program", "employee benefit", "staff benefit", "corporate benefit", "business benefit", "employee discount", "staff discount", "corporate discount", "business discount"],
      reply: ["Employee programs offer special pricing and exclusive collections for staff.", "Minimum company size of 50 employees required for corporate programs."]
    },
    // 71-80: Charity Partnerships
    {
      keywords: ["charity partnership", "nonprofit partnership", "charity collaboration", "nonprofit collaboration", "charity partner", "nonprofit partner", "charity program", "nonprofit program", "charity initiative", "nonprofit initiative"],
      reply: ["We partner with charities that align with our sustainability and community values.", "Charity collaborations often involve donation percentages or fundraising events."]
    },
    {
      keywords: ["cause partnership", "social cause", "cause collaboration", "social collaboration", "cause partner", "social partner", "cause program", "social program", "cause marketing", "social marketing"],
      reply: ["Cause partnerships focus on environmental sustainability and community empowerment.", "We prioritize local community initiatives and global sustainability efforts."]
    },
    // 81-90: Technology Partnerships
    {
      keywords: ["tech partnership", "technology partnership", "tech collaboration", "technology collaboration", "tech partner", "technology partner", "tech integration", "technology integration", "tech cooperation", "technology cooperation"],
      reply: ["Technology partnerships enhance our digital experience and customer journey.", "We collaborate with tech companies on AR, AI, and e-commerce innovations."]
    },
    {
      keywords: ["app partnership", "mobile partnership", "app collaboration", "mobile collaboration", "app partner", "mobile partner", "app integration", "mobile integration", "app cooperation", "mobile cooperation"],
      reply: ["App partnerships focus on seamless integration and enhanced user experience.", "We prioritize partners with strong user bases and complementary features."]
    },
    // 91-100: General Partnership Questions
    {
      keywords: ["partnership process", "collaboration process", "partnership steps", "collaboration steps", "partnership procedure", "collaboration procedure", "partnership workflow", "collaboration workflow", "partnership timeline", "collaboration timeline"],
      reply: ["The partnership process involves proposal review, alignment check, and agreement.", "Typical partnership approval takes 2-3 weeks from initial contact."]
    },
    {
      keywords: ["partnership benefits", "collaboration benefits", "partnership advantages", "collaboration advantages", "partnership perks", "collaboration perks", "partnership value", "collaboration value", "partnership rewards", "collaboration rewards"],
      reply: ["Partnership benefits include cross-promotion, shared audiences, and revenue sharing.", "Successful partnerships drive mutual growth and brand awareness."]
    }
  ],
  "Press": [
    // 1-20: Media Inquiries
    {
      keywords: ["media inquiry", "press inquiry", "media request", "press request", "journalist inquiry", "media question", "press question", "media contact", "press contact", "journalist request"],
      reply: ["Our press team responds to media inquiries within 24-48 hours.", "Please include your publication details and deadline for faster response."]
    },
    {
      keywords: ["press kit", "media kit", "press materials", "media materials", "press resources", "media resources", "brand assets", "press assets", "media assets", "press package"],
      reply: ["Press kits are available upon request and include high-resolution images.", "We provide logos, product shots, and brand guidelines for media use."]
    },
    // 21-40: Interview Requests
    {
      keywords: ["interview request", "press interview", "media interview", "interview opportunity", "press feature", "media feature", "interview scheduling", "press discussion", "media discussion", "executive interview"],
      reply: ["Interview requests are evaluated based on publication reach and relevance.", "We typically schedule interviews 1-2 weeks in advance."]
    },
    {
      keywords: ["spokesperson interview", "executive interview", "founder interview", "CEO interview", "leadership interview", "management interview", "executive feature", "leadership feature", "founder feature", "CEO feature"],
      reply: ["Executive interviews focus on brand vision, innovation, and industry trends.", "Spokesperson availability depends on current campaigns and events."]
    },
    // 41-60: Press Releases
    {
      keywords: ["press release", "news release", "media release", "announcement", "news announcement", "media announcement", "press statement", "media statement", "official statement", "brand announcement"],
      reply: ["Press releases are distributed for major product launches and company news.", "Subscribe to our press list for immediate release notifications."]
    },
    {
      keywords: ["embargoed release", "under embargo", "pre-release", "advance copy", "early access", "preview access", "embargoed content", "pre-release content", "advance information", "early information"],
      reply: ["Embargoed materials are available to trusted media partners before public release.", "Embargo dates and terms are specified in media agreements."]
    },
    // 61-80: Event Coverage
    {
      keywords: ["event coverage", "press event", "media event", "event invitation", "press invitation", "media invitation", "event access", "press access", "media access", "event credentials"],
      reply: ["Press credentials are required for event coverage and are limited per outlet.", "Event invitations include photography guidelines and interview opportunities."]
    },
    {
      keywords: ["fashion show", "runway show", "collection launch", "product launch", "launch event", "preview event", "showroom event", "exhibition", "pop-up event", "trunk show"],
      reply: ["Fashion show invitations are prioritized for industry professionals and top media.", "Launch events often include exclusive previews and designer access."]
    },
    // 81-100: Exclusive Content
    {
      keywords: ["exclusive content", "exclusive story", "exclusive feature", "exclusive interview", "exclusive access", "exclusive preview", "first look", "scoop", "exclusive coverage", "exclusive material"],
      reply: ["Exclusive content opportunities are reserved for strategic media partners.", "Exclusivity terms are negotiated based on publication reach and timing."]
    },
    {
      keywords: ["behind the scenes", "BTS content", "making of", "production process", "creative process", "design process", "backstage access", "studio access", "design studio", "creative studio"],
      reply: ["Behind-the-scenes content showcases our design process and brand philosophy.", "BTS access is typically granted for major campaign productions."]
    }
  ],

"Support": [
    // 1-20: Technical Issues
    {
      keywords: ["website not working", "site down", "website error", "page error", "site error", "technical issue", "website problem", "site problem", "technical problem", "website bug"],
      reply: ["We're investigating technical issues. Try clearing cache or using a different browser.", "Technical support responds within 2 hours for urgent website issues."]
    },
    {
      keywords: ["login problem", "can't login", "login error", "account access", "sign in issue", "login failed", "access denied", "account locked", "password problem", "authentication issue"],
      reply: ["Login issues can often be resolved by resetting your password or clearing cookies.", "Account recovery typically takes 15-30 minutes after verification."]
    },
    // 21-40: Account Management
    {
      keywords: ["update account", "account settings", "profile update", "account information", "personal details", "account details", "profile information", "account preferences", "user settings", "profile settings"],
      reply: ["Account updates can be made in your profile settings with immediate effect.", "Some account changes require email verification for security."]
    },
    {
      keywords: ["delete account", "close account", "account deletion", "remove account", "terminate account", "cancel account", "account closure", "delete profile", "close profile", "remove profile"],
      reply: ["Account deletion is permanent and removes all order history and data.", "We require verification before processing account deletion requests."]
    },
    // 41-60: Product Support
    {
      keywords: ["product question", "item question", "product inquiry", "item inquiry", "product info", "item info", "product details", "item details", "product specifications", "item specifications"],
      reply: ["Product specialists can provide detailed specifications and usage guidance.", "Most product questions can be answered through our detailed product pages."]
    },
    {
      keywords: ["size guide", "sizing help", "size chart", "fit guide", "measurement guide", "size assistance", "fit assistance", "sizing guide", "fit guide", "measurement chart"],
      reply: ["Our size guides include detailed measurements and fit recommendations.", "Virtual fitting assistance is available for select apparel categories."]
    },
    // 61-80: Payment Support
    {
      keywords: ["payment method", "payment options", "accepted payments", "payment types", "payment cards", "payment systems", "payment solutions", "payment gateways", "payment processors", "payment acceptance"],
      reply: ["We accept major credit cards, PayPal, and select digital wallets.", "Payment method availability may vary by region and order value."]
    },
    {
      keywords: ["billing issue", "invoice problem", "billing error", "invoice error", "billing mistake", "invoice mistake", "billing correction", "invoice correction", "billing dispute", "invoice dispute"],
      reply: ["Billing issues are prioritized and typically resolved within 24 hours.", "Provide order number and specific billing details for fastest resolution."]
    },
    // 81-100: App Support
    {
      keywords: ["app problem", "mobile app issue", "app error", "mobile error", "app crash", "mobile crash", "app not working", "mobile not working", "app bug", "mobile bug"],
      reply: ["App issues may require updating to the latest version or reinstalling.", "Our development team monitors app performance and releases regular updates."]
    },
    {
      keywords: ["app feature", "mobile feature", "app functionality", "mobile functionality", "app capability", "mobile capability", "app tool", "mobile tool", "app option", "mobile option"],
      reply: ["Our mobile app includes exclusive features like AR try-on and personalized recommendations.", "New app features are released monthly based on user feedback."]
    }
  ],

"General": [
    // 1-20: Brand Information
    {
      keywords: ["about voux", "brand story", "company info", "about company", "brand history", "company history", "brand background", "company background", "brand information", "company information"],
      reply: ["VOUX was founded in 2018 with a vision for sustainable luxury fashion.", "Our brand story combines innovative design with ethical production practices."]
    },
    {
      keywords: ["sustainability", "ethical production", "sustainable fashion", "eco-friendly", "environmental", "green fashion", "sustainable practices", "ethical fashion", "eco fashion", "sustainable materials"],
      reply: ["We're committed to sustainability through recycled materials and ethical manufacturing.", "Our sustainability report details our environmental initiatives and goals."]
    },
    // 21-40: Store Information
    {
      keywords: ["store location", "physical store", "retail location", "brick and mortar", "store address", "shop location", "store finder", "shop finder", "store locator", "shop locator"],
      reply: ["Our flagship stores are in major fashion capitals with unique architectural designs.", "Store locations and hours are available on our website with interactive maps."]
    },
    {
      keywords: ["store hours", "opening hours", "business hours", "operating hours", "store timing", "opening times", "business times", "operating times", "store schedule", "opening schedule"],
      reply: ["Store hours vary by location and season. Check specific store pages for current hours.", "Extended hours are available during holiday seasons and special events."]
    },
    // 41-60: Career Opportunities
    {
      keywords: ["career opportunities", "job openings", "employment opportunities", "work with us", "join our team", "career positions", "job positions", "employment positions", "career options", "job options"],
      reply: ["We're always looking for passionate individuals to join our creative team.", "Current openings are listed on our careers page with detailed job descriptions."]
    },
    {
      keywords: ["internship program", "internship opportunity", "student program", "graduate program", "training program", "internship position", "student opportunity", "graduate opportunity", "training opportunity", "internship availability"],
      reply: ["Our internship program offers hands-on experience in fashion design and marketing.", "Internship applications are accepted quarterly for various departments."]
    },
    // 61-80: Social Responsibility
    {
      keywords: ["social responsibility", "community program", "social impact", "community impact", "social initiative", "community initiative", "social program", "community program", "social project", "community project"],
      reply: ["Our community programs focus on fashion education and creative empowerment.", "We partner with local organizations to support emerging design talent."]
    },
    {
      keywords: ["charity work", "philanthropy", "charitable giving", "donations", "charity donations", "philanthropic work", "charitable work", "giving back", "community support", "charity support"],
      reply: ["We donate a percentage of profits to fashion education and sustainability initiatives.", "Charity partnerships are announced quarterly on our social channels."]
    },
    // 81-100: Company Policies
    {
      keywords: ["privacy policy", "data protection", "privacy protection", "data privacy", "privacy terms", "data security", "privacy security", "data protection policy", "privacy agreement", "data agreement"],
      reply: ["Our privacy policy details how we protect and use customer data responsibly.", "We comply with global data protection regulations and industry standards."]
    },
    {
      keywords: ["terms of service", "terms and conditions", "user agreement", "service terms", "conditions of use", "user terms", "service agreement", "terms of use", "conditions of service", "user conditions"],
      reply: ["Terms of service outline user rights and responsibilities when using our platform.", "Policy updates are communicated via email and website notifications."]
    }
  ]
};
  // =========================
// CONTACT FORM SETUP
// =========================
// =====================
// FORM ELEMENTS
// =====================
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.contact-form button[type="submit"]');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const inquiry = document.getElementById('inquiry');
const message = document.getElementById('message');
const chatContainer = document.getElementById('chatContainer');

if (contactForm && submitBtn && fullName && email && inquiry && message) {
  const btnText = submitBtn.querySelector('.btn-text');
  const btnSpinner = submitBtn.querySelector('.btn-spinner');

  // =====================
  // FORM VALIDATION
  // =====================
  function validateForm() {
    let errors = [];
    if (fullName.value.trim() === "") errors.push('Full name is required');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) errors.push('Enter a valid email address');

    if (inquiry.value === "") errors.push('Please select an Inquiry type');

    if (message.value.trim() === "") errors.push('Message cannot be empty');

    return errors;
  }

  // =====================
  // TYPEWRITER EFFECT
  // =====================
  function typeWriterEffect(element, text, baseSpeed = 50) {
    element.textContent = "";
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        const delay = baseSpeed + Math.random() * 80;
        setTimeout(typeChar, delay);
      }
    }
    typeChar();
  }

  // =====================
  // SHOW AGENT REPLIES
  // =====================
  function showAgentReplies(container, replies) {
    message.value = "";
    let index = 0;

    function nextReply() {
      if (index >= replies.length) return;

      const agentBubble = document.createElement('div');
      agentBubble.className = 'chat-bubble agent';
      container.appendChild(agentBubble);
      container.scrollTop = container.scrollHeight;

      let dots = 0;
      const typingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        agentBubble.textContent = "💬 Typing" + ".".repeat(dots);
      }, 400);
      
      setTimeout(() => {
        clearInterval(typingInterval);
        agentBubble.textContent = "";
        typeWriterEffect(agentBubble, replies[index]);
        
        // Move to next reply after current one finishes
        index++;
        setTimeout(nextReply, replies[index - 1].length * 60 + 1000);
      }, 1500);
    }
    nextReply();
  }

  // =====================
  // GET BEST REPLIES - FIXED
  // =====================
  function getBestReplies(userMessage, inquiryType) {
    const lowerMsg = userMessage.toLowerCase();
    const repliesData = inquiryReplies[inquiryType] || inquiryReplies["General"];
    let matchedReplies = [];

    // FIXED: Check if repliesData exists and is array
    if (repliesData && Array.isArray(repliesData)) {
      repliesData.forEach(item => {
        // FIXED: Check if item has keywords property
        if (item.keywords && Array.isArray(item.keywords)) {
          for (const kw of item.keywords) {
            if (lowerMsg.includes(kw.toLowerCase())) {
              // FIXED: Pick a random reply from the array
              if (item.reply && Array.isArray(item.reply)) {
                const randomReply = item.reply[Math.floor(Math.random() * item.reply.length)];
                matchedReplies.push(randomReply);
              }
              break;
            }
          }
        }
      });
    }

    if (matchedReplies.length === 0) {
      const fallback = "📬 Thanks for reaching out! You'll receive an email with more details soon or book a visit to get full details.";
      matchedReplies.push(fallback);
    }
    
    return matchedReplies;
  }

  // =====================
  // FORM SUBMIT HANDLER
  // =====================
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = validateForm();

    submitBtn.disabled = true;
    btnText.textContent = "Sending...";
    btnSpinner.style.display = "inline";
    
    setTimeout(() => {
      if (errors.length > 0) {
        const errorBubble = document.createElement("div");
        errorBubble.className = 'chat-bubble agent';
        errorBubble.textContent = '⚠️ Please fix: ' + errors.join(', ');
        chatContainer.appendChild(errorBubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      } else {
        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble user';
        userBubble.textContent = message.value;
        chatContainer.appendChild(userBubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        const type = inquiry.value || "General";
        const replies = getBestReplies(message.value, type);
        showAgentReplies(chatContainer, replies);
      }

      submitBtn.disabled = false;
      btnText.textContent = "Send Message";
      btnSpinner.style.display = "none";
    }, 2000);
  });

  // =====================
  // CLEAR CHAT BUTTON
  // =====================
  const clearChatBtn = document.createElement('button');
  clearChatBtn.textContent = 'Clear Chat';
  clearChatBtn.style.display = 'none';
  clearChatBtn.style.marginTop = '10px';
  clearChatBtn.style.padding = '8px 16px';
  clearChatBtn.style.background = '#333';
  clearChatBtn.style.color = '#fff';
  clearChatBtn.style.border = 'none';
  clearChatBtn.style.borderRadius = '6px';
  clearChatBtn.style.cursor = 'pointer';
  
  if (chatContainer && chatContainer.parentNode) {
    chatContainer.parentNode.insertBefore(clearChatBtn, chatContainer.nextSibling);
  }

  clearChatBtn.addEventListener('click', () => {
    chatContainer.innerHTML = '';
    clearChatBtn.style.display = 'none';
  });

  // =====================
  // SHOW CLEAR BUTTON WHEN MESSAGE SENT
  // =====================
  const observer = new MutationObserver(() => {
    if (chatContainer.childElementCount > 0) {
      clearChatBtn.style.display = 'block';
    }
  });
  
  if (chatContainer) {
    observer.observe(chatContainer, { childList: true });
  }

}

});








