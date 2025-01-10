'use client';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import InfiniteHits from './AlgoliaInfiniteHits'
import { InstantSearchNext } from 'react-instantsearch-nextjs';

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '', process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '');

export function SearchResources() {
  return (
    <InstantSearchNext 
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX2} 
      searchClient={searchClient}
      future={{
        preserveSharedStateOnUnmount: true,
      }}>
      <InfiniteHits/>
    </InstantSearchNext>
  );
}