import { storyblokEditable, StoryblokRichText } from "@storyblok/react/rsc"

export default function OneColumnText({blok}: any) {
  return (
    <div {...storyblokEditable(blok)}>
      <StoryblokRichText doc={blok.content} />
    </div>
  )
}