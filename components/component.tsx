import { storyblokEditable } from "@storyblok/react/rsc"

export default function Component({blok}: any) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.component}
    </div>
  )
}