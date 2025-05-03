import { devTools, tools } from '@/constants/tools';

const defaultConfig = {
  logo: 'defaultLogo',
  headerTitle: 'SarvTools',
  landingContent: 'The privacy-first, open-source toolbox for everyone.',
  headlines: {
    greeting: 'Welcome to SarvTools!',
    modernTool: 'Modern, Secure Tools for Every Need',
  },
  subHeadlines: {
    greeting:
      'A privacy-first, open-source toolbox for developers, writers, designers, students, and more.',
    modernTool:
      'Explore wide range of tools for code, text, color, data, and more. 100% client-side. No sign-up. No data leaves your device.',
  },
  tools,
  content: {
    faqs: [
      {
        question: 'What is SarvTools?',
        answer:
          'SarvTools is a privacy-first, open-source toolbox offering wide range of tools for developers, creators, and everyday users. All tools run entirely in your browser—no data ever leaves your device.',
      },
      {
        question: 'Who should use SarvTools?',
        answer:
          'Anyone! SarvTools is built for developers, writers, designers, students, marketers, and anyone who needs fast, reliable, and secure online tools.',
      },
      {
        question: 'Is SarvTools really free?',
        answer:
          'Yes. Every tool is 100% free to use, with no hidden costs or sign-ups. SarvTools is supported by the open-source community.',
      },
      {
        question: 'How does SarvTools protect my privacy?',
        answer:
          'All processing happens locally in your browser. No data is sent to any server, ensuring your information stays private and secure.',
      },
      {
        question: 'What are some popular tools?',
        answer:
          'Popular tools include JSON Formatter, Regex Tester, Base64 Converter, QR Code Generator, Color Converter, and more. Explore the full list on the Tools page.',
      },
      {
        question: 'Can I contribute to SarvTools?',
        answer:
          'Absolutely! SarvTools is open-source. You can add new tools, improve existing ones, or suggest features. Visit our GitHub repository to get started.',
      },
      {
        question: 'Do I need to install anything?',
        answer:
          'No installation or sign-up is required. SarvTools works instantly in your browser on any device.',
      },
    ],
    faqHeadline: 'Frequently Asked Questions',
    aboutHeadline: 'About SarvTools',
    feedbackHeadline: 'Feedback',
    feedbackNameLabel: 'Name',
    feedbackNamePlaceholder: 'Your Name',
    feedbackNameRequired: 'Please enter your name',
    feedbackEmailLabel: 'Email',
    feedbackEmailPlaceholder: 'Your Email',
    feedbackEmailRequired: 'Please enter a valid email',
    feedbackLabel: 'Feedback',
    feedbackPlaceholder: 'Your Feedback',
    feedbackRequired: 'Please enter your feedback',
    about: {
      title: 'About SarvTools',
      description:
        'SarvTools is a modern, open-source toolbox designed to empower developers, students, and professionals with free utilities. All tools run 100% client-side, so your data never leaves your device. No sign-up, no installation, no tracking—just fast, secure, and reliable tools for everyone.',
      features: [
        'Privacy-First: All tools run entirely in your browser. No data is ever sent to a server.',
        'Open Source: Community-driven and open for contributions. Fork us on GitHub!',
        'Wide Range of Free Tools: Code formatters, validators, converters, generators, and more.',
        'Security: No tracking, no analytics, and no ads. Your data stays yours.',
        'User Experience: Clean, accessible, and responsive design for all devices.',
        'Instant Use: No sign-up or installation required. Use any tool instantly.',
      ],
      whySarvTools:
        'SarvTools is your go-to solution for quick, secure, and reliable tools. Whether you are debugging code, processing text, designing, or learning, SarvTools simplifies your workflow with a single, privacy-focused platform.',
      gettingStarted: [
        'Browse Tools: Discover and use any tool instantly—no registration needed.',
        'Contribute: Add new tools or improve existing ones on our open-source GitHub repository.',
        'Share: Recommend SarvTools to your friends and colleagues who value privacy and productivity.',
      ],
      contact: {
        description:
          'For inquiries, suggestions, or feedback, feel free to reach out to us. We value your input and are always looking to improve.',
        email: 'hopanshgahlot@gmail.com',
        github: 'https://github.com/hopansh/sarvtools-frontend',
      },
    },
    privacyPolicy:
      'Read our full Privacy Policy at /privacy-policy. In short: SarvTools collects no personal data. All processing is local to your device.',
    termsOfService:
      'See our Terms of Service at /terms-of-service. By using SarvTools, you agree to use the tools responsibly and respect our open-source license.',
    feedbackSuccessMessage:
      'Thank you for your feedback! We appreciate your input.',
    feedbackErrorMessage:
      'There was an error submitting your feedback. Please try again or contact us directly.',
  },
  buttons: {
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    submit: 'Submit',
    encode: 'Encode',
    decode: 'Decode',
  },
  headings: {
    aboutUs: 'About Us',
    tools: 'Tools',
    connect: 'Connect',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    whySarvTools: 'Why SarvTools?',
    gettingStarted: 'Getting Started',
  },
};

