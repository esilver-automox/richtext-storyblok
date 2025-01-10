import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import ListingPageResources from '../components/ListingPageResources'
import IndividualPageResources from '../components/IndividualPageResources'
import Component from '../components/component'
import OneColumnText from "../components/OneColumnText";
 
const Components = {
  one_column_text: OneColumnText,
  one_column_image: Component,
  legal_one_column_text: Component,
  two_column_text_icon: Component,
  icon: Component,
  image: Component,
  two_column_images: Component,
  quote: Component,
  hero_with_video_search: Component,
  lp_hero_video_search: Component,
  topic_buttons_navbar: Component,
  button: Component,
  two_column_text_card: Component,
  card: Component,
  two_column_image_text: Component,
  two_column_video_text: Component,
  featured_video_panel: Component,
  two_column_image_text_with_headline: Component,
  trend: Component,
  trend_grid: Component,
  legacy_html: Component,
  legacy_html_plain_text: Component,
  title_block: Component,
  recent_news_listing: Component,
  press_coverage_listing: Component,
  written_code_blok: Component,
  table_of_contents_header: Component,
  legal_table_of_contents_header: Component,
  legal_table: Component,
  featured_event: Component,
  two_column_text_shaded_text: Component,
  two_column_downloads: Component,
  event_listing: Component,
  marketo_form: Component,
  title_block_with_anchors: Component,
  upcoming_webinar_form: Component,
  upcoming_webinar_form_with_driftbot: Component,
  upcoming_webinar_section: Component,
  modal: Component,
  demo_form: Component,
  simple_quote_blok: Component,

  resource_listing_type_filter: Component,
  resource_listing_topic_filter: Component,
  resource_content_page: Component,
  signup_form: Component,

  most_popular_and_events: Component,

  floating_card_banner: Component,
  simple_two_sided_panel: Component,
  awards: Component,
  three_cards_component: Component,
  quote_banner: Component,
  signup_email_only_form: Component,

  biography: Component,
  solutions_utilized: Component,
  key_benefits: Component,
  signup_form_sidebar: Component,
  demo_form_sidebar: Component,
  custom: Component,
  partners: Component,
  three_column_prefooter: Component,
  link_wrapper: Component,
  promo_section: Component,
}

const UtilComponents = {
  row: Component,
  column: Component,
  grid: Component,
  anything: Component,
}

const Pages = {
  page: ListingPageResources,
  individual_resource_blog: IndividualPageResources,
  individual_resource_news: IndividualPageResources,
  individual_resource_case_study: IndividualPageResources,
  individual_resource_ebook_guide: IndividualPageResources,
  individual_resource_event: IndividualPageResources,
  individual_resource_solution_brief: IndividualPageResources,
  individual_resource_webinar_video: IndividualPageResources,
  individual_resource_podcast: IndividualPageResources,
  blog_listing_page: ListingPageResources,
  dg_research_page: IndividualPageResources
}

const everything = Object.assign(Components, UtilComponents, Pages)
 

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_READ_API_KEY2,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu'
  },
  components: everything
});