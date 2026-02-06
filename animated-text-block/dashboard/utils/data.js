import { settingImage, themeImage } from "./icons";

const slug = "animated-text-block";
export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Animated Text Block${proSuffix}`,
    displayName: `Animated Text Block${proSuffix} - Add Typing and Looping Text Effects`,
    description:
      "Animated Text Block – Add dynamic, customizable text animations to your WordPress site with ease.",
    slug,
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
    // video: 'https://www.youtube.com/watch?v=LJym2Pe1h2k',
    // isYoutube: true,
    version,
    isPremium,
    hasPro,
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/#pricing`,
    },
    freemius: {
      product_id: 17879,
      plan_id: 29699,
      public_key: "pk_64045f2c4e13c86dc40f805c6062b",
    },
    options: { title: "Animated Text" }
  };
};

export const demoInfo = {
  title: "Live Overview",
  description: "Click on any section to view it live",
  layout: "list",
  allInOneLabel: "See All Demos",
  allInOneLink: "https://bblockswp.com/demo/animated-text/",
  demos: [
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/j9R6qC0H/screenshot-8.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/LXf61v6G/screenshot-2.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/YBWcm5mp/screenshot-1.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/qYknxxVK/screenshot-7.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/NgYzfMmR/screenshot-3.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/whGnbC7Z/screenshot-5.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/RGy8q8DZ/screenshot-6.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/nMZWgxt2/screenshot-10.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/fzqMnx85/screenshot-4.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/Kxd35qk0/screenshot-9.gif",
    },
    {
      icon: themeImage,
      title: "Theme Preview",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/1YYVt0CH/screenshot-11.png",
    },
    {
      icon: settingImage,
      title: "Gutenberg Block Settings",
      description: "Provides customization in the Gutenberg editor",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/fz4RDY09/screenshot-12.png",
    },
  ],
};


export const pricingInfo = {
  cycles: [
    {
      cycle: "lifetime",
      label: "Lifetime",
      isDefault: true,
    },
  ],
  plans: [
    {
      name: "Single Site",
      quantity: 1,
      prices: {
        lifetime: "29.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
    {
      name: "3 Sites",
      quantity: 3,
      prices: {
        lifetime: "129.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: true,
      note: "",
    },
    {
      name: "Unlimited Sites",
      quantity: "null",
      prices: {
        lifetime: "299.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
  ],
  features: [
    "Multiple  themes Offers to customization",
    "Understanding Text Alignment",
    "Max-Width animation layouts",
    "Enhancing Design with Text-Shadow",
    "Optimizing Animation Speed",
    "Mastering Perspective Depth Control",
    "Understanding Transform Origin",
    "Show/Hide Oscillation Effects",
    "Controlling Repeat Behavior in Animations",
    "Adjusting Repeat Delay Speed",
    "Exploring Animation Effects",
    "Applying Random Text Color",
    "Applying Forward Font Stretch",
    "Adjusting Animation Duration",
    "Show/Hide Animation Repeat",
    "Premium Animation and Effects",
    "Premium Customization Options",
  ],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    text: "Best Value",
  },
};

export const featureCompareInfo = {
  title: "Features",
  plans: [
    {
      id: "zxcvbnm", //important
      name: "Free Plan",
      color: "#485781",
    },
    {
      id: "lhmjqhk", //important
      name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>&dollar; 29.99/lifetime</span>`,
      color: "#146EF5",
    },
  ],
  features: [
    {
      label: " Enable/Disable loop for the animation",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Multiple Tab Designs",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: " Apply animate effect in character or word",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Apply effect when content enters the view",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Apply effect when content is out from the view",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Apply the style for text. Such as Background, Typography, Color, Padding, and Border.",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Multiple  themes Offers to customization",
      plans: ["lhmjqhk"],
    },
    {
      label: "Understanding Text Alignment",
      plans: ["lhmjqhk"],
    },
    {
      label: "Max-Width animation layouts",
      plans: ["lhmjqhk"],
    },
    {
      label: "Enhancing Design with Text-Shadow",
      plans: ["lhmjqhk"],
    },
    {
      label: "Optimizing Animation Speed",
      plans: ["lhmjqhk"],
    },
    {
      label: "Mastering Perspective Depth Control",
      plans: ["lhmjqhk"],
    },
    {
      label: "Understanding Transform Origin",
      plans: ["lhmjqhk"],
    },
    {
      label: "Show/Hide Oscillation Effects",
      plans: ["lhmjqhk"],
    },
    {
      label: "Controlling Repeat Behavior in Animations",
      plans: ["lhmjqhk"],
    },
    {
      label: "Adjusting Repeat Delay Speed",
      plans: ["lhmjqhk"],
    },
    {
      label: "Exploring Animation Effects",
      plans: ["lhmjqhk"],
    },
    {
      label: "Applying Random Text Color",
      plans: ["lhmjqhk"],
    },
    {
      label: "Applying Forward Font Stretch",
      plans: ["lhmjqhk"],
    },
    {
      label: "Adjusting Animation Duration",
      plans: ["lhmjqhk"],
    },
    {
      label: "Show/Hide Animation Repeat",
      plans: ["lhmjqhk"],
    },
    {
      label: "Premium Animation and Effects",
      plans: ["lhmjqhk"],
    },
    {
      label: "Premium Customization Options",
      plans: ["lhmjqhk"],
    }
  ],
};