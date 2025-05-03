import { devTools, tools } from '@/constants/tools';

const defaultConfig = {
  logo: 'defaultLogo',
  headerTitle: 'SarvTools',
  landingContent: 'All-in-one tools for everyone.',
  headlines: {
    greeting: 'Welcome to SarvTools!',
    modernTool: 'Discover Modern Tools for Every Need',
  },
  subHeadlines: {
    greeting:
      'A privacy-focused toolbox for developers, writers, designers, and more.',
    modernTool:
      'Explore a wide range of tools designed to simplify your tasks, from development to design, text processing, and more.',
  },
  tools,
  content: {
    faqs: [
      {
        question: 'What is SarvTools?',
        answer:
          'SarvTools is a privacy-focused, client-side toolbox offering over 50+ tools across categories like Developer Utilities, Text Processing, Image Tools, Financial Calculators, Privacy Tools, and more.',
      },
      {
        question: 'Who can benefit from SarvTools?',
        answer:
          'SarvTools is designed for a wide range of users, including developers, writers, designers, marketers, students, and anyone looking for quick and efficient online tools.',
      },
      {
        question: 'Are the tools free to use?',
        answer:
          'Yes, all tools on SarvTools are completely free to use. Additionally, all processing happens on your device, ensuring your data remains private.',
      },
      {
        question: 'What are some popular tools in SarvTools?',
        answer:
          'Some of our most popular tools include the Code Formatter, JSON Validator, Image Compressor, Loan Calculator, Password Generator, and QR Code Generator.',
      },
      {
        question: 'How does SarvTools ensure privacy?',
        answer:
          'SarvTools processes all data client-side, meaning no data is sent to any server. This ensures complete privacy and security for your information.',
      },
      {
        question: 'Can I contribute to SarvTools?',
        answer:
          'Yes, SarvTools is open-source! You can contribute by adding new tools or improving existing ones. Visit our GitHub repository to get started.',
      },
      {
        question: 'Do I need to install anything to use SarvTools?',
        answer:
          'No installation is required. SarvTools is a web-based platform that works directly in your browser.',
      },
    ],
    faqHeadline: 'Frequently Asked Questions',
    aboutHeadline: 'About Us',
    feedbackHeadline: 'Feedback Form',
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
        'Welcome to SarvTools.in, a zero-server, privacy-focused toolbox designed to empower developers, students, and professionals with a wide range of utilities. With over 50+ tools across various categories, SarvTools.in ensures 100% client-side processing, keeping your data private and secure.',
      features: [
        'Privacy-Focused: All tools run entirely on your browser, ensuring no data leaves your device.',
        'Developer Tools: JSON Formatter, Regex Tester, Base64 Converter, and more to enhance productivity.',
        'Utility Tools: Color Converter, Timestamp Converter, Lorem Ipsum Generator, and others for everyday tasks.',
        'Open Source: Contribute to the project and add your own tools to the platform.',
        'User-Friendly Interface: Navigate through tools effortlessly with a clean and intuitive design.',
      ],
      whySarvTools:
        "SarvTools.in is your go-to solution for quick, reliable, and secure tools. Whether you're a developer debugging code, a student working on assignments, or a professional managing tasks, SarvTools.in provides a comprehensive suite of tools to simplify your workflow.",
      gettingStarted: [
        'Explore Tools: Browse through our extensive collection of tools across categories.',
        'Use Instantly: No sign-ups or installations required. Just open a tool and start using it.',
        'Contribute: Add new tools or improve existing ones by contributing to our open-source repository.',
      ],
      contact: {
        email: 'hopanshgahlot@gmail.com',
        instagram: 'https://instagram.com/sarvtools',
      },
    },
    privacyPolicy:
      'This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from SarvTools.',
    termsOfService:
      'These Terms of Service govern your use of the SarvTools application and website.',
    feedbackSuccessMessage: 'Thank you for your feedback!',
    feedbackErrorMessage:
      'There was an error submitting your feedback. Please try again.',
  },
  buttons: {
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    submit: 'Submit',
    encode: 'Encode',
    decode: 'Decode',
  },
};

