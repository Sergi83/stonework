// Banner, About, GeneralInf, Footer
export const content = {
  banner: {
    title: "Maecenas luctus lectus",
    subtitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    buttonLink: "/contact",
  },
  about: {
    title: "Fusce ultrices fringilla metus",
    subtitle:
      "Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue",
    boxes: [
      {
        name: "box1",
        imgSrc: "../styles/images/cloud_download_icon.svg",
        imgAlt: "cloud_download",
        p: "Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad  torquent per conubia nostra.",
        buttonLink: "/contact",
      },
      {
        name: "box2",
        imgSrc: "../styles/images/gears_icon.svg",
        imgAlt: "gears_icon",
        p: "Etiam neque. Vivamus consequat lorem at nisl. Nullam  wisi a sem semper eleifend. Donec mattis.",
        buttonLink: "/contact",
      },
      {
        name: "box3",
        imgSrc: "../styles/images/wrench_icon.svg",
        imgAlt: "wrench_icon",
        p: "Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus.",
        buttonLink: "/contact",
      },
    ],
  },
  generalInf: {
    title: "Fusce ultrices fringilla metus",
    subtitle:
      "Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue",
    textP: ['This is', ', a free, fully standards-compliant CSS template designed by ', '. The photos in this template are from ', '. This free template is released under the ', ' license'],
    buttonLink: "/contact",
  },
  footer: {
      textP: ['© Untitled. All rights reserved. | Photos by ', ' | Design by ', '.']
  }
};
