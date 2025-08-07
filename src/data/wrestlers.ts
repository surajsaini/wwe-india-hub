import { Instagram, Twitter, Youtube, Facebook, Globe } from "lucide-react";
import jinderMahal from "@/assets/jinder-mahal.jpg";
import greatKhali from "@/assets/great-khali.jpg";
import sonyaDeville from "@/assets/sonya-deville.jpg";
import indusSher from "@/assets/indus-sher.jpg";

export interface Wrestler {
  id: string;
  name: string;
  image: string;
  description: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

export const wrestlers: Wrestler[] = [
  {
    id: "jinder-mahal",
    name: "Jinder Mahal",
    image: jinderMahal,
    description: "The Modern Day Maharaja and former WWE Champion representing India on the global stage.",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/jindermahal",
        icon: Instagram
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/jindermahal",
        icon: Twitter
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/jindermahal",
        icon: Facebook
      }
    ]
  },
  {
    id: "great-khali",
    name: "The Great Khali",
    image: greatKhali,
    description: "The Punjabi Playboy and former World Heavyweight Champion, India's tallest WWE superstar.",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/thegreatkhali",
        icon: Instagram
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/thegreatkhali",
        icon: Twitter
      },
      {
        platform: "YouTube",
        url: "https://youtube.com/@thegreatkhali",
        icon: Youtube
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/thegreatkhali",
        icon: Facebook
      }
    ]
  },
  {
    id: "sonya-deville",
    name: "Sonya Deville",
    image: sonyaDeville,
    description: "Indian-American WWE superstar and former Mixed Martial Artist with Indian heritage.",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/sonyadevillewwe",
        icon: Instagram
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/sonyadevillewwe",
        icon: Twitter
      },
      {
        platform: "YouTube",
        url: "https://youtube.com/@sonyadevillewwe",
        icon: Youtube
      }
    ]
  },
  {
    id: "indus-sher",
    name: "Indus Sher",
    image: indusSher,
    description: "Indian tag team duo representing the strength and power of India in WWE NXT.",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/indusSher",
        icon: Instagram
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/indusSher",
        icon: Twitter
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/indusSher",
        icon: Facebook
      }
    ]
  },
  {
    id: "kavita-devi",
    name: "Kavita Devi",
    image: "https://images.unsplash.com/photo-1594736797933-d0200ba8fb53?w=400&h=400&fit=crop",
    description: "India's first female WWE superstar who competed in the Mae Young Classic tournament.",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/kavitadevi",
        icon: Instagram
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/kavitadevi",
        icon: Twitter
      }
    ]
  },
  {
    id: "rinku-singh",
    name: "Rinku Singh",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    description: "Rising Indian talent in WWE development system, representing the future of Indian wrestling.",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/rinkusingh",
        icon: Instagram
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/rinkusingh",
        icon: Twitter
      }
    ]
  }
];