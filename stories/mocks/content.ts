import { EditorElement } from "../../src/editor/types";

const LOREM_IPSUM: EditorElement[] = [
  {
    type: "header-one",
    align: "center",
    children: [
      {
        text: "Lorem Ipsum",
      },
    ],
  },
  {
    type: "paragraph",
    align: "left",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Quisque eu magna sem. Curabitur interdum vitae ante id fermentum. Donec venenatis ex ut libero semper, eu vulputate enim elementum. Fusce condimentum laoreet massa vitae laoreet. In pharetra elit libero, at hendrerit quam tempor ac. Morbi id blandit elit. Morbi sed nisi tristique, suscipit ante sagittis, elementum arcu. Sed et dapibus lacus. Phasellus laoreet quam et ante aliquet euismod.",
      },
    ],
  },
  {
    type: "paragraph",
    align: "center",
    children: [
      {
        text: "Vestibulum consectetur ipsum at pretium bibendum. Aenean vulputate nunc a porttitor varius. Donec tincidunt turpis felis, ac blandit sem tincidunt non. Integer eget posuere lorem, at semper lorem. Maecenas ac tellus aliquam nibh dictum placerat a sed turpis. Etiam rhoncus tellus ut neque semper, quis rutrum dolor egestas. Sed volutpat nunc rhoncus magna malesuada consectetur. Etiam congue quis odio non cursus.",
      },
    ],
  },
  {
    type: "block-quote",
    children: [
      {
        text: "Proin in elit condimentum, commodo lorem ac, tempus magna. Nulla facilisis mattis eros, ut vehicula ligula ultricies sed. Praesent at purus pretium, vulputate neque ut, dictum leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut commodo faucibus sagittis.",
      },
    ],
  },
  {
    type: "paragraph",
    align: "right",
    children: [
      {
        text: "Fusce nec justo congue, interdum risus feugiat, molestie velit. Morbi pulvinar vitae nulla at laoreet. Maecenas tempus sodales leo sit amet posuere. Proin mattis tellus id auctor fringilla. In hac habitasse platea dictumst. Nam blandit quam sed leo vestibulum feugiat. Fusce consectetur lorem quis vehicula iaculis. Nulla non fermentum nulla, ac suscipit libero. Cras laoreet sed massa non rhoncus. Curabitur maximus commodo libero eget suscipit. Nulla pulvinar libero quis est tincidunt, ut commodo magna molestie. Nullam et orci tristique, sagittis sapien ac, luctus nunc. Mauris sed ullamcorper urna, at mattis arcu.",
      },
    ],
  },
  {
    type: "paragraph",
    align: "justify",
    children: [
      {
        text: "Etiam lectus nisl, rutrum ac lectus a, laoreet elementum nisl. Donec ornare velit lorem, eu ultricies justo hendrerit pellentesque. Nulla lacus velit, pulvinar at tellus at, fringilla aliquam nibh. Sed at nunc accumsan, sollicitudin eros a, iaculis felis. Nullam eget justo dictum, tincidunt nisi in, convallis risus. Curabitur feugiat quam vitae lacinia congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquam efficitur odio, non ullamcorper lorem bibendum et. Ut congue mauris eros, id ornare lorem interdum vitae. Curabitur vulputate, felis ac molestie blandit, tortor magna venenatis urna, nec semper erat lacus posuere elit. Mauris ornare euismod convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet maximus nibh. Suspendisse ut nisl egestas, tempus lacus sed, placerat ipsum.",
      },
    ],
  },
  {
    type: "block-quote",
    children: [
      {
        text: "Proin in elit condimentum, commodo lorem ac, tempus magna. Nulla facilisis mattis eros, ut vehicula ligula ultricies sed. Praesent at purus pretium, vulputate neque ut, dictum leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut commodo faucibus sagittis.",
      },
    ],
  },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Morbi erat arcu, fringilla et rhoncus ut, molestie sed arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin placerat metus nunc, at congue mi dignissim vel. Donec consequat faucibus elit, et rhoncus velit aliquam et. Duis interdum purus id euismod fermentum. Pellentesque et rhoncus quam, at eleifend mauris. Fusce vel malesuada urna. Donec rutrum dolor nisi, sed consectetur ex feugiat vel. Cras vehicula ligula at lorem dapibus fermentum. Etiam arcu lacus, ullamcorper in aliquet non, volutpat nec nibh. Etiam pulvinar libero arcu, eu ultrices tellus venenatis molestie. Suspendisse tempus id nulla a molestie. Morbi nisi nibh, ultrices a turpis nec, interdum elementum arcu. Proin ligula orci, tristique id aliquet et, viverra sed lacus.",
      },
    ],
  },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Fusce nec justo congue, interdum risus feugiat, molestie velit. Morbi pulvinar vitae nulla at laoreet. Maecenas tempus sodales leo sit amet posuere. Proin mattis tellus id auctor fringilla. In hac habitasse platea dictumst. Nam blandit quam sed leo vestibulum feugiat. Fusce consectetur lorem quis vehicula iaculis. Nulla non fermentum nulla, ac suscipit libero. Cras laoreet sed massa non rhoncus. Curabitur maximus commodo libero eget suscipit. Nulla pulvinar libero quis est tincidunt, ut commodo magna molestie. Nullam et orci tristique, sagittis sapien ac, luctus nunc. Mauris sed ullamcorper urna, at mattis arcu.",
      },
    ],
  },
];

