import homePageBackground from "../assets/img/home-bg.jpg";
import topicPageBackground from "../assets/img/topic-bg.png";
import accordionPageBackground from "../assets/img/accordion-bg.png";

const pageData = {
  welcomePage: {
    title: "LOREM IPSUM",
    beginText: "Click begin to get started.",
    url: "/home",
    playBarText: "Transcript",
  },
  homePage: {
    title: "LOREM IPSUM",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper.",
      "Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.",
      "Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet justo eu laoreet.",
    ],
    homePageBackground: homePageBackground,
  },
  topicPages: [
    {
      pageNum: 1,
      title: "LOREM IPSUM DOLOR SIT (1)",
      beginButtonUrl: "/accordion/1",
      topicPageBackground: topicPageBackground,
    },
    {
      pageNum: 2,
      title: "LOREM IPSUM DOLOR SIT (2)",
      beginButtonUrl: "/accordion/2",
      topicPageBackground: topicPageBackground,
    },
    {
      pageNum: 3,
      title: "LOREM IPSUM DOLOR SIT (3)",
      beginButtonUrl: "/accordion/3",
      topicPageBackground: topicPageBackground,
    },
    {
      pageNum: 4,
      title: "LOREM IPSUM DOLOR SIT (4)",
      beginButtonUrl: "/accordion/4",
      topicPageBackground: topicPageBackground,
    },
    {
      pageNum: 5,
      title: "LOREM IPSUM DOLOR SIT (5)",
      beginButtonUrl: "/accordion/5",
      topicPageBackground: topicPageBackground,
    },
  ],
  accordionPages: [
    {
      pageNum: 1,
      title: "NULLA IMPERDIET (1)",
      subtitle: "Vestibulum dapibus hendrerit nibh ut ornare.",
      paragraph:
        "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.",
      backButtonUrl: "/topic/1",
      nextButtonUrl: "/topic/2",
      accordionPageBackground: accordionPageBackground,
      accordions: [
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
      ],
    },
    {
      pageNum: 2,
      title: "NULLA IMPERDIET (2)",
      subtitle: "Vestibulum dapibus hendrerit nibh ut ornare.",
      paragraph:
        "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.",
      backButtonUrl: "/topic/2",
      nextButtonUrl: "/topic/3",
      accordionPageBackground: accordionPageBackground,
      accordions: [
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
      ],
    },
    {
      pageNum: 3,
      title: "NULLA IMPERDIET (3)",
      subtitle: "Vestibulum dapibus hendrerit nibh ut ornare.",
      paragraph:
        "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.",
      backButtonUrl: "/topic/3",
      nextButtonUrl: "/topic/4",
      accordionPageBackground: accordionPageBackground,
      accordions: [
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
      ],
    },
    {
      pageNum: 4,
      title: "NULLA IMPERDIET (4)",
      subtitle: "Vestibulum dapibus hendrerit nibh ut ornare.",
      paragraph:
        "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.",
      backButtonUrl: "/topic/4",
      nextButtonUrl: "/topic/5",
      accordionPageBackground: accordionPageBackground,
      accordions: [
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
      ],
    },
    {
      pageNum: 5,
      title: "NULLA IMPERDIET (5)",
      subtitle: "Vestibulum dapibus hendrerit nibh ut ornare.",
      paragraph:
        "Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet.",
      backButtonUrl: "/topic/5",
      nextButtonUrl: "/home",
      accordionPageBackground: accordionPageBackground,
      accordions: [
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
        {
          heading: "LOREM IPSUM",
          text: "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.",
        },
      ],
    },
  ],
  errorPage: {
    errorMessage: "404 Page Not Found.",
    backButtonText: "back home",
    backUrl: "/home",
  },
};

export default pageData;
