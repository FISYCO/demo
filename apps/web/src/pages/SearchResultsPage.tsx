import { Button, EmptyState, Skeleton } from "@seavora/ui";

import { AppShell } from "../components/AppShell";
import { FilterSidebar } from "../components/FilterSidebar";
import { SearchBar } from "../components/SearchBar";
import { StayCard } from "../components/StayCard";
import type { Stay } from "../lib/data";

export function SearchResultsPage({ stays, loading }: { stays: Stay[]; loading: boolean }) {
  return (
    <AppShell>
      <SearchBar />
      <div className="results-layout">
        <FilterSidebar />
        <section>
          <p className="results-count">{loading ? "Searching…" : `${stays.length} stays`}</p>
          {loading ? (
            <div className="grid">
              {[0, 1, 2].map((index) => (
                <Skeleton key={index} variant="shine" height="72" />
              ))}
            </div>
          ) : stays.length === 0 ? (
            <EmptyState.Root size="md">
              <EmptyState.Content>
                <EmptyState.Title>No stays match these filters</EmptyState.Title>
                <EmptyState.Description>Try other dates or remove a filter.</EmptyState.Description>
                <Button variant="outline" size="sm">
                  Clear filters
                </Button>
              </EmptyState.Content>
            </EmptyState.Root>
          ) : (
            <div className="grid">
              {stays.map((stay) => (
                <StayCard key={stay.id} stay={stay} />
              ))}
            </div>
          )}
          <Button variant="outline" size="md">
            Show more stays
          </Button>
        </section>
      </div>
    </AppShell>
  );
}