const HANSEL_AND_GRETEL: EditorElement[] = [
  {
    type: "header-one",
    children: [
      {
        text: "HANSEL AND GRETEL",
        bold: true,
      },
    ],
    align: "center",
  },
  {
    type: "header-three",
    children: [{ text: "By The Brothers Grimm" }],
    align: "center",
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
    align: "left",
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Hard by a great forest dwelt a poor wood-cutter with his wife and his two children. The boy was called Hansel and the girl Gretel. He had little to bite and to break, and once when great dearth fell on the land, he could no longer procure even daily bread. Now when he thought over this by night in his bed, and tossed about in his anxiety, he groaned and said to his wife: ‘What is to become of us? How are we to feed our poor children, when we no longer have anything even for ourselves?’ ‘I’ll tell you what, husband,’ answered the woman, ‘early tomorrow morning we will take the children out into the forest to where it is the thickest; there we will light a fire for them, and give each of them one more piece of bread, and then we will go to our work and leave them alone. They will not find the way home again, and we shall be rid of them.’ ‘No, wife,’ said the man, ‘I will not do that; how can I bear to leave my children alone in the forest?--the wild animals would soon come and tear them to pieces.’ ‘O, you fool!’ said she, ‘then we must all four die of hunger, you may as well plane the planks for our coffins,’ and she left him no peace until he consented. ‘But I feel very sorry for the poor children, all the same,’ said the man.",
      },
    ],
    align: "left",
  },
  {
    type: "paragraph",
    children: [
      {
        text: "The two children had also not been able to sleep for hunger, and had heard what their stepmother had said to their father. Gretel wept bitter tears, and said to Hansel: ‘Now all is over with us.’ ‘Be quiet, Gretel,’ said Hansel, ‘do not distress yourself, I will soon find a way to help us.’ And when the old folks had fallen asleep, he got up, put on his little coat, opened the door below, and crept outside. The moon shone brightly, and the white pebbles which lay in front of the house glittered like real silver pennies. Hansel stooped and stuffed the little pocket of his coat with as many as he could get in. Then he went back and said to Gretel: ‘Be comforted, dear little sister, and sleep in peace, God will not forsake us,’ and he lay down again in his bed. When day dawned, but before the sun had risen, the woman came and awoke the two children, saying: ‘Get up, you sluggards! we are going into the forest to fetch wood.’ She gave each a little piece of bread, and said: ‘There is something for your dinner, but do not eat it up before then, for you will get nothing else.’ Gretel took the bread under her apron, as Hansel had the pebbles in his pocket. Then they all set out together on the way to the forest. When they had walked a short time, Hansel stood still and peeped back at the house, and did so again and again. His father said: ‘Hansel, what are you looking at there and staying behind for? Pay attention, and do not forget how to use your legs.’ ‘Ah, father,’ said Hansel, ‘I am looking at my little white cat, which is sitting up on the roof, and wants to say goodbye to me.’ The wife said: ‘Fool, that is not your little cat, that is the morning sun which is shining on the chimneys.’ Hansel, however, had not been looking back at the cat, but had been constantly throwing one of the white pebble-stones out of his pocket on the road.",
      },
    ],
    align: "left",
  },
  {
    type: "paragraph",
    children: [
      {
        text: "When they had reached the middle of the forest, the father said: ‘Now,  children, pile up some wood, and I will light a fire that you may not  be cold.’ Hansel and Gretel gathered brushwood together, as high as a  little hill. The brushwood was lighted, and when the flames were burning  very high, the woman said: ‘Now, children, lay yourselves down by the  fire and rest, we will go into the forest and cut some wood. When we  have done, we will come back and fetch you away.’",
      },
    ],
    align: "left",
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Hansel and Gretel sat by the fire, and when noon came, each ate a little  piece of bread, and as they heard the strokes of the wood-axe they  believed that their father was near. It was not the axe, however, but  a branch which he had fastened to a withered tree which the wind was  blowing backwards and forwards. And as they had been sitting such a long  time, their eyes closed with fatigue, and they fell fast asleep. When  at last they awoke, it was already dark night. Gretel began to cry and  said: ‘How are we to get out of the forest now?’ But Hansel comforted  her and said: ‘Just wait a little, until the moon has risen, and then we  will soon find the way.’ And when the full moon had risen, Hansel took  his little sister by the hand, and followed the pebbles which shone like  newly-coined silver pieces, and showed them the way.",
      },
    ],
    align: "left",
  },
  {
    type: "paragraph",
    children: [
      {
        text: "They walked the whole night long, and by break of day came once more  to their father’s house. They knocked at the door, and when the woman  opened it and saw that it was Hansel and Gretel, she said: ‘You naughty  children, why have you slept so long in the forest?--we thought you were  never coming back at all!’ The father, however, rejoiced, for it had cut  him to the heart to leave them behind alone.  ",
      },
    ],
    align: "left",
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Not long afterwards, there was once more great dearth throughout the  land, and the children heard their mother saying at night to their  father: ‘Everything is eaten again, we have one half loaf left, and that  is the end. The children must go, we will take them farther into the  wood, so that they will not find their way out again; there is no other  means of saving ourselves!’ The man’s heart was heavy, and he thought:  ‘It would be better for you to share the last mouthful with your  children.’ The woman, however, would listen to nothing that he had to  say, but scolded and reproached him. He who says A must say B, likewise,  and as he had yielded the first time, he had to do so a second time  also.",
      },
    ],
    align: "left",
  },
];