// Hindi translations for supported fields. Fallback to defaultConfig for missing fields.
const hindiConfig = {
  ...defaultConfig,
  logo: 'defaultLogo',
  headerTitle: 'सर्वटूल्स',
  landingContent: 'प्राइवेसी-फर्स्ट, ओपन-सोर्स टूलबॉक्स, सभी के लिए।',
  headlines: {
    greeting: 'सर्वटूल्स में आपका स्वागत है!',
    modernTool: 'हर आवश्यकता के लिए आधुनिक, सुरक्षित टूल्स',
  },
  subHeadlines: {
    greeting:
      'डेवलपर्स, राइटर्स, डिज़ाइनर्स, स्टूडेंट्स और सभी के लिए प्राइवेसी-फर्स्ट, ओपन-सोर्स टूलबॉक्स।',
    modernTool:
      'कोड, टेक्स्ट, कलर, डेटा आदि के लिए 50+ मुफ्त टूल्स। 100% क्लाइंट-साइड। कोई साइन-अप नहीं। आपका डेटा कभी भी डिवाइस से बाहर नहीं जाता।',
  },
  content: {
    ...defaultConfig.content,
    faqs: [
      {
        question: 'सर्वटूल्स क्या है?',
        answer:
          'सर्वटूल्स एक प्राइवेसी-फर्स्ट, ओपन-सोर्स टूलबॉक्स है जिसमें 50+ मुफ्त टूल्स हैं। सभी टूल्स पूरी तरह आपके ब्राउज़र में चलते हैं—आपका डेटा कभी भी डिवाइस से बाहर नहीं जाता।',
      },
      {
        question: 'सर्वटूल्स किसके लिए है?',
        answer:
          'सभी के लिए! सर्वटूल्स डेवलपर्स, राइटर्स, डिज़ाइनर्स, स्टूडेंट्स, मार्केटर्स और किसी भी ऐसे व्यक्ति के लिए है जिसे तेज़, सुरक्षित और विश्वसनीय ऑनलाइन टूल्स चाहिए।',
      },
      {
        question: 'क्या सर्वटूल्स वास्तव में मुफ्त है?',
        answer:
          'हाँ। हर टूल 100% मुफ्त है, कोई छुपा शुल्क या साइन-अप नहीं। सर्वटूल्स ओपन-सोर्स कम्युनिटी द्वारा समर्थित है।',
      },
      {
        question: 'सर्वटूल्स मेरी प्राइवेसी कैसे सुरक्षित रखता है?',
        answer:
          'सभी प्रोसेसिंग आपके ब्राउज़र में ही होती है। कोई डेटा सर्वर पर नहीं जाता, जिससे आपकी जानकारी पूरी तरह सुरक्षित रहती है।',
      },
      {
        question: 'कुछ लोकप्रिय टूल्स कौन से हैं?',
        answer:
          'लोकप्रिय टूल्स में JSON फॉर्मेटर, Regex टेस्टर, Base64 कन्वर्टर, QR कोड जनरेटर, कलर कन्वर्टर आदि शामिल हैं। सभी टूल्स पेज पर देखें।',
      },
      {
        question: 'क्या मैं सर्वटूल्स में योगदान कर सकता हूँ?',
        answer:
          'बिल्कुल! सर्वटूल्स ओपन-सोर्स है। आप नए टूल्स जोड़ सकते हैं, मौजूदा को बेहतर बना सकते हैं या सुझाव दे सकते हैं। शुरू करने के लिए हमारे GitHub रिपॉजिटरी पर जाएँ।',
      },
      {
        question: 'क्या कुछ इंस्टॉल करना जरूरी है?',
        answer:
          'नहीं, कोई इंस्टॉलेशन या साइन-अप जरूरी नहीं है। सर्वटूल्स आपके ब्राउज़र में तुरंत चलता है।',
      },
    ],
    faqHeadline: 'अक्सर पूछे जाने वाले प्रश्न',
    aboutHeadline: 'सर्वटूल्स के बारे में',
    feedbackHeadline: 'प्रतिक्रिया',
    feedbackNameLabel: 'नाम',
    feedbackNamePlaceholder: 'आपका नाम',
    feedbackNameRequired: 'कृपया अपना नाम दर्ज करें',
    feedbackEmailLabel: 'ईमेल',
    feedbackEmailPlaceholder: 'आपका ईमेल',
    feedbackEmailRequired: 'कृपया एक मान्य ईमेल दर्ज करें',
    feedbackLabel: 'प्रतिक्रिया',
    feedbackPlaceholder: 'आपकी प्रतिक्रिया',
    feedbackRequired: 'कृपया अपनी प्रतिक्रिया दर्ज करें',
    about: {
      ...defaultConfig.content.about,
      title: 'सर्वटूल्स के बारे में',
      description:
        'SarvTools.in एक आधुनिक, ओपन-सोर्स टूलबॉक्स है जो डेवलपर्स, स्टूडेंट्स और प्रोफेशनल्स को 50+ मुफ्त यूटिलिटीज़ के साथ सशक्त बनाता है। सभी टूल्स 100% क्लाइंट-साइड चलते हैं, जिससे आपका डेटा कभी भी डिवाइस से बाहर नहीं जाता। कोई साइन-अप, कोई इंस्टॉलेशन, कोई ट्रैकिंग नहीं—सिर्फ तेज़, सुरक्षित और विश्वसनीय टूल्स।',
      features: [
        'प्राइवेसी-फर्स्ट: सभी टूल्स पूरी तरह आपके ब्राउज़र में चलते हैं। कोई डेटा सर्वर पर नहीं जाता।',
        'ओपन सोर्स: कम्युनिटी-ड्रिवन और योगदान के लिए खुला। GitHub पर फोर्क करें!',
        '50+ मुफ्त टूल्स: कोड फॉर्मेटर, वेलिडेटर, कन्वर्टर, जनरेटर आदि।',
        'सुरक्षा: कोई ट्रैकिंग, कोई एनालिटिक्स, कोई विज्ञापन नहीं। आपका डेटा सिर्फ आपका है।',
        'यूज़र एक्सपीरियंस: सभी डिवाइस के लिए क्लीन, एक्सेसिबल और रिस्पॉन्सिव डिज़ाइन।',
        'इंस्टेंट यूज़: कोई साइन-अप या इंस्टॉलेशन नहीं। किसी भी टूल का तुरंत उपयोग करें।',
      ],
      whySarvTools:
        'SarvTools आपके लिए तेज़, सुरक्षित और विश्वसनीय टूल्स का समाधान है। चाहे आप कोड डिबग कर रहे हों, टेक्स्ट प्रोसेस कर रहे हों, डिज़ाइनिंग कर रहे हों या सीख रहे हों—SarvTools एक ही प्लेटफॉर्म पर सब कुछ आसान बनाता है।',
      gettingStarted: [
        'टूल्स ब्राउज़ करें: किसी भी टूल का तुरंत उपयोग करें—कोई रजिस्ट्रेशन नहीं।',
        'योगदान करें: हमारे ओपन-सोर्स GitHub रिपॉजिटरी में नए टूल्स जोड़ें या मौजूदा को बेहतर बनाएं।',
        'शेयर करें: SarvTools को अपने दोस्तों और सहकर्मियों के साथ शेयर करें जो प्राइवेसी और प्रोडक्टिविटी को महत्व देते हैं।',
      ],
      contact: {
        description:
          'पूछताछ, सुझाव या प्रतिक्रिया के लिए, बेझिझक हमसे संपर्क करें। हम आपकी राय की सराहना करते हैं और हमेशा सुधारने के लिए तत्पर रहते हैं।',
      },
    },
    privacyPolicy:
      'हमारी पूरी प्राइवेसी पॉलिसी /privacy-policy पर पढ़ें। संक्षेप में: SarvTools कोई व्यक्तिगत डेटा एकत्र नहीं करता। सभी प्रोसेसिंग आपके डिवाइस पर ही होती है।',
    termsOfService:
      'हमारे टर्म्स ऑफ सर्विस /terms-of-service पर देखें। SarvTools का उपयोग करके, आप टूल्स का जिम्मेदारी से उपयोग करने और हमारे ओपन-सोर्स लाइसेंस का सम्मान करने के लिए सहमत होते हैं।',
    feedbackSuccessMessage:
      'आपकी प्रतिक्रिया के लिए धन्यवाद! हम आपके इनपुट की सराहना करते हैं।',
    feedbackErrorMessage:
      'आपकी प्रतिक्रिया सबमिट करने में त्रुटि हुई। कृपया पुनः प्रयास करें या सीधे संपर्क करें।',
  },
  buttons: {
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    submit: 'सबमिट करें',
    encode: 'एन्कोड करें',
    decode: 'डिकोड करें',
  },
  headings: {
    aboutUs: 'हमारे बारे में',
    tools: 'टूल्स',
    connect: 'कनेक्ट करें',
    termsOfService: 'सेवा की शर्तें',
    privacyPolicy: 'प्राइवेसी पॉलिसी',
    whySarvTools: 'सर्वटूल्स क्यों?',
    gettingStarted: 'शुरू करना',
  },
};

export const devConfig = {
  tools: devTools,
};

export const siteConfigs = {
  dev: devConfig,
  default: defaultConfig,
  hi: hindiConfig,
};
