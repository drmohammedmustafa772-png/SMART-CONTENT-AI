<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SmartContentAI</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); <!-- ضع هنا Measurement ID من Analytics -->
  </script>

  <!-- Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>
  <script>
    // بياناتك من Firebase Config (من الصور التي أرسلتها)
    const firebaseConfig = {
      apiKey: "AIzaSyA5AMeontv1R-D3r1p4C7f7Rzq4C7F7Rzq4",
      authDomain: "smart-content-ai.firebaseapp.com",
      projectId: "smart-content-ai",
      storageBucket: "smart-content-ai.appspot.com",
      messagingSenderId: "1234567890",
      appId: "1:1234567890:web:abcdef123456"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
  </script>

  <style>
    body {font-family: Arial, sans-serif; margin:0; padding:0;}
    section {padding:40px; border-bottom:1px solid #ddd;}
    .dark-mode {background:#222; color:#fff;}
    button {padding:10px 20px; margin:5px;}
  </style>
</head>
<body>

  <!-- Features -->
  <section id="features">
    <h2>Features</h2>
    <p>AI-powered content, chatbot, analytics, and more.</p>
  </section>

  <!-- Plans -->
  <section id="plans">
    <h2>Plans</h2>
    <p>Free plan available. Premium via PayPal/Stripe.</p>
  </section>

  <!-- Payment -->
  <section id="payment">
    <h2>Payment Methods</h2>
    <a href="https://paypal.me/drzyogo" target="_blank">
      <button>Pay with PayPal</button>
    </a>
    <button onclick="alert('Stripe integration coming soon')">Pay with Stripe</button>
  </section>

  <!-- FAQ -->
  <section id="faq">
    <h2>FAQ</h2>
    <p>All services are free except optional premium upgrades.</p>
  </section>

  <!-- Testimonials -->
  <section id="testimonials">
    <h2>Testimonials</h2>
    <p>"SmartContentAI changed my workflow!"</p>
  </section>

  <!-- Newsletter -->
  <section id="newsletter">
    <h2>Newsletter</h2>
    <input type="email" placeholder="Enter your email">
    <button>Subscribe</button>
  </section>

  <!-- Contact -->
  <section id="contact">
    <h2>Contact</h2>
    <p>Email: drmohammadmustafa772@gmail.com</p>
  </section>

  <!-- Dashboard -->
  <section id="dashboard">
    <h2>Dashboard</h2>
    <input type="email" id="email" placeholder="Email">
    <input type="password" id="password" placeholder="Password">
    <button onclick="signup()">Sign Up</button>
    <button onclick="login()">Login</button>
    <script>
      function signup(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => alert('Signed up: ' + user.user.email))
          .catch(err => alert(err.message));
      }
      function login(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(user => alert('Logged in: ' + user.user.email))
          .catch(err => alert(err.message));
      }
    </script>
  </section>

  <!-- Chatbot (Crisp) -->
  <script type="text/javascript">
    window.$crisp=[];window.CRISP_WEBSITE_ID="dd4e9e53-2015-40f2-853f-17cdb6eff82d";
    (function(){d=document;s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);})();
  </script>

  <!-- Try the Model -->
  <section id="model">
    <h2>Try the Model</h2>
    <button onclick="alert('Demo model running...')">Run Demo</button>
  </section>

  <!-- Dark Mode -->
  <section id="darkmode">
    <h2>Dark Mode</h2>
    <button onclick="document.body.classList.toggle('dark-mode')">Toggle Dark Mode</button>
  </section>

  <!-- Service Worker -->
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker Registered'));
    }
  </script>

</body>
</html> 