const LIST_EXAMPLES: EditorElement[] = [
  {
    type: "header-one",
    align: "left",
    children: [{ text: "Lists Example" }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Quisque eu magna sem. Curabitur interdum vitae ante id fermentum. Donec venenatis ex ut libero semper, eu vulputate enim elementum. ",
      },
      {
        type: "link",
        url: "https://en.wikipedia.org/wiki/Hypertext",
        children: [{ text: "Hypertext Wikipedia article link." }],
      },
      {
        text: " Fusce condimentum laoreet massa vitae laoreet. In pharetra elit libero, at hendrerit quam tempor ac. Morbi id blandit elit. Morbi sed nisi tristique, suscipit ante sagittis, elementum arcu. Sed et dapibus lacus. Phasellus laoreet quam et ante aliquet euismod.",
      },
    ],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
    align: "left",
  },
  {
    type: "header-three",
    align: "left",
    children: [{ text: "Ordered list of Length 1:" }],
  },
  {
    type: "ordered-list",
    children: [
      {
        type: "list-item",
        children: [{ text: "list item text 1" }],
      },
    ],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
    align: "left",
  },
  {
    type: "header-three",
    align: "left",
    children: [{ text: "Ordered list:" }],
  },
  {
    type: "ordered-list",
    children: [
      {
        type: "list-item",
        children: [
          { text: "list item text 1 " },
          {
            type: "link",
            url: "https://en.wikipedia.org/wiki/Hypertext",
            children: [{ text: "Hypertext Wikipedia article link." }],
          },
        ],
      },
      {
        type: "list-item",
        children: [
          { text: "list item text 2 - " },
          {
            type: "link",
            url: "https://en.wikipedia.org/wiki/Hypertext",
            children: [{ text: "Hypertext Wikipedia article link." }],
          },
        ],
      },
    ],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
    align: "left",
  },
  {
    type: "header-three",
    align: "left",
    children: [{ text: "Bulleted list:" }],
  },
  {
    type: "bulleted-list",
    children: [
      {
        type: "list-item",
        children: [{ text: "list item text 1" }],
      },
      {
        type: "list-item",
        children: [{ text: "list item text 2" }],
      },
    ],
  },
  {
    type: "paragraph",
    children: [{ text: "" }],
    align: "left",
  },
  {
    type: "header-three",
    align: "left",
    children: [{ text: "Complex list:" }],
  },
  {
    type: "bulleted-list",
    children: [
      {
        type: "list-item",
        children: [{ text: "Erik" }],
      },
      {
        type: "list-item",
        children: [{ text: "John" }],
      },
      {
        type: "ordered-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "Jane" }],
          },
          {
            type: "bulleted-list",
            children: [
              {
                type: "list-item",
                children: [{ text: "Nathan" }],
              },
            ],
          },
          {
            type: "list-item",
            children: [{ text: "Peter" }],
          },
          {
            type: "list-item",
            children: [{ text: "Ben" }],
          },
          {
            type: "list-item",
            children: [{ text: "Lucas" }],
          },
          {
            type: "bulleted-list",
            children: [
              {
                type: "list-item",
                children: [{ text: "Markus" }],
              },
              {
                type: "list-item",
                children: [{ text: "Jeff" }],
              },
            ],
          },
          {
            type: "list-item",
            children: [{ text: "George" }],
          },
        ],
      },
      {
        type: "list-item",
        children: [{ text: "Chris" }],
      },
      {
        type: "list-item",
        children: [{ text: "Matthew" }],
      },
    ],
  },
];

