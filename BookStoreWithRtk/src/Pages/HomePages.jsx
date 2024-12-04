import React, { useState } from "react";
import CardItemBook from "../components/cardBook/CardItemBook";
import { useGetBooksQuery } from "../featured/apiSlice";

const HomePages = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [filter, setFilter] = useState("all"); // Track the active filter

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error fetching books!</p>;
  } else if (books?.length > 0) {
    // Filter books based on the selected filter
    const filteredBooks =
      filter === "all"
        ? books
        : books.filter((book) => book.featured === true);

    // Map filtered books to Card components
    content = filteredBooks.map((book) => (
      <CardItemBook key={book.id} book={book} />
    ));
  } else {
    content = <p>No books available!</p>;
  }

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            {/* Toggle Filters */}
            <button
              className={`lws-filter-btn ${filter === "all" ? "active-filter" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`lws-filter-btn ${filter === "featured" ? "active-filter" : ""}`}
              onClick={() => setFilter("featured")}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Render Content */}
          {content}
        </div>
      </div>
    </main>
  );
};

export default HomePages;
