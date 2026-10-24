// Kenah Wellness Services - Canonical Site Data with Exact Word-for-Word Service Details

export interface ServiceDetailSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  legacySlugs: string[];
  title: string;
  shortDesc: string;
  image: string;
  features: string[];
  detailSections: ServiceDetailSection[];
  whatIncludesTitle?: string;
  whatIncludesBullets?: string[];
  closingText?: string[];
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const COMPANY_INFO = {
  name: 'Kenah Wellness Services',
  tagline: 'caring for you',
  phone: '+1 (412) 546-1860',
  phoneRaw: '+14125461860',
  email: 'info@kenahwellness.com',
  address: '2400 Ansys Drive Suite 169, Canonsburg, PA 15317, United States',
  addressShort: '2400 Ansys Drive Suite 169, Canonsburg, PA 15317',
  googleMapsUrl: 'https://maps.app.goo.gl/2TWiaf3DBfx5HQNy9',
  hours: {
    weekdays: 'Always open 24 hrs',
    saturday: 'Always open 24 hrs',
    sunday: 'Always open 24 hrs',
    text: '24/7 In-Home Care Available Around the Clock'
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61581451048202',
    instagram: 'https://www.instagram.com/kenah_wellness/',
    youtube: 'https://www.youtube.com/channel/UCuQdrNxzdoSiIua4RCh2uMw',
    linkedin: 'https://www.linkedin.com/company/kenah-wellness-services-llc/?viewAsMember=true'
  }
};

export const CORE_VALUES: ValueItem[] = [
  {
    title: 'Compassion',
    description: 'We deliver every service with kindness, empathy, and a genuine commitment to improving lives.'
  },
  {
    title: 'Respect',
    description: 'We honor the dignity, independence, and personal choices of each client and family we serve.'
  },
  {
    title: 'Integrity',
    description: 'We are honest, transparent, and reliable, building trust within the Allison Park and Pittsburgh community.'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in care through ongoing training, professional standards, and dedication to client well-being.'
  }
];

