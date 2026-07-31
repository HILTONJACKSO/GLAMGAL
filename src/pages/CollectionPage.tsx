import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getCollectionByHandle, getProducts } from '../lib/shopify';
import { Collection, Product } from '../types/shopify';
import { ProductGrid } from '../components/product/ProductGrid';
import { CollectionFilters, FilterState } from '../components/collection/CollectionFilters';
import { SortMenu, SortOption } from '../components/collection/SortMenu';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { LoadingState } from '../components/common/LoadingState';
import { SlidersHorizontal } from 'lucide-react';

export const CollectionPage: React.FC<{ defaultHandle?: string }> = ({ defaultHandle }) => {
  const params = useParams<{ handle: string }>();
  const handle = defaultHandle || params.handle || 'all';

  const [collection, setCollection] = useState<Collection | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState<SortOption>('featured');
  const [filters, setFilters] = useState<FilterState>({});
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        if (handle === 'all') {
          const allProds = await getProducts({ first: 50 });
          setCollection({
            id: 'col-all',
            handle: 'all',
            title: 'SHOP ALL GLAMGAL',
            description: 'Explore our complete suite of skin-first care, high-impact makeup, body care, and precision beauty tools.',
            image: { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80', altText: 'All Products' },
            products: allProds,
            productCount: allProds.length
          });
          setProducts(allProds);
        } else {
          const col = await getCollectionByHandle(handle);
          if (col) {
            setCollection(col);
            setProducts(col.products);
          } else {
            // Fallback to all products
            const allProds = await getProducts({ first: 50 });
            setProducts(allProds);
          }
        }
      } catch (err) {
        console.error('Error loading collection:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [handle]);

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Filter by Category
    if (filters.category && filters.category !== 'All') {
      list = list.filter(p => p.category.toLowerCase() === filters.category!.toLowerCase());
    }

    // Filter by In Stock
    if (filters.inStockOnly) {
      list = list.filter(p => p.availableForSale);
    }

    // Filter by Skin Type
    if (filters.skinType && filters.skinType !== 'All Skin Types') {
      list = list.filter(p => p.metafields?.skinTypes?.includes(filters.skinType!));
    }

    // Filter by Concern
    if (filters.concern) {
      list = list.filter(p => p.metafields?.beautyConcerns?.includes(filters.concern!));
    }

    // Filter by Finish
    if (filters.finish) {
      list = list.filter(p => p.metafields?.finish === filters.finish);
    }

    // Sort Logic
    if (sort === 'price-asc') {
      list.sort((a, b) => parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount));
    } else if (sort === 'price-desc') {
      list.sort((a, b) => parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount));
    } else if (sort === 'title-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'newest') {
      list.sort((a, b) => (b.badges?.some(bg => bg.type === 'new') ? 1 : -1));
    } else if (sort === 'best-selling') {
      list.sort((a, b) => (b.badges?.some(bg => bg.type === 'best-seller') ? 1 : -1));
    }

    return list;
  }, [products, filters, sort]);

  if (loading) {
    return <LoadingState message="CURATING COLLECTION DATA..." />;
  }

  const title = collection?.title || handle.toUpperCase();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <SEO title={title} description={collection?.description} />

      <Breadcrumbs items={[{ label: 'COLLECTIONS', href: '/collections/all' }, { label: title }]} />

      {/* Collection Hero Banner */}
      <div className="relative overflow-hidden bg-obsidian text-warm-white p-8 md:p-12 rounded-sm border border-soft-stone">
        {collection?.image && (
          <img
            src={collection.image.url}
            alt={collection.title}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
        )}
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="font-display text-[10px] tracking-mega text-warm-taupe uppercase">GLAMGAL COLLECTION</span>
          <h1 className="font-display text-2xl md:text-4xl tracking-widest uppercase font-black">{title}</h1>
          <p className="text-xs md:text-sm text-soft-stone font-light leading-relaxed">{collection?.description}</p>
        </div>
      </div>

      {/* Toolbar Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-soft-stone">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="lg:hidden flex items-center space-x-2 border border-soft-stone px-4 py-2 text-xs font-display tracking-widest text-obsidian uppercase bg-white"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>FILTER PRODUCTS</span>
          </button>
          <span className="text-xs text-warm-taupe font-display tracking-wider uppercase">
            SHOWING {filteredProducts.length} {filteredProducts.length === 1 ? 'PRODUCT' : 'PRODUCTS'}
          </span>
        </div>

        <SortMenu currentSort={sort} onChangeSort={setSort} />
      </div>

      {/* Main Content Layout */}
      <div className="flex">
        <CollectionFilters
          filters={filters}
          onChangeFilters={setFilters}
          onClearAll={() => setFilters({})}
          isMobileDrawerOpen={isMobileDrawerOpen}
          onCloseMobileDrawer={() => setIsMobileDrawerOpen(false)}
        />

        <div className="flex-1">
          <ProductGrid products={filteredProducts} columns={3} />
        </div>
      </div>
    </div>
  );
};
