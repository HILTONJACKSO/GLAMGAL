import { PRODUCT_FRAGMENT } from './product';

export const GET_COLLECTION_BY_HANDLE_QUERY = `
  ${PRODUCT_FRAGMENT}
  query getCollectionByHandle($handle: String!, $first: Int = 24, $sortKey: ProductCollectionSortKeys = COLLECTION_DEFAULT, $reverse: Boolean = false) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      image {
        id
        url
        altText
      }
      products(first: $first, sortKey: $sortKey, reverse: $reverse) {
        edges {
          node {
            ...ProductFields
          }
        }
      }
    }
  }
`;

export const GET_ALL_COLLECTIONS_QUERY = `
  query getAllCollections($first: Int = 10) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            id
            url
            altText
          }
        }
      }
    }
  }
`;
