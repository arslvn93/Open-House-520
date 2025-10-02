const config = {
  "property": {
    "streetAddress": "14 Warren Crescent",
    "city": "Toronto",
    "cityStateZip": "Toronto, ON M6S 4S2",
    "heroSubtitle": "Quiet and safe neighbourhood with proximity to Etienne Brule Park and the Humber River Trail. Spacious 44x146-foot lot, functional layout, and strong foundation. Register to receive the complete Home & Neighbourhood Info Package, virtual tour, floor plans, and comparables.",
    "backgroundImageUrl": "https://api.typeform.com/responses/files/be4df8285c681cdec0c4678f656fe6a221f976356bdd1d98d31b211ade765152/2_second_photo.jpg"
  },
  "realtor": {
    "fullName": "James Hall",
    "title": "REALTOR®",
    "phone": "(416) 564 5464",
    "email": "jameshall@property.ca",
    "bio": "With a background in hospitality and a career built on results, I believe real estate is about tailoring every step to fit your unique goals. Born and raised in Toronto, I bring hyper-local GTA knowledge and deep market expertise.\n\nI don't believe in one-size-fits-all solutions. Using data-driven insights, in-depth analytics, and access to both on- and off-market inventory, I ensure you're making informed, strategic decisions. My job is to give you every advantage—the right opportunities, at the right time, with the right strategy.\n\nI pride myself on delivering a white-glove experience and building long-term relationships rooted in trust and transparency. Your real estate journey is one of your most important investments, and I'm here to help you navigate it with clarity and confidence.",
    "photoUrl": "https://cdn.realtor.ca/individual/TS638852403000000000/highres/1417941.jpg",
    "social": {
      "facebook": "https://www.facebook.com/profile.php?id=100089283990835",
      "instagram": "https://instagram.com/realestatewithjames",
      "website": ""
    }
  },
  "brokerage": {
    "name": "",
    "logoUrl": "",
    "address": ""
  },
  "openHouse": {
    "eventDate": "2025-10-04",
    "bundleItems": [
      {
        "icon": "fas fa-link",
        "text": "Property Listing URL"
      },
      {
        "icon": "fas fa-ruler-combined",
        "text": "Floor Plan"
      },
      {
        "icon": "fas fa-image",
        "text": "Photos"
      },
      {
        "icon": "fas fa-video",
        "text": "Virtual Tour"
      },
      {
        "icon": "fas fa-chart-bar",
        "text": "On-Market Comparables"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 James Hall Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://property.ca/privacy"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        {
          "value": "committed",
          "text": "Yes, I'm committed to an agent."
        },
        {
          "value": "not_committed",
          "text": "No, I'm not committed to an agent."
        },
        {
          "value": "gathering_info",
          "text": "Just gathering information at this stage."
        }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        {
          "value": "very_interested",
          "text": "Very interested, actively looking."
        },
        {
          "value": "somewhat_interested",
          "text": "Somewhat interested, keeping options open."
        },
        {
          "value": "just_browsing",
          "text": "Just browsing for now."
        }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        {
          "value": "resident_explorer",
          "text": "I live here and love exploring locally."
        },
        {
          "value": "considering_move",
          "text": "I'm considering moving to this area."
        },
        {
          "value": "just_visiting",
          "text": "Just visiting for the open house."
        }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        {
          "value": "design_layout",
          "text": "The design and layout."
        },
        {
          "value": "location_neighborhood",
          "text": "The location and neighborhood."
        },
        {
          "value": "home_price",
          "text": "The price of the home."
        }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-520",
    "repoUrl": "https://github.com/arslvn93/Open-House-520",
    "tag": "Open House 14 Warren Crescent",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/MONwEFLJTi58Ns0DvKJv/webhook-trigger/k0vkmargra3APEchVKGz",
    "siteId": "0c83703f-09bf-4999-b2bf-803db96cb553"
  }
};