// Hindi translations for supported fields. Fallback to defaultConfig for missing fields.
const hindiConfig = {
  ...defaultConfig,
  logo: 'defaultLogo',
  headerTitle: 'सर्वटूल्स',
  landingContent: 'हर किसी के लिए ऑल-इन-वन टूल्स।',
  headlines: {
    greeting: 'सर्वटूल्स में आपका स्वागत है!',
    modernTool: 'हर आवश्यकता के लिए आधुनिक टूल्स खोजें',
  },
  subHeadlines: {
    greeting:
      'डेवलपर्स, राइटर्स, डिज़ाइनर्स और अन्य के लिए प्राइवेसी-फोकस्ड टूलबॉक्स।',
    modernTool:
      'डिजाइन, टेक्स्ट प्रोसेसिंग और अन्य कार्यों को आसान बनाने के लिए बनाए गए टूल्स की विस्तृत श्रृंखला खोजें।',
  },
  content: {
    ...defaultConfig.content,
    faqs: [
      {
        question: 'सर्वटूल्स क्या है?',
        answer:
          'सर्वटूल्स एक प्राइवेसी-फोकस्ड, क्लाइंट-साइड टूलबॉक्स है जिसमें 50+ से अधिक टूल्स हैं जैसे डेवलपर यूटिलिटीज, टेक्स्ट प्रोसेसिंग, इमेज टूल्स, फाइनेंशियल कैलकुलेटर्स, प्राइवेसी टूल्स आदि।',
      },
      {
        question: 'सर्वटूल्स से कौन लाभ उठा सकता है?',
        answer:
          'सर्वटूल्स डेवलपर्स, राइटर्स, डिज़ाइनर्स, मार्केटर्स, स्टूडेंट्स और किसी भी ऐसे व्यक्ति के लिए है जिसे तेज़ और प्रभावी ऑनलाइन टूल्स की आवश्यकता है।',
      },
      {
        question: 'क्या टूल्स का उपयोग मुफ्त है?',
        answer:
          'हाँ, सर्वटूल्स के सभी टूल्स पूरी तरह से मुफ्त हैं और सभी प्रोसेसिंग आपके डिवाइस पर होती है, जिससे आपकी प्राइवेसी बनी रहती है।',
      },
      {
        question: 'सर्वटूल्स के कुछ लोकप्रिय टूल्स कौन से हैं?',
        answer:
          'हमारे सबसे लोकप्रिय टूल्स में कोड फॉर्मेटर, JSON वेलिडेटर, इमेज कंप्रेसर, लोन कैलकुलेटर, पासवर्ड जनरेटर और QR कोड जनरेटर शामिल हैं।',
      },
      {
        question: 'सर्वटूल्स प्राइवेसी कैसे सुनिश्चित करता है?',
        answer:
          'सर्वटूल्स सभी डेटा को क्लाइंट-साइड प्रोसेस करता है, यानी कोई भी डेटा सर्वर पर नहीं जाता। इससे आपकी जानकारी पूरी तरह सुरक्षित रहती है।',
      },
      {
        question: 'क्या मैं सर्वटूल्स में योगदान कर सकता हूँ?',
        answer:
          'हाँ, सर्वटूल्स ओपन-सोर्स है! आप नए टूल्स जोड़ सकते हैं या मौजूदा टूल्स को बेहतर बना सकते हैं। शुरू करने के लिए हमारे GitHub रिपॉजिटरी पर जाएँ।',
      },
      {
        question: 'सर्वटूल्स का उपयोग करने के लिए कुछ इंस्टॉल करना पड़ेगा?',
        answer:
          'नहीं, कोई इंस्टॉलेशन आवश्यक नहीं है। सर्वटूल्स एक वेब-आधारित प्लेटफॉर्म है जो सीधे आपके ब्राउज़र में चलता है।',
      },
    ],
    faqHeadline: 'अक्सर पूछे जाने वाले प्रश्न',
    aboutHeadline: 'हमारे बारे में',
    feedbackHeadline: 'प्रतिक्रिया फ़ॉर्म',
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
        'SarvTools.in एक जीरो-सर्वर, प्राइवेसी-फोकस्ड टूलबॉक्स है जो डेवलपर्स, स्टूडेंट्स और प्रोफेशनल्स को विभिन्न यूटिलिटीज के साथ सशक्त बनाता है। 50+ से अधिक टूल्स के साथ, SarvTools.in 100% क्लाइंट-साइड प्रोसेसिंग सुनिश्चित करता है, जिससे आपका डेटा सुरक्षित रहता है।',
      features: [
        'प्राइवेसी-फोकस्ड: सभी टूल्स पूरी तरह से आपके ब्राउज़र पर चलते हैं, जिससे कोई डेटा बाहर नहीं जाता।',
        'डेवलपर टूल्स: JSON फॉर्मेटर, Regex टेस्टर, Base64 कन्वर्टर आदि।',
        'यूटिलिटी टूल्स: कलर कन्वर्टर, टाइमस्टैम्प कन्वर्टर, Lorem Ipsum जनरेटर आदि।',
        'ओपन सोर्स: प्रोजेक्ट में योगदान करें और अपने खुद के टूल्स जोड़ें।',
        'यूज़र-फ्रेंडली इंटरफेस: क्लीन और सहज डिज़ाइन के साथ टूल्स को आसानी से नेविगेट करें।',
      ],
      whySarvTools:
        'SarvTools.in आपके त्वरित, विश्वसनीय और सुरक्षित टूल्स का समाधान है। चाहे आप डेवलपर हों, स्टूडेंट हों या प्रोफेशनल, SarvTools.in आपके कार्यों को आसान बनाता है।',
      gettingStarted: [
        'टूल्स एक्सप्लोर करें: विभिन्न श्रेणियों में हमारे टूल्स देखें।',
        'तुरंत उपयोग करें: कोई साइन-अप या इंस्टॉलेशन नहीं। बस टूल खोलें और उपयोग शुरू करें।',
        'योगदान करें: हमारे ओपन-सोर्स रिपॉजिटरी में नए टूल्स जोड़ें या मौजूदा को बेहतर बनाएं।',
      ],
      contact: {
        ...defaultConfig.content.about.contact,
        // No change needed for contact info
      },
    },
    privacyPolicy:
      'यह प्राइवेसी पॉलिसी बताती है कि SarvTools पर आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और साझा की जाती है।',
    termsOfService:
      'ये टर्म्स ऑफ सर्विस SarvTools एप्लिकेशन और वेबसाइट के उपयोग को नियंत्रित करते हैं।',
    feedbackSuccessMessage: 'आपकी प्रतिक्रिया के लिए धन्यवाद!',
    feedbackErrorMessage:
      'आपकी प्रतिक्रिया सबमिट करने में त्रुटि हुई। कृपया पुनः प्रयास करें।',
  },
  buttons: {
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    submit: 'सबमिट करें',
    encode: 'एन्कोड करें',
    decode: 'डिकोड करें',
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
