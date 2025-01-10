import { storyblokEditable } from "@storyblok/react/rsc";
import {SearchResources} from './AlgoliaProviderResources';

export default function ListingPageResources({blok}: any) {
  console.log(blok)
  return (
    <div {...storyblokEditable}>
      <h1>Resources listing page</h1>
      <SearchResources/>
    </div>
  )
}