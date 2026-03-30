"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="large"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Əsas",
          id: "hero",
        },
        {
          name: "Haqqında",
          id: "about",
        },
        {
          name: "Texnologiya",
          id: "features",
        },
        {
          name: "Suallar",
          id: "faq",
        },
      ]}
      brandName="Bitcoin Portal"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Bitcoin: Rəqəmsal İnqilab"
      description="Bitcoin, dünyada mərkəzi orqanı olmayan ilk rəqəmsal valyutadır. Onun necə işlədiyini və niyə vacib olduğunu kəşf edin."
      tag="Maarifləndirmə Portalı"
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/a-futuristic-and-high-tech-digital-repre-1774898192040-2fcbb7bd.png",
          imageAlt: "Bitcoin logo tech concept",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/a-futuristic-and-high-tech-digital-repre-1774898192040-2fcbb7bd.png",
          imageAlt: "Bitcoin visual",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/a-futuristic-and-high-tech-digital-repre-1774898192040-2fcbb7bd.png",
          imageAlt: "Digital circuits",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/a-futuristic-and-high-tech-digital-repre-1774898192040-2fcbb7bd.png",
          imageAlt: "Glowing nodes",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/a-futuristic-and-high-tech-digital-repre-1774898192040-2fcbb7bd.png",
          imageAlt: "Blockchain structure",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Bitcoin haqqında etibarlı mənbə"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Bitcoin nədir?"
      description={[
        "Bitcoin 2009-cu ildə Satoshi Nakamoto adlı şəxs və ya qrup tərəfindən yaradılmışdır.",
        "O, ənənəvi bank sistemindən asılı olmayan bir ödəniş sistemidir.",
        "Bitcoin 'blockchain' texnologiyası üzərində qurulub ki, bu da bütün əməliyyatların şəffaf və dəyişdirilməz olmasını təmin edir.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Kriptoqrafik Təhlükəsizlik",
          description: "Bitcoin əməliyyatları qabaqcıl kriptoqrafiya üsulları ilə qorunur.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/high-tech-secure-shield-icon-floating-in-1774898192458-ab997ff7.png",
          imageAlt: "Təhlükəsizlik",
        },
        {
          id: 2,
          title: "Mərkəzləşdirilməmiş Şəbəkə",
          description: "Şəbəkə heç bir dövlət və ya qurum tərəfindən idarə olunmur.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/decentralized-digital-network-map-showin-1774898192279-6fdbc910.png",
          imageAlt: "Şəbəkə",
        },
        {
          id: 3,
          title: "Bloklar Zənciri",
          description: "Hər bir əməliyyat bloklara yazılır və daimi olaraq saxlanılır.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/abstract-representation-of-a-digital-led-1774898192103-22e72d83.png",
          imageAlt: "Blockchain",
        },
      ]}
      title="Bitcoin Texnologiyasının Əsasları"
      description="Bitcoin-in əsasını təşkil edən mürəkkəb texnologiyaları sadə dildə izah edirik."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split-description"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Bitcoin virtual valyutadır?",
          content: "Bəli, o, fiziki forması olmayan tam rəqəmsal bir valyutadır.",
        },
        {
          id: "q2",
          title: "Bitcoin qanunidir?",
          content: "Dünyanın əksər ölkələrində qanunidir, lakin hər ölkənin fərqli tənzimləmələri var.",
        },
        {
          id: "q3",
          title: "Bitcoin investisiya deyil?",
          content: "Bizim platformamız yalnız maarifləndirmə məqsədi daşıyır, investisiya məsləhətləri vermirik.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/minimalist-representation-of-help-desk-s-1774898192486-29cd1e65.png"
      imageAlt="FAQ Support"
      title="Tez-tez Verilən Suallar"
      description="Bitcoin haqqında əsas məlumatları burada tapa bilərsiniz."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Bitcoin Rəqəmlərlə"
      description="Dünyanın ən məşhur rəqəmsal aktivinin miqyası haqqında bəzi məlumatlar."
      metrics={[
        {
          id: "m1",
          value: "2009",
          description: "Yaradılma ili",
        },
        {
          id: "m2",
          value: "21 Milyon",
          description: "Maksimum təchizat",
        },
        {
          id: "m3",
          value: "Qlobal",
          description: "Şəbəkə əhatəsi",
        },
        {
          id: "m4",
          value: "Sərt",
          description: "Kriptoqrafik təhlükəsizlik",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bg5zlud6S1jzVdOppJhAQg6rzd/a-stylized-futuristic-digital-bitcoin-ic-1774898191950-b17f84cc.png"
      imageAlt="Bitcoin Footer Logo"
      columns={[
        {
          title: "Naviqasiya",
          items: [
            {
              label: "Əsas Səhifə",
              href: "#hero",
            },
            {
              label: "Haqqımızda",
              href: "#about",
            },
            {
              label: "Texnologiya",
              href: "#features",
            },
          ],
        },
        {
          title: "Hüquqi",
          items: [
            {
              label: "İstifadə qaydaları",
              href: "#",
            },
            {
              label: "Məxfilik Siyasəti",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | Bitcoin Maarifləndirmə Portal"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