export const SERVICE_AREAS = [
  {
    title: 'North Hills & Core Areas',
    towns: [
      'Allison Park',
      'Hampton Township',
      'Shaler',
      'McCandless',
      'Ross Township',
      'Gibsonia',
      'Glenshaw',
      'Wexford'
    ]
  },
  {
    title: 'Greater Allegheny & Pittsburgh',
    towns: [
      'Cranberry Township',
      'Pine Township',
      'Franklin Park',
      'West View',
      'Bellevue',
      'Oakland',
      'North Side',
      'East Liberty',
      'Washington'
    ]
  },
  {
    title: 'Extended Communities',
    towns: [
      'Butler',
      'Mars',
      'Evans City',
      'Murrysville',
      'Monroeville',
      'City of Pittsburgh (all neighborhoods)'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'personal-care',
    slug: 'personal-care',
    legacySlugs: ['house-cleaning'],
    title: 'Personal Care',
    shortDesc: 'At Kenah Wellness Services, we understand that many seniors want to remain independent at home, but daily routines can sometimes become challenging. Our personal care services are designed to provide compassionate, respectful assistance with essential activities of daily living (ADLs), ensuring your loved one feels safe, comfortable, and confident at home.',
    image: `${import.meta.env.BASE_URL}images/jomarc-nicolai-cala-i-Bkol8fxBY-unsplash-1024x576.jpg`,
    features: [
      'Bathing and Shower Assistance',
      'Grooming and Hygiene',
      'Dressing Assistance',
      'Mobility and Transfer Support',
      'Toileting and Incontinence Care'
    ],
    detailSections: [
      {
        heading: 'Personal Care Services in Allison Park & Pittsburgh',
        paragraphs: [
          'At Kenah Wellness Services, we know how important it is to find trusted help for your loved ones when they need assistance with daily living. Our personalized home care services provide the support seniors, adults with disabilities, and individuals recovering from illness, injury, or surgery need to live safely and comfortably in their own homes.',
          'Our compassionate caregivers go beyond simply meeting needs — they build relationships, treating every client with the same dignity and respect we would give our own family. By offering affordable, professional, and personalized care, we give families in Allison Park and the Pittsburgh area peace of mind, knowing their loved ones are in good hands.',
          'We take the time to understand each family’s unique situation and carefully match clients with caregivers who fit their needs and personality. To make this process easier, we even provide families with the opportunity to interview potential caregivers at no cost.',
          '📞 Schedule your free assessment today and take the first step toward compassionate, reliable support with Kenah Wellness Services.'
        ]
      },
      {
        heading: 'Comprehensive Personal Care Across Pittsburgh & Allegheny County',
        subheading: 'Compassionate Live-In & 24/7 Support',
        paragraphs: [
          'Care needs vary from person to person, which is why we offer flexible care plans that can be customized to fit your schedule — from just a few hours per day to full-time, live-in assistance.',
          'Our caregivers provide respectful and dignified support with:'
        ],
        bullets: [
          'Bathing, grooming, and dressing',
          'Mobility assistance and fall prevention',
          'Toileting and continence care',
          'Housekeeping and laundry to maintain a safe, clean home',
          'Meal preparation and feeding support'
        ]
      },
      {
        heading: 'Beyond Basic Care',
        paragraphs: [
          'At Kenah Wellness Services, we recognize that true well-being goes beyond physical care. That’s why we also focus on:'
        ],
        bullets: [
          'Nutrition Support & Education – Helping clients maintain a healthy, balanced diet tailored to their needs.',
          'Companionship & Emotional Support – Offering conversation, friendship, and reassurance to reduce loneliness.',
          'Respite for Families – Allowing family caregivers to rest while knowing their loved one is cared for.'
        ]
      },
      {
        heading: 'Why Families Choose Us',
        paragraphs: [
          'Families across Allison Park, Pittsburgh, and Allegheny County trust Kenah Wellness Services for personal care because we deliver more than assistance — we deliver comfort, dignity, and peace of mind.',
          '💙 Let us care for your loved one so you can focus on what matters most: spending quality time together.'
        ]
      }
    ],
    whatIncludesTitle: 'What Personal Care Includes',
    whatIncludesBullets: [
      'Bathing and Shower Assistance',
      'Grooming and Hygiene',
      'Dressing Assistance',
      'Mobility and Transfer Support',
      'Toileting and Incontinence Care'
    ]
  },
  {
    id: 'senior-care',
    slug: 'senior-care',
    legacySlugs: ['office-cleaning'],
    title: 'Senior Care',
    shortDesc: 'At Kenah Wellness Services, we recognize that every senior deserves care that goes beyond the basics. Our senior care services are designed to support the whole person—meeting not just physical needs, but also emotional well-being and social connection. By providing comprehensive, personalized care, we help older adults in Pittsburgh, Allison Park, and surrounding communities live with dignity, comfort, and joy in their own homes.',
    image: `${import.meta.env.BASE_URL}images/towfiqu-barbhuiya-T_yNRLnYau8-unsplash-1024x683.jpg`,
    features: [
      'Physical Support',
      'Emotional Care',
      'Social Engagement',
      'Daily Living Assistance',
      'Health & Wellness'
    ],
    detailSections: [
      {
        heading: 'Senior Care in Allison Park, Pittsburgh & Allegheny County',
        paragraphs: [
          'It’s estimated that 7 in 10 people turning 65 will require some form of long-term care in their lifetime. From help with daily activities like bathing and dressing to medication reminders and companionship, senior care services provide the support older adults need to live safely, comfortably, and with dignity at home.',
          'At Kenah Wellness Services, our mission is simple: to treat every client like family. Owned and operated with a commitment to compassionate, person-centered care, we provide customized senior care solutions for families in Allison Park, Pittsburgh, and throughout Allegheny County.',
          'Whether your loved one needs full 24/7 home care, part-time support, or assistance within a nursing home or assisted living facility, our trained caregivers are here to help — always prioritizing dignity, independence, and quality of life.',
          '📞 Schedule your free, no-obligation assessment today to create a personalized care plan that fits your loved one’s unique needs and preferences.'
        ]
      },
      {
        heading: 'Compassionate Elderly Care at Home & Beyond',
        paragraphs: [
          'Aging brings new challenges, but with the right support, seniors can continue enjoying fulfilling, independent lives. That’s why we offer a wide range of senior care services designed to meet each individual’s unique needs:'
        ],
        bullets: [
          'Daily Living Assistance – Bathing, grooming, dressing, and personal hygiene.',
          'Medication Reminders – Helping seniors stay on track with prescribed treatments.',
          'Companionship Care – Friendly conversation and social interaction to prevent isolation.',
          'Meal Preparation & Nutrition Support – Nutritious meals tailored to dietary needs.',
          'Transportation Assistance – Safe rides to medical appointments, errands, and community activities.',
          'Light Housekeeping – Laundry, tidying, and chores to keep the home safe and comfortable.'
        ]
      },
      {
        heading: 'Care That Follows Your Loved One Wherever They Go',
        paragraphs: [
          'Unlike some agencies, Kenah Wellness Services provides care not just at home but also through assisted living and nursing home contracts. This means your loved one can continue receiving trusted, familiar care even if their living situation changes.',
          'We also specialize in sensitive care services, such as dementia care and end-of-life support, ensuring seniors and their families are supported at every stage of life.'
        ]
      },
      {
        heading: 'Why Families Choose Kenah Wellness Services',
        paragraphs: [
          'At Kenah Wellness Services, we are more than caregivers — we’re companions dedicated to enhancing the lives of seniors across Allison Park and the Pittsburgh area.'
        ],
        bullets: [
          'Personalized Care Plans – Every client’s care is tailored to their health needs, preferences, and budget.',
          'Compassionate, Trained Caregivers – Experienced professionals who go above and beyond daily tasks.',
          'Family-Like Approach – We see every client as a parent, grandparent, or friend, not just a patient.',
          'Dignity & Independence First – Care that supports seniors without taking control away from them.'
        ]
      }
    ],
    whatIncludesTitle: 'What Senior Care Includes',
    whatIncludesBullets: [
      'Physical Support',
      'Emotional Care',
      'Social Engagement',
      'Assistance with Daily Activities',
      'Health & Wellness'
    ],
    closingText: [
      '💙 Let us give your family the peace of mind you deserve.',
      '📩 Contact us today to learn more about our senior care services.'
    ]
  },
  {
    id: 'end-of-life-care',
    slug: 'end-of-life-care',
    legacySlugs: ['deep-cleaning'],
    title: 'End-of-Life Care',
    shortDesc: 'Facing life’s final stages is never easy—for individuals or their families. At Kenah Wellness Services, our end-of-life care is designed to provide comfort, peace, and dignity during this important time. We focus on easing physical discomfort, offering emotional support, and ensuring families feel cared for and supported every step of the way.',
    image: `${import.meta.env.BASE_URL}images/junior-reis-fiVxSvt7sFo-unsplash-1024x683.jpg`,
    features: [
      'Comfort-Focused Support',
      'Emotional and Spiritual Support',
      'Family Assistance',
      'Collaboration with Hospice Teams',
      'Supports the Whole Family'
    ],
    detailSections: [
      {
        heading: 'End-of-Life Care Services in Allison Park & Pittsburgh',
        paragraphs: [
          'Facing life’s final stages is never easy — for individuals or their families. At Kenah Wellness Services, we know how overwhelming and emotional it can be to care for a loved one at the end of their life. We also understand the importance of being surrounded by familiar comforts, cherished memories, and family during this delicate time.',
          'Our end-of-life care services provide comfort, dignity, and compassionate support for seniors and families in Allison Park and the greater Pittsburgh area. We work alongside hospice and palliative care teams, providing an extra layer of care to ensure your loved one remains as comfortable, peaceful, and pain-free as possible.',
          'We also know that family caregivers need support, too. Our caregivers step in to provide relief, giving you the time and emotional space to be present with your loved one, without carrying the full weight of caregiving responsibilities alone.',
          '📞 Schedule your free in-home assessment today to learn how Kenah Wellness Services can support your family with dignified, compassionate end-of-life care.'
        ]
      },
      {
        heading: 'Compassionate Hospice & Palliative Support in Pittsburgh',
        paragraphs: [
          'At Kenah Wellness Services, we believe that end-of-life care is about honoring life and ensuring comfort. Our trained caregivers provide practical and emotional support tailored to your loved one’s unique needs, including:'
        ],
        bullets: [
          'Collaboration with Hospice Teams – Working seamlessly with hospice nurses and doctors to follow the care plan.',
          'Pain & Discomfort Management Support – Ensuring comfortable positioning, quiet environments, and medication reminders.',
          'Medication Reminders – Ensuring treatments are taken on time and as prescribed.',
          'Personal Care Support – Assistance with bathing, grooming, dressing, and hygiene.',
          'Nutritious Meal Preparation – Healthy meals tailored to preferences and needs.',
          'Companionship & Emotional Support – Providing reassurance, comfort, and presence.',
          'Family Support & Respite Care – Giving loved ones the opportunity to rest and spend quality time together.'
        ]
      },
      {
        heading: 'More Than Care — We’re Family',
        paragraphs: [
          'At Kenah Wellness Services, we believe that the last days of life should be as peaceful and meaningful as possible. Our caregivers don’t just provide services — they provide compassion, dignity, and love. We treat every client as if they were our own family, ensuring they are surrounded by care, comfort, and respect every step of the way.',
          '💙 Contact us today to learn more about our end-of-life care services and how we can walk alongside you during this important time.'
        ]
      }
    ],
    whatIncludesTitle: 'What End-of-Life Care Includes',
    whatIncludesBullets: [
      'Comfort-Focused Support',
      'Emotional and Spiritual Support',
      'Family Assistance',
      'Collaboration with Hospice Teams',
      'Supports the Whole Family'
    ]
  },
  {
    id: 'respite-care',
    slug: 'respite-care',
    legacySlugs: ['move-in-out-cleaning'],
    title: 'Respite Care',
    shortDesc: 'Caring for a loved one is one of the most meaningful responsibilities a family member can take on—but it can also be physically and emotionally exhausting. At Kenah Wellness Services, we understand the challenges caregivers face and provide respite care that offers temporary relief.',
    image: `${import.meta.env.BASE_URL}images/kevin-grieve-vN2V5iunLc0-unsplash-1-1024x683.jpg`,
    features: [
      'Short-Term Care for Loved Ones',
      'Personal Care Assistance',
      'Companionship and Emotional Support',
      'Flexible Scheduling',
      'Supports Senior Well-Being'
    ],
    detailSections: [
      {
        heading: 'Caring for a loved one is one of the most meaningful responsibilities',
        paragraphs: [
          'Caring for an elderly or disabled loved one is an act of love that requires time, energy, and devotion. But even the most dedicated family caregivers need time to rest, recharge, and focus on their own well-being. At Kenah Wellness Services, we understand the challenges of balancing caregiving with work, family, and personal responsibilities — and we’re here to help.',
          'Our respite care services give family caregivers the break they deserve, while ensuring their loved one remains safe, comfortable, and well cared for at home. Whether you need a few hours, overnight help, or extended support while you travel, our professional caregivers can step in whenever you need us.',
          'Remember: taking care of yourself isn’t a luxury — it’s essential. With respite care from Kenah Wellness Services, you can rest with peace of mind knowing your loved one is in compassionate, capable hands.',
          '📞 Schedule your free assessment today to learn how we can support both you and your loved one with flexible, personalized respite care.'
        ]
      },
      {
        heading: 'Flexible & Reliable Respite Care in Pittsburgh & Allegheny County',
        subheading: 'Our Respite Care Services Include:',
        paragraphs: [
          'We know every family’s needs are unique, which is why our respite care services are fully flexible and adaptable to your schedule. Whether you need support for a short break, an evening out, or ongoing care while you are away, our team is ready to provide dependable coverage.'
        ],
        bullets: [
          'Personal Care Assistance – Help with bathing, grooming, dressing, and hygiene.',
          'Companionship & Social Interaction – Providing comfort, conversation, and emotional support.',
          'Meal Preparation & Feeding Assistance – Ensuring nutritious, enjoyable meals are provided.',
          'Housekeeping & Daily Tasks – Light cleaning, laundry, and home organization.',
          'Mobility Support – Helping with safe movement, transfers, and fall prevention.'
        ]
      },
      {
        heading: 'Why Choose Kenah Wellness Services for Respite Care?',
        paragraphs: [
          'Our caregivers are carefully selected, trained, and dedicated to treating every client as if they were their own family. We prioritize trust, respect, and compassion, giving families confidence that their loved one is safe and cared for while they take time for themselves.'
        ],
        bullets: [
          'Flexible scheduling — from hourly to live-in support.',
          'Compassionate, trained caregivers who understand the unique needs of seniors.',
          'Affordable care options tailored to fit your family’s budget.',
          'Peace of mind knowing your loved one is cared for with dignity and respect.'
        ]
      }
    ],
    whatIncludesTitle: 'What Respite Care Includes',
    whatIncludesBullets: [
      'Short-Term Care for Loved Ones',
      'Personal Care Assistance',
      'Companionship and Emotional Support',
      'Flexible Scheduling',
      'Supports Senior Well-Being'
    ],
    closingText: [
      '💙 Let us give you the support you need so you can continue providing the best possible care for your loved one.',
      '📩 Contact Kenah Wellness Services today to learn more about our respite care in Allison Park, Pittsburgh, and surrounding communities.'
    ]
  },
  {
    id: 'dementia-care-support',
    slug: 'dementia-care-support',
    legacySlugs: ['post-construction-cleaning'],
    title: 'Dementia Care Support',
    shortDesc: 'Caring for a loved one with Alzheimer’s disease or another form of dementia requires patience, compassion, and specialized knowledge. At Kenah Wellness Services, we provide dementia care support that focuses on creating a safe, structured, and understanding environment for individuals while giving families peace of mind.',
    image: `${import.meta.env.BASE_URL}images/annabel-podevyn-fUBZHfDAVmc-unsplash-1024x683.jpg`,
    features: [
      'Safety and Supervision',
      'Memory and Cognitive Support',
      'Compassionate Communication',
      'Personal Care Assistance',
      'Family Support'
    ],
    detailSections: [
      {
        heading: 'Dementia Care Services in Allison Park, PA',
        paragraphs: [
          'At Kenah Wellness Services, we understand the unique challenges that come with caring for a loved one with dementia. Our specialized dementia care services are designed to provide comfort, safety, and meaningful support so that your loved one can continue living with dignity in the familiar surroundings of their own home.',
          'Our caregivers are specially trained to manage the complexities of dementia, from memory loss to changes in behavior, with compassion, patience, and respect. We know that this condition affects not just the individual but the entire family, which is why we also offer respite care — giving family caregivers the chance to rest, recharge, and focus on their own well-being.',
          'Taking the first step can feel overwhelming, but we’re here to make it simple. After a free in-home assessment, our team will match your loved one with the right caregiver and develop a personalized care plan tailored to their needs, preferences, and routines. Whether your family requires just a few hours a week, overnight assistance, or full-time support, we’re here to walk alongside you on this journey.',
          '📞 Schedule your free assessment today and discover how Kenah Wellness Services can provide compassionate dementia care in Allison Park and across Pittsburgh.'
        ]
      },
      {
        heading: 'The Benefits of Dementia Care at Home',
        subheading: 'How We Help',
        paragraphs: [
          'Living with dementia can often feel like navigating unfamiliar territory. Even the most ordinary tasks can become overwhelming, and familiar settings may feel confusing. That’s why receiving care in the comfort of home is so valuable — it offers stability, familiarity, and peace of mind.',
          'At Kenah Wellness Services, our caregivers provide compassionate dementia support that goes far beyond basic tasks:'
        ],
        bullets: [
          'Medication Reminders – Gentle, consistent reminders to ensure medications are taken on time.',
          'Grooming & Bathing Assistance – Support with hygiene tasks delivered with dignity and care.',
          'Toileting Support – Assistance with toilet care while maintaining comfort and cleanliness.',
          'Dressing Assistance – Help with clothing choices and dressing to ease daily routines.',
          'Skin Care – Preventing dryness, irritation, and skin breakdown with regular care.',
          'Meal Preparation – Nutritious, dementia-friendly meals tailored to health needs and preferences.',
          'Housekeeping – Light cleaning and organization to create a safe, clutter-free environment.'
        ]
      },
      {
        heading: 'More Than Caregivers — A Family Partner',
        paragraphs: [
          'At Kenah Wellness Services, we know that every person living with dementia is more than their diagnosis — they are a cherished parent, grandparent, sibling, or friend. Our team doesn’t just provide care; we build meaningful relationships rooted in respect, patience, and love.',
          'That personal connection is at the heart of what makes our dementia care unique — because for us, caregiving isn’t just a service, it’s a calling.'
        ]
      }
    ],
    whatIncludesTitle: 'What Dementia Care Support Includes',
    whatIncludesBullets: [
      'Safety and Supervision',
      'Memory and Cognitive Support',
      'Compassionate Communication',
      'Personal Care Assistance',
      'Family Support'
    ]
  },
  {
    id: 'companionship-care',
    slug: 'companionship-care',
    legacySlugs: ['recurring-cleaning'],
    title: 'Companionship Care',
    shortDesc: 'Loneliness and isolation are among the most common challenges seniors face, especially when living alone or away from family. At Kenah Wellness Services, our companionship care focuses on providing meaningful social interaction, emotional support, and a sense of connection.',
    image: `${import.meta.env.BASE_URL}images/junior-reis-PRphbN8vPH4-unsplash-1024x683.jpg`,
    features: [
      'Social Interaction',
      'Emotional Support',
      'Daily Engagement',
      'Personalized Connection',
      'Boosts Emotional Health'
    ],
    detailSections: [
      {
        heading: 'Companionship Care in Allison Park & Pittsburgh',
        paragraphs: [
          'As we grow older, everyday tasks and routines can become more challenging. You may have noticed your loved one struggling with small responsibilities, or perhaps they’ve shared feelings of loneliness and isolation. These challenges can take a toll on both physical and emotional health — but with Kenah Wellness Services, your loved one doesn’t have to face them alone.',
          'We understand how important it is for seniors to stay independent and socially connected. Our Companion Care Services are designed to provide both support and meaningful companionship, helping older adults in Allison Park and the greater Pittsburgh area live fulfilling, enjoyable lives. Beyond offering conversation and shared activities, our caregivers provide compassionate, hands-on assistance to make each day easier and more enjoyable.',
          'Whether your family needs a few hours of support each week or daily companion care, our team is here to help. Together, we’ll build a personalized care plan tailored to your loved one’s unique lifestyle, interests, and needs.',
          '📞 Schedule your free consultation today to learn how our companion care services can make a difference in your loved one’s life.'
        ]
      },
      {
        heading: 'Meaningful In-Home Care for Aging Loved Ones',
        paragraphs: [
          'According to recent studies, nearly one in four adults over 65 report being socially isolated, with many more experiencing loneliness. Family members often want to provide support but may not have the time or resources to be there every day. At Kenah Wellness Services, we bridge this gap with trusted, compassionate companion care.'
        ]
      },
      {
        heading: 'Benefits of Our Companion Care Services',
        paragraphs: [
          'Our caregivers are highly trained, compassionate, and dependable, going beyond basic tasks to build genuine relationships with the people they serve. From offering a friendly conversation to ensuring a safe and comfortable living environment, we’re committed to giving families peace of mind.'
        ],
        bullets: [
          'Personalized Care Plans tailored to your loved one’s unique needs and preferences.',
          'Compassionate Environment that promotes dignity, safety, and independence.',
          'Social Interaction & Emotional Support to reduce loneliness and isolation.',
          'Daily Assistance with tasks like meals, housekeeping, and light personal care.',
          'Flexible Options for care at home, in senior housing, or assisted living support.'
        ]
      },
      {
        heading: 'Geriatric Home Care For Your Aging Loved One',
        paragraphs: [
          'At Kenah Wellness Services, we know every person we care for is someone’s parent, grandparent, sibling, or friend. That’s why we treat every client with the same love, respect, and dignity we would give our own family. Our caregivers don’t just provide services — they form meaningful bonds, and that personal connection is at the heart of what makes our care different.'
        ]
      }
    ],
    whatIncludesTitle: 'What Companionship Care Includes',
    whatIncludesBullets: [
      'Social Interaction',
      'Emotional Support',
      'Daily Engagement',
      'Personalized Connection',
      'Boosts Emotional Health'
    ]
  },
  {
    id: 'specialized-support',
    slug: 'specialized-support',
    legacySlugs: ['specialized-support'],
    title: 'Specialized Support',
    shortDesc: 'At Kenah Wellness Services, we know that every individual and family has unique needs when it comes to caring for an aging loved one. That’s why we offer specialized support services — additional assistance designed to make life easier, safer, and more manageable for seniors and their families.',
    image: `${import.meta.env.BASE_URL}images/steven-hwg-zBsdRTHIIm4-unsplash-1024x683.jpg`,
    features: [
      'Chronic Condition Care',
      'Disability Support',
      'Post-Surgery & Recovery Care',
      'Personalized Connection',
      'Specialized Training & Skills'
    ],
    detailSections: [
      {
        heading: 'Specialized Support Services in Allison Park & Pittsburgh',
        paragraphs: [
          'At Kenah Wellness Services, we know that every individual and family has unique needs when it comes to caring for an aging loved one. That’s why we offer specialized support services — additional assistance designed to make life easier, safer, and more manageable for seniors and their families.',
          'From helping with transportation to coordinating with your loved one’s medical team, our caregivers provide an extra layer of care and support. Each service can be tailored to fit your family’s needs, preferences, and budget, ensuring that your loved one receives exactly the care they need.',
          'We also offer families the chance to interview potential caregivers at no cost, so you feel confident and comfortable with the person providing care. At Kenah Wellness Services, we treat every client like family — always striving to create an environment of trust, compassion, and support.',
          '📞 Schedule your free assessment today and let us show you how our specialized support services can make a difference for your loved one in Allison Park and the greater Pittsburgh area.'
        ]
      },
      {
        heading: 'Compassionate & Comprehensive Senior Support',
        subheading: 'How We Can Help',
        paragraphs: [
          'In addition to our core home care, personal care, and companion care services, we provide a range of specialized support services to help families manage the everyday challenges of caregiving:'
        ],
        bullets: [
          'Transportation Assistance – Safe, reliable rides to doctor’s appointments, grocery shopping, church services, or social outings.',
          'Care Team Coordination – Support with scheduling appointments, organizing medical information, and communicating with healthcare providers.',
          'Errands & Daily Tasks – Prescription pickups, mailing packages, grocery runs, and more, so families can spend more quality time together.',
          'Household Assistance – Light housekeeping, laundry, bed-making, and other tasks to ensure a clean, safe, and comfortable home.'
        ]
      },
      {
        heading: 'Why Families Choose Kenah Wellness Services',
        paragraphs: [
          'Whether you need just an hour of help or ongoing assistance, our caregivers are here to provide flexible, reliable, and compassionate support.',
          'At Kenah Wellness Services, we go beyond traditional home care to provide comprehensive support that truly makes a difference.',
          '💙 Let us take care of the details, so you can focus on what matters most: creating meaningful moments with your loved one.',
          '📩 Contact us today to learn more about our specialized support services.'
        ],
        bullets: [
          'Personalized Solutions – Services tailored to your loved one’s unique needs and your family’s lifestyle.',
          'Trusted Caregivers – Trained professionals who treat clients with dignity and respect.',
          'Local & Dependable – Proudly serving families in Allison Park, Pittsburgh, and across Allegheny County.',
          'Family-Focused Approach – We support not just seniors, but their families, offering peace of mind every step of the way.'
        ]
      }
    ],
    whatIncludesTitle: 'What Specialized Support Includes',
    whatIncludesBullets: [
      'Chronic Condition Care',
      'Disability Support',
      'Post-Surgery & Recovery Care',
      'Personalized Connection',
      'Specialized Training & Skills'
    ]
  },
  {
    id: 'additional-services',
    slug: 'additional-services',
    legacySlugs: ['additional-services'],
    title: 'Additional Services',
    shortDesc: 'At Kenah Wellness Services, we know that quality care goes beyond the basics. Every individual has unique needs, and we believe in supporting not just daily living, but overall comfort, independence, and happiness. That’s why, in addition to our core home care services, we proudly provide specialized additional services designed to enrich the lives of seniors and their families.',
    image: `${import.meta.env.BASE_URL}images/treesan-Ynj7J6iSWv4-unsplash-1024x576.jpg`,
    features: [
      'Light Housekeeping',
      'Meal Preparation',
      'Medication Reminders',
      'Transportation & Errands',
      'General Daily Support'
    ],
    detailSections: [
      {
        heading: 'Specialized Additional Services in Allison Park & Pittsburgh',
        paragraphs: [
          'At Kenah Wellness Services, we know that quality care goes beyond the basics. Every individual has unique needs, and we believe in supporting not just daily living, but overall comfort, independence, and happiness. That’s why, in addition to our core home care services, we proudly provide specialized additional services designed to enrich the lives of seniors and their families.',
          'Our holistic approach ensures that your loved one can live a fulfilling, healthy, and comfortable life right at home. From transportation to nutrition support and even pet grooming, we go the extra mile to make sure our clients have everything they need to thrive.',
          '📞 Schedule your free assessment today and let our team create a care plan that’s personalized, compassionate, and complete. Whether your loved one is receiving care at home or in a facility, we’ll be there every step of the way.'
        ]
      },
      {
        heading: 'Transportation Services',
        paragraphs: [
          'Getting around can be one of the biggest challenges for seniors, especially for those who no longer drive. At Kenah Wellness Services, we provide safe and reliable transportation assistance so your loved one can stay active and connected in Allison Park, Pittsburgh, and beyond.',
          'Whether it’s a doctor’s appointment, a trip to the salon, attending a social activity, or simply running errands, our caregivers ensure clients travel comfortably and safely — while maintaining their independence.'
        ]
      },
      {
        heading: 'Nutrition Education & Meal Support',
        paragraphs: [
          'Good nutrition is essential for healthy aging, managing chronic conditions, and supporting recovery. As we age, dietary needs change — and maintaining a balanced diet can be difficult.',
          'Our caregivers at Kenah Wellness Services take the time to learn each client’s preferences, restrictions, and health goals. We provide meal planning, preparation, and nutrition education tailored to each individual. From adapting menus to meet medical requirements to creating meals that are both nutritious and enjoyable, we help clients feel their best every day.'
        ]
      },
      {
        heading: 'Pet Grooming & Pet Care',
        paragraphs: [
          'Pets bring joy, love, and comfort — especially for seniors who live alone. But as we age, caring for pets can become challenging. At Kenah Wellness Services, we recognize that pets are family, too.',
          'That’s why we offer pet grooming and care assistance as part of our additional services. Our caregivers can help with brushing, bathing, feeding, and light grooming needs to ensure pets remain healthy and happy. Supporting the bond between seniors and their pets is part of our commitment to holistic care.',
          'At Kenah Wellness Services, our goal is simple: to provide more than just care — we provide support, comfort, and connection that improves every aspect of life for the seniors and families we serve across Allison Park and the Pittsburgh area.'
        ]
      }
    ],
    whatIncludesTitle: 'What Additional Services Include',
    whatIncludesBullets: [
      'Light Housekeeping',
      'Meal Preparation',
      'Medication Reminders',
      'Transportation & Errands',
      'General Daily Support'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    author: 'Sarah M.',
    location: 'Allison Park, PA',
    quote: 'Kenah Wellness Services has been a blessing for our family. The caregivers are kind, patient, and always reliable. My mother feels safe and cared for in her Allison Park home, and we have peace of mind knowing she’s in good hands.',
    rating: 5
  },
  {
    id: '2',
    author: 'David R.',
    location: 'Pittsburgh, PA',
    quote: 'The team at Kenah Wellness truly goes above and beyond. They helped my father recover after surgery and supported him every step of the way. Their professionalism and compassion are unmatched in the Pittsburgh area.',
    rating: 5
  },
  {
    id: '3',
    author: 'Jennifer T.',
    location: 'Allegheny County, PA',
    quote: 'I needed respite care while I was traveling for work, and Kenah Wellness stepped in without hesitation. Their caregivers treated my grandmother with dignity and kindness. I couldn’t have asked for better care in Allegheny County.',
    rating: 5
  },
  {
    id: '4',
    author: 'Robert K.',
    location: 'Wexford, PA',
    quote: 'Finding trustworthy dementia care for my wife was our biggest challenge. The Kenah Wellness team gave us back our calm. The caregiver knows how to handle difficult moments with gentle patience and understanding.',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What areas do you serve?',
    answer: 'We proudly provide home care services and ODP waiver supports in Allison Park, PA, and surrounding communities in Allegheny County, Butler County, and Washington County, including the greater Pittsburgh area, Hampton Township, Shaler, McCandless, Ross Township, Gibsonia, Glenshaw, Wexford, Cranberry Township, and Monroeville.',
    category: 'General'
  },
  {
    question: 'Does Kenah Wellness Services provide both Home Care and ODP Waiver Services?',
    answer: 'Yes! Kenah Wellness Services provides both comprehensive Private Duty & Home Care Services for seniors, and certified Pennsylvania Office of Developmental Programs (ODP) Waiver Services—including In-Home Respite, Out-of-Home Respite, Habilitation (HAB), and Community Participation Support (CPS)—for individuals with intellectual and developmental disabilities.',
    category: 'Services'
  },
  {
    question: 'What is the difference between In-Home Respite and Out-of-Home Respite?',
    answer: 'In-Home Respite provides relief to primary family caregivers directly inside the individual’s own home, preserving familiar routines, comfort, and environment. Out-of-Home Respite is provided in approved community-based or licensed residential settings outside the family home, offering caregivers extended rest while giving the individual opportunities for new social environments, activities, and recreation.',
    category: 'ODP Waiver Services'
  },
  {
    question: 'What are Habilitation (HAB) and Community Participation Support (CPS)?',
    answer: 'Habilitation (HAB) focuses on building, maintaining, and improving daily living skills, personal autonomy, communication, and self-care in home and community settings. Community Participation Support (CPS) focuses on active social inclusion, connecting individuals with volunteer opportunities, civic events, recreation, and local community activities based on personal interests and choices.',
    category: 'ODP Waiver Services'
  },
  {
    question: 'Under which Pennsylvania waivers are your ODP services provided?',
    answer: 'Our developmental disability services are authorized under Pennsylvania’s Office of Developmental Programs (ODP) Medicaid waivers, including the Consolidated Waiver, the Community Living Waiver, and the Person/Family Directed Support (P/FDS) Waiver. We also assist self-pay and private insurance clients.',
    category: 'Payment & Waivers'
  },
  {
    question: 'How do I know which care plan is right for my loved one?',
    answer: 'We start with a free, no-obligation consultation and comprehensive assessment to evaluate your loved one’s unique goals, daily routines, ISP (Individual Support Plan), and family needs. Based on this, we create a person-centered support plan that honors dignity, autonomy, and safety.',
    category: 'Getting Started'
  },
  {
    question: 'Are your caregivers and support staff trained and certified?',
    answer: 'Yes. All our caregivers and direct support professionals (DSPs) undergo rigorous criminal background clearances, child abuse clearances (where required), CPR/First Aid certification, and extensive person-centered ODP competency training in positive behavioral support, communication, and client dignity.',
    category: 'Caregivers'
  },
  {
    question: 'What are your hours of availability?',
    answer: 'We are available 24 hours a day, 7 days a week, 365 days a year. Whether you require a few hours of respite on weekends, scheduled daytime CPS, or comprehensive around-the-clock support, our team is ready to help.',
    category: 'Scheduling'
  }
];

export interface OdpServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  image: string;
  shortDesc: string;
  overview: string;
  keyDifferenceOrFocus: string;
  features: string[];
  goals: string[];
  whoIsItFor: string;
  waiverPrograms: string[];
}

export const ODP_SERVICES: OdpServiceItem[] = [
  {
    id: 'in-home-respite',
    slug: 'in-home-respite',
    title: 'In-Home Respite Services',
    shortTitle: 'In-Home Respite',
    tagline: 'Reliable caregiver relief within the familiarity and security of your own home.',
    category: 'Caregiver Relief & In-Home Support',
    image: `${import.meta.env.BASE_URL}images/african-social-worker-taking-care-senior-woman-scaled.jpg`,
    shortDesc: 'Compassionate, temporary relief for family caregivers while your loved one receives one-on-one personalized care and support in the familiar comfort of home.',
    overview: 'In-Home Respite is designed to provide dedicated, short-term relief to family and primary caregivers who devote their time and energy to supporting an individual with intellectual or developmental disabilities. Because the care happens directly within the individual’s own home, their familiar routines, favorite meals, comfort items, and emotional security are completely preserved.',
    keyDifferenceOrFocus: 'Distinct from Out-of-Home Respite: Service takes place inside the individual’s private residence. Ideal for individuals who thrive on home routines, quiet surroundings, or who prefer familiar spaces while their primary family caregiver rests, runs errands, travels, or attends to personal health.',
    features: [
      'Assistance with personal care, hygiene, dressing, and bathing',
      'Meal preparation following specific dietary needs and preferences',
      'Medication administration reminders and health routine supervision',
      'Companionship, engaging indoor games, reading, and sensory hobbies',
      'Maintaining consistent daily schedules, bedtime routines, and safety',
      'Flexible scheduling: daytime, evening, weekend, or overnight care'
    ],
    goals: [
      'Prevent family caregiver burnout and exhaustion',
      'Maintain continuous person-centered stability for the individual',
      'Preserve the individual’s dignity and choice of home environment',
      'Ensure family caregivers can recharge with complete peace of mind'
    ],
    whoIsItFor: 'Families and primary caregivers seeking trustworthy, compassionate relief without disrupting the individual’s everyday home environment or personal rhythm.',
    waiverPrograms: [
      'Pennsylvania ODP Consolidated Waiver',
      'Pennsylvania ODP Community Living Waiver',
      'Pennsylvania ODP Person/Family Directed Support (P/FDS) Waiver'
    ]
  },
  {
    id: 'out-of-home-respite',
    slug: 'out-of-home-respite',
    title: 'Out-of-Home Respite Services',
    shortTitle: 'Out-of-Home Respite',
    tagline: 'Structured, welcoming community and residential respite away from home.',
    category: 'Caregiver Relief & Community Setting',
    image: `${import.meta.env.BASE_URL}images/kevin-grieve-vN2V5iunLc0-unsplash-1024x683.jpg`,
    shortDesc: 'Quality short-term care provided in approved, licensed, and welcoming settings outside the family home, offering engaging social experiences for the individual.',
    overview: 'Out-of-Home Respite provides planned or emergency relief to primary caregivers in a safe, fully supervised, licensed community or facility setting away from the family residence. This service gives caregivers extended time to travel, recuperate, manage personal matters, or rest, while providing the individual an exciting, structured change of scenery and opportunities to interact with new peers and staff.',
    keyDifferenceOrFocus: 'Distinct from In-Home Respite: Care is delivered in vetted community locations, licensed respite homes, or specialized day centers outside the individual’s house. Ideal when family caregivers require full residential space, during emergencies, home renovations, or when the individual desires socialization outside the home.',
    features: [
      'Safe, fully accessible, licensed respite environments',
      '24/7 attentive supervision and individualized personal care',
      'Structured recreational activities, crafts, and social outings',
      'Nutritious meals and snacks prepared in community kitchen settings',
      'Overnight and multi-day short-term stays with tailored sleep accommodations',
      'Seamless coordination with the individual’s primary care team and family'
    ],
    goals: [
      'Offer primary families uninterrupted respite for work, travel, or wellness',
      'Expand the individual’s social horizons in positive, secure environments',
      'Build confidence and adaptability in diverse community settings',
      'Provide dependable emergency and planned respite options'
    ],
    whoIsItFor: 'Caregivers needing extended breaks, overnight intervals, or emergency relief, and individuals who enjoy social interaction, new surroundings, and group activities.',
    waiverPrograms: [
      'Pennsylvania ODP Consolidated Waiver',
      'Pennsylvania ODP Community Living Waiver',
      'Pennsylvania ODP Person/Family Directed Support (P/FDS) Waiver'
    ]
  },
  {
    id: 'habilitation-hab',
    slug: 'habilitation-hab',
    title: 'Habilitation (HAB) Services',
    shortTitle: 'Habilitation (HAB)',
    tagline: 'Empowering individuals to master life skills, build independence, and thrive.',
    category: 'Skill Building & Independent Living',
    image: `${import.meta.env.BASE_URL}images/centre-for-ageing-better-nNENRAWBphU-unsplash-1024x683.jpg`,
    shortDesc: 'Person-centered skill acquisition and retention focused on self-care, home management, decision-making, and daily living skills that promote autonomy.',
    overview: 'Habilitation (HAB) services are designed to help individuals with intellectual and developmental disabilities acquire, retain, and improve the essential daily living skills required to live as independently and safely as possible. Grounded in a respectful, person-centered approach, our dedicated staff work hand-in-hand with the individual to achieve the milestones outlined in their Individual Support Plan (ISP).',
    keyDifferenceOrFocus: 'Focus on Growth & Autonomy: Unlike pure custodial care, Habilitation is an active, goal-oriented support model where individuals learn practical skills—such as meal preparation, personal budgeting, grooming, and household navigation—to maximize personal choice and self-reliance.',
    features: [
      'Independent living skills: cooking, laundry, light housekeeping, and organization',
      'Personal hygiene, grooming, dressing, and self-care training',
      'Communication support, digital literacy, and adaptive device navigation',
      'Financial literacy basics: budgeting, coin recognition, and shopping math',
      'Health, wellness, medication management routines, and physical mobility',
      'Problem-solving, self-advocacy, and informed decision-making guidance'
    ],
    goals: [
      'Foster maximum personal autonomy and self-determination',
      'Equip individuals with lifelong practical home and life skills',
      'Strengthen self-confidence and self-advocacy capabilities',
      'Support long-term integration and stable living within the community'
    ],
    whoIsItFor: 'Individuals with developmental and intellectual disabilities who want to learn new skills, practice independence, and achieve their personal life goals.',
    waiverPrograms: [
      'Pennsylvania ODP Consolidated Waiver',
      'Pennsylvania ODP Community Living Waiver',
      'Pennsylvania ODP Person/Family Directed Support (P/FDS) Waiver'
    ]
  },
  {
    id: 'community-participation-support-cps',
    slug: 'community-participation-support-cps',
    title: 'Community Participation Support (CPS)',
    shortTitle: 'Community Participation (CPS)',
    tagline: 'Meaningful community inclusion, social relationships, and civic engagement.',
    category: 'Community Inclusion & Engagement',
    image: `${import.meta.env.BASE_URL}images/treesan-Ynj7J6iSWv4-unsplash-1024x576.jpg`,
    shortDesc: 'Connecting individuals with inclusive community activities, volunteering, recreation, and social networks tailored to their personal passions and choices.',
    overview: 'Community Participation Support (CPS) provides opportunities for individuals to explore their interests, engage in community life, and build meaningful relationships alongside community members without disabilities. We believe everyone deserves to be an active, valued member of their neighborhood. CPS fosters social, educational, and pre-vocational growth through fully integrated community activities.',
    keyDifferenceOrFocus: 'Focus on Community Connection & Inclusion: Staff accompany individuals out into local neighborhoods, cultural centers, parks, libraries, volunteer groups, and businesses, empowering them to pursue hobbies, develop civic roles, and participate in authentic community life.',
    features: [
      'Active participation in local community events, farmers markets, and fairs',
      'Volunteerism opportunities with local non-profits, animal shelters, and food banks',
      'Recreational activities: visits to fitness centers, parks, botanical gardens, and arts',
      'Building natural friendships and peer social networks in community spaces',
      'Public transit navigation, pedestrian safety, and mobility training',
      'Exploration of personal hobbies, creative arts, and pre-vocational interests'
    ],
    goals: [
      'Achieve true community integration beyond segregated environments',
      'Develop genuine friendships and natural social support circles',
      'Enhance communication, social etiquette, and confidence in public spaces',
      'Support personal interests, joyful experiences, and citizenship'
    ],
    whoIsItFor: 'Individuals who wish to get out into their community, explore passions, build friendships, volunteer, and lead an active, socially connected lifestyle.',
    waiverPrograms: [
      'Pennsylvania ODP Consolidated Waiver',
      'Pennsylvania ODP Community Living Waiver',
      'Pennsylvania ODP Person/Family Directed Support (P/FDS) Waiver'
    ]
  }
];

export const ODP_RESPITE_COMPARISON = {
  title: 'In-Home vs. Out-of-Home Respite: Understanding the Difference',
  subtitle: 'Both services provide vital relief for family caregivers, but they are tailored to different needs, settings, and family preferences.',
  comparisonPoints: [
    {
      feature: 'Care Setting',
      inHome: 'Delivered directly inside the individual’s own residence.',
      outOfHome: 'Delivered in vetted community facilities, licensed respite homes, or specialized centers.'
    },
    {
      feature: 'Routine & Surroundings',
      inHome: '100% familiar routines, personal bedroom, favorite meals, and comforts preserved.',
      outOfHome: 'A fresh, stimulating change of environment with structured activities and peer interaction.'
    },
    {
      feature: 'Best Suited For',
      inHome: 'Individuals who feel most calm at home, or caregivers needing daytime/evening coverage.',
      outOfHome: 'Extended breaks, vacations, family emergencies, home repairs, or building peer socialization.'
    },
    {
      feature: 'Caregiver Experience',
      inHome: 'Caregiver can run errands, attend doctor visits, work, or rest while remaining near.',
      outOfHome: 'Caregiver gets complete, restful separation and uninterrupted time away.'
    },
    {
      feature: 'Social Opportunities',
      inHome: 'Focused, individualized 1-on-1 engagement with a trusted caregiver.',
      outOfHome: 'Opportunities to socialize with new peers, engage in group crafts, games, and outings.'
    },
    {
      feature: 'ODP Waiver Coverage',
      inHome: 'Covered under PA ODP Consolidated, Community Living, & P/FDS Waivers.',
      outOfHome: 'Covered under PA ODP Consolidated, Community Living, & P/FDS Waivers.'
    }
  ]
};

