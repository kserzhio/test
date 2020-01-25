export interface Menu {
  url: string;
  name: string;
}
export interface Intro {
  text: string;
}
export interface Tab {
  name_tab?: string;
  about_services_title: string;
  about_services_description: string;
}
export interface SocialLinks {
  url_links: string;
  url_icons: string;
  class: string;
}
export interface InfoText {
  title: string;
  description: string;
  email?: string;
  telephone?: string;
}
export interface AboutUs {
  text: string;
  btn_text: string;
  btn_url: string;
}
export interface Copy {
  text: string;
}