const REACT_ARTICLE: EditorElement[] = [
  {
    type: "header-one",
    align: "left",
    children: [{ text: "Mastering the Power Duo: React and TypeScript" }],
  },
  {
    type: "paragraph",
    align: "left",
    children: [
      { text: "When it comes to modern web development, " },
      { text: "React and TypeScript ", bold: true },
      { bold: true, text: "stand", italics: true },
      { bold: true, text: " out as a dynamic duo" },
      {
        text: ". React, the popular JavaScript library for building user interfaces, and TypeScript, a statically typed superset of JavaScript, combine to create a robust environment for developing scalable, maintainable, and",
      },
      { text: " error-free applications", underline: true },
      { text: ". In this " },
      { text: "article", strikethrough: true },
      {
        text: ", we'll explore the synergy between React and TypeScript and how they work together seamlessly to elevate your web development projects.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "header-two",
    align: "left",
    children: [{ text: "The Perfect Match: React and TypeScript" }],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "In the context of web development, React and TypeScript complement each other beautifully. TypeScript, a statically typed language that compiles to plain JavaScript, brings enhanced error checking and code maintainability. By specifying types, it prevents runtime errors, streamlines code reviews, and improves documentation. This is especially valuable in large codebases and collaborative projects.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Within React, TypeScript introduces interfaces and type definitions for components and props. This additional layer of type safety minimizes errors, improves codebase readability, ensures that components receive the correct props, and provides accurate auto-completions and code suggestions in integrated development environments (IDEs).",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "header-two",
    align: "left",
    children: [{ text: "Benefits of Using React with TypeScript" }],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Improved Collaboration and Documentation: TypeScript simplifies code understanding, making it easier for team members to collaborate effectively. Well-defined types ensure everyone is on the same page, improving documentation and collaboration.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Stronger Codebase with Fewer Bugs: React components benefit significantly from TypeScript's static typing. The compiler catches common mistakes, such as passing incorrect props or mismatching data types, before they reach production. This minimizes runtime errors and enhances the stability of your applications.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Enhanced Development Experience: TypeScript augments the development experience by providing features like autocompletion, refactoring tools, and intelligent code suggestions. IDEs like Visual Studio Code have excellent support for TypeScript, offering real-time error checking and effortless navigation through your codebase.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "header-two",
    align: "left",
    children: [{ text: "Getting Started with React and TypeScript" }],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Setting up a TypeScript React Project: To begin a React project with TypeScript, you can use Create React App. Simply run `npx create-react-app my-app --template typescript` to set up a new project. This command initializes a project with TypeScript pre-configured, saving you the trouble of manual setup.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Defining a Component: In TypeScript, defining a React component involves specifying the types of props that the component expects.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "Using Props: When using the Greeting component, TypeScript ensures that you pass the required props correctly. It validates the props, helping you avoid runtime errors.",
      },
    ],
  },
  { type: "paragraph", align: "left", children: [{ text: "" }] },
  {
    type: "paragraph",
    align: "left",
    children: [
      {
        text: "In conclusion, React and TypeScript combine to offer a powerful and efficient development environment. By improving collaboration, enhancing code quality, and boosting the development experience, React and TypeScript provide a winning combination for modern web development. Whether you're starting a new project or migrating an existing one, consider harnessing the power of React and TypeScript to unlock the full potential of your web applications.",
      },
    ],
  },
];

export { LOREM_IPSUM, HANSEL_AND_GRETEL, LIST_EXAMPLES, REACT_ARTICLE };
